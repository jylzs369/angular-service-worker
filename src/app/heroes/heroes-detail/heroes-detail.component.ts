import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Hero } from '../hero';

@Component({
  selector: 'app-heroes-detail',
  templateUrl: './heroes-detail.component.html',
  styleUrls: ['./heroes-detail.component.css']
})
export class HeroesDetailComponent implements OnInit {
  hero: Hero = {
    id: '',
    name: ''
  }
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.hero.id = this.route.snapshot.paramMap.get('id')
  }

  backToList() {
    this.router.navigate(['./heroes'])
  }

}
