import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavCenterComponent }  from '../nav/nav-center.component';
import { AccountComponent }  from '../account/account.component';
const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home',  component: NavCenterComponent },
    { path: 'account',  component: AccountComponent }
];
@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}