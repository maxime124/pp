import { NgModule }             from '@angular/core';
import { FormsModule }          from '@angular/forms';
import { BrowserModule }        from '@angular/platform-browser';
import { AppComponent }         from './app.component';
import { NavTopComponent }      from './nav/nav-top.component';
import { NavLeftComponent }     from './nav/nav-left.component';
import { NavCenterComponent }   from './nav/nav-center.component';
import { AccountComponent }   from './account/account.component';
import { AppRoutingModule }     from './router/app-routing.module';
import { AccountService }         from './account/account.service';
import { AccountFormComponent } from './account/account-form.component';

@NgModule({
    imports:        [ BrowserModule,
                    AppRoutingModule,
                    FormsModule],
    declarations:   [
                        AppComponent,
                        NavTopComponent,
                        NavLeftComponent,
                        NavCenterComponent,
                        AccountComponent,
                        AccountFormComponent
                    ],
    bootstrap:      [ AppComponent ],
    providers:      [
                        AccountService
                    ],
})
export class AppModule { }
