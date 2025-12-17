Highcharts.chart('container', {

    title: {
        text: '日韓越三國來台旅客人數統計圖',
        align: 'left'
    },

    subtitle: {
        text: '年度：2015-2024',
        align: 'left'
    },

    yAxis: {
        title: {
            text: '旅客人數'
        }
    },

    xAxis: {
        accessibility: {
            rangeDescription: '年度：2015-2024'
        }
    },

    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 2015
        }
    },
    

   // 數據系列
                series: [{
                    name: '日本 (Japan)',
                    data: [
                        1627229, 1895702, 1898854, 1969151, 2167952,
                        269659, 10056, 87616, 928235, 1319592
                    ]
                }, {
                    name: '韓國 (Korea)',
                    data: [
                        658757, 884397, 1054708, 1019441, 1242598,
                        178911, 3300, 51748, 744727, 1003086
                    ]
                }, {
                    name: '越南 (Vietnam)',
                    data: [
                        146380, 196636, 383329, 490774, 405396,
                        110882, 24935, 134818, 382529, 370548
                    ]
                }],


    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

});