import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-item-prop',
    templateUrl: './item-prop.component.html',
    styleUrls: ['./item-prop.component.less']
})
export class ItemPropComponent implements OnInit {
    currentModel = 'null';

    constructor() { }

    ngOnInit() {
    }

}
