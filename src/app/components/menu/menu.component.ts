import {Component, OnInit, Inject} from '@angular/core';
import {
  Router,
  NavigationStart, NavigationEnd
} from "@angular/router";
import {PageScrollService} from "ng2-page-scroll/src/ng2-page-scroll.service";
import {DOCUMENT} from "@angular/platform-browser";
import {PageScrollInstance} from "ng2-page-scroll/src/ng2-page-scroll-instance";

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

  constructor(private router: Router, private pageScrollService: PageScrollService, @Inject(DOCUMENT) private document: Document) {


    this.setLandingPageStyle = this.setLandingPageStyle.bind(this);

    this.landingPageInitStyle();

    router.events
      .filter(event => event instanceof NavigationStart)
      .subscribe(results => {
          if (results.url === "/") {
            window.addEventListener('scroll', this.setLandingPageStyle);
          } else {
            window.removeEventListener('scroll', this.setLandingPageStyle);
            this.defaultStyle();
          }
        }
      );
    router.events.filter(event => event instanceof NavigationEnd)
      .subscribe(results => {
        this.scrollTo(results.url);
      });
  }

  private scrollTo(where: string): void {
    if (where == "/inscriere") {
      return;
    }
    var elementId = 'banner';
    if (where !== "/") {
      elementId = where.substr(1);
    }

    // if (!this.document.getElementById(elementId)) {
    setTimeout(() => this.scrollToElement('#' + elementId), 250);
    // }
    // else {
    //   this.scrollToElement('#' + elementId);
    // }
  }

  private scrollToElement(element: string): void {
    let pageScrollInstance: PageScrollInstance =
      PageScrollInstance.simpleInstance(this.document, element);
    this.pageScrollService.start(pageScrollInstance);
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

  openMenu() {
    this.menuState = true;
  }

  closeMenu() {
    this.menuState = false;
  }
}


