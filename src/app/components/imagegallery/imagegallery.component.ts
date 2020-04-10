import { ImageService } from '../../services/image.service';
import { Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-image-gallery',
  templateUrl: './imagegallery.component.html',
  styleUrls: ['./imagegallery.component.css']
})
export class ImagegalleryComponent implements OnInit {

  image: any = [];
  constructor(private imageservice: ImageService) { }

  ngOnInit(): void {
  }
  getImage(){
    this.image = this.imageservice.getImage();
    console.log(this.image);
  }
}
