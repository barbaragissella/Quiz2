import { Component, OnInit } from '@angular/core';
import {ApiconsultService} from '../apiconsult.service';

@Component({
  selector: 'app-charfilter',
  templateUrl: './charfilter.component.html',
  styleUrls: ['./charfilter.component.css']
})
export class CharfilterComponent implements OnInit {
  status:string;
  species:string;
  typechar:string;
  gender:string;
  charlist=[];
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


