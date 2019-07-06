import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-container-prop',
    templateUrl: './container-prop.component.html',
    styleUrls: ['./container-prop.component.less']
})
export class ContainerPropComponent implements OnInit {

    constructor() { }
    containerPropList = [
        {
            id: 1,
            propName: 'flex-direction',
            description: 'flex-direction属性决定主轴的方向（即项目的排列方向）。', // 描述
            prop: 'row', // 实时属性值，默认属性值为'row'
            propValues: [
                ['row', '（默认值） 主轴为水平方向，起点在左端。'],
                ['row-reverse', '主轴为水平方向，起点在右端。'],
                ['column', '主轴为垂直方向，起点在上沿。'],
                ['column-reverse', '主轴为垂直方向，起点在下沿。'],
            ]
        },
        {
            id: 2,
            propName: 'flex-warp',
            description: '默认情况下，项目都排在一条线（又称“轴线”）上。flex-wrap属性定义，如果一条轴线排不下，如何换行。', // 描述
            prop: 'nowrap', // 实时属性值，默认属性值为'nowrap'
            propValues: [
                ['nowrap', '（默认值） 不换行'],
                ['wrap', '换行，第一行在上方。'],
                ['wrap-reverse', '换行，第一行在下方'],
            ]
        },
        {
            id: 3,
            propName: 'justify-content',
            description: 'justify-content属性定义了项目在主轴（x轴）上的对齐方式。', // 描述
            prop: 'flex-start', // 实时属性值，默认属性值为'flex-start'
            propValues: [
                ['flex-start', '（默认值） 左对齐'],
                ['flex-end', '右对齐'],
                ['center', '居中（水平居中）'],
                ['space-between', '两端对齐，项目之间的间隔都相等。'],
                ['space-around', '每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。'],
            ]
        },
        {
            id: 4,
            propName: 'align-items',
            description: 'align-items属性定义项目在交叉轴（y轴）上如何对齐。', // 描述
            prop: 'flex-start', // 实时属性值，默认属性值为'stretch'
            propValues: [
                ['flex-start', '交叉轴的起点对齐。'],
                ['flex-end', '交叉轴的终点对齐。'],
                ['center', '交叉轴的中点对齐（垂直居中）。'],
                ['stretch', '（默认值） 如果项目（容器内item）未设置高度或设为auto,将占满整个容器的高度。'],
                ['baseline', '项目的第一行文字的基线对齐。'],
            ]
        },
        {
            id: 5,
            propName: 'align-content',
            description: 'align-content属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。', // 描述
            prop: 'flex-start', // 实时属性值，默认属性值为'stretch'
            propValues: [
                ['flex-start', '与交叉轴（y轴）的起点对齐。'],
                ['flex-end', '与交叉轴（y轴）的终点对齐。'],
                ['center', '与交叉轴（y轴）的中点对齐。'],
                ['space-between', '与交叉轴（y轴）陵端对齐，轴线之间的间隔平均分布。'],
                ['space-around', '每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。'],
                ['stretch', '（默认值） 轴线占满整个交叉轴（y轴）。'],
            ]
        },
    ];

    ngOnInit() {
    }

    get flexContainer() {
        return {
            'flex-direction': this.containerPropList[0].prop,
            'flex-wrap': this.containerPropList[1].prop,
            'justify-content': this.containerPropList[2].prop,
            'align-items': this.containerPropList[3].prop,
            'align-content': this.containerPropList[4].prop
        };
        // return {
        //     'flex-direction': this.flexDirection,
        //     'flex-wrap': this.flexWrap,
        //     'justify-content': this.justifyContent,
        //     'align-items': this.alignItems,
        //     'align-content': this.alignContent
        // };
    }

    radioValChange = (e, index) => {
        this.containerPropList[index].prop = e; // 修改属性值
    }

}
