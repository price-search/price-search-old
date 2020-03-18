import { Component } from '@angular/core';

import { AuthService, GoogleLoginProvider } from 'angularx-social-login';

@Component({
  selector: 'price-search-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class PriceSearchComponent {
  title = 'Sign in with Google';

  user: any;

  constructor(private _socioAuthServ: AuthService) {}

  signIn(platform: string): void {
    platform = GoogleLoginProvider.PROVIDER_ID;

    this._socioAuthServ.signIn(platform).then(response => {
      console.log(platform + 'logged in user data is=', response);

      this.user = response;
    });
  }
  signOut(): void {
    this._socioAuthServ.signOut();

    console.log('User Signed Out');
  }
}
