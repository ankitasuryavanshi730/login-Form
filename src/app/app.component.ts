import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
   logform: any;
    loginArray:any=[]












   ngOnInit(): void {


    this.logform = new FormGroup({

      username: new FormControl("" , Validators.compose([Validators.required ,Validators.email])),
      password: new FormControl("", Validators.compose([Validators.required]))


    })
   }





  submit(data: any){

    // console.log(data);

    this.loginArray.push(data)
    console.log(this.loginArray);

    localStorage.setItem("login" , JSON.stringify(data));












}

}
