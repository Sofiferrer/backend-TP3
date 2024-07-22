import { getData } from "../utils/api";
import { writeFileSync, readFileSync, existsSync } from "node:fs";
import path from "path";
import { DB } from "../constants";

class CharacterModel {
  constructor() {}

  async getAll() {
    const aPath = path.join(__dirname, "../database/db.json");
    const characters = await getData("characters");
    if (!existsSync(aPath)) {
      console.log("no existe archivo");
      writeFileSync(aPath, JSON.stringify(characters));
    }
    //console.log("personajes en el model", characters);
    return characters;
  }
  async getByName(name: string) {
    const character = await getData("characters", "search", name);
    return character;
  }

  async createFile(data) {
    const dataJSON = JSON.stringify(data);
    writeFileSync(DB, dataJSON);
  }

  async readFile() {
    if (!existsSync(DB)) {
      writeFileSync(DB, JSON.stringify([]));
    }

    const booksJSON = readFileSync(DB, { encoding: "utf-8" });
    const booksJs = JSON.parse(booksJSON);

    return booksJs;
  }
}

const characters = new CharacterModel();

const { getAll, getByName, createFile, readFile } = characters;

export { getAll, getByName, createFile, readFile };
