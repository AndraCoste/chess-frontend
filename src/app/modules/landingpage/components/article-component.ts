import {Observable, Observer} from "rxjs";
export abstract class ArticleComponent {
  public contentLoaded: Observable<any>;
  protected observer: Observer<any>;

  constructor() {
    this.registerObserver();
  }

  private registerObserver(): void {
    this.contentLoaded = Observable.create((observer) => {
      this.observer = observer;
    });
  }
}
