var $win = $(window);
var $navTop = $('.navtop-hid');
var $areaTrigger = $('.area-trigger');

$areaTrigger.waypoint(function() {
	$navTop.addClass('js-navtop-fade');
}, { offset:'-5%' });
