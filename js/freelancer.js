/*!
 * Start Bootstrap - Freelancer Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Floating label headings for the contact form
$(function() {
    $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !! $(e.target).val());
    }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

//Force autoplay all videos (FUCK CHROME)
var videos = document.getElementsByTagName("video");
for(var i = 0; i < videos.length; i++)
{
    //setTimeout(function(){autoPlay(videos[i])}, 2000);
    videos[i].addEventListener("pointermove",function()    
    {
        this.muted = true;
        this.play();
    })
}

function autoPlay(vid)
{        
    console.log(document.readyState);
    console.log(vid.paused);
    vid.muted = true;
    vid.play();           
}

//Pointer from gay frogs
//Fade out hand anim on siema slide changed
var removed = false; //Flag to only trigger once
function onChangeCallback() 
{
    if (!removed) 
    {
        localStorage.setItem('tutorialDone', 'yepo');
		removed = true;
		var hand = document.querySelector('.pointer');
		hand.classList.add('pointerFade');

		setTimeout(() => {
			hand.remove();
		}, 4000); //delayed remove after fade for E F F I C I E N C Y
	}

	//Change caption text
	updateCaptions(this.currentSlide);

	//Update the background with blurred slide images
	updateBG(this.currentSlide)
}