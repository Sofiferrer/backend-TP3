import { v4 as uuidv4 } from "uuid";
import { createFile, getAll, loadAll, readFile } from "../models/character";
import { Messages } from "../utils/messages";
import { Character } from "../utils/types";
import { validateCharacter } from "../utils/validation";

class CharacterController {
  async loadCharacters() {
    loadAll();
  }

  async getCharacters() {
    await loadAll();
    return await getAll();
  }

  async getByName(name: string) {
    await loadAll();
    const characters = await getAll();
    const character = characters.filter((char: Character) =>
      char.fullName.includes(name)
    );
    return character;
  }

  async getCharactersByHouse(house: string) {
    const characters = await getAll();
    const byHouse = characters.filter(
      (char: any) => char.hogwartsHouse === house
    );
    return byHouse;
  }

  async createCharacter(character: Character) {
    if (typeof validateCharacter(character) === "string") {
      console.log("MISSING_DATA", character);
      return { Error: Messages.MISSING_DATA };
    }

    const characters = await getAll();
    const newCharacter = characters.find(
      (char: Character) => char.fullName === character.fullName
    );

    if (!newCharacter) {
      character.index = characters.length;
      character.id = uuidv4();

      characters.push(character);

      createFile(characters);
      return character;
    } else {
      return { Error: Messages.EXISTING_DATA };
    }
  }
}

const characters = new CharacterController();

const { getCharacters, getByName, getCharactersByHouse, createCharacter } =
  characters;

export { getCharacters, getByName, getCharactersByHouse, createCharacter };
