import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];

  // selectedHero: Hero;

  constructor(private heroService: HeroService, private messageService: MessageService) { }

  ngOnInit() {
    // this.getHeroes();
    this.getHeroesObservable();
  }

  // onSelect(hero: Hero): void {
  //   this.messageService.add('HeroesComponent: selected heroe');
  //   this.selectedHero = hero;
  // }

  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }

  getHeroesObservable(): void {
    this.heroService.getHeroesObservable()
      .subscribe(heroes => this.heroes = heroes);
  }

}
