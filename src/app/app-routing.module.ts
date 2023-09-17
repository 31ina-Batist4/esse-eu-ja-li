import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookDetailComponent } from './components/book-detail/book-detail.component';
import { HomeComponent } from './components/home/home.component';
import { RankingComponent } from './components/ranking/ranking.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AuthGuard } from './components/guards/auth.guard';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'ranking', component: RankingComponent, canActivate: [AuthGuard]},
  {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
  {path: 'bookdetail', component: BookDetailComponent, canActivate: [AuthGuard]},
  {path: 'bookdetail/:id', component: BookDetailComponent, canActivate: [AuthGuard]},
  {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
