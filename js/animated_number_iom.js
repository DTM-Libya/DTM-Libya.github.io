
//ANIMATED FIGURES
	    var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
		$('#arrivals').animateNumber(
		{
 
		number: 95097,
		numberStep: comma_separator_number_step
		},
		10000
		);

		$('#deaths').animateNumber(
		{
		
		number: 2231,
		numberStep: comma_separator_number_step
		},
		10000
		);
		$('#returnees').animateNumber(
		{
		
		number: 40000,
		numberStep: comma_separator_number_step
		},
		10000
		);
		
//bar chart origins //

//colunn chart, nationalities


Highcharts.chart('origins_mg', {
    exporting: { enabled: false },
	credits: {enabled: false},
      chart: {
        type: 'bar',
		backgroundColor:'transparent' ,
    },
    title: {
        text: "Nationalities "
    },
    subtitle: {
        text: ''
    },
    xAxis: {
        categories: ['Egypt', 'Niger', 'Chad', 'Sudan','Ghana'],
        title: {
            text: null
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: '',
            align: 'high'
        },
        labels: {
            overflow: 'justify'
        }
    },
    tooltip: {
        valueSuffix: ''
    },
    plotOptions: {
        bar: {
            dataLabels: {
                enabled: true,
                format: '{point.name}',
                style: {
                    color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                }
            }
        }
    },
    legend: {
        enabled: false
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'No. of People',
       
		 data: [{
            name: '17',
            y: 107549
        }, {
            name: '17',
            y: 103444
           
        }, {
            name: '9',
            y: 87878
        }, {
            name: '1',
            y: 57752
        },{
		    name: '71',
            y: 53268
        }
		
			]
		
    }]
});

//colunn chart, nationalities


Highcharts.chart('locations', {
exporting: { enabled: false },
	credits: {enabled: false},
      chart: {
        type: 'bar',
		backgroundColor:'transparent' ,
    },
    title: {
        text: "Main Locations "
    },
    subtitle: {
        text: null
    },
    xAxis: {
        categories: ['Tripoli', 'Al Marqab', 'Misratah', 'Ajdabiya'],
        title: {
            text: null
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: '',
            align: 'high'
        },
        labels: {
            overflow: 'justify'
        }
    },
    tooltip: {
        valueSuffix: ''
    },
    plotOptions: {
        bar: {
            dataLabels: {
                enabled: true,
                format: '{point.name}',
                style: {
                    color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                }
            }
        }
    },
    legend: {
        enabled: false
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'No. of People',
       
		 data: [{
            name: '17',
            y: 107549
        }, {
            name: '17',
            y: 103444
           
        }, {
            name: '9',
            y: 87878
        }, {
            name: '1',
            y: 57752
        }
		
			]
		
    }]
});
// Age categories
var categories = [
    '0-4', '5-9', '10-14', '15-19',
    '20-24', '25-29', '30-34', '35-39', '40-44',
    '45-49', '50-54', '55-59', '60-64', '65-69',
    '70-74', '75-79', '80-84', '85-89', '90-94',
    '95-99', '100 + '
];

Highcharts.chart('pyramid', {
    
	exporting: { enabled: false },
	credits: {enabled: false},

   chart: {
        type: 'bar',
		backgroundColor:'transparent' ,
    },
    title: {
        text: 'Population Pyramid'
    },
    subtitle: {
        text: ''
    },
    xAxis: [{
        categories: categories,
        reversed: false,
        labels: {
            step: 1
        }
    }, { // mirror axis on right side
        opposite: true,
        reversed: false,
        categories: categories,
        linkedTo: 0,
        labels: {
            step: 1
        }
    }],
    yAxis: {
        title: {
            text: null
        },
        labels: {
            formatter: function () {
                return Math.abs(this.value) + '%';
            }
        }
    },

    plotOptions: {
        series: {
            stacking: 'normal'
        }
    },

    tooltip: {
        formatter: function () {
            return '<b>' + this.series.name + ', age ' + this.point.category + '</b><br/>' +
                'Population: ' + Highcharts.numberFormat(Math.abs(this.point.y), 0);
        }
    },

    series: [{
        name: 'Male',
        data: [-2, -2, -1, -3, -5, -3.1, -3.2,
            -3.0, -3.2, -4.3, -4.4, -3.6, -3.1, -2.4,
            -2.5, -2.3, -1.2, -0.6, -0.2, -0.0, -0.0]
    }, {
        name: 'Female',
        data: [2.1, 2.0, 2.2, 2.4, 2.6, 3.0, 3.1, 2.9,
            3.1, 4.1, 4.3, 3.6, 3.4, 2.6, 2.9, 2.9,
            1.8, 1.2, 0.6, 0.1, 0.0]
    }]
});

//colunn chart, nationalities


Highcharts.chart('origins_idp', {
    exporting: { enabled: false },
	credits: {enabled: false},
      chart: {
        type: 'bar',
		backgroundColor:'transparent' ,
    },
    title: {
        text: "Nationalities "
    },
    subtitle: {
        text: ''
    },
    xAxis: {
        categories: ['Egypt', 'Niger', 'Chad', 'Sudan','Ghana'],
        title: {
            text: null
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: '',
            align: 'high'
        },
        labels: {
            overflow: 'justify'
        }
    },
    tooltip: {
        valueSuffix: ''
    },
    plotOptions: {
	
        bar: {
            dataLabels: {
                enabled: true,
                format: '{point.name}',
                style: {
                    color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                }
            }
        }
    },
    legend: {
        enabled: false
    },
    credits: {
        enabled: false
    },
    series: [{
		color:'#b35479',
        name: 'No. of People',
       
		 data: [{
            name: '17',
            y: 107549
        }, {
            name: '17',
            y: 103444
           
        }, {
            name: '9',
            y: 87878
        }, {
            name: '1',
            y: 57752
        },{
		    name: '71',
            y: 53268
        }
		
			]
		
    }]
});

//colunn chart, nationalities


Highcharts.chart('locations_idp', {
exporting: { enabled: false },
	credits: {enabled: false},
      chart: {
        type: 'bar',
		backgroundColor:'transparent' ,
    },
    title: {
        text: "Main Locations "
    },
    subtitle: {
        text: null
    },
    xAxis: {
        categories: ['Tripoli', 'Al Marqab', 'Misratah', 'Ajdabiya'],
        title: {
            text: null
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: '',
            align: 'high'
        },
        labels: {
            overflow: 'justify'
        }
    },
    tooltip: {
        valueSuffix: ''
    },
    plotOptions: {
	
        bar: {
            dataLabels: {
                enabled: true,
                format: '{point.name}',
                style: {
                    color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                }
            }
        }
    },
    legend: {
        enabled: false
    },
    credits: {
        enabled: false
    },
    series: [{
		color:'#b35479',
        name: 'No. of People',
       
		 data: [{
            name: '17',
            y: 107549
        }, {
            name: '17',
            y: 103444
           
        }, {
            name: '9',
            y: 87878
        }, {
            name: '1',
            y: 57752
        }
		
			]
		
    }]
});
// Age categories
var categories = [
    '0-1', '1-5', '6-18', '19-59',
    '60'
];

Highcharts.chart('pyramid_idp', {
    
	exporting: { enabled: false },
	credits: {enabled: false},

   chart: {
        type: 'bar',
		backgroundColor:'transparent' ,
    },
    title: {
        text: 'Population Pyramid'
    },
    subtitle: {
        text: ''
    },
    xAxis: [{
        categories: categories,
        reversed: false,
        labels: {
            step: 1
        }
    }, { // mirror axis on right side
        opposite: true,
        reversed: false,
        categories: categories,
        linkedTo: 0,
        labels: {
            step: 1
        }
    }],
    yAxis: {
        title: {
            text: null
        },
        labels: {
            formatter: function () {
                return Math.abs(this.value) + '%';
            }
        }
    },

    plotOptions: {
        series: {
            stacking: 'normal',
		
        }
    },

    tooltip: {
        formatter: function () {
            return '<b>' + this.series.name + ', age ' + this.point.category + '</b><br/>' +
                'Population: ' + Highcharts.numberFormat(Math.abs(this.point.y), 0);
        }
    },

    series: [{
		color:'#b35479',
        name: 'Male',
        data: [-13, -19, -24, -33, -11]
      
	
	}, {
		color:'black',
        name: 'Female',
        data: [15, 17, 26, 35, 9]
    }
	
	]
});

//colunn chart, nationalities


Highcharts.chart('origins_ret', {
    exporting: { enabled: false },
	credits: {enabled: false},
      chart: {
        type: 'bar',
		backgroundColor:'transparent' ,
    },
    title: {
        text: "Nationalities "
    },
    subtitle: {
        text: ''
    },
    xAxis: {
        categories: ['Egypt', 'Niger', 'Chad', 'Sudan','Ghana'],
        title: {
            text: null
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: '',
            align: 'high'
        },
        labels: {
            overflow: 'justify'
        }
    },
    tooltip: {
        valueSuffix: ''
    },
    plotOptions: {
	
        bar: {
            dataLabels: {
                enabled: true,
                format: '{point.name}',
                style: {
                    color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                }
            }
        }
    },
    legend: {
        enabled: false
    },
    credits: {
        enabled: false
    },
    series: [{
		color:'#79d2a6',
        name: 'No. of People',
       
		 data: [{
            name: '17',
            y: 107549
        }, {
            name: '17',
            y: 103444
           
        }, {
            name: '9',
            y: 87878
        }, {
            name: '1',
            y: 57752
        },{
		    name: '71',
            y: 53268
        }
		
			]
		
    }]
});

//colunn chart, nationalities


Highcharts.chart('locations_ret', {
exporting: { enabled: false },
	credits: {enabled: false},
      chart: {
        type: 'bar',
		backgroundColor:'transparent' ,
    },
    title: {
        text: "Main Locations "
    },
    subtitle: {
        text: null
    },
    xAxis: {
        categories: ['Tripoli', 'Al Marqab', 'Misratah', 'Ajdabiya'],
        title: {
            text: null
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: '',
            align: 'high'
        },
        labels: {
            overflow: 'justify'
        }
    },
    tooltip: {
        valueSuffix: ''
    },
    plotOptions: {
	
        bar: {
            dataLabels: {
                enabled: true,
                format: '{point.name}',
                style: {
                    color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                }
            }
        }
    },
    legend: {
        enabled: false
    },
    credits: {
        enabled: false
    },
    series: [{
		color:'#79d2a6',
        name: 'No. of People',
       
		 data: [{
            name: '17',
            y: 107549
        }, {
            name: '17',
            y: 103444
           
        }, {
            name: '9',
            y: 87878
        }, {
            name: '1',
            y: 57752
        }
		
			]
		
    }]
});
// Age categories
var categories = [
    '0-4', '5-9', '10-14', '15-19',
    '20-24', '25-29', '30-34', '35-39', '40-44',
    '45-49', '50-54', '55-59', '60-64', '65-69',
    '70-74', '75-79', '80-84', '85-89', '90-94',
    '95-99', '100 + '
];

Highcharts.chart('pyramid_ret', {
    
	exporting: { enabled: false },
	credits: {enabled: false},

   chart: {
        type: 'bar',
		backgroundColor:'transparent' ,
    },
    title: {
        text: 'Population Pyramid'
    },
    subtitle: {
        text: ''
    },
    xAxis: [{
        categories: categories,
        reversed: false,
        labels: {
            step: 1
        }
    }, { // mirror axis on right side
        opposite: true,
        reversed: false,
        categories: categories,
        linkedTo: 0,
        labels: {
            step: 1
        }
    }],
    yAxis: {
        title: {
            text: null
        },
        labels: {
            formatter: function () {
                return Math.abs(this.value) + '%';
            }
        }
    },

    plotOptions: {
        series: {
            stacking: 'normal',
		
        }
    },

    tooltip: {
        formatter: function () {
            return '<b>' + this.series.name + ', age ' + this.point.category + '</b><br/>' +
                'Population: ' + Highcharts.numberFormat(Math.abs(this.point.y), 0);
        }
    },

    series: [{
		color:'#79d2a6',
        name: 'Male',
        data: [-2, -2, -1, -3, -5, -3.1, -3.2,
            -3.0, -3.2, -4.3, -4.4, -3.6, -3.1, -2.4,
            -2.5, -2.3, -1.2, -0.6, -0.2, -0.0, -0.0]
      
	
	}, {
		color:'black',
        name: 'Female',
        data: [2.1, 2.0, 2.2, 2.4, 2.6, 3.0, 3.1, 2.9,
            3.1, 4.1, 4.3, 3.6, 3.4, 2.6, 2.9, 2.9,
            1.8, 1.2, 0.6, 0.1, 0.0]
    }
	
	]
});

