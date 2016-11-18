import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { AppComponent }         from './app.component';
import { NavTopComponent }      from './nav/nav-top.component';
import { NavLeftComponent }     from './nav/nav-left.component';
import { NavCenterComponent }   from './nav/nav-center.component';
import { AppRoutingModule }     from './router/app-routing.module';

@NgModule({
    imports:        [ BrowserModule,
                    AppRoutingModule],
    declarations:   [
                        AppComponent,
                        NavTopComponent,
                        NavLeftComponent,
                        NavCenterComponent
                    ],
    bootstrap:      [ AppComponent ]
})
export class AppModule { }
