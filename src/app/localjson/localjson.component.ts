import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-localjson',
  templateUrl: './localjson.component.html',
  styleUrls: ['./localjson.component.css']
})
export class LocaljsonComponent implements OnInit {

  constructor(private httpobject:HttpClient) { 
    
  }
pagetitle : string ="this is my json";

  ngOnInit() {
    this.getmyjsondata();
  }

  myjsondata:any[]=[];
  getmyjsondata()
  {
     this.httpobject.get("./assets/test.json").subscribe(
       data =>{
         this.myjsondata=data as string[];
         //alert(this.myjsondata.length);
       }
     );
  }

  //for pagination
p:number=1;

//for filter
searchkey:string;

//for sorting the records
sortkey:string='name';//global variable
reverse : boolean=false;


sort(colname) //local variable
{
  //alert(colname);
  this.sortkey=colname;
  this.reverse=!this.reverse;
}
}
