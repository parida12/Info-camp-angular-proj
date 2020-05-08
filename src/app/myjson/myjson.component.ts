import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-myjson',
  templateUrl: './myjson.component.html',
  styleUrls: ['./myjson.component.css']
})
export class MyjsonComponent implements OnInit {

  constructor(private obj:HttpClient) { } //obj created

  ngOnInit() {
    this.getcar();
  }

  allcar:any[] = [];
  msg:string="";
  getcar()
  {
    this.msg="Please wait Car List is loading...";
    var url="http://cybotrix.com/ios/car.json";
    this.obj.get(url).subscribe(
      data =>{
       this.allcar=data as string[];
       this.msg="Total : (" + this.allcar.length + ") Cars Loaded successfully !";
      }
    );
  }
 carmodel:string;
 imagename:string;
 counter:number=0;
  showimage(i:number)
  {
    this.counter=i;
    this.carmodel = this.allcar[i].model;
    this.imagename = this.allcar[i].image;
    //alert(i);
  }

  getback()
  {
    if(this.counter>=0)

    {
     this.counter--;
     this.showimage(this.counter);
    }else{
      alert("this is first car");
    }
  }
  getnext()
  {
    if(this.counter<this.allcar.length)
    {
    this.counter++;
    this.showimage(this.counter);
    }else{
      alert("this is last car");
    }
  }
}
