import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { UnknownComponent } from "./unknown/unknown.component";

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "**", component: UnknownComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
