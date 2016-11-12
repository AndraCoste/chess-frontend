
import {Routes} from "@angular/router";
import {LandingpageComponent} from "./modules/landingpage/landingpage.component";
import {RegisterComponent} from "./modules/register/register.component";

export const ROUTES: Routes = [
    {path: 'inscriere', component: RegisterComponent},
    {path: '**', component: LandingpageComponent}
];
