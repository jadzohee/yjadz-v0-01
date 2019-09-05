import { Component } from '@angular/core';
import {FormControl} from '@angular/forms';
import { SharedDataService } from './../../services/shared-data.service';

@Component({
  selector: 'solution-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  mode = new FormControl('over');

  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));

  constructor(private readonly _sharedDataService: SharedDataService) { }

  onThemeChange(event){
    this._sharedDataService.OnThemeSwitch.next(event.checked);
  }
}
  function Divsplayer() {
  var x = document.getElementById("cont1");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
