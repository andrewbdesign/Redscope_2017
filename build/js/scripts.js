
$(document).ready(function(){
	preloadAssets()
})

function preloadAssets() {

    var i = [
			'https://placeholdit.imgix.net/~text?txtsize=25&txt=300%C3%97100&w=300&h=100'
        ];

    preloadimages(i).done(function () {
        // ONCE IMAGES ARE PRE-LOADED BEGIN ANIMATION
        console.log("images finished loading")
		setTimeout(function(){
			$('.loader').hide()
			$('#website-section').show()
		}, 2000)

    })
}

$("#menu-button").click(function(){
	console.log('CLICKED BRA')
	$('#menu-list').fadeIn()
})

$('.close-btn').click(function(){
	$('#menu-list').fadeOut()
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
