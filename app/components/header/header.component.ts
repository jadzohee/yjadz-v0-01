import { Component, Input } from '@angular/core';
import { SharedDataService } from './../../services/shared-data.service';
import { AuthService } from 'angularx-social-login';
import { SocialUser } from 'angularx-social-login';
import { GoogleLoginProvider, FacebookLoginProvider, LinkedInLoginProvider } from 'angularx-social-login';


@Component({
  selector: 'solution-header',
  templateUrl: 'header.component.html'
})
export class HeaderComponent {
  // -----------------------------------------------------------------------//
  private title = 'DisPlug';
  @Input() angularVersion: string = '';
  @Input() materialVersion: string = '';
  private websiteUrl: string = 'https://google.com/';  
  // -----------------------------------------------------------------------//

  user: SocialUser;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      console.log(user);
    });
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(x => console.log(x));
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID).then(x => console.log(x));
  }

  signInWithLinkedIn(): void {
    this.authService.signIn(LinkedInLoginProvider.PROVIDER_ID).then(x => console.log(x));
  }

  signOut(): void {
    this.authService.signOut();
  }


}

