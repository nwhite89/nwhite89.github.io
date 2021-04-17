import { Component } from '@angular/core';

@Component({
  selector: 'app-get-in-touch',
  templateUrl: './get-in-touch.component.html'
})
export class GetInTouchComponent {
    public contactMethods: { link: string, icon: string, title: string }[] = [
        { link: 'https://www.github.com/nwhite89', icon: 'fa-github', title: 'GitHub' },
        { link: 'https://www.twitter.com/nwhite89', icon: 'fa-twitter', title: 'Twitter' },
        { link: 'https://www.linkedin.com/in/nwhite89', icon: 'fa-linkedin', title: 'Linkedin' },
        { link: 'https://stackoverflow.com/users/1190037/nick-white', icon: 'fa-stack-overflow', title: 'Stack Overflow' },
        { link: 'mailto:nickswhite89@gmail.com', icon: 'fa-envelope', title: 'E-Mail' },
    ];
}
