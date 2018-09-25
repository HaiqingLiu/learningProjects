import { Component, Input, OnChanges, OnInit, SimpleChanges, Output, EventEmitter, ViewChild } from '@angular/core';
import { ChartOptions } from '../main/bean/chart.class';
import { Subject } from 'rxjs';
import { ContextMenuComponent } from 'ngx-contextmenu';

@Component({
  selector: 'app-chart-area',
  templateUrl: './chart-area.component.html',
  styleUrls: ['./chart-area.component.css']
})
export class ChartAreaComponent implements OnInit, OnChanges {
  inputOptions: ChartOptions;
  optionInfo: Subject<ChartOptions> = new Subject();
  contextMenu: Subject<Object> = new Subject();
  location = { left: "", top: "" };
  isChartSelected: boolean = false;
  _chartOptions;

  @ViewChild(ContextMenuComponent) public basicMenu: ContextMenuComponent;
  constructor() { }

  ngOnInit() {
    this.checkAndLoadChart();

  }

  ngOnChanges(changes: SimpleChanges) {
    this.checkAndLoadChart();
  }

  get chartStyle() {
    return {
      left: this.location.left,
      top: this.location.top
    }
  }

  checkAndLoadChart() {
    if (!this.inputOptions) {
      this.inputOptions = {
        xData: "Mon, Tue, Wed, Thu, Fri",
        yData: "20, 32, 91, 34, 29",
        color: "#ccc"
      }
    }
    this.reloadChart();
  }

  private reloadChart() {
    let _data = this.getData(this.inputOptions);
    let _color = this.getColor(this.inputOptions) || "";

    this._chartOptions = {
      xAxis: {
        type: 'category',
        data: _data.xData
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        data: _data.yData,
        type: 'line'
      }],
      backgroundColor: _color
    }
  }

  selectChart() {
    this.isChartSelected = true;
    this.optionInfo.next(this.inputOptions);
  }

  private getData(_option: ChartOptions) {
    let xDataArray = _option.xData.split(",");
    let yDataArray = _option.yData.split(",");

    let len = Math.min(xDataArray.length, yDataArray.length);

    let xDataFinal = xDataArray.slice(0, len);
    let yDataFinal = yDataArray.slice(0, len);

    return {
      xData: xDataFinal,
      yData: yDataFinal.map(x => +x)
    }

  }

  private getColor(_option: ChartOptions) {
    if (typeof _option.color === "string") {
      return _option.color;
    }
    return "";
  }

  contextMenuClick(_$event, _type) {
    this.contextMenu.next({
      "type": _type,
      "options": this.inputOptions,
      "event": _$event.event
    });
  }

}
