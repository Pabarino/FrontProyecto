import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onLogin(){
    this.router.navigate(['./login']);
  }

  onRegister(){
    this.router.navigate(['./register']);
  }

  onHome(){
    this.router.navigate(['./']);
  }

}
