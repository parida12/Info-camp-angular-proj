import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-array2',
  templateUrl: './array2.component.html',
  styleUrls: ['./array2.component.css']
})
export class Array2Component implements OnInit {

  public name="subhashree";
  public highlight="green";
  x:boolean=false;
  public redclass="red";
  public falseclass=false;
  public trueclass=true;

  public bindclass={
  "orange":!this.falseclass,
  "italic":this.trueclass,
  "red":this.trueclass
  }


  public stylebind={
    color:"blue",
    fontStyle:"italic",
  }

  greet() {
    return "hello" + this.name;
  }

  f1(event) {
    console.log(event);
  }
  onClick() {
    console.log("welcome");
  }

public name1="";

log(value){
  console.log(value);
}

public color="red";
car=["bmw","maruti","benz","lambo"];

emp=[
  {name:"sub",city:"LA",age:27},  
  {name:"sub",city:"LA",age:27},  
  {name:"sub",city:"LA",age:27},  

];
  

  constructor() { }

  ngOnInit() {
  }

}
