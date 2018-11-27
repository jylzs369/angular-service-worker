import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesListComponent } from './heroes-list/heroes-list.component'
import { HeroesDetailComponent } from './heroes-detail/heroes-detail.component'

const routes: Routes = [
  { 
    path: 'heroes',
    children: [
      { path: '', component: HeroesListComponent },
      { path: ':id', component: HeroesDetailComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }
