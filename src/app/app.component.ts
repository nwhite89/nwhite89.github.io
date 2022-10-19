import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
    constructor (
        @Inject(DOCUMENT) private document: Document,
        private router: Router,
    ) {
    }

    ngOnInit() {
        this.document.body.classList.remove('loading');

        let path = localStorage.getItem('path');
        if (path) {
            localStorage.removeItem('path');
            this.router.navigate([path]);
        }
    }
}
