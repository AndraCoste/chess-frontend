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

        for (let i = 0; i < 18; i++){
            this.thumbnail.push( `url('${IMAGE_URL}/thumbnail/image${i}.jpg')`);
            this.pictures.push( `${IMAGE_URL}/full/image${i}.jpg`);

        }
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
