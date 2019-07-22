import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    // this.getHeroesObservable();
    this.getHeroesHttp();
  }

  getHeroesObservable(): void {
    this.heroService.getHeroesObservable()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }

  getHeroesHttp(): void {
    this.heroService.getHeroesHttp()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }
}
