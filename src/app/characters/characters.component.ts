import { Component, OnInit } from '@angular/core';
import {ApiconsultService} from '../apiconsult.service';


@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
   charlist=[];
   loggedIn:boolean=false;
  constructor(
    protected ApiconsultService: ApiconsultService
  ) { }

  ngOnInit(): void {
    this.ApiconsultService.getCharacters()
      .subscribe( result => {
        this.charlist = result['results'];
      })
      

  }

}
