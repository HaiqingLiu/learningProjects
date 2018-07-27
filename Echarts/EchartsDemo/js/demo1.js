$(function () {
    $('#button1').click(function () {
        $('#div1').attr('hidden', false)
        $('#div2').attr('hidden', true)
    });
    $('#button2').click(function () {
        $('#div1').attr('hidden', true)
        $('#div2').attr('hidden', false)
    });

    /******************************************医疗机构数量、等级、公立/民营***********************************/
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('main1'));

    // 指定图表的配置项和数据
    var option = {
        color: ['#0000FF ', '#FF0000'],
        title: {
            text: '医疗机构数量、等级、公立/民营'
        },
        tooltip: {},
        legend: {
            data: ['公立', '民营'],
            left: '600px'
        },
        xAxis: {
            data: ["三级医院", "二级医院", "一级医院"]
        },
        yAxis: {
            max: 20000,
            splitNumber: 10
        },
        series: [{
            name: '公立',
            type: 'bar',
            barWidth: 40,
            barGap: '20%', // Make series be overlap
            data: [5916, 18348, 9762],
            label: {
                show: true
            }
        },
        {
            name: '民营',
            type: 'bar',
            barWidth: 40,
            data: [453, 4134, 16515],
            label: {
                show: true
            }
        }
        ]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    /******************************************医疗机构数量、等级、公立/民营/**********************************/


    /*********************************************各类医院数据**********************************************/
    // 基于准备好的dom，初始化echarts实例
    var myChart2 = echarts.init(document.getElementById('main2'));

    // 指定图表的配置项和数据
    var option2 = {
        color: ['#0000FF ', '#FF0000'],
        title: {
            text: '各类医院数据'
        },
        tooltip: {},
        legend: {
            data: ['公立', '民营'],
            left: '600px'
        },
        xAxis: {
            data: ["综合医院", "中医医院", "中西医结合医院", "民族医院", "专科医院", "护理院"]
        },
        yAxis: {
            max: 30000,
            splitNumber: 6
        },
        series: [
            {
                name: '公立',
                type: 'bar',
                barWidth: 40,
                barGap: '15%', // Make series be overlap
                data: [25611, 7005, 429, 618, 5469, 75],
                label: {
                    show: true
                }
            },
            {
                name: '民营',
                type: 'bar',
                barWidth: 40,
                data: [26679, 2796, 909, 141, 12600, 0],
                label: {
                    show: true
                }
            }
        ]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart2.setOption(option2);
    /*********************************************各类医院数据/**********************************************/


    /*********************************************全国历年医院数量及增速**************************************/
    // 基于准备好的dom，初始化echarts实例
    var myChart3 = echarts.init(document.getElementById('main3'));
    var hospData = {
        'hospZonghe': [11834, 12716, 12599, 12900, 12982, 13120, 13372, 13119, 13364, 13681, 14328, 15021,
            15887, 16524, 17430],
        'hospZhongyi': [2478, 2492, 2518, 2611, 2620, 2665, 2720, 2688, 2728, 2778, 2831, 2889, 3015, 3115, 3267],
        'hospZhuangke': [1576, 2237, 2271, 2492, 2682, 3022, 3282, 3437, 3716, 3956, 4283, 4665, 5127, 5478, 6023],
        'GR': ['', 10.2, -0.4, 3.5, 1.7, 2.9, 3.1, -0.7, 2.9, 3.1, 5.1, 5.4, 6.6, 4.7, 6.7],
        'GRZonghe': ['', 7.5, -0.9, 2.4, 0.6, 1.1, 1.9, -1.9, 1.9, 2.4, 4.7, 4.8, 5.8, 4.0, 5.5],
        'GRZhongyi': ['', 0.6, 1.0, 3.7, 0.3, 1.7, 2.1, -1.2, 1.5, 1.8, 1.9, 2.0, 4.4, 3.3, 4.9],
        'GRZhuanke': ['', 41.9, 1.5, 9.7, 7.6, 12.7, 8.6, 4.7, 8.1, 6.5, 8.3, 8.9, 9.9, 6.8, 9.9]
    }

    // 指定图表的配置项和数据
    var option3 = {
        color: ['#FF0000 ', '#00FF00', '#7744FF', '#007799'],
        title: {
            text: '全国历年医院数量及增速'
        },
        tooltip: {},
        legend: {
            data: ['综合医院', '中医医院', '专科医院', '总GR'],
            left: '600px'
        },
        xAxis: {
            data: [2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013,
                2014, 2015]
        },
        yAxis: [{
            name: '医院数量',
            max: 30000,
            splitNumber: 6,
            min: 0,
            // splitLine: {//轴线
            //     show: false 
            // }
        },
        {
            name: '增速',
            max: 50,
            splitNumber: 7,
            min: -20,
            type: 'value',
            axisLabel: {
                show: true,
                interval: 'auto',
                formatter: '{value} %'
            },
            splitLine: {//轴线
                show: false
            }
        }
        ],
        series: [
            {
                name: '综合医院',
                type: 'bar',
                barWidth: 40,
                barGap: '-100%', // Make series be overlap
                data: hospData['hospZonghe'],
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'insideRight'
                    }
                },
            },
            {
                name: '中医医院',
                type: 'bar',
                barWidth: 40,
                barGap: '-100%', // Make series be overlap
                data: hospData['hospZhongyi'],
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'insideRight'
                    }
                },
            },
            {
                name: '专科医院',
                type: 'bar',
                barWidth: 40,
                barGap: '-100%', // Make series be overlap
                data: hospData['hospZhuangke'],
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'insideRight'
                    }
                },
            },
            {
                name: '总GR',
                type: 'line',
                yAxisIndex: 1,
                data: hospData['GR'],
                label: {
                    show: true,
                    position: 'top',
                    // formatter: '{b}\n{c}%'  
                    formatter: '{c}%'
                },
                tooltip: {
                    formatter: '{a}\t{c}%'
                }
            }
        ]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart3.setOption(option3);

    var myChart3_2 = echarts.init(document.getElementById('main3_2'));
    var option3_2 = {
        // color: ['#FF0000 ', '#00FF00', '#7744FF', '#007799'],
        title: {
            text: '全国历年医院数量及增速'
        },
        tooltip: {},
        legend: {
            data: ['综合医院', 'GR'],
            left: '600px'
        },
        xAxis: {
            data: [2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013,
                2014, 2015]
        },
        yAxis: [{
            name: '医院数量',
            max: 30000,
            splitNumber: 6,
            min: 0,
            // splitLine: {//轴线
            //     show: false 
            // }
        },
        {
            name: '增速',
            max: 50,
            splitNumber: 7,
            min: -20,
            type: 'value',
            axisLabel: {
                show: true,
                interval: 'auto',
                formatter: '{value} %'
            },
            splitLine: {//轴线
                show: false
            }
        }
        ],
        series: [
            {
                name: '综合医院',
                type: 'bar',
                barWidth: 40,
                barGap: '-100%', // Make series be overlap
                data: hospData['hospZonghe'],
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'insideRight'
                    }
                },
            },
            {
                name: 'GR',
                type: 'line',
                yAxisIndex: 1,
                data: hospData['GRZonghe'],
                label: {
                    show: true,
                    position: 'top',
                    // formatter: '{b}\n{c}%'  
                    formatter: '{c}%'
                },
                tooltip: {
                    formatter: '{a}\t{c}%'
                }
            }
        ]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart3_2.setOption(option3_2);
    $("#main3_2").attr("hidden", true)

    $("#hospOrgType").change(function () {
        search();
    });

    function search() {
        var hospOrgTypeValue = $("#hospOrgType option:selected").val();
        if (hospOrgTypeValue == '') {
            myChart3.setOption(option3);
            $("#main3").attr("hidden", false)
            $("#main3_2").attr("hidden", true)
        }
        if (hospOrgTypeValue == '综合医院') {
            onChangeForClick(['综合医院', 'GR'], [hospData['hospZonghe'], hospData['GRZonghe']]);
        }
        if (hospOrgTypeValue == '中医医院') {
            onChangeForClick(['中医医院', 'GR'], [hospData['hospZhongyi'], hospData['GRZhongyi']]);
        }
        if (hospOrgTypeValue == '专科医院') {
            onChangeForClick(['专科医院', 'GR'], [hospData['hospZhuangke'], hospData['GRZhuanke']]);
        }

    }

    function onChangeForClick(legendData, seriesData) {
        var optionSearch = {
            legend: {
                data: legendData
            },
            series: [
                {
                    name: legendData[0],
                    type: 'bar',
                    barWidth: 40,
                    barGap: '-100%', // Make series be overlap
                    data: seriesData[0],
                    stack: '总量',
                    label: {
                        normal: {
                            show: true,
                            position: 'insideRight'
                        }
                    },
                },
                {
                    name: legendData[1],
                    type: 'line',
                    yAxisIndex: 1,
                    data: seriesData[1],
                    label: {
                        show: true,
                        position: 'top',
                        // formatter: '{b}\n{c}%'  
                        formatter: '{c}%'
                    },
                    tooltip: {
                        formatter: '{a}\t{c}%'
                    }
                }
            ]
        }
        myChart3_2.setOption(optionSearch)
        $("#main3").attr("hidden", true)
        $("#main3_2").attr("hidden", false)
    }
    /*********************************************全国历年医院数量及增速/*************************************/
})