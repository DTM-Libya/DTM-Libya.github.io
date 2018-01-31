Highcharts.chart('chart', {
   credits: {enabled: false},

    chart: {
        type: 'bubble',
        plotBorderWidth: 1,
        zoomType: 'xy'
    },

    title: {
        text: '<strong>Correlation :</strong> Sea Arrivals Vs. Corruption/Development/Peace'
    },

    xAxis: {
        gridLineWidth: 1,
		title: {text: 'Ranking'},
    },

    yAxis: {
        startOnTick: false,
        endOnTick: false,
		title: {text: 'Sea Arrivals in 2016'},
    },
	
	    plotOptions: {
		
        series: {dataLabels: { enabled: true,format: '{point.name}'}},
		bubble: {
                color: 'white',
               marker: {
                    fillColor: '#cd1f25'
                }
            }
    
	
	
	},
	tooltip: {
			useHTML: true,
			headerFormat: '<table>',
			pointFormat: '<tr><th colspan="2"><h3>{point.country}</h3></th></tr>' +
				'<tr><th>Index Ranking( out of 166 ):</th><td>{point.x}</td></tr>' +
				'<tr><th>Sea arrivals in 2016* : </th><td>{point.y}</td></tr>'+
				'<th style="font-size:9px">* 0 values refer to unknown numbers grouped<br> as "Other" nationalities.</th>',
				
			footerFormat: '</table>',
			followPointer: true
		},
	
	
	
	
	
    series: [{
	    name: 'Arrivals Vs. Corruption',
        data: [
            { x: 173, y: 81949, z: 81949, name: 'Syria', country: 'Syria',color:'red', dataLabels: {color: '#595959'}    },
            { x: 169, y: 41825, z: 41825, name: 'Afghanistan', country: 'Afghanistan',color:'red', dataLabels: {color: '#595959'}  },
            { x: 136, y: 37551, z: 37551, name: 'Nigeria', country: 'Nigeria',color:'red',  dataLabels: {color: '#595959'}  },
            { x: 166, y: 27593, z: 27593, name: 'Iraq', country: 'Iraq',color:'red', dataLabels: {color: '#595959'} },
            { x: 164, y: 20718, z: 20718, name: 'Eritrea', country: 'Eritrea',color:'red', dataLabels: {color: '#595959'} },
            { x: 142, y: 14188, z: 14188, name: 'Guinea', country: 'Guinea',color:'red', dataLabels: {color: '#595959'} },
            { x: 108, y: 13943, z: 13943, name: 'Ivory coast', country: 'Ivory coast',color:'red', dataLabels: {color: '#595959'} },
            { x: 145, y: 12792, z: 12792, name: 'Gambia', country: 'The Gambia',color:'red', dataLabels: {color: '#595959'} },
            { x: 116, y: 11566, z: 11566, name: 'Pakistan', country: 'Pakistan',color:'red', dataLabels: {color: '#595959'} },
            { x: 64, y: 10327, z: 10327, name: 'Senegal', country: 'Senegal',color:'red', dataLabels: {color: '#595959'} },
			
			{ x: 75, y: 0, z: 0, name: 'Turkey', country: 'Turkey',color:'red', dataLabels: {color: '#595959'} },
            { x: 170, y: 0, z: 0, name: 'Libya', country: 'Libya',color:'red', dataLabels: {color: '#595959'} },
            { x: 101, y: 0, z: 0, name: 'Niger', country: 'Niger',color:'red', dataLabels: {color: '#595959'} },
            { x: 72, y: 254, z: 254, name: 'Burkina Fasso', country: 'Burkina Fasso',color:'red', dataLabels: {color: '#595959'}  },
            { x: 108, y: 3447, z: 3447, name: 'Ethiopia', country: 'Ethiopia',color:'red', dataLabels: {x:40,color: 'black'/*bigger font*/,style: {fontSize: '13px' }/*bigger font*/} },
            { x: 170, y: 9357, z: 9357, name: 'Sudan', country: 'Sudan',color:'red',dataLabels: {color: '#595959'}},
            { x: 131, y: 5315, z: 5315, name: 'Iran', country: 'Iran',color:'red', dataLabels: {color: '#595959'}},
            
            
        ],
      marker: {
            fillColor: {
                radialGradient: { cx: 0.4, cy: 0.3, r: 0.7 },
                    stops: [
                        [0, 'rgba(205, 31, 37,1)'],
                        [1, 'rgba(205, 31, 37,1)']
                    ]
            }
        }
    }, {
	    name: 'Arrivals Vs. Development',
        data: [
            { x: 149, y: 81949, z: 81949, name: 'Syria', country: 'Syria',color:'red', dataLabels: {color: '#595959'}    },
            { x: 169, y: 41825, z: 41825, name: 'Afghanistan', country: 'Afghanistan',color:'red', dataLabels: {color: '#595959'}  },
             { x: 136, y: 37551, z: 37551, name: 'Nigeria', country: 'Nigeria',color:'red',  dataLabels: {color: '#595959'} },
            { x: 121, y: 27593, z: 27593, name: 'Iraq', country: 'Iraq',color:'red', dataLabels: {color: '#595959'} },
            { x: 179, y: 20718, z: 20718, name: 'Eritrea', country: 'Eritrea',color:'red', dataLabels: {color: '#595959'} },
            { x: 183, y: 14188, z: 14188, name: 'Guinea', country: 'Guinea',color:'red', dataLabels: {color: '#595959'} },
            { x: 171, y: 13943, z: 13943, name: 'Ivory coast', country: 'Ivory coast',color:'red', dataLabels: {color: '#595959'} },
            { x: 173, y: 12792, z: 12792, name: 'Gambia', country: 'The Gambia',color:'red', dataLabels: {color: '#595959'} },
            { x: 147, y: 11566, z: 11566, name: 'Pakistan', country: 'Pakistan',color:'red', dataLabels: {color: '#595959'} },
            { x: 162, y: 10327, z: 10327, name: 'Senegal', country: 'Senegal',color:'red', dataLabels: {color: '#595959'} },
			
			{ x: 71, y: 0, z: 0, name: 'Turkey', country: 'Turkey',color:'red', dataLabels: {color: '#595959'} },
            { x: 102, y: 0, z: 0, name: 'Libya', country: 'Libya',color:'red', dataLabels: {color: '#595959'} },
            { x: 187, y: 0, z: 0, name: 'Niger', country: 'Niger',color:'red', dataLabels: {color: '#595959'} },
            { x: 185, y: 254, z: 254, name: 'Burkina Fasso', country: 'Burkina Fasso',color:'red',dataLabels: {color: '#595959'}},
            { x: 174, y: 3447, z: 3447, name: 'Ethiopia', country: 'Ethiopia',color:'red',   dataLabels: {x:40,color: 'black'/*bigger font*/,style: {fontSize: '13px' }/*bigger font*/} },
            { x: 165, y: 9357, z: 9357, name: 'Sudan', country: 'Sudan',color:'red',dataLabels: {color: '#595959'}},
            { x: 69, y: 5315, z: 5315, name: 'Iran', country: 'Iran',color:'red', dataLabels: {color: '#595959'}},
            
        ],
		visible: false,
        marker: {
             fillColor: {
                radialGradient: { cx: 0.4, cy: 0.3, r: 0.7 },
                    stops: [
                        [0, 'rgba(255, 77, 77,1)'],
                        [1, 'rgba(255, 77, 77,1)']
                    ]
            }
        }
    },
	{
	    name: 'Arrivals Vs. Peace',
        data: [
            { x: 163, y: 81949, z: 81949, name: 'Syria', country: 'Syria',color:'red', dataLabels: {color: '#595959'}    },
            { x: 160, y: 41825, z: 41825, name: 'Afghanistan', country: 'Afghanistan',color:'red', dataLabels: {color: '#595959'}  },
            { x: 136, y: 37551, z: 37551, name: 'Nigeria', country: 'Nigeria',color:'red',  dataLabels: {color: '#595959'} },
            { x: 161, y: 27593, z: 27593, name: 'Iraq', country: 'Iraq',color:'red', dataLabels: {color: '#595959'} },
            { x: 135, y: 20718, z: 20718, name: 'Eritrea', country: 'Eritrea',color:'red', dataLabels: {color: '#595959'} },
            { x: 101, y: 14188, z: 14188, name: 'Guinea', country: 'Guinea',color:'red', dataLabels: {color: '#595959'} },
            { x: 118, y: 13943, z: 13943, name: 'Ivory coast', country: 'Ivory coast',color:'red', dataLabels: {color: '#595959'} },
            { x: 92, y: 12792, z: 12792, name: 'Gambia', country: 'The Gambia',color:'red', dataLabels: {color: '#595959'} },
            { x: 153, y: 11566, z: 11566, name: 'Pakistan', country: 'Pakistan',color:'red', dataLabels: {color: '#595959'} },
            { x: 70, y: 10327, z: 10327, name: 'Senegal', country: 'Senegal',color:'red', dataLabels: {color: '#595959'} },
			
			{ x: 145, y: 0, z: 0, name: 'Turkey', country: 'Turkey',color:'red', dataLabels: {color: '#595959'} },
            { x: 154, y: 0, z: 0, name: 'Libya', country: 'Libya',color:'red', dataLabels: {color: '#595959'} },
            { x: 112, y: 0, z: 0, name: 'Niger', country: 'Niger',color:'red', dataLabels: {color: '#595959'} },
            { x: 87, y: 254, z: 254, name: 'Burkina Fasso', country: 'Burkina Fasso',color:'red',dataLabels: {color: '#595959'}},
            { x: 118, y: 3447, z: 3447, name: 'Ethiopia', country: 'Ethiopia',color:'red',   dataLabels: {x:40,color: 'black'/*bigger font*/,style: {fontSize: '13px' }/*bigger font*/}},
            { x: 155, y: 9357, z: 9357, name: 'Sudan', country: 'Sudan',color:'red',dataLabels: {color: '#595959'}},
            { x: 133, y: 5315, z: 5315, name: 'Iran', country: 'Iran',color:'red', dataLabels: {color: '#595959'}},
        ],
		visible: false,
        marker: {
             fillColor: {
                radialGradient: { cx: 0.4, cy: 0.3, r: 0.7 },
                    stops: [
                        [0, 'rgba(255, 153, 153,1)'],
                        [1, 'rgba(255, 153, 153,1)']
                    ]
            }
        }
    }
	
	]

});
