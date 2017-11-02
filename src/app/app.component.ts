import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a routerLink="/dashboard" routerLinkActive="acitve">Dashboard</a>
      <a routerLink="/heroes" routerLinkActive="acitve">Heroes</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: [ './app.component.css' ],

})

export class AppComponent {
  title = 'Tour of Heroes';
}
