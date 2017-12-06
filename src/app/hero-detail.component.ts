import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { Location } from "@angular/common";
import 'rxjs/add/operator/switchMap';
import { HeroService } from "./hero.service";
import { Hero } from "./hero";
import { FormControl, FormGroup, FormBuilder, Validators } from "@angular/forms";
import { states } from './mock-heroes';
import { Address } from './address';

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: [ './hero-detail.component.css' ],
})

export class HeroDetailComponent {
  heroForm: FormGroup;
  states = states;

  constructor(private formbuilder: FormBuilder) {
    this.createForm();
  }

  // this.heroForm.setValue({
  //   name: this.hero.name,
  //   address: this.hero.addresses[0] || new Address();
  // });

  // this.heroForm.patchValue({
  //   name: this.hero.name
  // });

  createForm() {
    this.heroForm = this.formbuilder.group({
      name: ['', Validators.required ],
      address: this.formbuilder.group(new Address()),
      power: '',
      sidekick: '',
    })
  }

}



// export class HeroDetailComponent implements OnInit {
//   constructor(
//     private heroService: HeroService,
//     private route: ActivatedRoute,
//     private location: Location,
//   ) {}

//   ngOnInit(): void {
//     this.route.paramMap
//       .switchMap((params: ParamMap) => this.heroService.getHero(+params.get('id')))
//       .subscribe(hero => this.hero = hero);
//   }

//   goBack(): void {
//     this.location.back();
//   }

//   @Input() hero: Hero;
// }
