var md = new MobileDetect(window.navigator.userAgent);
var isDesktop = true;
var imagesLoaded = false;
//var bgImage01 = 'https://placeimg.com/1000/800/arch';
var bgImage02 = 'img/about-hero-image.jpg'
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

    var videoURL = 'https://andrewbdesign.github.io/Redscope_2017/hero-banner.mp4';
    if (videoURL !== "" && videoURL.indexOf('https://') > -1 && isDesktop && isHome) {
        videoSetup();
    } else {
		
//		$('.bg-image.hero-bg-image').css('background-image', 'url('+ bgImage01 + ')')
		$('.bg-image.about-bg-image').css('background-image', 'url('+ bgImage02 + ')')
//        $('.bg-image-01').attr('src', bgImage01);
        initCSS();
        startAnimation();
        adjustCopyLayout();
    }
}

function videoSetup() {

    $('#video').show();

    var mp4 = 'hero-banner.mp4';
    var webm = 'hero-banner.webm';

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
	
	var showreelAnimation = new TimelineMax()
	//	showreelAnimation.fromTo('.boxer-man', 2, {alpha:0}, {alpha:1, ease:Power1.easeOut}, '0')
		showreelAnimation
	//		.from('.boxer-man', 1, {alpha:0, ease:Power1.easeOut}, '0')
			.fromTo('.boxer-man .character', 6, {scale:1, x:0}, {scale:1.05, x:-20, ease:Power1.easeOut}, '1')
	//		.to('.boxer-man', 1, {alpha:0, ease:Power1.easeInOut}, '9')
	
	
	
	if(isAbout) {
		

		// About text animation
		var aboutText = new TimelineMax({repeat:-1})
		var words = ['Story Tellers', 'Explorers', 'Creators', 'Collaborators']
		TweenMax.from('.about-hero-text', 1, {alpha:0, ease:Power1.easeOut}, '0')

		$('#word-01').html(words[0])
		$('#word-02').html(words[1])
		$('#word-03').html(words[2])
		$('#word-04').html(words[3])

		var word01Width = $('#word-01').outerWidth(),
			word02Width = $('#word-02').outerWidth(),
			word03Width = $('#word-03').outerWidth(),
			word04Width = $('#word-04').outerWidth();

		var weThe = 170 // We The text width
		var containerText = 560 // container Text Width

		var word01Offset = (560 - (word01Width + weThe) )/2,
			word02Offset = (560 - (word02Width + weThe) )/2,
			word03Offset = (560 - (word03Width + weThe) )/2,
			word04Offset = (560 - (word04Width + weThe) )/2


		var mySplitText01 = new SplitText('#word-01', {type:"chars"}),
			mySplitText02 = new SplitText('#word-02', {type:"chars"}),
			mySplitText03 = new SplitText('#word-03', {type:"chars"}),
			mySplitText04 = new SplitText('#word-04', {type:"chars"});

		var firstTween = new TimelineLite()
		firstTween.staggerFromTo('#word-01 div', .5, {alpha:0}, {alpha:1}, .1, '0')

		aboutText.staggerTo('#word-01 div', .3, {alpha:0}, .1, '3.7')

		aboutText.staggerFromTo('#word-02 div', .5, {alpha:0}, {alpha:1}, .1, '4')
		aboutText.staggerTo('#word-02 div', .3, {alpha:0}, .1, '7.7')

		aboutText.staggerFromTo('#word-03 div', .5, {alpha:0}, {alpha:1}, .1, '8')
		aboutText.staggerTo('#word-03 div', .3, {alpha:0}, .1, '11.7')

		aboutText.staggerFromTo('#word-04 div', .5, {alpha:0}, {alpha:1}, .1, '12')
		aboutText.staggerTo('#word-04 div', .3, {alpha:0}, .1, '15.7')

		aboutText.staggerFromTo('#word-01 div', .5, {alpha:0}, {alpha:1}, .1, '16')
	}
	
	$('.video-column video').on('mouseover', function(){
		$(this).get(0).play()
		$(this).next().css('opacity', 1)
	}).on('mouseout', function(){
		
		$(this).get(0).currentTime = 0;
		$(this).get(0).pause()
		$(this).next().css('opacity', 0)
	})
	
	$('.bio-column video').on('mouseover', function(){
		$(this).get(0).play()
	})
	
}

function adjustCopyLayout() {
	console.log("adjust copy layout")
}

function preloadAssets() {

    var i = [
			bgImage02
        ];
	
	if(isDesktop && isHome) {
		i.push('https://andrewbdesign.github.io/Redscope_2017/hero-banner.mp4', 'https://andrewbdesign.github.io/Redscope_2017/hero-banner.webm')
		console.log('video-banner')
	}
	
	console.log('images assets:', i)

    preloadimages(i).done(function () {
        // ONCE IMAGES ARE PRE-LOADED BEGIN ANIMATION
        console.log("images finished loading")
//		setTimeout(function(){
			$('.loader').hide()
			$('#website-section').show()
			initAnimation()
//		}, 2000)

    })
}

$("#menu-button").click(function(){
	$('#menu-list').fadeIn()
	$("body").addClass("modal-open")
	
	TweenMax.set('.right-menu a', {alpha:0, y:-10,})
	
	var tl = new TimelineMax()
	
	tl.staggerTo('.right-menu a', .6, {alpha:1, y:0, ease:Power1.eaesOut}, .2, '0')
})

$('.close-btn').click(function(){
	$('#menu-list').fadeOut()
	$("body").removeClass("modal-open")
})

$('#menu-list a').click(function(){
	$('#menu-list').fadeOut()
	$("body").removeClass("modal-open")
})

$("#contact-section").click(function(){
	window.location.assign("contact.html")
})

$("#more-works").click(function(){
	window.location.assign("works.html")
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
