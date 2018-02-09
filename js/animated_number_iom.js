
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
		
		
//bar chart origins //

//colunn chart, Type of incidents


Highcharts.chart('origins_mg', {

	
	credits: {enabled: false},
      chart: {
        type: 'bar',
	 backgroundColor:'transparent' ,
    },
    title: {
        text: ''
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

		
		
		