<<<<<<< HEAD
let myChart = echarts.init(document.getElementById('szqu'));
    setTimeout(function () {
    	option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data:['福田区','罗湖区','盐田区','南山区','宝安区','龙岗区','龙华区','坪山区','光明区','大鹏新区']
    },
    series: [
        {
            name:'2019年深圳各区福利彩票公益金分配',
            type:'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:5546.37, name:'福田区'},
                {value:4105.26, name:'罗湖区'},
                {value:901.88, name:'盐田区'},
                {value:4478.21, name:'南山区'},
                {value:6092.38, name:'宝安区'},
                {value:4907.87, name:'龙岗区'},
                {value:2992.35, name:'龙华区'},
                {value:1230.89, name:'坪山区'},
                {value:1465.79, name:'光明区'},
                {value:828.10, name:'大鹏新区'}
            ]
        }
    ]
};
=======
let myChart = echarts.init(document.getElementById('szqu'));
    setTimeout(function () {
    	option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data:['福田区','罗湖区','盐田区','南山区','宝安区','龙岗区','龙华区','坪山区','光明区','大鹏新区']
    },
    series: [
        {
            name:'2019年深圳各区福利彩票公益金分配',
            type:'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:5546.37, name:'福田区'},
                {value:4105.26, name:'罗湖区'},
                {value:901.88, name:'盐田区'},
                {value:4478.21, name:'南山区'},
                {value:6092.38, name:'宝安区'},
                {value:4907.87, name:'龙岗区'},
                {value:2992.35, name:'龙华区'},
                {value:1230.89, name:'坪山区'},
                {value:1465.79, name:'光明区'},
                {value:828.10, name:'大鹏新区'}
            ]
        }
    ]
};
>>>>>>> 23670be5918d43d4e69317b67d79b2c0e1cbcd99
     myChart.setOption(option);