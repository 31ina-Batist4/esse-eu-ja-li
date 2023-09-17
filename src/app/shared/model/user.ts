import { Livro } from "./livro";

export class User {
  "id"?: string;
  "name"?: string;
  "email"?: string;
  "password"?: string;
  "img"?: string;
   "pontos": number;
   "trofeus"?: string;
   "books": Livro[];

}

export class Users {
  "id"?: string;
  "name"?: string;
  "email"?: string;
  "password"?: string;
  "img"?: string;
   "pontos"?: number;
   "trofeus"?: string;
   "books"?: Livro;

}

