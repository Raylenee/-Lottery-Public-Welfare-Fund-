let myChart3 = echarts.init(document.getElementById('bingtu'))
setTimeout(function () {
    option = {
        legend: {},
        tooltip: {
            trigger: 'axis',
            showContent: false
        },
        dataset: {
            source: [
                ['product', '2016', '2017', '2018'],
                ['老年人福利类项目', 4516, 4029, 4505],
                ['残疾人福利类项目',724, 1697, 1086],
                ['儿童福利类项目', 1504, 2293, 2382],
                ['社会公益类项目', 778, 453, 467]
            ]
        },
        xAxis: {type: 'category'},
        yAxis: {gridIndex: 0},
        grid: {top: '55%'},
        series: [
            {type: 'line', smooth: true, seriesLayoutBy: 'row'},
            {type: 'line', smooth: true, seriesLayoutBy: 'row'},
            {type: 'line', smooth: true, seriesLayoutBy: 'row'},
            {type: 'line', smooth: true, seriesLayoutBy: 'row'},
            {
                type: 'pie',
                id: 'pie',
                radius: '30%',
                center: ['50%', '25%'],
                label: {
                    formatter: '{b}: {@2016} ({d}%)'
                },
                encode: {
                    itemName: 'product',
                    value: '2016',
                    tooltip: '2016'
                }
            }
        ]
    };

    myChart3.on('updateAxisPointer', function (event) {
        var xAxisInfo = event.axesInfo[0];
        if (xAxisInfo) {
            var dimension = xAxisInfo.value + 1;
            myChart3.setOption({
                series: {
                    id: 'pie',
                    label: {
                        formatter: '{b}: {@[' + dimension + ']} ({d}%)'
                    },
                    encode: {
                        value: dimension,
                        tooltip: dimension
                    }
                }
            });
        }
    });
    myChart3.setOption(option);
});