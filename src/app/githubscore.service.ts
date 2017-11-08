import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
@Injectable()
export class GithubscoreService {
  github_url = 'https://api.github.com/users/';
  userinfo;
  scoreinfo={
    score:0,
    message:"",
  }
  constructor(private _http: Http) { }

   getusername(name){
     this.github_url = this.github_url + name;
     this.retrievedata(this.github_url);
     this.github_url = 'https://api.github.com/users/';
   }

   retrievedata(url){
    this._http.get(url).subscribe(
      (response)=>{
        console.log(response.json());
        this.userinfo = response.json();
        this.scoreinfo.score = this.userinfo.public_repos + this.userinfo.followers;
        if(this.scoreinfo.score >= 200 ){
          this.scoreinfo.message = "Github Elite!";
        }else if(this.scoreinfo.score > 100){
          this.scoreinfo.message = "Great job!";
        }else if(this.scoreinfo.score > 50){
          this.scoreinfo.message = "Doing Good!";
        }else if(this.scoreinfo.score > 20){
          this.scoreinfo.message = "A decent srat!";
        }else{
          this.scoreinfo.message = "Needs Work!";
        }
      },

      (error)=>{
        console.log(error.status);
        this.scoreinfo.score = null;
        this.scoreinfo.message = "User does not exit, pick a different Github name!";
      }
    )
   }

}
