import { Component, OnInit } from '@angular/core';
import {Livro } from './../../shared/model/livro'
import { LivrosService } from 'src/app/shared/services/livros.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  livro: Livro[];

  constructor(
              private service: LivrosService,
              private http: HttpClient) { }

  ngOnInit(): void {
    this.service.getBook().subscribe(
     ( data) => this.livro = data)

  }

}
