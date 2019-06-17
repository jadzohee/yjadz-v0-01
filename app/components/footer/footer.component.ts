import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'solution-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  private stackoverflowUrl: string = 'https://stackoverflow.com/users/1791913/faisal?tab=profile';
  private twitterUrl:string = 'https://twitter.com/jadzohee';
  private githubUrl:string = 'https://github.com/jadzohee';
  private googleUrl:string = 'https://plus.google.com/+jadzohee';
  constructor() { }

  ngOnInit() {
  }

}