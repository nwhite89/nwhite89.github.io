import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

import Splide from '@splidejs/splide';
import Typewriter from 'typewriter-effect/dist/core';

const Video = require('@splidejs/splide-extension-video').Video;

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit, AfterViewInit {
    @ViewChild('typewriter', { static: true }) typewriter: any;

    viewInit: boolean = false;

    private positions: string[] = [
        'Co-founder | a Kid called Beast',
        'CTO AnjiEco',
        'Software Engineer',
    ]

    ngAfterViewInit(): void {
        setTimeout(() => this.viewInit = true, 0)
    }

    ngOnInit() {
        var typewriter = new Typewriter(this.typewriter.nativeElement, {
            loop: true,
            delay: 75,
        });

        typewriter
            .pauseFor(500)
            .typeString(this.positions[0])
            .pauseFor(1000)
            .deleteAll()
            .typeString(this.positions[1])
            .pauseFor(1000)
            .deleteAll()
            .typeString(this.positions[2])
            .pauseFor(1000)
            .deleteAll()
            .start();

        const splide =  new Splide('#backgroundCarousel', {
            height: '100vh',
            type: 'fade',
            perPage: 1,
            perMove: 1,
            arrows: false,
            preloadPages: 4,
            autoplay: true,
            cover: true,
            rewind: true,
            interval: 10000,
            speed: 2000,
            rewindSpeed: 2000,
            video: {
                loop: true,
                mute: true,
                autoplay: true,
                playsInline: true,
                controls: false,
                disableOverlayUI: true,
                playerOptions: {
                    htmlVideo: {
                        mute: true,
                        autoplay: true,
                        playsInline: true,
                        controls: false,
                    }
                }
            },
        });
        splide.mount({
            Video
        });
    }
}
