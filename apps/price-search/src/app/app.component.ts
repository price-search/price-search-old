import { Component, Output } from '@angular/core';
import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState
} from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { AuthService, GoogleLoginProvider } from 'angularx-social-login';
import { EventEmitter } from 'events';

@Component({
  selector: 'price-search-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class PriceSearchComponent {
  title = 'Sign in with Google';

  user: any;
  isHandset: Observable<BreakpointState> = this.breakpointObserver.observe(
    Breakpoints.Handset
  );
  constructor(
    private _socioAuthServ: AuthService,
    private breakpointObserver: BreakpointObserver
  ) {}

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
