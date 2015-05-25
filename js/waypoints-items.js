var $win = $(window);

//Footer Animations
var $footerTrigger =$('#footer');
var $footerCol =$('.col');

$footerTrigger.waypoint(function() {
    $footerCol.addClass('fadeInUp2');
}, { offset:'80%'});

// Work specific triggers
var $expTrigger = $('#explorandes');
var $expTitle = $('#explorandes .work-title');
var $expSeeOn = $('#explorandes .work-seeon-l');
var $expPiece = $('.work-explorandes');

var $airTrigger = $('#airugo');
var $airTitle = $('#airugo .work-title');

var $stinksTitle = $('#lovestinks .work-title');
var $stinksSeeOn = $('#lovestinks .work-seeon-l');

var $woodworksTrigger = $('#woodworks');
var $woodworksTitle = $('#woodworks .work-title');

var $usilTrigger = $('#usil');
var $usilTitle = $('#usil .work-title');
var $usilSeeOn = $('#usil .work-seeon-l');

var $digestiveTrigger = $('#digestive');
var $digestiveTitle = $('#digestive .work-title');
var $digestiveSeeOn = $('#digestive .work-seeon-l');

var $ipaTitle = $('#ipa .work-title');
var $ipaSeeOn = $('#ipa .work-seeon-l');

var $frontTrigger = $('#frontcrush');
var $frontTitle = $('#frontcrush .work-title');
var $frontSeeOn = $('#frontcrush2 .work-seeon-l');


//Explorandes
$expTrigger.waypoint(function() {
	$expTitle.addClass('js-slideLeftFade');
}, { offset:'65%' });

$expTrigger.waypoint(function() {
	$expSeeOn.addClass('js-slideRightFade');
}, { offset:'65%' });

//$expTrigger.waypoint(function() {
//	$expPiece.addClass('js-exp-fade');
//}, { offset:'65%' });


//AirUGo
$airTrigger.waypoint(function() {
	$airTitle.addClass('js-slideLeftFade');
}, { offset:'65%' });


//Love Stinks
$airTrigger.waypoint(function() {
	$stinksTitle.addClass('js-slideLeftFade');
}, { offset:'65%' });

$airTrigger.waypoint(function() {
	$stinksSeeOn.addClass('js-slideRightFade');
}, { offset:'65%' });


// Woodworks 
$woodworksTrigger.waypoint(function() {
	$woodworksTitle.addClass('js-slideLeftFade');
}, { offset:'65%' });


// USIL
$usilTrigger.waypoint(function() {
	$usilTitle.addClass('js-slideLeftFade');
}, { offset:'65%' });

$usilTrigger.waypoint(function() {
	$usilSeeOn.addClass('js-slideRightFade');
}, { offset:'65%' });


// Digestive
$digestiveTrigger.waypoint(function() {
	$digestiveTitle.addClass('js-slideLeftFade');
}, { offset:'65%' });

$digestiveTrigger.waypoint(function() {
	$digestiveSeeOn.addClass('js-slideRightFade');
}, { offset:'65%' });


// IPA
$digestiveTrigger.waypoint(function() {
	$ipaTitle.addClass('js-slideLeftFade');
}, { offset:'65%' });

$digestiveTrigger.waypoint(function() {
	$ipaSeeOn.addClass('js-slideRightFade');
}, { offset:'65%' });


// Frontcrush
$frontTrigger.waypoint(function() {
	$frontTitle.addClass('js-slideLeftFade');
}, { offset:'65%' });

$frontTrigger.waypoint(function() {
	$frontSeeOn.addClass('js-slideRightFade');
}, { offset:'65%' });


// Parallax Animations

var $expPieceImg = $('.work-explorandes>img');

$win.on('scroll', function() {
	var scrollPos=$win.scrollTop();
	
	$expPieceImg.css('margin-top', -scrollPos * .28 + 'px');
});
