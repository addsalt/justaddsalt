var $win = $(window);
var $expPiece = $('.work-explorandes');
var $expTrigger = $('#explorandes');

$expTrigger.waypoint(function() {
	$expPiece.addClass('js-exp-fade');
}, { offset:'50%' });


var $title = $('.work-title');

$expTrigger.waypoint(function() {
	$title.addClass('js-slideLeftFade');
}, { offset:'75%' });

var $seeOn = $('.work-seeon-l');

$expTrigger.waypoint(function() {
	$seeOn.addClass('js-slideRightFade');
}, { offset:'75%' });