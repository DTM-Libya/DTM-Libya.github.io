/**
 * Highcharts plugin to defer initial series animation until the element has appeared. Requieres
 * jQuery.appear.
 *
 * Updated 2016-01-11
 */
(function (H) {
    function deferRender (proceed) {
        var series = this, 
            $renderTo = $(this.chart.container.parentNode);

        // It is appeared, render it
        if ($renderTo.is(':appeared') || !series.options.animation) {
            proceed.call(series);
            
        // It is not appeared, halt renering until appear
        } else  {
            $renderTo.appear(); // Initialize appear plugin
            $renderTo.on('appear', function () {
                proceed.call(series);
            });
        }
    };
    
    H.wrap(H.Series.prototype, 'render', deferRender);
    
}(Highcharts));


//Line-chart | section : 
$('#container1').highcharts({
	
	credits: {enabled: false},
    
    chart: {
        type: 'areaspline',
		  backgroundColor:'transparent' 
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
            fillOpacity: 0.4
        }
    },
series: [{
        name: 'Arrival dates (Bangladesh) ', 
        // Define the data points. All series have a dummy year
        // of 1970/71 in order to be compared on the same x axis. Note
        // that in JavaScript,  months start at 0 for January,  1 for February etc.
        data: [
  

[Date.UTC(2017, 07, 25), 1],
[Date.UTC(2017, 07, 26), 4],
[Date.UTC(2017, 07, 27), 8],
[Date.UTC(2017, 07, 28), 10],
[Date.UTC(2017, 07, 29), 21],
[Date.UTC(2017, 07, 30), 12],
[Date.UTC(2017, 07, 31), 25],

[Date.UTC(2017, 08, 01), 100],
[Date.UTC(2017, 08, 02), 86],
[Date.UTC(2017, 08, 03), 65],
[Date.UTC(2017, 08, 04), 87],
[Date.UTC(2017, 08, 05), 119],
[Date.UTC(2017, 08, 06), 73],
[Date.UTC(2017, 08, 07), 63],
[Date.UTC(2017, 08, 08), 68],
[Date.UTC(2017, 08, 08), 85],
[Date.UTC(2017, 08, 10), 99],
[Date.UTC(2017, 08, 11), 30],
[Date.UTC(2017, 08, 12), 47],
[Date.UTC(2017, 08, 13), 37],
[Date.UTC(2017, 08, 14), 25],
[Date.UTC(2017, 08, 15), 49],
[Date.UTC(2017, 08, 16), 21],
[Date.UTC(2017, 08, 17), 21],
[Date.UTC(2017, 08, 18), 20],
[Date.UTC(2017, 08, 19), 28],
[Date.UTC(2017, 08, 20), 25],
[Date.UTC(2017, 08, 21), 9],
[Date.UTC(2017, 08, 22), 8],
[Date.UTC(2017, 08, 23), 8],
[Date.UTC(2017, 08, 24), 12],
[Date.UTC(2017, 08, 25), 10],
[Date.UTC(2017, 08, 26), 7],
[Date.UTC(2017, 08, 27), 9],
[Date.UTC(2017, 08, 28), 3],
[Date.UTC(2017, 08, 29), 8],
[Date.UTC(2017, 08, 30), 5],

[Date.UTC(2017, 09, 01), 3],
[Date.UTC(2017, 09, 02), 3],
[Date.UTC(2017, 09, 03), 2],
[Date.UTC(2017, 09, 04), 4],
[Date.UTC(2017, 09, 05), 2],
[Date.UTC(2017, 09, 06), 4],
[Date.UTC(2017, 09, 07), 2],
[Date.UTC(2017, 09, 08), 2],
[Date.UTC(2017, 09, 09), 1],
[Date.UTC(2017, 09, 10), 2],
[Date.UTC(2017, 09, 11), 1]




 
			
           
        ]
    },  {
        name: 'Incidents dates (Myanmar)', 
        data: [
          /*
[Date.UTC(2016, 09, 09), 2],
[Date.UTC(2016, 09, 10), 26],
[Date.UTC(2016, 09, 11), 12],
[Date.UTC(2016, 09, 12), 16],
[Date.UTC(2016, 09, 13), 5],
[Date.UTC(2016, 09, 14), 9],
[Date.UTC(2016, 09, 15), 5],
[Date.UTC(2016, 09, 16), 6],
[Date.UTC(2016, 09, 17), 2],
[Date.UTC(2016, 09, 18), 1],
[Date.UTC(2016, 09, 19), 3],
[Date.UTC(2016, 09, 23), 1],
[Date.UTC(2016, 09, 24), 1],
[Date.UTC(2016, 09, 26), 1],
[Date.UTC(2016, 09, 27), 1],
[Date.UTC(2016, 09, 28), 1],
[Date.UTC(2016, 09, 29), 1],
[Date.UTC(2016, 09, 31), 1],

[Date.UTC(2016, 10, 15), 1],

[Date.UTC(2017, 06, 15), 1],
[Date.UTC(2017, 06, 27), 1],

[Date.UTC(2017, 07, 01), 2],*/
[Date.UTC(2017, 07, 10), 1],
[Date.UTC(2017, 07, 19), 1],
[Date.UTC(2017, 07, 20), 2],
[Date.UTC(2017, 07, 21), 1],
[Date.UTC(2017, 07, 22), 3],
[Date.UTC(2017, 07, 23), 5],
[Date.UTC(2017, 07, 24), 56],
[Date.UTC(2017, 07, 25), 220],
[Date.UTC(2017, 07, 26), 142],
[Date.UTC(2017, 07, 27), 89],
[Date.UTC(2017, 07, 28), 77],
[Date.UTC(2017, 07, 29), 87],
[Date.UTC(2017, 07, 30), 24],
[Date.UTC(2017, 07, 31), 18],

[Date.UTC(2017, 08, 01), 18],
[Date.UTC(2017, 08, 02), 29],
[Date.UTC(2017, 08, 03), 39],
[Date.UTC(2017, 08, 04), 23],
[Date.UTC(2017, 08, 05), 22],
[Date.UTC(2017, 08, 06), 32],
[Date.UTC(2017, 08, 07), 20],
[Date.UTC(2017, 08, 08), 21],
[Date.UTC(2017, 08, 09), 10],
[Date.UTC(2017, 08, 10), 18],
[Date.UTC(2017, 08, 11), 9],
[Date.UTC(2017, 08, 12), 12],
[Date.UTC(2017, 08, 13), 12],
[Date.UTC(2017, 08, 14), 13],
[Date.UTC(2017, 08, 15), 10],
[Date.UTC(2017, 08, 16), 11],
[Date.UTC(2017, 08, 17), 7],
[Date.UTC(2017, 08, 18), 10],
[Date.UTC(2017, 08, 19), 15],
[Date.UTC(2017, 08, 20), 8],
[Date.UTC(2017, 08, 21), 8],
[Date.UTC(2017, 08, 22), 3],
[Date.UTC(2017, 08, 23), 6],
[Date.UTC(2017, 08, 24), 9],
[Date.UTC(2017, 08, 25), 3],
[Date.UTC(2017, 08, 26), 11],
[Date.UTC(2017, 08, 27), 3],
[Date.UTC(2017, 08, 28), 2],
[Date.UTC(2017, 08, 29), 1],
[Date.UTC(2017, 08, 30), 4],

[Date.UTC(2017, 09, 01), 3],
[Date.UTC(2017, 09, 02), 3],
[Date.UTC(2017, 09, 03), 2],
[Date.UTC(2017, 09, 04), 3],
[Date.UTC(2017, 09, 05), 4],
[Date.UTC(2017, 09, 06), 2],
[Date.UTC(2017, 09, 07), 1],
[Date.UTC(2017, 09, 08), 3],
[Date.UTC(2017, 09, 09), 2],
[Date.UTC(2017, 09, 10), 1]




 
            
        ],
color: 'rgba(255, 80, 80,0.2)',
lineWidth: 3
    }]
	


});

//Pie-chart | section : 

$('#container2').highcharts({
	
	credits: {enabled: false},
   chart: {
	    backgroundColor:'transparent' ,
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Age Breakdown'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '{point.name}: {point.percentage:.1f} %',
                style: {
                    color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                }
            }
        }
    },
    series: [{
        name: 'Percentage',
        colorByPoint: true,
        data: [{
            name: 'n/a',
            y: 3
        }, {
            name: '18<29',
            y: 38,
            sliced: true,
            selected: true
        }, {
            name: '30<39',
            y: 27
        }, 
		{
            name: '40<49',
            y: 15
        },
		
		{
            name: '50<59',
            y: 10
        }, {
            name: '60+',
            y: 6
        }]
    }] 
  
});

//colunn chart, Type of incidents

$('#container3').highcharts({
	
	credits: {enabled: false},
      chart: {
        type: 'bar',
	 backgroundColor:'transparent' ,
    },
    title: {
        text: 'Reported Shelter Settings'
    },
    subtitle: {
        text: '* '
    },
    xAxis: {
        categories: ['Informal settings', 'Schools', 'Host communities', 'Unfinished buildings', "Squatting on other people's properties ",'Renting ( paid by employer ) ','Renting ( self-pay ) '],
        title: {
            text: null
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'No. of people ',
            align: 'high'
        },
        labels: {
            overflow: 'justify'
        }
    },
    tooltip: {
        valueSuffix: ' '
    },
    plotOptions: {
        bar: {
            dataLabels: {
                enabled: true
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
		
        data: [851, 630, 546, 171, 125, 70,60]
    }]
});

//colunn chart, Origins

$('#container4').highcharts({
	
	credits: {enabled: false},
      chart: {
        type: 'bar',
		backgroundColor:'transparent' ,
    },
    title: {
        text: "Top 10 Nationalities "
    },
    subtitle: {
        text: ''
    },
    xAxis: {
        categories: ['Egypt', 'Niger', 'Chad', 'Sudan','Ghana', 'Mali', 'Nigeria', 'Bangladesh', 'Senegal', 'Ivory Coast'],
        title: {
            text: null
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Origins of the survey sample',
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
        }, {
            name: '19',
            y: 42735
           
        }, {
            name: '9',
            y: 36512
        }, {
            name: '1',
		y: 31236}
		, {
            name: '1',
		y: 15591},
		 {
            name: '1',
		y: 13731},
		
		
			]
		
    }]
});

//Pie-chart | section : 

$('#container5').highcharts({
	
	credits: {enabled: false},
   chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Would you consider returning to Myanmar?'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '{point.name}: {point.percentage:.1f} %',
                style: {
                    color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                }
            }
        }
    },
    series: [{
        name: 'Percentage',
        colorByPoint: true,
        data: [{
            name: 'YES, but only if the situation improves',
            y: 78
        }, {
            name: 'NO, I have not desire to return',
            y: 16,
            sliced: true,
            selected: true
        }, {
            name: 'YES, I would return unconditionally',
            y: 6
        }]
    }] 
  
});




var colors = Highcharts.getOptions().colors,
    categories = ['Adults', 'Minors'],
    data = [{
        y: 91,
        color: colors[0],
        drilldown: {
            name: 'Adults',
            categories: ['Male', 'Female'],
            data: [80, 11],
            color: colors[0]
        }
    }, {
        y: 9,
        color: colors[8],
        drilldown: {
            name: 'Minors',
            categories: ['Accompanied', 'Unacompanied'],
            data: [6, 3],
            color: colors[1]
        }
    }],
    browserData = [],
    versionsData = [],
    i,
    j,
    dataLen = data.length,
    drillDataLen,
    brightness;


// Build the data arrays
for (i = 0; i < dataLen; i += 1) {

    // add browser data
    browserData.push({
        name: categories[i],
        y: data[i].y,
        color: data[i].color
    });

    // add version data
    drillDataLen = data[i].drilldown.data.length;
    for (j = 0; j < drillDataLen; j += 1) {
        brightness = 0.2 - (j / drillDataLen) / 5;
        versionsData.push({
            name: data[i].drilldown.categories[j],
            y: data[i].drilldown.data[j],
            color: Highcharts.Color(data[i].color).brighten(brightness).get()
        });
    }
}

// Create the chart
Highcharts.chart('container20', {
    exporting: {enabled: false},
	
	chart: {
        type: 'pie',
		 backgroundColor:'transparent' ,
    },
    title: {
        text: 'Breakdown'
    },
    subtitle: {
        text: ''
    },
    yAxis: {
        title: {
            text: ''
        }
    },
    plotOptions: {
        pie: {
            shadow: false,
            center: ['50%', '50%']
        }
    },
    tooltip: {
        valueSuffix: '%',
		enabled: false 
    },
    series: [{
        name: 'Adults',
        data: browserData,
        size: '80%',
		
		
		
        dataLabels: {
            formatter: function () {
                return this.y > 5 ? this.point.name : null;
            },
            color: 'black',
            distance: -100,
			
			
		   style:{fontSize: 15}	
			
        },
		
		
		

    }, {
        name: 'Minors',
        data: versionsData,
        size: '80%',
        innerSize: '60%',
        dataLabels: {
            formatter: function () {
                // display only if larger than 1
                return this.y > 1 ? '<b>' + this.point.name + ':</b> ' +
                    this.y + '%' : null;
            },
			 color: 'grey',
			 style:{fontSize: 14}	
        },
        id: 'versions'
    }],
    responsive: {
        rules: [{
            condition: {
                maxWidth: 400
            },
            chartOptions: {
                series: [{
                    id: 'versions',
                    dataLabels: {
                        enabled: false
                    }
                }]
            }
        }]
    }
});

// Prepare demo data
// Data is joined to map using value of 'hc-key' property by default.
// See API docs for 'joinBy' for more info on linking data and map.
var data = [
    ['ly-gd', 6750], //nalut
    ['ly-ju', 10130], //Al jufrah
    ['ly-kf', 1490],//Al jufrah
    ['ly-mb', 84873],//Al Marqab
    ['ly-sh', 979],//Ash Shati
    ['ly-gt', 6070],//Ghat
    ['ly-mq', 23988],//Murzuq
    ['ly-mi', 76012],//Misratah
    ['ly-sb', 26330],//Sabha
    ['ly-ji', 15971],//Al Jifarah
    ['ly-nq', 15500],//Zwara
    ['ly-za', 30619],//Azzawya
    ['ly-mz', 6670],//Al Jabal
    ['ly-tn', 136645],//Tripoli
    ['ly-sr', 8410],//Sirt
    ['ly-hz', 4000],//Al Marj
    ['ly-ja', 6670],//Al jabal
    ['ly-aj', 63191],//Ajdabia
    ['ly-ba', 21345],//Benghazi
    ['ly-qb', 4865],//Derna
    ['ly-bu', 6400],//Tobrouk
    ['ly-wh', 10610] //Ubari
];

// Create the chart
Highcharts.mapChart('container30', {
    chart: {
        map: 'js/ly-all.js',
		 backgroundColor:'transparent' ,
		
    },
    exporting: {enabled: false},
    title: {
        text: ''
    },

    subtitle: {
        text: ''
    },


	
    mapNavigation: {
        enabled: true,
		enableMouseWheelZoom: false,
        buttonOptions: {
            verticalAlign: 'bottom'
        }
    },

    colorAxis: {
        min: 0,
	
		//stops: [[0, '#F1EEF6'], [0.65, '#900037'], [1, '#500007']],
    },

 tooltip: {
            backgroundColor: 'none',
            borderWidth: 0,
            shadow: false,
            useHTML: true,
            padding: 0,
            pointFormat: 
                '</span></span> {point.name}<br>' +
                '<span style="font-size:30px">{point.value} ppl</span>',
            positioner: function () {
                return { x: 0, y: 0 };
            }
        },


    series: [{
        nullColor: 'red',
		data: data,
        name: 'Numeber of Migrants',
        states: {
            hover: {
                color: '#BADA55'
            }
        },
        dataLabels: {
            enabled: true,
            format: '{point.name}'
        }
    }]
});




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
		)


