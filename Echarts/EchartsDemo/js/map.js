$(function () {
    var mapDataAll = mapDatas;
    data = mapDataAll.filter(function(data){
        return data.type_total == '医院合计' && data.type_nature=='公立';
    })

    var geoCoordMap = {
        '北京': [116.46, 39.92],
        '天津': [117.2, 39.13],
        '河北': [114.48, 38.03],
        '山西': [112.550863589, 37.890277054],
        '内蒙古': [109.846238532, 40.6471194257],
        '辽宁': [123.432790922, 41.8086447835],
        '吉林': [126.564543989, 43.8719883344],
        '黑龙江': [126.657716855, 45.7732246332],
        '上海': [121.48, 31.22],
        '江苏': [118.778074408, 32.0572355018],
        '浙江': [120.219375416, 30.2592444615],
        '安徽': [117.282699092, 31.8669422607],
        '福建': [118.103886046, 24.4892306125],
        '江西': [115.893527546, 28.6895780001],
        '山东': [120.384428184, 36.1052149013],
        '河南': [113.486804058, 34.157183768],
        '湖北': [114.316200103, 30.5810841269],
        '湖南': [110.481620157, 29.1248893532],
        '广东': [113.307649675, 23.1200491021],
        '广西': [110.260920147, 25.262901246],
        '海南': [109.522771281, 18.2577759149],
        '重庆': [106.530635013, 29.5446061089],
        '四川': [104.067923463, 30.6799428454],
        '贵州': [106.709177096, 26.6299067414],
        '云南': [102.714601139, 25.0491531005],
        '西藏': [91.111890896, 29.6625570621],
        '陕西': [109.500509757, 36.6033203523],
        '甘肃': [103.823305441, 36.064225525],
        '青海': [101.76792099, 36.640738612],
        '宁夏': [106.206478608, 38.5026210119],
        '新疆': [87.5649877411, 43.8403803472]
    };

    var convertData = function (data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var geoCoord = geoCoordMap[data[i].area];
            if (geoCoord) {
                res.push({
                    name: data[i].area,
                    value: geoCoord.concat(data[i].value)
                });
            }
        }
        return res;
    };

    var option4 = {
        // backgroundColor: '#404a59',
        backgroundColor: '#DDDDDD', //地图背景色，灰色
        title: {
            text: '全国各省医院分布',
            // subtext: 'data from PM25.in',
            // sublink: 'http://www.pm25.in',
            x: 'center',
            textStyle: {
                // color: '#fff'
            }
        },
        tooltip: {
            trigger: 'item',
            formatter: function (params) {
                return params.name + ' : ' + params.value[2];
            }
        },
        legend: {
            orient: 'vertical',
            y: 'bottom',
            x: 'right',
            data: ['全国各省医院数量'],
            textStyle: {
                // color: '#fff'  //右下角散点文字说明颜色
            }
        },
        visualMap: {
            min: 0,
            max: 900,//左下角颜色渐变器范围设定
            calculable: true,
            inRange: {
                // color: ['#50a3ba', '#eac736', '#d94e5d']
                color: ['#FFC8B4', '#FF5511', '#AA0000']
            },
            textStyle: {
                color: '#fff'
            }
        },
        geo: {
            map: 'china',
            label: {
                emphasis: {
                    show: false
                }
            },
            itemStyle: {
                normal: {
                    // areaColor: '#323c48', // 中国地图颜色
                    borderColor: '#111'
                },
                emphasis: {
                    // areaColor: '#2a333d'
                    areaColor: '#FFFF33' //鼠标移上去每个省高亮颜色
                }
            }
        },
        series: [
            {
                name: '全国各省医院数量',
                type: 'scatter',
                coordinateSystem: 'geo',
                data: convertData(data),
                symbolSize: 12,
                label: {
                    normal: {
                        // formatter: '{b}',
                        // position: 'right',
                        // show: true
                    },
                    emphasis: {
                        show: false
                    }
                },
                itemStyle: {
                    emphasis: {
                        borderColor: '#fff',
                        borderWidth: 1
                    }
                }
            }
        ]
    }

    // 基于准备好的dom，初始化echarts实例
    var myChart4 = echarts.init(document.getElementById('main4'));

    // 使用刚指定的配置项和数据显示图表。
    myChart4.setOption(option4);

    $("#hospLevel").change(function () {
        searchMap();
    });
    $("#hospNature").change(function () {
        searchMap();
    });
    $("#hospOrg").change(function () {
        searchMap();
    });

    function searchMap(){
        var this_data = [];
        var hospLevelValue = $("#hospLevel option:selected").val();
        var hospNatureValue = $("#hospNature option:selected").val();
        var hospOrgValue = $("#hospOrg option:selected").val();
        this_data = mapDataAll.filter(function (data) {
            if(hospLevelValue == '' && hospOrgValue == ''){
                return data.type_total == '医院合计' && data.type_nature==hospNatureValue;
            }else{
                if(hospLevelValue != ''){
                    return data.type_grade == hospLevelValue && data.type_nature==hospNatureValue;
                }
                if(hospOrgValue != ''){
                    return data.type_org == hospOrgValue && data.type_nature==hospNatureValue;
                }
            }
        })
        if(hospLevelValue != '' && hospOrgValue != ''){
            this_data = [];        
        }
        changeForMap(this_data)
    }
    function changeForMap(data) {
        var optionMap = {
            series: [
                {
                    name: '全国各省医院数量',
                    type: 'scatter',
                    coordinateSystem: 'geo',
                    data: convertData(data),
                    symbolSize: 12,
                    label: {
                        normal: {
                            // formatter: '{b}',
                            // position: 'right',
                            // show: true
                        },
                        emphasis: {
                            show: false
                        }
                    },
                    itemStyle: {
                        emphasis: {
                            borderColor: '#fff',
                            borderWidth: 1
                        }
                    }
                }
            ]
        }
        myChart4.setOption(optionMap);
    }

})