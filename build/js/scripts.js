var md = new MobileDetect(window.navigator.userAgent);
var isDesktop = true;
var imagesLoaded = false;
var bgImage01 = 'https://placeimg.com/1000/800/arch';
var showVideo = true;

$(document).ready(function(){
	preloadAssets()
})

function initAnimation() {

    var video = document.getElementById('video-el');
    window.makeVideoPlayableInline(video);

    if (showVideo) {
        isDesktop = true;

        if (md.phone() || md.tablet()) {
            isDesktop = false;

            if(iOSversion()[0] > 9) {
                isDesktop = true;
            }
        }

    }

    var videoURL = 'http://thenewcode.com/assets/videos/polina.mp4';
    if (videoURL !== "" && videoURL.indexOf('http://') > -1 && isDesktop && isHome) {
        videoSetup();
    } else {
		
		$('.bg-image').css('background-image', 'url('+ bgImage01 + ')')
//        $('.bg-image-01').attr('src', bgImage01);
        initCSS();
        startAnimation();
        adjustCopyLayout();
    }
}

function videoSetup() {

    $('#video').show();

    var mp4 = 'http://thenewcode.com/assets/videos/polina.mp4';
    var webm = 'http://thenewcode.com/assets/videos/polina.webm';

    var vid = document.getElementById('video-el');

    $('#video video > source:eq(0)').attr('src', mp4);
    $('#video video > source:eq(1)').attr('src', webm);

    $('#video video').load();


    $('#video video').bind('loadeddata', function (e) {


        if (vid.readyState == 3 || vid.readyState == 4 || vid.readyState == 2 || vid.readyState == 'complete' || vid.readyState == 'loaded') {

            $('.bg-image').hide();
            initCSS();
            startAnimation();
            adjustCopyLayout();

            // $('#video-el').get(0).play();
        }

    });

    $('#video video').bind('error', function (e) {
        $('#video').hide();
        $('.bg-image-01').attr('src', bgImage01);
        initCSS();
        startAnimation();
        adjustCopyLayout();
    });

}

function initCSS() {
	console.log("initCSS")
	
	TweenMax.set('#video', {autoAlpha:0})
	
//	TweenMax.set('.bg-image-01', {autoAlpha:0})
	TweenMax.set('.bg-image-02', {autoAlpha:0})
	TweenMax.set('.bg-image-03', {autoAlpha:0})
	TweenMax.set('.bg-image-04', {autoAlpha:0})
}

function startAnimation() {
	console.log("start animation")
	
	var tl = new TimelineMax()
	
	tl.to('#video', 2, {autoAlpha:1, ease:Power1.easeOut}, '0')
	
	var showreelAnimation = new TimelineMax({repeat:-1})
	
//	showreelAnimation.fromTo('.bg-image-01', 1, {autoAlpha:0}, {autoAlpha:1, ease:Power1.easeOut}, '0')
	showreelAnimation.fromTo('.bg-image-02', 1, {autoAlpha:0}, {autoAlpha:1, ease:Power1.easeOut}, '4')
	showreelAnimation.fromTo('.bg-image-03', 1, {autoAlpha:0}, {autoAlpha:1, ease:Power1.easeOut, onComplete: function(){
		TweenMax.set('.bg-image-02', {autoAlpha:0})
	}}, '8')
	showreelAnimation.fromTo('.bg-image-04', 1, {autoAlpha:0}, {autoAlpha:1, ease:Power1.easeOut, onComplete: function(){
		TweenMax.set('.bg-image-03', {autoAlpha:0})
	}}, '12')
	showreelAnimation.to('.bg-image-04', 1, {autoAlpha:0, ease:Power1.easeOut}, '16')
	
	
}

function adjustCopyLayout() {
	console.log("adjust copy layout")
}

function preloadAssets() {

    var i = [
			bgImage01
        ];
	
	if(isDesktop) {
		i.push('http://thenewcode.com/assets/videos/polina.mp4', 'http://thenewcode.com/assets/videos/polina.webm')
	}
	
	console.log('images assets:', i)

    preloadimages(i).done(function () {
        // ONCE IMAGES ARE PRE-LOADED BEGIN ANIMATION
        console.log("images finished loading")
		setTimeout(function(){
			$('.loader').hide()
			$('#website-section').show()
			initAnimation()
		}, 2000)

    })
}

$("#menu-button").click(function(){
	$('#menu-list').fadeIn()
	$("body").addClass("modal-open")
})

$('.close-btn').click(function(){
	$('#menu-list').fadeOut()
	$("body").removeClass("modal-open")
})

$('#menu-list a').click(function(){
	$('#menu-list').fadeOut()
	$("body").removeClass("modal-open")
})



// PRE-LOAD IMAGES FUNCTIONALITY ------------------------------------------------------------

/**
 * Preloads images based on an array of filenames, then returns a a promise.
 * @param {Array} arr
 */
function preloadimages(arr) {

    var newimages = [],
        loadedimages = 0
    var postaction = function () {}
    var arr = (typeof arr != "object") ? [arr] : arr

    function imageloadpost() {
        loadedimages++
        if (loadedimages == arr.length) {
            postaction(newimages) //call postaction and pass in newimages array as parameter
        }
    }
    for (var i = 0; i < arr.length; i++) {
        newimages[i] = new Image()
        newimages[i].src = arr[i]
        newimages[i].onload = function () {
            imageloadpost()
        }
        newimages[i].onerror = function () {
            imageloadpost()
        }
    }
    return { //return blank object with done() method
        done: function (f) {
            postaction = f || postaction //remember user defined callback functions to be called when images load
        }
    }
}

/**
 * NOTE: not being used. WIP
 * Scramble text elemtns and apply individual tweens to each character in a DOM element's text as a string
 * @param {String} targetElement the selector for the element with the innerText as a string.
 * @param {String} finalText the text you want to scramble tween to
 * @param {Integer} scrambleSpeed the text you want to scramble tween to
 *
 */
function doStuff(targetElement, finalText, randomString, timescale, scrambleSpeed) {
  var timescale = timescale,
      speed     = scrambleSpeed,
      scrambleDelay = 0.5;
  var finalText = finalText,
      finalTextArr = finalText.split('')
  var mySplitText = new SplitText(targetElement, {type:"chars"}),
      chars = mySplitText.chars

  return function() {
      var tl = new TimelineLite();
      tl.clear().time(0)

      chars.forEach(function(item, i) {
        tl
        .add('iteration')
        .fromTo(chars[i], 1, {'-webkit-filter': 'blur(2px)'}, {'-webkit-filter': 'blur(0px)'}, "iteration-="+(0.01*i*speed)/4+'"')
        .to(chars[i], 2, {scrambleText: {text: finalTextArr[i], chars: randomString, speed: .5, ease: Sine.easeInOut, force3D:true}, overwrite: 'auto'}, "iteration-="+0.01*i*speed+'"' )
        .timeScale(timescale)
      })
  }
}

/**
 * Utility functions
 */

function pause() {
    TweenLite.to(tl, 2, {timeScale:0})
    document.querySelectorAll('video').forEach(function(vid) { vid.pause(); })
}

function play() {
    TweenLite.to(tl, 2, {timeScale:1})
    document.querySelectorAll('video').forEach(function(vid) { vid.play(); })
}
