import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavMainComponent } from './site/nav-main/nav-main.component';
import { SearchResultsComponent } from './site/search-results/search-results.component';

const routes: Routes = [
  {path: '', component: NavMainComponent},
  {path: ':url', component: NavMainComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
