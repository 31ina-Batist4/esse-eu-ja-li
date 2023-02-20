import { LivrosService } from 'src/app/shared/services/livros.service';
import { Component, OnInit } from '@angular/core';
import { Livro } from './../../shared/model/livro';
import { ActivatedRoute,  Params, Router } from '@angular/router';
import {MatIconRegistry} from '@angular/material/icon';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

lido = true;
livro: Livro;
id: any;
  constructor(private service: LivrosService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
     this.service.getBookId().subscribe(
      (id) => this.id = id
     );
   this.route.params.pipe(switchMap((params: Params) =>{
   return this.service.getBook(params['id']);})).
   subscribe(livro => { this.livro = livro})
    this.service.getBook(this.id).subscribe(
      (data) => this.livro = data
    )
  }
   onClick() {
    this.lido = !this.lido;
   }
   goBack(){
    this.router.navigate(['/home']);
   }

}
