import { Component, OnInit } from '@angular/core';
import { Livro } from './../../shared/model/livro';
import { ActivatedRoute, Router } from '@angular/router';
import { LivrosService } from 'src/app/shared/services/livros.service';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/shared/services/auth.service';
import { UserService } from 'src/app/shared/services/user.service';
import { User } from 'src/app/shared/model/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  lido = false;
  user: User = new User();
  livroLido: Livro[];
  livro: Livro[];
  userLogger: boolean = false;
  clicado: boolean = false;
  constructor(
    private service: LivrosService,
    private userService: UserService,
    private authService: AuthService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.service.getBooks().subscribe((data) => (this.livro = data));
    this.authService.userLogger.subscribe((show) => (this.userLogger = show));
    this.userService.getUser(1).subscribe((data) => (this.user = data));
    this.lido = !this.lido;
    this.livroLido = this.user.books;
    console.log('Array de livros lidos ' + this.livroLido);
    this.livroLido.forEach(function (livro) {
      //if (livro.id == this.livro.id) {
     // }
    });
  }
  submit() {
    this.clicado = !this.clicado;
  }
}
