import {Component} from "@angular/core";

@Component({
    selector: 'prev-editions',
    templateUrl: './prev-editions.template.html',
    styleUrls: ['./prev-editions.style.less']

})
export class PrevEditions{

    private pictures: string[] = [];
    private thumbnail: string[] = [];
    private image:string;
    private galleryModal: boolean = false;
    private index:number;

    constructor() {

        const IMAGE_URL = "./assets/img/prev_ed";
        const ImgNumber = 32;
        console.log("ImgNumber="+ImgNumber);
        for (let i = 0; i < ImgNumber; i++){
            this.thumbnail.push( `url('${IMAGE_URL}/thumbnail/${this.getFileName(i)}')`);
            this.pictures.push( `${IMAGE_URL}/full/${this.getFileName(i)}`);
        }
    }

    private getFileName(index:number){
      var str = index.toString();
      while(str.length!=3)
      str = "0"+str;
      return `image_${str}.jpg`;
    }

    openImage(index) {
        this.index = index;
        this.image = this.pictures[this.index];
        this.galleryModal = true;
        document.body.style.overflow = 'hidden';
    }

    closeImage() {
        this.galleryModal = false;
        document.body.style.overflow = '';

    }

    prevImg(e) {
        if(this.index > 0) {
            this.index = --this.index;
        }
        else {
            this.index = this.pictures.length -1;
        }

        this.image = this.pictures[this.index];
        e.stopPropagation();
    }

    nextImg(e) {

        if(this.index < (this.pictures.length -1)) {
            this.index = ++this.index;
        }
        else {
            this.index = 0;
        }

        this.image = this.pictures[this.index];
        e.stopPropagation();
    }

}
