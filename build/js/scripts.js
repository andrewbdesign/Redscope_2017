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

    // Make the videos playable on mobile devices
    var video = document.getElementById('video-el');
    window.makeVideoPlayableInline(video);

    var work01 = document.getElementById('work-01'),
        work02 = document.getElementById('work-02'),
        work03 = document.getElementById('work-03'),
        work04 = document.getElementById('work-04'),
        work05 = document.getElementById('work-05'),
        work06 = document.getElementById('work-06');

    window.makeVideoPlayableInline(work01);
    window.makeVideoPlayableInline(work02);
    window.makeVideoPlayableInline(work03);
    window.makeVideoPlayableInline(work04);
    window.makeVideoPlayableInline(work05);
    window.makeVideoPlayableInline(work06);

    if (showVideo) {
        isDesktop = true;

        if (md.phone() || md.tablet()) {
            isDesktop = false;

						if(iOSversion() === undefined) {

						} else {
								if(iOSversion()[0] > 9) {
		                isDesktop = true;
		            }
						}


        }

    }

    // var videoURL = 'hero-banner.mp4';
    var videoURL = 'https://andrewbdesign.github.io/Redscope_2017/hero-banner.mp4';
    if (videoURL !== "" && videoURL.indexOf('https://') > -1 && isDesktop && isHome) {
        videoSetup();
				// console.log('Video setup ----')
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

    var mp4 = 'https://andrewbdesign.github.io/Redscope_2017/hero-banner.mp4';
    var webm = 'https://andrewbdesign.github.io/Redscope_2017/hero-banner.webm';

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

var showreelAnimation;

function startAnimation() {
	console.log("start animation")

	var tl = new TimelineMax()

	tl.to('#video', 2, {autoAlpha:1, ease:Power1.easeOut}, '0')

	showreelAnimation = new TimelineMax(
     {repeat:-1}
    )

	// Boxer man
	showreelAnimation.fromTo('.boxer-character, .boxer-man', .4, {alpha:0}, {alpha:1, ease:Power1.easeOut}, '0')
	showreelAnimation.fromTo('.boxer-character', 6, {scale:.9, x:0}, {scale:1, x:-20, ease:Power1.easeOut}, '0')
	showreelAnimation.fromTo('.boxer-man', 6, {scale:1.1, x:0}, {scale:1, transformOrigin:'50% 50%', ease:Power1.easeOut}, '0')
	showreelAnimation.to('.boxer-character, .boxer-man', .4, {alpha:0, ease:Power1.easeOut}, '4')

	// Swimming chick
	showreelAnimation.fromTo('.swimmer-girl-container, .ocean-bg', .4, {alpha:0}, {alpha:1, ease:Power1.easeOut}, '4')
	showreelAnimation.fromTo('.swimmer-girl-container', 6, {scale:.9, x:0}, {scale:1, x:20, ease:Power1.easeOut}, '4')
	showreelAnimation.fromTo('.ocean-bg', 6, {scale:1.2, x:0}, {scale:1, transformOrigin:'50% 50%', ease:Power1.easeOut}, '4')
	showreelAnimation.to('.swimmer-girl-container, .ocean-bg', .2, {alpha:0, ease:Power1.easeOut}, '8')

	// Food dudes
	showreelAnimation.fromTo('.food-dudes, .food-bg', .4, {alpha:0}, {alpha:1, ease:Power1.easeOut}, '8')
	showreelAnimation.fromTo('.food-dudes', 6, {scale:.98, x:0}, {scale:1, ease:Power1.easeOut}, '8')
	showreelAnimation.fromTo('.food-bg', 6, {scale:1.1, x:0}, {scale:1, transformOrigin:'50% 50%', ease:Power1.easeOut}, '8')
	showreelAnimation.to('.food-dudes, .food-bg', .2, {alpha:0, ease:Power1.easeOut}, '12')

	// Fashion chick
	showreelAnimation.fromTo('.fashion-chick, .fashion-bg', .4, {alpha:0}, {alpha:1, ease:Power1.easeOut}, '12')
	showreelAnimation.fromTo('.fashion-chick', 6, {scale:.96, x:0}, {scale:1, ease:Power1.easeOut}, '12')
	showreelAnimation.fromTo('.fashion-bg', 6, {scale:1.02, x:0}, {scale:1, transformOrigin:'50% 50%', ease:Power1.easeOut}, '12')
	showreelAnimation.to('.fashion-chick, .fashion-bg', .2, {alpha:0, ease:Power1.easeOut}, '16')

	// Phone dude
	showreelAnimation.fromTo('.phone-dude-container, .phone-bg', .4, {alpha:0}, {alpha:1, ease:Power1.easeOut}, '16')
	showreelAnimation.fromTo('.phone-dude-container', 6, {scale:.98, x:0}, {transformOrigin:'50% 100%', scale:1, ease:Power1.easeOut}, '16')
	showreelAnimation.fromTo('.phone-bg', 6, {scale:1.02, x:0}, {scale:1, transformOrigin:'50% 50%', ease:Power1.easeOut}, '16')
	showreelAnimation.to('.phone-dude-container, .phone-bg', .2, {alpha:0, ease:Power1.easeOut}, '20')

	// Shoe Chick
	showreelAnimation.fromTo('.hype-shoes-container, .hype-shoes-bg', .4, {alpha:0}, {alpha:1, ease:Power1.easeOut}, '20')
	showreelAnimation.fromTo('.hype-shoes-container', 6, {scale:1.03, x:0}, {transformOrigin:'0% 100%', scale:1, ease:Power1.easeOut}, '20')
	showreelAnimation.fromTo('.hype-shoes-bg', 6, {scale:1.1, x:0}, {scale:1, transformOrigin:'50% 50%', ease:Power1.easeOut}, '20')
	showreelAnimation.to('.hype-shoes-container, .hype-shoes-bg', .2, {alpha:0, ease:Power1.easeOut}, '26')



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
		$(this).load()
	})

	$('.video-column video').on('click', function(){
		var videoLink = $(this).attr('data-video')
		$('iframe#showreel-video').attr('src', videoLink)
		$("#showreel-player-video").fadeIn()
        $("body").addClass("modal-open")
	})

	$('.bio-column video').on('mouseover', function(){
		$(this).get(0).play()
	}).on('ended', function () {
		$(this).load()
	})

	$('#showreel-player-video').click(function() {
      $('iframe#showreel-video').attr('src', '')
      $("#showreel-player-video").fadeOut()
      $("body").removeClass("modal-open")
    })

}

// Embed code
/*

// Firstness
<iframe width="640" height="360" src="https://www.youtube.com/embed/OhWGznK517w" frameborder="0" allowfullscreen></iframe>

// Sony
<iframe width="640" height="360" src="https://www.youtube.com/embed/U3K3gFHsajs" frameborder="0" allowfullscreen></iframe>

// Adidas
<iframe width="640" height="360" src="https://www.youtube.com/embed/-73xEK26Tes" frameborder="0" allowfullscreen></iframe>

// Taku
<iframe width="640" height="360" src="https://www.youtube.com/embed/0nl2yp2mL94" frameborder="0" allowfullscreen></iframe>

// Hypegirl
<iframe width="640" height="360" src="https://www.youtube.com/embed/gTWEgk4uGqI" frameborder="0" allowfullscreen></iframe>

// NYE Piers
<iframe width="640" height="360" src="https://www.youtube.com/embed/W4Ckgz8djoQ" frameborder="0" allowfullscreen></iframe>
*/

function adjustCopyLayout() {
  // Showreel video


  // })
}

function preloadAssets() {

    var i = [
			bgImage02,
      'img/showreel/01-boxer-man-bg.jpg',
      'img/showreel/01-boxer-man.png',
      'img/showreel/02-swimmer-bg.jpg',
      'img/showreel/02-swimmer-girl-01.png',
      'img/showreel/02-swimmer-girl-02.png',
      'img/showreel/03-food-dudes-bg.jpg',
      'img/showreel/03-food-dudes.png',
      'img/showreel/04-fashion-bg.jpg',
      'img/showreel/04-fashion-chick.png',
      'img/showreel/05-phone-dude-01.png',
      'img/showreel/05-phone-dude-02.png',
      'img/showreel/05-phone-dude-bg.jpg',
      'img/showreel/06-hype-shoes-01.png',
      'img/showreel/06-hype-shoes-02.png',
      'img/showreel/06-hype-shoes-bg.jpg',
      'img/showreel/showreel-play-btn.png',

      'img/icon/icon-email.svg',
      'img/icon/icon-phone.svg',
      'img/icon/icon-pin.svg',
      'img/icon/logo-facebook.svg',
      'img/icon/logo-instagram.svg',
      'img/icon/logo-vimeo.svg',

      'img/about-hero-image.jpg',
      'img/letter-a-bg.jpg',
      'img/letter-a-icon.png',
      'img/letter-c-bg.jpg',
      'img/letter-c-icon.png',
      'img/letter-r-bg.jpg',
      'img/letter-r-icon.png',



        ];

    if (isHome) {
      i.push(
        'works/Adidashypeparty-1.jpg',
          'works/Adidashypeparty-1.mp4',
          'works/Adidashypeparty-1.webm',
          'works/Fitnessplanet-1.jpg',
          'works/Fitnessplanet-1.mp4',
          'works/Fitnessplanet-1.webm',
          'works/Hype_Girl-1.jpg',
          'works/Hype_Girl-1.mp4',
          'works/Hype_Girl-1.webm',
          'works/Piers_Nye-1.jpg',
          'works/Piers_Nye-1.mp4',
          'works/Piers_Nye-1.webm',
          'works/Sony-1.jpg',
          'works/Sony-1.mp4',
          'works/Sony-1.webm',
          'works/Taku-1.jpg',
          'works/Taku-1.mp4',
          'works/Taku-1.webm'

        )

				if(isDesktop) {
						// i.push('hero-banner.mp4', 'hero-banner.webm')
						// console.log('mp4 and isDesktop')
						i.push('https://andrewbdesign.github.io/Redscope_2017/hero-banner.mp4', 'https://andrewbdesign.github.io/Redscope_2017/hero-banner.webm')
						console.log('video-banner')
				}
    }

	// if(isDesktop && isHome) {
		// i.push('hero-banner.mp4', 'hero-banner.webm')
		// console.log('mp4 and isDesktop')
		// // i.push('hero-banner.mp4', 'https://andrewbdesign.github.io/Redscope_2017/hero-banner.webm')
		// console.log('video-banner')
	// }

	console.log('images assets:', i)

    preloadimages(i).done(function () {
        // ONCE IMAGES ARE PRE-LOADED BEGIN ANIMATION
    console.log("images finished loading")
		imagesLoaded = true;


    })
}


TweenMax.set('#loader-logo', {autoAlpha:0})

var preloaderTimeline = new TimelineMax({
	onComplete: function() {
		if(imagesLoaded) {

      if(isHome) {
        TweenMax.to('#loader-logo', 1, {autoAlpha:1, ease:Power1.eaesOut}, '0')
        TweenMax.to('#loader-logo-outline', 1, {alpha:0, ease:Power1.eaesOut, onComplete:function(){
    				$('.loader').hide()
    				$('#website-section').show()
    				initAnimation()
    			}}, '0')
        } else {
          $('.loader').hide()
          $('#website-section').show()
          initAnimation()
        }

		} else {
			preloaderTimeline.reverse()
		}
	},
	onReverseComplete: function() {
		preloaderTimeline.play()
	}
})

preloaderTimeline.fromTo('#R-redscope .rr', 2, {drawSVG:'0%'}, {drawSVG:'100%', force3D:true, ease:Power1.easeOut}, '0')
preloaderTimeline.fromTo('#E-redscope .rr', 2, {drawSVG:'0%'}, {drawSVG:'100%', force3D:true, ease:Power1.easeOut}, '.3')
preloaderTimeline.fromTo('#D-redscope .rr', 2, {drawSVG:'0%'}, {drawSVG:'100%', force3D:true, ease:Power1.easeOut}, '.6')

preloaderTimeline.fromTo('#S-redscope   .ww', 2, {drawSVG:'0%'}, {drawSVG:'100%', force3D:true, ease:Power1.easeOut}, '.9')
preloaderTimeline.fromTo('#C-redscope   .ww', 2, {drawSVG:'0%'}, {drawSVG:'100%', force3D:true, ease:Power1.easeOut}, '1.2')
preloaderTimeline.fromTo('#O-redscope   .ww', 2, {drawSVG:'0%'}, {drawSVG:'100%', force3D:true, ease:Power1.easeOut}, '1.5')
preloaderTimeline.fromTo('#P-redscope   .ww', 2, {drawSVG:'0%'}, {drawSVG:'100%', force3D:true, ease:Power1.easeOut}, '1.8')
preloaderTimeline.fromTo('#E-redscope-2 .ww', 2, {drawSVG:'0%'}, {drawSVG:'100%', force3D:true, ease:Power1.easeOut}, '2.1')

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

$('.container-showreel-thumbnail').click(function(){
  // console.log("Yo")
  $('iframe#showreel-video').attr('src', 'https://player.vimeo.com/video/207907570')
  $("body").addClass("modal-open")
  $("#showreel-player-video").fadeIn()
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

function iOSversion() {
    if (/iP(hone|od|ad)/.test(navigator.platform)) {
        var v = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
        return [parseInt(v[1], 10), parseInt(v[2], 10), parseInt(v[3] || 0, 10)];
    }
}
