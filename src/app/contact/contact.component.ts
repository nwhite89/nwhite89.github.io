import { AfterViewInit, Component, OnInit } from '@angular/core';

import { CommonService } from '../common-service.service';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
})
export class ContactComponent implements AfterViewInit {

    viewInit: boolean = false;
    socials = this.commonService.socials;

    ngAfterViewInit(): void {
        setTimeout(() => this.viewInit = true, 0)
    }

    constructor (private commonService: CommonService) {
    }
}
