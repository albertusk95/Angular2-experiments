import { Hero } from './hero';

// Keep the Input import for now, we'll remove it later:
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-hero-detail',
    templateUrl: 'app/html/hero-detail.component.html',
    styleUrls:  ['app/css/hero-detail.component.css']
})

export class HeroDetailComponent implements  OnInit {
	@Input()
  	hero: Hero;

    constructor(private heroService: HeroService, private route: ActivatedRoute) {}

    goBack(): void {
        window.history.back();
    }

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let id = +params['id'];
            this.heroService.getHero(id).then(uptome => this.hero = uptome);
        });
    }
}