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

  async getCharacter(name: string) {
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
    //validacion de que sea correcto el formato
    if (typeof validateCharacter(character) === "string") {
      console.log("MISSING_DATA", character);
      return { Error: Messages.MISSING_DATA };
    }

    const characters = await getAll();

    character.index = characters.length;
    character.id = uuidv4();

    characters.push(character);

    createFile(characters);
    console.log("CREATE", character);
    return character;
  }
}

const characters = new CharacterController();

const { getCharacters, getCharacter, getCharactersByHouse, createCharacter } =
  characters;

export { getCharacters, getCharacter, getCharactersByHouse, createCharacter };
