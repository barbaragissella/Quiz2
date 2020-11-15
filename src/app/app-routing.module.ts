import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { CharactersComponent } from './characters/characters.component';
import { FavsComponent } from './favs/favs.component';
import { ChardetailsComponent } from './chardetails/chardetails.component';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'Characters', component: CharactersComponent},
  { path: '', component: CharactersComponent},
  { path: 'Favs', component: FavsComponent},
  { path: 'CharacterDetails', component: ChardetailsComponent}
 
   
  ];

  
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
