import { Component } from '@angular/core';

interface WorkingDesc {
    title: string;
    text: string;
    link: string;
}

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
})
export class HomeComponent {

    public workingAt: WorkingDesc = {
        title: 'Scoota',
        text: '@scoota',
        link: 'https://scoota.com',
    };

    public workingWith: WorkingDesc[] = [
        {
            title: 'Node JS',
            text: 'Node JS',
            link: 'https://nodejs.org'
        },
        {
            title: 'Typescript',
            text: 'Typescript',
            link: 'https://www.typescriptlang.org',
        },
        {
            title: 'AWS Lambda',
            text: 'AWS Lambda',
            link: 'https://aws.amazon.com/lambda/'
        },
        {
            title: 'Angular 2',
            text: 'Angular 2',
            link: 'https://angular.io/'
        },
        {
            title: 'Angular 1',
            text: 'Angular 1',
            link: 'https://angularjs.org'
        },
        {
            title: 'Webpack',
            text: 'Wepback',
            link: 'https://webpack.github.io'
        },
        {
            title: 'Docker',
            text: 'Docker',
            link: 'https://docker.com'
        }
    ];
}
