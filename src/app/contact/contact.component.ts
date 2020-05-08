import { Component, OnInit } from '@angular/core';
import {FormBuilder ,FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  myform :FormGroup;

  submitted:boolean = false;

  constructor(private frmobj:FormBuilder) { }//here we create object (frmobj) & class(FormBuilder)

  ngOnInit() {
    this.myform = this.frmobj.group({ //here we make a group and handover to frmobj then finally handover to myform
      fname:["", Validators.required],
      emailid:["", [Validators.required, Validators.email]],
      pass:["", [Validators.required, Validators.minLength(6)] ],
      gender:["" , Validators.required],
      city:["" , Validators.required],
      address:["" , Validators.required],
      tnc:["" , Validators.required]
    });

  }
  savemydata()
    {
      this.submitted=true;
      if(this.myform.invalid)
      {
        return;
      }
      alert("Your Inputs Are : \\"+ JSON.stringify(this.myform.value));
    }

}
