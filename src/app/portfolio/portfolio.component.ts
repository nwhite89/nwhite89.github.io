import { AfterViewInit, Component } from '@angular/core';

import lgVideo from 'lightgallery/plugins/video';

@Component({
    selector: 'app-portfolio',
    templateUrl: './portfolio.component.html'
})
export class PortfolioComponent implements AfterViewInit {

    viewInit: boolean = false;

    projects: {
        type: 'image' | 'video',
        src: string,
        name: string,
        sub: string,
        text: string,
        text_2?: string,
        video?: string,
        poster?: string,
        subHtml?: string,
    }[] = [
        {
            type: 'video',
            src: '/assets/videos/akcb.mp4',
            name: 'a Kid called Beast',
            sub: '10,000 3D NFT collection.',
            text: 'Co-founder of AKCB | A 10,000 unique 3D NFT collection with augmented reality support.',
            video: JSON.stringify({ "source": [{ "src": "/assets/videos/akcb.mp4", "type": "video/mp4" }], "attributes": { "preload": false, "controls": false, "playsinline": true, "autoplay": true } }),
            poster: '/assets/img/projects/akcb-poster.png'
        },
        {
            type: 'image',
            src: '/assets/img/projects/akcb-studios.png',
            name: 'AKCB Studios',
            sub: 'Central dashboard',
            text: "AKCB Studios is a centralised dashboard for holders of an AKCB NFT.Allowing holders to view their NFT's in augmented reality.",
        },
        {
            type: 'image',
            src: '/assets/img/projects/anjiswap.png',
            name: 'AnjiSwap',
            sub: 'DEX Aggregator',
            text: 'AnjiSwap is a decentralised multi-chain crypto aggregator exchange.',
        },
        {
            type: 'image',
            src: '/assets/img/projects/rig-create.png',
            name: 'Rig Create',
            sub: 'Rich-media creative toolkit',
            text: "Scoota's Rig Creative toolkit, is built using Angular, Webpack and Django. It allows creative designers to upload their PSD's straight to the toolkit in order to create Rich media ads that can be served through the Rig Distribute platform.",
            text_2: "Once a user has uploaded their PSD and the creative has been created, using the UI the user can  add Video's, HTML, CSS, JS and incoporate actions to create a imersive experience for the end-user.",
        },
        {
            type: 'image',
            src: '/assets/img/projects/rig-distribute.png',
            name: 'Rig',
            sub: 'Rich-media demand-side platform',
            text: "Scoota's Distribute product is built using Angular 2, Webpack, Bootstrap 4 and Django. The product allows users to build placements and gain access to a private marketplace connecting to SSPs in order to buy and deliver rich media formats for their marketing campaigns.",
            text_2: "Once a placement has been delivered a user can track how a placement is performing using the Rig's rich media reporting suite. Providing with a wide range of metrics engagements, interactions, dwell times, video completion rates and custom events, advertisers can understand the true impact of their campaigns. They can also generate creative reports so that designers are able to check what is working best within a creative and what is not allowing them to further optimize the creative to provide users with the best user experience possible.",
        },
        {
            type: 'image',
            src: '/assets/img/projects/parascroll.png',
            name: 'ParaScroll',
            sub: 'Scrolling advert format',
            text: 'The ParaScroll format is a cross-platform display ad, which will display a particular creative depending on the type of the device allowing the creator of the advert to set a creative for Mobile devices and another for Desktop devices.When on Mobile the creative will display full width of the browser whereas the desktop creative will be full width of the article.The biggest part of this format is that the the creative will look at the entire page to look for the article on the page and place the creative within the Article looking for a paragraph which will allow for only 50% (maximum) of the creative to display on load and then add to the Article in this place.',
        }
    ].map(project => {
        let subHtml = `<h4>${project.name} <small>${project.sub}</small></h4><p>${project.text}</p>`;

        if (project.text_2) {
            subHtml = `${subHtml}<p>${project.text_2}</p>`;
        }

        return {
            ...project,
            subHtml,
        }
    }) as this['projects']

    ngAfterViewInit(): void {
        setTimeout(() => this.viewInit = true, 0)
    }

    settings = {
        counter: false,
        plugins: [ lgVideo ],
    };
}
