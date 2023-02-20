import { UserAuth } from './../../shared/model/userAuth';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { AlertMessageService } from 'src/app/shared/services/alert-message.service';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  private user: UserAuth;
  hide = true;

  constructor(
    private fb: FormBuilder,
    private msg: AlertMessageService,
    public dialog: MatDialog,
    private service: AuthService
  ) {}

  loginForm: FormGroup = this.fb.group({
    email: ['elinabatista@gmail.com', [Validators.required]],
    password: ['Ln!12345', [Validators.required]],
  });

  ngOnInit(): void {}

  login() {
  this.service.auth(this.loginForm.value);
  this.dialog.closeAll();
  }
}
