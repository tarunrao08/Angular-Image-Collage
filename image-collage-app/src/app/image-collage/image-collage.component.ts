import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-image-collage',
  templateUrl: './image-collage.component.html',
  styleUrls: ['./image-collage.component.css']
})
export class ImageCollageComponent implements OnInit {
  images: any[] = [];
  isLoading = false;
  page = 1;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.loadImages();
  }

  onScroll() {
    this.page++;
    this.loadImages();
  }

  loadImages() {
    this.isLoading = true;
    const apiUrl = `https://picsum.photos/v2/list?page=${this.page}&limit=100`;
    this.http.get<any[]>(apiUrl).subscribe(images => {
      this.images = this.images.concat(images);
      this.isLoading = false;
    });
  }
}
