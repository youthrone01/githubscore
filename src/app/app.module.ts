import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UsernameComponent } from './username/username.component';
import { ScoreComponent } from './score/score.component';
import { GithubscoreService } from './githubscore.service';
import { FormsModule } from '@angular/forms'; // <-- Import FormsModule
import { HttpModule } from '@angular/http';
@NgModule({
  declarations: [
    AppComponent,
    UsernameComponent,
    ScoreComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
		HttpModule 
  ],
  providers: [GithubscoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
