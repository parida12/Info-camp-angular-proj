import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private obj:HttpClient) { }

  ngOnInit() {
    this.userlist();
  }

  msg:string="";
  alluser:any[]=[];

  userlist()
  {
    this.msg="please wait loading...";
    var url="http://globalleads.in/api/getcontact.php";
    this.obj.get(url).subscribe(
      data=>{
        this.alluser=data as string[];
        this.msg=this.alluser.length+ "--users Loaded Successfully !";
      }
    );
  }

  saveuser(name:string,email:string,mobile:number,msg:string)
  {
    var jsondata={"n":name,"e":email,"m":mobile,"msg":msg};
    
     this.msg="Please wait Processing...";
     var url="http://globalleads.in/api/savecontact.php";
    this.obj.post(url, jsondata).subscribe(
      data=>{
          this.userlist();//to reload the user list with new data
      }
    );
  }

  deluser(userid:number)
  {
    this.msg="Please wait Processing...";
    var sts =confirm("are you sure");
    if(sts==true)
    {
      var url="http://globalleads.in/api/deletecontact.php";
      var jsondata={"id":userid};
      this.obj.post(url, jsondata).subscribe(
        data=>{
            this.userlist();//to reload the user list with new data
        }
      );
  }
}

ename:string="";
eemail:string="";
emobile:number;
emessage:string="";
userid:number;

edituser(index:number)
{
  //alert(index);
 this.ename=this.alluser[index].name;
 this.eemail=this.alluser[index].email;
 this.emobile=this.alluser[index].mobile;
 this.emessage=this.alluser[index].message;
 this.userid=this.alluser[index].id;
}

updateuser(name:string,email:string,mobile:number,msg:string,id:number)
{
  var jsondata={"n":name,"e":email,"m":mobile,"msg":msg,"id":id};
  
   this.msg="Please wait Processing...";
   var url="http://globalleads.in/api/updatecontact.php";
  this.obj.post(url, jsondata).subscribe(
    data=>{
        this.userlist();//to reload the user list with new data
    }
  );
}

//for pagination
p:number=1;

//for filter
searchkey:string;

//for sorting the records
sortkey:string='id';//global variable
reverse : boolean=false;
sort(colname) //local variable
{
  //alert(colname);
  this.sortkey=colname;
  this.reverse=!this.reverse;
}
}
