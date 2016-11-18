import { Component } from '@angular/core';
import { Link }       from '../class/link';

@Component({
    selector: 'nav-left',
    templateUrl: 'app/nav/nav-left.component.html'
})
export class NavLeftComponent {
    links: Link[];
    active: string;

    constructor() {
        this.links = [{
            code: "a",
            name: "a",
            path: "#"
        },
        {
            code: "b",
            name: "b",
            path: "#"
        }];

        if(this.links[0])
            this.active = this.links[0].code;
    }

    goTo(link) {
        console.log(link);
        this.active = link.code;
    }
}