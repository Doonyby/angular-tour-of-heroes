import { Component, OnInit, Output } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { Router } from '@angular/router';


@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent implements OnInit{
  
  ngOnInit(): void {
    console.log(HEROES);
  }


  constructor( private router: Router, ) { }

  powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];
  model = new Hero(HEROES.length + 1, 'Mr Big', 'Super Flexible', 'Tiny Dancer'); 
  

  submitted = false;

  onSubmit() { 
    this.submitted = true;
    HEROES.push(this.model);
    this.router.navigate(['/heroes']);
  }

}
