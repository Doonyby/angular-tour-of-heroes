import { Component, Input, OnInit, OnChanges } from "@angular/core";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { Location } from "@angular/common";
import 'rxjs/add/operator/switchMap';
import { HeroService } from "./hero.service";
import { Hero } from "./hero";
import { FormControl, FormGroup, FormBuilder, Validators, FormArray } from "@angular/forms";
import { states } from './mock-heroes';
import { Address } from './address';

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: [ './hero-detail.component.css' ],
})

export class HeroDetailComponent implements OnInit {

  heroForm: FormGroup;
  states = states;

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location,
    private formbuilder: FormBuilder
  ) {
    this.createForm();
    }

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.heroService.getHero(+params.get('id')))
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }

  @Input() hero: Hero;

  ngOnChanges() {
    this.heroForm.reset({
      name: this.hero.name,
      address: this.hero.addresses[0] || new Address(),
    });
  }

  get secretLairs(): FormArray {
    return this.heroForm.get('secretLairs') as FormArray;
  }

  createForm() {
    this.heroForm = this.formbuilder.group({
      name: ['', Validators.required ],
      secretLairs: this.formbuilder.array([]),
      power: '',
      sidekick: '',
    })
  }

  setAddresses(addresses: Address[]) {
    const addressFGs = addresses.map(address => this.formbuilder.group(address));
    const addressFormArray = this.formbuilder.array(addressFGs);
    this.heroForm.setControl('secretLairs', addressFormArray);
  }

  addLair() {
    this.secretLairs.push(this.formbuilder.group(new Address()));
  }

}
