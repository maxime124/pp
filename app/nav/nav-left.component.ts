import { Component } from '@angular/core';
import { Link }       from '../class/link';

@Component({
    selector: 'nav-left',
    templateUrl: 'app/nav/nav-left.component.html'
})
export class NavLeftComponent {
    links: Link[];

    constructor() {
        this.links = [{
            code: "home",
            name: "home",
            path: "/home"
        },
        {
            code: "account",
            name: "account",
            path: "/account"
        }];
    }
}