import { Component, Input } from '@angular/core';
import { SharedDataService } from './../../services/shared-data.service';

@Component({
  selector: 'solution-header',
  templateUrl: 'header.component.html'
})
export class HeaderComponent {
  // -----------------------------------------------------------------------//
  private title = 'Jadzohee';
  @Input() angularVersion: string = '';
  @Input() materialVersion: string = '';
  private websiteUrl: string = 'https://google.com/';  
  // -----------------------------------------------------------------------//
  constructor(private readonly _sharedDataService: SharedDataService) { }

}
