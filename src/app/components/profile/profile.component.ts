import { UserAuth } from './../../shared/model/userAuth';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/model/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
 user: User;
  constructor(private service: AuthService) { }

  ngOnInit(): void {
   this.service.getUser('1').subscribe(
    user => this.user = user
   )
  }

}
