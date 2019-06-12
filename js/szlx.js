// 基于准备好的dom，初始化echarts实例
var myChart5 = echarts.init(document.getElementById("szlx"));
var app = {};
option = null;
app.title = '嵌套环形图';

option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data:['直达','营销广告','搜索引擎','邮件营销','联盟广告','视频广告','百度','谷歌','必应','其他']
    },
    series: [
        {
            name:'深圳市福利彩票公益金资助项目及分配情况',
            type:'pie',
            selectedMode: 'single',
            radius: [0, '30%'],

            label: {
                normal: {
                    position: 'inner'
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:5570.46, name:'公益事业类'},
                {value:4519.23, name:'对特殊困难群体提供的福利事业'},
                {value:4348.48, name:'实施于全体社会成员的社会事业'},
                {value:934.96, name:'残疾人事业类'},
                {value:906, name:'其他类'},
                {value:95.85, name:'基建类'},
                {value:70.8, name:'社区类服务'}

            ]
        },
        {
            name:'公益金流向',
            type:'pie',
            radius: ['40%', '55%'],
            label: {
                normal: {
                    formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                    backgroundColor: '#eee',
                    borderColor: '#aaa',
                    borderWidth: 1,
                    borderRadius: 4,
                    // shadowBlur:3,
                    // shadowOffsetX: 2,
                    // shadowOffsetY: 2,
                    // shadowColor: '#999',
                    // padding: [0, 7],
                    rich: {
                        a: {
                            color: '#999',
                            lineHeight: 22,
                            align: 'center'
                        },
                        // abg: {
                        //     backgroundColor: '#333',
                        //     width: '100%',
                        //     align: 'right',
                        //     height: 22,
                        //     borderRadius: [4, 4, 0, 0]
                        // },
                        hr: {
                            borderColor: '#aaa',
                            width: '100%',
                            borderWidth: 0.5,
                            height: 0
                        },
                        b: {
                            fontSize: 16,
                            lineHeight: 33
                        },
                        per: {
                            color: '#eee',
                            backgroundColor: '#334455',
                            padding: [2, 4],
                            borderRadius: 2
                        }
                    }
                }
            },
            data:[
                {value:5331.45, name:'市民政局'},
                {value:1128.8, name:'市残联'},
                {value:557.08, name:'老人颐养院+市老龄办'},
                {value:47.4, name:'军休中心'},
                {value:589.4, name:'市救助管理站'},
                {value:25, name:'市捐助中心'},
                {value:400, name:'市妇联'},
                {value:1936.72, name:'市残联'}
            ]
        }
    ]
};;
if (option && typeof option === "object") {
    myChart5.setOption(option, true);
}