import { Component, OnInit } from '@angular/core';
import {MatDialog } from '@angular/material/dialog';
import {LoginComponent} from './../login/login.component';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public dialog: MatDialog, private authService: AuthService) { }

  userLogger: boolean = false;

  ngOnInit(){
    this.authService.userLogger.subscribe(
      show  => this.userLogger = show
    );
  }
  openDialog() {
    this.dialog.open(LoginComponent, {width:'500px', height:'450px'});

  }


}
