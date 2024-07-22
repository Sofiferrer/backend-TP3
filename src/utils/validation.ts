import { Character } from "./types";

export function validateCharacter(character: Character) {
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

  //   const books = readFile();

  //   const searchedBbook = books.find((book) => book.id == book.id);

  //   // Chequeo si existe algun libro con el ID indicado por el cliente, y retorno un error en caso que ya exista
  //   if (searchedBbook) {
  //     return "ERROR: el ID ya existe";
  //   }

  return true; // Retorno TRUE en caso que haya pasado todas las validaciones
}
