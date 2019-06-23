import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model = {
    name: '',
    password: ''
  };
  logSubmitted: boolean = false;

  constructor(private router: Router, private shared: SharedService) { }

  ngOnInit() {

  }
  onLoginSubmit() {
    this.logSubmitted = true;
    /*this.shared.postData('/api/authenticate', this.model).pipe(map(data=>data.toJSON())).subscribe((data) => {
      if (data === "yes") {
        sessionStorage.setItem("username", this.model.name);
        this.router.navigate(['/Dashboard']);
      }
      else{
        alert("Username or password incorrect");
      }
    });*/
    sessionStorage.setItem("username", this.model.name);
    this.router.navigate(['/Dashboard']);
  }

}
