import { UserAuth } from './../../shared/model/userAuth';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { AlertMessageService } from 'src/app/shared/services/alert-message.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  private user: UserAuth = new UserAuth();
  hide = true;

  constructor(
    private fb: FormBuilder,
    private msg: AlertMessageService,
    public dialog: MatDialog,
    private service: AuthService,
    private router: Router
  ) {}

  loginForm: FormGroup = this.fb.group({
    email: ['elinabatista@gmail.com', [Validators.required]],
    password: ['Ln!12345', [Validators.required]],
  });

  ngOnInit(): void {}

  login() {
    if(this.loginForm.get('email')?.value === 'elinabatista@gmail.com' &&
       this.loginForm.get('password')?.value === 'Ln!12345'){
      this.service.auth(this.loginForm.value);
      this.msg.showMessage("Logado com sucesso!", true);
      this.router.navigate(['/home']);
      this.dialog.closeAll();
    } else {
      this.msg.showMessage("Dados inválidos!", true);
    }

  }
}
