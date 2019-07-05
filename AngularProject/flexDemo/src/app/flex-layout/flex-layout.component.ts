import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-flex-layout',
    templateUrl: './flex-layout.component.html',
    styleUrls: ['./flex-layout.component.less']
})
export class FlexLayoutComponent implements OnInit {

    constructor() { }

    // tab页
    tabs = [
        {
            title: '容器的属性',
            key: 'containerProperty'
        }, {
            title: '项目的属性',
            key: 'itemProperty'
        }
    ];

    ngOnInit() {
    }

}
