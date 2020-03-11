import { Component, OnInit } from "@angular/core";

interface Book {
  name: string;
  author: string;
}

@Component({
  selector: "app-hello-world",
  templateUrl: "./hello-world.component.html",
  styleUrls: ["./hello-world.component.css"]
})
export class HelloWorldComponent implements OnInit {
  books: Book[];
  selectedBook: string;

  constructor() {
    this.books = [
      { name: "Book1", author: "Author1" },
      { name: "Book2", author: "Author2" },
      { name: "Book3", author: "Author3" },
      { name: "Book4", author: "Author4" },
      { name: "Book5", author: "Author5" }
    ];
  }

  ngOnInit(): void {}
}
