import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-array1',
  templateUrl: './array1.component.html',
  styleUrls: ['./array1.component.css']
})
export class Array1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  item:any[] =["apple","banana","orange","Mango"];

   myitem:any[]=[

         {"name":"apple","price":"3000","quantity":"4"},
         {"name":"banana","price":"5000","quantity":"20"},
         {"name":"orange","price":"6000","quantity":"90"},
         {"name":"Mango","price":"2000","quantity":"7"}
         ];

msg:string=" ";
saveitem(newitem:string)
{
  this.item.push(newitem);
  this.msg="Item Added Successfully !";
}
   //class end here     
   
   savemyitem(name:string,price:number,quantity:number)
   {
     var newitem ={"name":name,"price":price,"quantity":quantity};
     this.myitem=this.myitem.concat(newitem);
     this.msg="Item Added Successfully to 2nd array!";
   }

   delitem(index:number)
   {
     var status=confirm("Are you sure ?");
     if(status==true)
     {
       this.myitem.splice(index,1);//1 for deletion ,0 for addition
       this.msg="Item Deleted Successfully from 2nd Array";
     }
   }
   
   delmyitem(index:number)
   {
     var status=confirm("Are you sure ?");
     if(status==true)
     {
       this.item.splice(index,1);//1 for deletion ,0 for addition
       this.msg="Item Deleted Successfully from 2nd Array";
     }
   }
}
