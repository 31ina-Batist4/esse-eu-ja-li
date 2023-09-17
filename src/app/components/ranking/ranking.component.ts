import { UserService } from './../../shared/services/user.service';
import { Component, OnInit } from '@angular/core';
import { Livro } from 'src/app/shared/model/livro';
import { User } from 'src/app/shared/model/user';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit {

  user: User[];

  constructor(private service: UserService) { }

  ngOnInit(){
    this.service.getUsers().
    subscribe(data =>  {
      this.user = data;

      this.user = this.user.sort((a, b) => b.pontos - a.pontos)
    })

  }
  ordernarUser (user: User) : number {
   let index = 0;
   for(let i = 0; i < this.user.length; i ++) {
    if(this.user[i] == user){
      return index;
    } else {
      index += 1;
    }
   }
   return -1;

  }

}
