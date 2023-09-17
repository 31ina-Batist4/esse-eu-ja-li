import { UserAuth } from './../../shared/model/userAuth';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/model/user';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  user: User;
  id: any;
  constructor(private service: AuthService, private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUser(1).subscribe((data) => (this.user = data));
  }
}
