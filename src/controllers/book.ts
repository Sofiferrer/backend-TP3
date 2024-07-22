import { getAll, getByName } from "../models/book";
import { Messages } from "../utils/messages";

class BookController {
  async getBooks() {
    return await getAll();
  }

  async getBook(name: string) {
    return await getByName(name);
  }

  async getBooksByNumber(number: number) {
    const books = await getAll();
    const byNumber = books.filter((book: any) => book.number === number);
    return byNumber;
  }
}

const books = new BookController();

const { getBooks, getBook, getBooksByNumber } = books;

export { getBooks, getBook, getBooksByNumber };
