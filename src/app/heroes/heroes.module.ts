import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { HeroesDetailComponent } from './heroes-detail/heroes-detail.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HeroesRoutingModule
  ],
  declarations: [HeroesListComponent, HeroesDetailComponent]
})
export class HeroesModule { }
