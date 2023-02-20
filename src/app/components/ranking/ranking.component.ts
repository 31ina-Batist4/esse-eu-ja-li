import { LivrosService } from './../../shared/services/livros.service';
import { Component, OnInit } from '@angular/core';
import { Livro } from 'src/app/shared/model/livro';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit {

  livro: Livro[];

  constructor(private service: LivrosService) { }

  ngOnInit(): void {

  }

}
