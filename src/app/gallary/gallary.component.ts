import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-gallary',
  templateUrl: './gallary.component.html',
  styleUrls: ['./gallary.component.css']
})
export class GallaryComponent implements OnInit {

  constructor(private httpobject:HttpClient) { 
    
  }
pagetitle : string ="this is my gallary";

  ngOnInit() {
    this.getmygallary();
  }

  myphoto:any[]=[];
  getmygallary()
  {
     this.httpobject.get("./assets/mygallary.json").subscribe(
       data =>{
         this.myphoto=data as string[];
         //alert(this.myphoto.length);
       }
     );
  }
}
