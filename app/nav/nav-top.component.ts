import { Component }    from '@angular/core';
import { Link }       from '../class/link';

@Component({
    selector: 'nav-top',
    templateUrl: 'app/nav/nav-top.component.html'
})

export class NavTopComponent {
    name: string;
    links: Link[];
    active: string;

    constructor() {
        this.name = "PP test";
        this.links = [
            {
                code:   "a",
                name:   "a",
                path:   "#"
            },
            {
                code:   "a",
                name:   "b",
                path:   "#"
            }
        ]

        if(this.links[0])
            this.active = this.links[0].code;
    }
}