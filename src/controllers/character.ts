import { v4 as uuidv4 } from "uuid";
import { createFile, getAll, getByName, readFile } from "../models/character";
import { Messages } from "../utils/messages";
import { Character } from "../utils/types";
import { validateCharacter } from "../utils/validation";

class CharacterController {
  async getCharacters() {
    const characters = await getAll();
    const charactersDb = await characters.map((char: Character, index) => ({
      ...char,
      index: index,
      id: uuidv4(),
    }));
    return charactersDb;
  }

  async getCharacter(name: string) {
    return await getByName(name);
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
      return Messages.MISSING_DATA;
    }

    // const books = readFile();

    character.index = 25;

    // books.push(book);

    // createFile(books);
    console.log("CREATE", character);
    return "CREADO!";
  }
}

const characters = new CharacterController();

const { getCharacters, getCharacter, getCharactersByHouse, createCharacter } =
  characters;

export { getCharacters, getCharacter, getCharactersByHouse, createCharacter };
