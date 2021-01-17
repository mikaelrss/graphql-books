export interface IAuthor {
  id: number;
  name: string;
}

const authors = [
  { id: 1, name: "J.K Rowling" },
  { id: 2, name: "Jules Verne" },
  { id: 3, name: "J.R.R Tolkien" },
  { id: 4, name: "Frank Herbert" },
  { id: 5, name: "Becky Chambers" },
];

export const getAuthorById = (id: number): IAuthor | null => {
  return authors.find((author) => author.id === id) ?? null;
};
