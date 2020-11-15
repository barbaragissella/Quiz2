import { Component } from '@angular/core';
import {ApiconsultService} from './apiconsult.service';
import {AuthService} from "./auth/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyectico';

  constructor(
    protected ApiconsultService: ApiconsultService, public  authService:  AuthService
  ) { }

  isLogged(){
    return JSON.parse(localStorage.getItem('user'))!==null;
  }

  logout(){
    this.authService.logout();

  }
}
