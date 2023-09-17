import { UserService } from './services/user.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AlertMessageService } from './services/alert-message.service';
import { baseURL } from './model/baseurl';
import { LivrosService } from './services/livros.service';
import { LoginService } from './services/login.service';

@NgModule({
  declarations: [],
  exports: [CommonModule, MatSnackBarModule],
  providers: [
    LivrosService,
    LoginService,
    AlertMessageService,
    { provide: 'BaseURL', useValue: baseURL },
  ],
  imports: [],
})
export class AngularMaterialModule {}
