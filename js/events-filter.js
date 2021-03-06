/*
Events filter
v01
*/
    (function($) {
  "use strict"; // Start of use strict

    // INITIALIZE DATEPICKER PLUGIN
    $('#eventsFilter').datepicker({
    	format: "mm-yyyy",
    	startView: "months", 
    	minViewMode: "months",
        clearBtn: true,
        language: "de",
        autoclose: true,
	startDate: "06-2021", // start season in June
        beforeShowMonth: function (date) {
    	  var m = date.getMonth();
	  // disable months: September, October, November and December
          if ((m == 9) || (m == 10) || (m == 11 || (m == 12))) {
            return false;
          }
        }
    });

    /* pop-up datepicker when clicked on the calendar symbol */
    $('#icon-calendar').on("click", function () {
      $('#eventsFilter').datepicker('show');
    });


    $('#eventsFilter').on('changeDate', function () {
        var pickedDate = $('input').val();

	if (pickedDate == "") {
		// FILTER CLEARED
        	$('.event-date').removeClass('hide');
        	// show Most 2020 heading
		$('#most2020').removeClass('hide');
	} else {
		// FILTER BY MONTH
        	$('.event-date').addClass('hide');
        	$(`.event-date[month="${pickedDate}"]`).removeClass('hide');
        	// hide Most 2020 heading
		$('#most2020').addClass('hide');
	}
    });

    /*
    $('#eventsFilter').on('clearDate', function () {
   	alert("CLEARED");
    });
    */

})(jQuery); // End of use strict

