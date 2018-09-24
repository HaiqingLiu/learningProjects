import { Component, OnInit, ViewChild } from '@angular/core';
import { Area } from './bean/area.class';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  @ViewChild("file1") fileUpload;
  private areaDefault: Area = {
      width: "500px",
      height: "500px",
      backgroundColor: "#ffffff",
      backgroundImg: null
  }
  area: Area = Object.assign({}, this.areaDefault);
  areaStyle;

  constructor() { }

  ngOnInit() {
  }

  imgSelect($event) {
    let fileEle = this.fileUpload.nativeElement;
    let files = fileEle.files;
    if (FileReader && files && files.length) {
      var fr = new FileReader();
      fr.onload = () => {
        this.area.backgroundImg = fr.result;
      }
      fr.readAsDataURL(files[0]);
    }
  }

  clearImg() {
    this.area.backgroundImg = null;
  }

  areaChange() {
    // console.log(this.area);
    this.reDisply();
  }

  private reDisply() {
    let img = `url(${this.area.backgroundImg})`;
    // console.log(img);
    this.areaStyle = {
      width: this.area.width,
      height: this.area.height,
      'background-color': this.area.backgroundColor,
      'background-image': img
    }

  }

  areaReset() {
    this.area = Object.assign({}, this.areaDefault);
    this.reDisply();
  }
}
