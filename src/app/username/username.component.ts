import { Component, OnInit } from '@angular/core';
import { GithubscoreService } from './../githubscore.service';
@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class UsernameComponent implements OnInit {
  username="";
  constructor(private _githubscoreService:GithubscoreService ) { }

  OnSubmit(){
    this._githubscoreService.getusername(this.username);
    this.username ="";
  }
  ngOnInit() {
  }

}
