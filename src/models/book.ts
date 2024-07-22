import { getData } from "../utils/api";

class BookModel {
  constructor() {}

  async getAll() {
    const books = await getData("books");
    // console.log("libros en el model", books);
    return books;
  }

  async getByName(name: string) {
    const book = await getData("books", "search", name);
    return book;
  }
}

const books = new BookModel();

const { getAll, getByName } = books;

export { getAll, getByName };
