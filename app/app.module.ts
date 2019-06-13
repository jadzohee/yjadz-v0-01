import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { OverlayContainer } from '@angular/cdk/overlay';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MaterialModule } from './modules/material/material.module';
import { SharedDataService } from './services/shared-data.service'
import { SidebarModule } from 'ng-sidebar';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule, 
    FormsModule, 
    ReactiveFormsModule,
    SidebarModule.forRoot(),
    CommonModule,  
    FlexLayoutModule,   

    // Material Modules in './modules/material/material.module'
    MaterialModule
    ],
  declarations: [AppComponent, HeaderComponent, FooterComponent, SidebarComponent,],
  bootstrap: [AppComponent],
  providers: [SharedDataService,OverlayContainer]
})
export class AppModule { 
  constructor(overlayContainer: OverlayContainer) {
    overlayContainer.getContainerElement().classList.add('solution-dark-theme');
  }
}
