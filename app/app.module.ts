import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { OverlayContainer } from '@angular/cdk/overlay';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MaterialModule } from './modules/material/material.module';
import { SharedDataService } from './services/shared-data.service'
import { SidebarModule } from 'ng-sidebar';
import { SidebarComponent } from './components/sidebar/sidebar.component';

import { SocialLoginModule } from 'angularx-social-login';
import { AuthServiceConfig, GoogleLoginProvider, FacebookLoginProvider, LinkedInLoginProvider  } from 'angularx-social-login';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule, 
    FormsModule, 
    ReactiveFormsModule,
    SidebarModule.forRoot(),
    CommonModule, 
    HttpModule,
    SocialLoginModule, 
    FlexLayoutModule,   

    // Material Modules in './modules/material/material.module'
    MaterialModule
    ],
  declarations: [AppComponent, HeaderComponent, FooterComponent, SidebarComponent,],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    },
    SharedDataService,OverlayContainer]
})
export class AppModule { 
  constructor(overlayContainer: OverlayContainer) {
    overlayContainer.getContainerElement().classList.add('solution-dark-theme');
  }
}

const config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider('706263748475-mlg08ceiutes588m53hg74ni12902qpk.apps.googleusercontent.com')
  },
]);

export function provideConfig() {
  return config;
}
