import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html'
})
export class AboutComponent {

    public githubProjects: { title: string, link: string }[] = [
        { title: 'Auxilium.js', link: 'http://github.com/rockabox/Auxilium.js' },
        { title: 'API by Example (unmaintained)', link: 'https://github.com/apibyexample' },
        { title: 'GeoDistance', link: 'http://github.com/nwhite89/geodistance' },
        { title: 'js.geo-distance', link: 'http://github.com/nwhite89/js.geo-distance' },
        { title: 'ng-lodash', link: 'https://github.com/runderworld/ng-lodash' },
        { title: 'ng-underscore', link: 'http://github.com/nwhite89/ng-underscore' },
        { title: 'Portfolio', link: 'http://github.com/nwhite89/nwhite89.github.io' }
    ];

    public skills: string[] = [
        'JavaScript',
        'Angular 1 & 2',
        'Webpack',
        'PostCSS',
        'SASS',
        'LESS',
        'HTML5',
        'CSS3',
        'Typescript',
        'Node',
        'Git',
        'NPM',
        'Django',
        'Docker',
        'PHP',
        'Serverless',
    ];
}
