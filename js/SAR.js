
//ANIMATED FIGURES
	    var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
		$('#arrivals').animateNumber(
		{
 
		number: 3398 ,
		numberStep: comma_separator_number_step
		},
		10000
		);

		$('#deaths').animateNumber(
		{
		
		number: 165478,
		numberStep: comma_separator_number_step
		},
		10000
		);
		$('#returnees').animateNumber(
		{
		
		number: 341534,
		numberStep: comma_separator_number_step
		},
		10000
		);
		
//bar chart origins //




Highcharts.chart('locations', {
exporting: { enabled: false },
	credits: {enabled: false},
      chart: {
        type: 'bar',
		backgroundColor:'transparent' ,
    },
    title: {
        text: "Ranking by origins : Top 10 "
    },
    subtitle: {
        text: "Data from Jan. 2017"
    },
    xAxis: {
        categories: [
		'Nigeria',
		'Mali',
		'Central African Rep.',
		'Morocco',
		'Senegal',
		'Sudan',
		'Ivory Coast',
		'Guinea-Conakry',
		'Gambia',
		'Bangladesh',
		
		/*
		'Eritrea',
		'Cameroon',
		'Ghana',
		'Somalia',
		'Egypt',
		'Syria',
		'Sierra Leone',
		'Pakistan',
		'Niger',
		'Tunisia'*/
		
		],
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
                    color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'grey'
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
            name: '2,271',
            y: 2271
        }, {
            name: '1,823',
            y: 1823
           
        }, {
            name: '1,586',
            y: 1586
        }, {
            name: '1,077',
            y: 1077
        },
		{
            name: '1,050',
            y: 1050
        }, {
            name: '939',
            y:939
           
        }, {
            name: '839',
            y: 839
        }, {
            name: '835',
            y: 835
        }, {
            name: '771',
            y: 771
        }, {
            name: '688',
            y: 688
        },
		
		
			],
			
			color:'#728fc7'
		
    }]
});
// Age categories
var categories = [
    'Adults', 'Children',
];

Highcharts.chart('pyramid', {
    
	exporting: { enabled: false },
	credits: {enabled: false},

   chart: {
        type: 'bar',
		backgroundColor:'transparent' ,
    },
    title: {
        text: 'Population Breackdown'
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
                return Math.abs(this.value) + 'ppl';
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
        data: [-17577, -838],
		 color: '#728fc7',
    
	
	}, {
        name: 'Female',
        data: [2442, 111],
    color: '#f28f80',
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
    '0-4', '5-9', '10-14'
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
        data: [-2, -2, -1]
      
	
	}, {
		color:'black',
        name: 'Female',
        data: [2.1, 2.0, 2.2]
    }
	
	]
});

Highcharts.chart('line_1', {
	
	credits: {enabled: false},
    
    chart: {
        type: 'spline',
		//backgroundColor:'transparent' 
    },
    title: {
        text: 'Arrivals Dates Vs Incindents Dates '
    },
    subtitle: {
        text: ''
    },
   
 annotations: [{
	 
	    labelOptions: {
            backgroundColor: 'rgba(255,255,255,0.5)',
            verticalAlign: 'bottom',
            
        },
	 
	 
        labels: [{
            point: { x: 155, y: 45 },
            text: 'Aug 25: 12 security officers killed by ARSA insurgents'
        }]
    }],



   xAxis: {
        type: 'datetime',
        dateTimeLabelFormats: { // don't display the dummy year
            month: '%e. %b',
            year: '%b'
        },
        title: {
            text: 'Date'
        }
    },
    yAxis: {
        title: {
            text: 'No. of people'
        },
        min: 0
    },
    tooltip: {
        headerFormat: '<b>{series.name}</b><br>',
        pointFormat: '{point.x:%e %b}: {point.y:.0f} People'
    },

	
	 labelOptions: {
            shape: 'connector',
            align: 'right',
            justify: false,
            crop: true,
            style: {
                fontSize: '0.8em',
                textOutline: '1px white'
            }
        },
	
	
	
	
    plotOptions: {
           areaspline: {
            fillOpacity: 0.7
        }
    },
series: [{
        name: '', 
        // Define the data points. All series have a dummy year
        // of 1970/71 in order to be compared on the same x axis. Note
        // that in JavaScript,  months start at 0 for January,  1 for February etc.
        data: [
  

[Date.UTC(2017, 0, 01), 386223],
[Date.UTC(2017, 01, 28), 386223],
[Date.UTC(2017, 02, 20), 351382],
[Date.UTC(2017, 03, 29), 393652],
[Date.UTC(2017, 04, 28), 390198],
[Date.UTC(2017, 05, 30), 400445],
[Date.UTC(2017, 06, 30), 400445],
[Date.UTC(2017, 07, 30), 416556],
[Date.UTC(2017, 08, 30), 423394],
[Date.UTC(2017, 09, 30), 432574],
[Date.UTC(2017, 10, 30), 621706],
[Date.UTC(2017, 11, 30), 621706]	
        
        ]
    },  {
        name: 'Incidents dates (Myanmar)', 
        data: [

[Date.UTC(2017, 0, 01), 386223],
[Date.UTC(2017, 01, 25), 386223],
[Date.UTC(2017, 02, 26), 351382],
[Date.UTC(2017, 03, 16), 393652],
[Date.UTC(2017, 04, 30), 390198],
[Date.UTC(2017, 05, 30), 400445],
[Date.UTC(2017, 06, 30), 400445],
[Date.UTC(2017, 07, 30), 416556],
[Date.UTC(2017, 08, 30), 423394],
[Date.UTC(2017, 09, 30), 432574],
[Date.UTC(2017, 10, 30), 621706],
[Date.UTC(2017, 11, 30), 621706]		

            
        ],
color: 'rgba(255, 80, 80,0.8)',
lineWidth: 3
    }]
	


});

