import { Component, OnInit, ViewChild, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { Area } from './bean/area.class';
import { ChartOptions } from './bean/chart.class';
import { ChartAreaComponent } from '../chart-area/chart-area.component';
import { debug } from 'util';
import { ContextMenuComponent } from 'ngx-contextmenu';
import { debugOutputAstAsTypeScript } from '@angular/compiler';
import { ComponentRef } from '@angular/core/src/render3';

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

  @ViewChild("dynamic", { read: ViewContainerRef }) dynamicDiv: ViewContainerRef;
  allChart: any[] = [];
  currentSelecteChart: ComponentRef<ChartAreaComponent>;
  controlOptions: ChartOptions = {
    xData: "Mon, Tue, Wed, Thu, Fri",
    yData: "820, 932, 901, 934, 1290",
    color: "#ccc"
  }

  @ViewChild(ContextMenuComponent) public basicMenu: ContextMenuComponent;
  copyBoard;
  cutBoard;
  constructor(private cfr: ComponentFactoryResolver) { }

  ngOnInit() {
    // this.reloadChart();
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
    console.log(this.area);
    this.reDisply();
  }

  private reDisply() {
    // let img = "none";
    // if (this.area.backgroundImg) {
    //   img = `url(${this.area.backgroundImg})`;
    // }
    let img = `url(${this.area.backgroundImg})`;
    console.log(img);
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

  dragThumbnail(ev) {
    ev.dataTransfer.setData("Text", ev.target.id);
  }

  areaDragdrop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("Text");

    let _left = ev.pageX - ev.target.offsetLeft - 100 + "px";
    let _top = ev.pageY + "px";

    let _chartAreaComponent = this.cfr.resolveComponentFactory(ChartAreaComponent);
    let _chart = this.dynamicDiv.createComponent(_chartAreaComponent);
    let _chartInstance = _chart.instance;
    _chartInstance.location = {
      left: _left,
      top: _top
    }
    _chartInstance.optionInfo.subscribe(x => {
      this.chartOptionInit(x);
    })
    _chartInstance.contextMenu.subscribe(x => {
      this.contextMenuOperate(x);
    })
    this.allChart.push(_chart);
  }

  allowDrop(ev) {
    ev.preventDefault();
  }

  contextMenuOperate(_menuOptions) {
    let _type = _menuOptions.type;
    let _options = _menuOptions.options;
    let _event = _menuOptions.event;
    if (_type === "cut") {
      this.cutBoard = _options;
      this.copyBoard = null;
    }
    else if (_type === "copy") {
      this.cutBoard = null;
      this.copyBoard = _options;
    }
    else if (_type === "paste") {
      this.doPaste(_event);
    }
    else if (_type === "delete") {
      let _chart = this.allChart.find(x => x.instance.inputOptions === _options);
      _chart.destroy();

      let _index = this.allChart.indexOf(x => x.instance.inputOptions === _options);
      if (_index > -1) {
        this.allChart.splice(_index, 1);
      }

      if (this.currentSelecteChart === _chart) {
        this.currentSelecteChart = null;
      }
    }
  }

  chartOptionInit(_option: ChartOptions) {
    this.controlOptions = Object.assign({}, _option);
    this.currentSelecteChart = this.allChart.find(x => x.instance.inputOptions === _option);

    this.allChart.forEach(x => {
      if (x.instance.inputOptions != _option) {
        x.instance.isChartSelected = false;
      }
    })
  }

  chartChange() {
    this.currentSelecteChart.instance.inputOptions = this.controlOptions;
    this.currentSelecteChart.instance.checkAndLoadChart();
  }

  chartReturn() {
    this.currentSelecteChart = null;
    this.allChart.forEach(x => {
      x.instance.isChartSelected = false;
    })
  }

  mainContextMenuClick(_$event, _type) {
    let _event = _$event.event;
    if (_type === "paste") {
      this.doPaste(_event);
    }
  }

  doPaste(_event) {
    if (this.copyBoard != null) {
      let centerDiv = document.getElementById("centerId");
      let _left = _event.pageX - centerDiv.offsetLeft - 100 + "px";
      let _top = _event.pageY + "px";

      let _chartAreaComponent = this.cfr.resolveComponentFactory(ChartAreaComponent);
      let _chart = this.dynamicDiv.createComponent(_chartAreaComponent);
      let _instance = _chart.instance;
      _instance.location = {
        left: _left,
        top: _top
      }
      _instance.inputOptions = Object.assign({}, this.copyBoard);
      _instance.optionInfo.subscribe(x => {
        this.chartOptionInit(x);
      })
      _instance.contextMenu.subscribe(x => {
        this.contextMenuOperate(x);
      })
      this.allChart.push(_chart);
      this.copyBoard = null;
    } else if (this.cutBoard != null) {
      let centerDiv = document.getElementById("centerId");
      let _left = _event.pageX - centerDiv.offsetLeft - 100 + "px";
      let _top = _event.pageY + "px";

      let _chart = this.allChart.find(x => x.instance.inputOptions === this.cutBoard);
      let _instance = _chart.instance;
      _instance.location = {
        left: _left,
        top: _top
      }
      _instance.inputOptions = this.cutBoard;
      _instance.optionInfo.subscribe(x => {
        this.chartOptionInit(x);
      })
      _instance.contextMenu.subscribe(x => {
        this.contextMenuOperate(x);
      })
      this.cutBoard = null;
    }
  }

}
