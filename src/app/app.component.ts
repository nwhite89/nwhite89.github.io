import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
    constructor (@Inject(DOCUMENT) private document: Document) {
    }

    ngOnInit() {
        this.document.body.classList.remove('loading');
    }
}
