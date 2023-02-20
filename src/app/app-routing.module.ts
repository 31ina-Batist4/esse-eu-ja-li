import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookDetailComponent } from './components/book-detail/book-detail.component';
import { HomeComponent } from './components/home/home.component';
import { RankingComponent } from './components/ranking/ranking.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'ranking', component: RankingComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'bookdetail', component: BookDetailComponent},
  {path: 'bookdetail/:id', component: BookDetailComponent},
  {path: 'profile', component: ProfileComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
