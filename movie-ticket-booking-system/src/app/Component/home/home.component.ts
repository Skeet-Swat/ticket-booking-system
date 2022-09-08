import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data: any;
  img : any = [];
  updatedData: any;
  constructor(private _service: ApiService, public router: Router){
   this._service.callApi().subscribe((data: any)=> {
    // console.log("data", data);
    this.updatedData = data;

    console.log("poster", data.Search[0].Poster);
    // this.posterImg = data;
    console.log("updated Data", this.updatedData)

    for(let item of this.updatedData.Search){
      this.img.push(item.Poster)
    }
    console.log("All Img",this.img);

   })
   
  }
  ngOnInit(): void {
  }

}
