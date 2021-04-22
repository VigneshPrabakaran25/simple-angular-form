import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControlName, FormControl, FormGroup, NgForm, NgModel, FormGroupName } from '@angular/forms';
import {OverlayOutsideClickDispatcher } from '@angular/cdk/overlay';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  userCreate=new FormGroup({
    fname:new FormControl(""),
    lname:new FormControl(""),
    Male:new FormControl(""),
    Female:new FormControl(""),
    Address:new FormControl(""),
    City:new FormControl(""),
    State:new FormControl(""),
    postalCode:new FormControl(""),
    MobileNumber:new FormControl(""),
  })
  onSubmit(){
    console.warn(this.userCreate.value);
  }
  wordlist:any = [
    {value: 'fname',viewValue:''}
  ];

 
};
