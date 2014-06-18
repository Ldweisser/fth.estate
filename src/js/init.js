// -------------------------------------------------------------------
// init.js
//
// This is the last loading script. Initialize jQuery plugins, etc.
// -------------------------------------------------------------------

// fastclick.js
printTitle('fastclick.js');
window.addEventListener('load', function() {
  FastClick.attach(document.body);
}, false);

// Init mobileMenu + options
// $('.mobile-menu').mobileMenu();


// print date

var m_names = new Array("1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12");

var d = new Date();
var curr_date = d.getDate();
var curr_month = d.getMonth();
var curr_year = d.getFullYear();

$('#print-current-date').text(m_names[curr_month] + "/" + curr_date + "/" + curr_year);
