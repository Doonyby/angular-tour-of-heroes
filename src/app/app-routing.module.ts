import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { PracticeFormComponent } from './practice-form/practice-form.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
    },
    {
        path: 'heroes',
        component: HeroesComponent,
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
    },
    {
        path: 'detail/:id',
        component: HeroDetailComponent,
    },
    {
        path: 'heroForm',
        component: HeroFormComponent,
    },
    {
        path: 'practiceForm',
        component: PracticeFormComponent,
    }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ],
})

export class AppRoutingModule {}