import {Component, OnInit, ViewChild, Inject} from '@angular/core';
import {RulesArticle} from "./components/rules/rules.component";
import {ArticleComponent} from "./components/article-component";
import {PageScrollService} from "ng2-page-scroll/src/ng2-page-scroll.service";
import {DOCUMENT} from "@angular/platform-browser";
import {PageScrollInstance} from "ng2-page-scroll/src/ng2-page-scroll-instance";
import {Router} from "@angular/router";

@Component({
  selector: 'landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.less']
})
export class LandingpageComponent implements OnInit{
  //
  // @ViewChild(ArticleComponent) rules: ArticleComponent;
  // @ViewChild(ArticleComponent) ligaAc: ArticleComponent;

  @ViewChild('rules') public rules: ArticleComponent;
  @ViewChild('ligaAc') public ligaAc: ArticleComponent;

  constructor(private pageScrollService: PageScrollService,
              @Inject(DOCUMENT) private document: Document,
              private router:Router){

  }

  ngOnInit(): void {
    this.rules.contentLoaded.subscribe((data)=>{
      this.moreContentLoaded();
    });

    this.ligaAc.contentLoaded.subscribe((data)=>{
      this.moreContentLoaded();
    });

    // console.log("scroll offset: " + this.document.body.scrollTop);
  }

  private moreContentLoaded():void {
    // console.log("more content loaded!");
    var route = this.router.url;
    if(route === "/" || route === "/regulament") {
      return;
    }
    route = route.substr(1);
    // console.log("scrolling again to: ", route);
    setTimeout(()=>{this.scrollToElement("#"+route);});

    // console.log("scroll offset: " + this.document.body.scrollTop);
  }

  private scrollToElement(element: string): void {
    // console.log("scrolling to: " + element);
    let pageScrollInstance: PageScrollInstance =
      PageScrollInstance.simpleInstance(this.document, element);
    this.pageScrollService.start(pageScrollInstance);
  }
}
