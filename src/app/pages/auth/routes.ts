import { Routes } from "@angular/router";
import { LoginComponent, RegisterComponent } from ".";

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'registro', component: RegisterComponent }
];
