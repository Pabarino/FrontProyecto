import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  };

  onAboutus(){
    this.router.navigate(['./aboutus']);
  };

  onHome(){
    this.router.navigate(['./']);
  };

  onGames(){
    this.router.navigate(['./juegos']);
  };

}
