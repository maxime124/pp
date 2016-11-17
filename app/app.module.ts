import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { AppComponent }         from './app.component';
import { NavTopComponent }      from './nav/nav-top.component';
import { NavRightComponent }    from './nav/nav-right.component';
import { NavCenterComponent }   from './nav/nav-center.component';
@NgModule({
    imports:        [ BrowserModule ],
    declarations:   [
                        AppComponent,
                        NavTopComponent,
                        NavRightComponent,
                        NavCenterComponent
                    ],
    bootstrap:      [ AppComponent ]
})
export class AppModule { }
