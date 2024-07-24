import { getAll } from "../models/character";
import { Character } from "./types";

export async function validateCharacter(character: Character) {
  if (
    !character.fullName ||
    !character.nickname ||
    !character.hogwartsHouse ||
    !character.interpretedBy ||
    !character.children ||
    !character.image ||
    !character.birthdate
  ) {
    return "Propiedades faltantes";
  }

  return true;
}
