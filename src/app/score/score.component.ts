import { Component, OnInit } from '@angular/core';
import { GithubscoreService } from './../githubscore.service';
@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class ScoreComponent implements OnInit {
  newscore;
  constructor(private _githubscoreService: GithubscoreService) { 
    this.newscore = this._githubscoreService.scoreinfo;
  }

  ngOnInit() {
  }

}
