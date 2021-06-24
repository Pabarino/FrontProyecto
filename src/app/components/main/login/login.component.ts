import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../../api/auth.service";
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  profileForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")
    ])
  });

  error = 0;

  constructor(private authService: AuthService, private router:Router) { }


  onRecoverPass(){

  }

  onRecoverEmail(){

  }

  onSubmit(){
    let miuser = null;

    // console.log(this.email);
    // console.log(this.password);

    this.authService.login(this.profileForm.controls.email.value, this.profileForm.controls.password.value).subscribe(data => miuser = data);
    // this.password = '';
    // this.email = '';
    
    if (miuser!=null) {     
      console.log(miuser);
      
      this.router.navigate(['./home']);
    } else {
      this.error = 1;
    }
  }


}
