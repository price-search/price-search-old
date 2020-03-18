import { Module } from '@nestjs/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
  FacebookLoginProvider
} from 'angularx-social-login';
import { BrowserModule } from '@angular/platform-browser';
import { PriceSearchComponent } from './app.component';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const google_oauth_client_id =
  '113929152064-osdmb61gpl4d06ls9717kasgfntc4dam.apps.googleusercontent.com';

const config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider(google_oauth_client_id)
  }
]);

@NgModule({
  declarations: [PriceSearchComponent],
  imports: [
    BrowserModule,
    MatButtonModule,
    SocialLoginModule.initialize(config),
    MatToolbarModule,
    MatIconModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [PriceSearchComponent]
})
export class AppModule {}
