import { Component, OnInit, Output } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { Router } from '@angular/router';
import * as _ from 'lodash';


@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent implements OnInit{
  
  constructor( private router: Router, ) { }
  
  powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];
  uniqueId: number = 0;
  

  submitted = false;
  
  ngOnInit(): void {
    this.getCurrentId();
  }

  private getCurrentId() {
    _.find(HEROES, (o) => {
        if (o.id > this.uniqueId) {
            this.uniqueId = o.id;
        }
    });
  }

  onSubmit(name: string, alterEgo: string, power: string) {  
    interface heroObj { 
                    id: number,
                    name: string,
                    alterEgo: string,
                    power: string
                  }
    this.submitted = true;
    let currentHeroObj = {
      id : this.uniqueId + 1,
      name : name,
      alterEgo : alterEgo,
      power : power,
    }
    HEROES.push(currentHeroObj);
    this.router.navigate(['/heroes']);
  }

}
