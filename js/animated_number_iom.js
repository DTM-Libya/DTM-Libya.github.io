
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