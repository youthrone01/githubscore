import { TestBed, inject } from '@angular/core/testing';

import { GithubscoreService } from './githubscore.service';

describe('GithubscoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GithubscoreService]
    });
  });

  it('should be created', inject([GithubscoreService], (service: GithubscoreService) => {
    expect(service).toBeTruthy();
  }));
});
