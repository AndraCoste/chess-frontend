import {Component, OnInit} from '@angular/core';
import {
    Router,
    NavigationStart
} from "@angular/router";

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.less']
})
export class MenuComponent implements OnInit {

    private color: string;
    private background: string;
    private border: string;
    private menuState: boolean = false;

    constructor(router: Router) {


        this.setLandingPageStyle = this.setLandingPageStyle.bind(this);

        router.events
            .filter(event => event instanceof NavigationStart)
            .subscribe(results => {
                    if (results.url === "/") {

                        this.landingPageInitStyle();
                        window.addEventListener('scroll', this.setLandingPageStyle);

                    } else {
                        window.removeEventListener('scroll', this.setLandingPageStyle);
                        this.defaultStyle();
                    }
                }
            );


    }

    ngOnInit() {
    }

    landingPageInitStyle() {
        this.border = `0px 0px 5px 0px rgba(0,0,0,0)`;
        this.color = `rgb(255,255,255)`;
        this.background = `rgba(255,255,255,0)`;
    }

    defaultStyle() {
        this.border = `0px 0px 5px 0px rgba(0,0,0,0.25)`;
        this.color = `rgb(0,0,0)`;
        this.background = `rgba(255,255,255,1)`;
    }

    setLandingPageStyle() {
        let scrollTop, windowHeight, opacity, saturation;
        scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        windowHeight = window.outerHeight - 200;
        opacity = Math.min(scrollTop, windowHeight) / windowHeight;
        saturation = 255 * (1 - opacity);
        this.border = `0px 0px 5px 0px rgba(0,0,0,${opacity / 4})`;
        this.color = `rgb( ${saturation}, ${saturation}, ${saturation})`;
        this.background = `rgba(255,255,255,${opacity})`;
    }

    toggleMenu() {
        this.menuState = !this.menuState;
    }
}


