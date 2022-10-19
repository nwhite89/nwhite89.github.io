import { animate, query, state, style, transition, trigger } from '@angular/animations';

import { CommonService } from '../common-service.service';
import { Component } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    animations: [
        trigger('openClose', [
            state('true', style({})),
            state('false', style({})),
            transition('false <=> true', animate(1000)),
        ])
    ]
})
export class HeaderComponent {
    socials = this.commonService.socials;

    pages: { label: string, link: string[] }[] = [
        { label: 'Home', link: [ '/' ] },
        { label: 'About Me', link: [ '/' , 'about' ] },
        { label: 'Portfolio', link: [ '/' , 'portfolio' ] },
        { label: 'Contact', link: [ '/' , 'contact' ] },
    ]

    menuOpen: boolean = false;

    isFullyOpen: boolean = false;

    constructor (private commonService: CommonService) {}

    onAnimationEvent(event: any) {
        if (event.fromState === 'void') {
            return;
        }

        if (event.phaseName === 'start') {
            if (event.toState) {
                event.element.classList.add('animate-in');
            } else {
                event.element.classList.add('animate-out');
            }
        } else if (event.phaseName === 'done') {
            if (!event.toState) {
                event.element.classList.remove('animate-in');
                setTimeout(() => {
                    this.isFullyOpen = false;
                    event.element.classList.remove('animate-out');
                }, 100);
            } else {
                this.isFullyOpen = true;
            }
        }
    }

    pageChange() {
        this.menuOpen = false;
    }
}
