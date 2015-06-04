var $win = $(window);

//Footer Animations
var $footerTrigger =$('#footer');
var $footerCol =$('#footer');

$footerTrigger.waypoint(function() {
    $footerCol.addClass('fadeInUp2');
}, { offset:'90%'});

// Work specific triggers
var $expTrigger = $('#explorandes');
var $expTitle = $('#explorandes .work-title');
var $expSeeOn = $('#explorandes .work-seeon-l');

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
var $frontSeeOn = $('#fc-2 .work-seeon-l');

var $enTrigger = $('#enhansoft');
var $enTitle = $('#enhansoft .work-title');
var $enSeeOn = $('#enhansoft .work-seeon-l');

var $leadersTrigger = $('#leaders');
var $leadersTitle = $('#leaders .work-title');
var $leadersSeeOn = $('#leaders .work-seeon-l');


//Enhansoft
$enTrigger.waypoint(function() {
	$enTitle.addClass('js-slideLeftFade');
}, { offset:'65%' });

$expTrigger.waypoint(function() {
	$enSeeOn.addClass('js-slideRightFade');
}, { offset:'65%' });


//Explorandes
$expTrigger.waypoint(function() {
	$expTitle.addClass('js-slideLeftFade');
}, { offset:'65%' });

$expTrigger.waypoint(function() {
	$expSeeOn.addClass('js-slideRightFade');
}, { offset:'65%' });

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


// Student Leaders
$leadersTrigger.waypoint(function() {
	$leadersTitle.addClass('js-slideLeftFade');
}, { offset:'65%' });

$leadersTrigger.waypoint(function() {
	$leadersSeeOn.addClass('js-slideRightFade');
}, { offset:'65%' });


// Scroll Animation

$win.on('scroll', function() {

    $('.scroll-parallax').each(function(){

        if(  $(this).offset().top < $(document).scrollTop() + $(window).height()/2 ){

            var dif = $(this).offset().top - ( $(document).scrollTop() + $(window).height()/2 );

            $(this).find( 'img' ).css( 'top', 15 + dif / 2 + 'px' );

       }

    });

})