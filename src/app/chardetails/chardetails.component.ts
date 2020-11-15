import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import {ApiconsultService} from '../apiconsult.service';


@Component({
  selector: 'app-chardetails',
  templateUrl: './chardetails.component.html',
  styleUrls: ['./chardetails.component.css']
})
export class ChardetailsComponent implements OnInit {
  details;
  id;
  loggedIn:boolean=false;
  constructor(private route: ActivatedRoute, protected ApiconsultService: ApiconsultService
  ) { }

  ngOnInit(): void {
  this.route.queryParamMap.subscribe(queryParams => {
    this.id = queryParams.get("charId");
    console.log(" el id ");
    console.log(this.id);
  })

    console.log(" el id ");
    console.log(this.id);
    this.ApiconsultService.getCharacterbyId(this.id)
      .subscribe( result => {
        this.details = result;
        console.log(this.details);
        console.log(result);
        console.log(this.details);
      });
  }

 

}
