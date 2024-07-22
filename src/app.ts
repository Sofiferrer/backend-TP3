import { getBooks, getBooksByNumber } from "./controllers/book";
import {
  createCharacter,
  getCharacter,
  getCharacters,
  getCharactersByHouse,
} from "./controllers/character";

export async function routes(message) {
  const messageTxt = message.toString();
  const data = JSON.parse(messageTxt);

  //console.log(data);

  switch (data.path) {
    case "characters":
      if (data.action === "CREATE") {
        const newCharacter = await createCharacter(data.body);
        //const newCharacterJson = JSON.stringify(newCharacter);
        return newCharacter;
      }
      if (data.action === "READ") {
        const characters = await getCharacters();
        const charactersJson = JSON.stringify(characters);
        return charactersJson;
      }
      if (data.action === "UPDATE") {
        const characters = await getCharacters();
        const charactersJson = JSON.stringify(characters);
        return charactersJson;
      }
      if (data.action === "DELETE") {
        const characters = await getCharacters();
        const charactersJson = JSON.stringify(characters);
        return charactersJson;
      }
      break;
    case "characters/name":
      const character = await getCharacter(data.body);
      const characterJson = JSON.stringify(character);
      return characterJson;
      break;
    case "characters/house":
      const char = await getCharactersByHouse(data.body);
      const charJson = JSON.stringify(char);
      return charJson;
      break;
    case "books":
      const books = await getBooks();
      const booksJson = JSON.stringify(books);
      return booksJson;
      break;
    case "books/number":
      const book = await getBooksByNumber(data.body);
      const bookJson = JSON.stringify(book);
      return bookJson;
      break;
    default:
      return "Invalid Action, try again";
      break;
  }

  // if (data.path == "characters") {
  //   const characters = await getCharacters();
  //   const charactersJson = JSON.stringify(characters);
  //   return charactersJson;
  // } else if (data.path == "characters/name") {
  //   const character = await getCharacter(data.name);
  //   const characterJson = JSON.stringify(character);
  //   return characterJson;
  // } else if (data.path == "characters/house") {
  //   const character = await getCharactersByHouse(data.house);
  //   const characterJson = JSON.stringify(character);
  //   return characterJson;
  // } else if (data.path == "books") {
  //   const books = await getBooks();
  //   const booksJson = JSON.stringify(books);
  //   return booksJson;
  // } else if (data.path == "books/number") {
  //   const book = await getBooksByNumber(data.number);
  //   const bookJson = JSON.stringify(book);
  //   return bookJson;
  // }
}
