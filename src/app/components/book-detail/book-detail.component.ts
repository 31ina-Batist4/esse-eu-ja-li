import { Livro, Livros } from 'src/app/shared/model/livro';
import { LivrosService } from 'src/app/shared/services/livros.service';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Params } from '@angular/router';
import { Users, User } from './../../shared/model/user';
import { baseURL } from './../../shared/model/baseurl';
import { switchMap } from 'rxjs';
import { UserService } from 'src/app/shared/services/user.service';
import { AlertMessageService } from './../../shared/services/alert-message.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css'],
})
export class BookDetailComponent implements OnInit {
  lido = false;
  livros: Livro[];
  livro: Livro;
  data: any;
  user: User = new User();
  pontos: number;
  id: number;
  ptos: number;
  dados: Users;
  contadorRom: number;
  contadorTec: number;
  contadorRel: number;
  categoria: string;

  constructor(
    private service: LivrosService,
    private location: Location,
    private msg: AlertMessageService,
    private userService: UserService,
    private route: ActivatedRoute,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.service.getBookId().subscribe((id) => (this.id = id));
    this.route.params
      .pipe(
        switchMap((params: Params) => {
          return this.service.getBook(params['id']);
        })
      )
      .subscribe((livro) => {
        this.livro = livro;
      });
    this.userService.getUser(1).subscribe((data) => (this.user = data));
  }

  goBack(): void {
    this.location.back();
  }

  calcTrofeu(livro: Livro) {
    this.lido = !this.lido;
    this.salvaLivros();
    this.getPontos();
    if (this.livro.category == 'Romance') {
      this.contadorRom = +1;
      if (this.contadorRom >= 5) {
        this.categoria = 'Romance';
        this.userService.patchUser(this.id, this.categoria);
      }
    } else if (this.livro.category == 'Religião') {
      this.contadorRel = +1;
      if (this.contadorRel >= 5) {
        this.categoria = 'Religião';
        this.userService.patchUser(this.id, this.categoria);
      }
    } else {
      this.contadorTec = +1;
      if (this.contadorTec >= 5) {
        this.categoria = 'Tecnologia';
        this.userService.patchUser(this.id, this.categoria);
      }
    }
  }
//armazena pontos dos livro no usuário somando com os pontos existente
  salvaLivros() {
    this.ptos = this.getPontos() + this.livro.points;
    this.dados = {
      pontos: this.ptos
    };
    this.data = {
      books: this.livro
    };
   this.updateUser(this.dados);
    this.getLivros(this.data);
  }

  //obtem os pontos do usuário
  getPontos() {
    this.pontos = this.user.pontos;
    return this.pontos;
  }

  //atualiza usuário, adiciona pontos do livro lido
  updateUser(ponto: Users) {
    this.http.patch(baseURL + 'users/1', ponto).subscribe({
      next: () => {
        this.msg.showMessage('Pontos atualizados com sucesso!', true);
      },
      error: () => {
        this.msg.showMessage('Erro ao atualizar pontos', true);
      },
    });
  }

  //percorre os livros lidos pelo usuário e verifica se o livro já foi lido,
  // se não adiciona ao lidos
  getLivros(livro: Livro) {
    this.http.patch(baseURL + 'users/1', livro).subscribe({
      next: () => {
        this.msg.showMessage('Livros lidos atualizados com sucesso!', true);
      },
      error: () => {
        this.msg.showMessage('Erro ao atualizar livros', true);
      },
    });
  }
}
