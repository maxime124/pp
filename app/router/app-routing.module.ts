import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavCenterComponent }  from '../nav/nav-center.component';
const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home',  component: NavCenterComponent }
];
@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}