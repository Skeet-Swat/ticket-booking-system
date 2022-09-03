import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data: any;
  img : any = [];
  updatedData: any;
  constructor(private _service: ApiService){
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
  
  title = 'movie-ticket-booking-system';
}
