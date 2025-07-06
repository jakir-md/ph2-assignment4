export interface IBorrow {
    // book: Types.ObjectId,
    quantity: number,
    dueDate: Date
}

export interface IBook {
  _id: string,  
  title: string;
  author: string;
  genre:
    | "FICTION"
    | "NON_FICTION"
    | "SCIENCE"
    | "HISTORY"
    | "BIOGRAPHY"
    | "FANTASY";
  isbn: string;
  description: string;
  copies: string;
  available: boolean;
}

export interface IBorrowSummary {
    book: {
        title: string,
        isbn: string
    },
    totalQuantity: number
}