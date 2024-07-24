import { getData } from "../utils/api";
import { writeFileSync, readFileSync, existsSync } from "node:fs";
import path from "path";
import { v4 as uuidv4 } from "uuid";
import { Character } from "../utils/types";

class CharacterModel {
  constructor() {}

  async loadAll() {
    const aPath = path.join(__dirname, "../database/db.json");

    if (!existsSync(aPath)) {
      const characters = await getData("characters");

      const charactersDb = await characters.map((char: Character, index) => ({
        ...char,
        index: index,
        id: uuidv4(),
      }));

      writeFileSync(aPath, JSON.stringify(charactersDb));
    }
  }

  async getAll() {
    return await readFile();
  }

  async createFile(data) {
    const aPath = path.join(__dirname, "../database/db.json");
    const dataJSON = JSON.stringify(data);

    writeFileSync(aPath, dataJSON);
  }

  async readFile() {
    const aPath = path.join(__dirname, "../database/db.json");
    const charactersJSON = readFileSync(aPath, { encoding: "utf-8" });
    const charactersJs = JSON.parse(charactersJSON);

    return charactersJs;
  }
}

const characters = new CharacterModel();

const { loadAll, getAll, createFile, readFile } = characters;

export { loadAll, getAll, createFile, readFile };
