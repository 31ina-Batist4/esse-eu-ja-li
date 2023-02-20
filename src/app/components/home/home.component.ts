import { Component, OnInit } from '@angular/core';
import {Livro } from './../../shared/model/livro';
import { ActivatedRoute, Router } from '@angular/router';
import { LivrosService } from 'src/app/shared/services/livros.service';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  livro: Livro[];
  userLogger: boolean = false;
  constructor(
              private service: LivrosService,
              private router: Router,
              private authService: AuthService,
              private http: HttpClient) { }

  ngOnInit(): void {
    this.service.getBooks().subscribe(
     ( data) => this.livro = data);
     this.authService.userLogger.subscribe(
      show  => this.userLogger = show
    );
  }


}
