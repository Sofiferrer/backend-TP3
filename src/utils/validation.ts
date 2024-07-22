import { getAll } from "../models/character";
import { Character } from "./types";

export async function validateCharacter(character: Character) {
  const characters = await getAll();
  if (
    !character.fullName ||
    !character.nickname ||
    !character.hogwartsHouse ||
    !character.interpretedBy ||
    !character.children ||
    !character.image ||
    !character.birthdate
  ) {
    // verifico que NO me falte alguna propiedad necesaria para crear el personaje
    return "Propiedades faltantes";
  }

  const newCharacter = characters.find(
    (char: Character) => char.fullName === character.fullName
  );
  console.log("personaje a agregar", newCharacter);

  //   const books = readFile();

  //   const searchedBbook = books.find((book) => book.id == book.id);

  //   // Chequeo si existe algun libro con el ID indicado por el cliente, y retorno un error en caso que ya exista
  if (newCharacter) {
    return "ERROR: el personaje ya existe";
  }

  return true; // Retorno TRUE en caso que haya pasado todas las validaciones
}
