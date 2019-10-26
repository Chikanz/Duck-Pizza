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



//Cache courasel elements after gfy load so that they can be reset 
var CouraselElements = [];
var CouraselLoadFlag = false;
function loadCouraselElements() //Get courasel list
{ 
    if(CouraselLoadFlag) return;
    CouraselLoadFlag = true;
    
    var ChildElements = document.querySelector('.siema').childNodes[0].childNodes;
    for (var i = 0; i < ChildElements.length; i++) {
        CouraselElements.push(ChildElements[i].childNodes[0].childNodes[0]);
    }
}


var removed = false; //Flag to only trigger once
function onChangeCallback() {
    //Pointer from gay frogs
    //Fade out hand anim on siema slide changed
    if (!removed) {
        localStorage.setItem('tutorialDone', 'yepo');
        removed = true;
        var hand = document.querySelector('.pointer');
        if (hand != null) {
            hand.classList.add('pointerFade');

            setTimeout(() => {
                hand.remove();
            }, 4000); //delayed remove after fade for E F F I C I E N C Y
        }
    }
    
    //Reset gif playback time on change
    var index = this.currentSlide;
    for(var i = -1; i < 2; i++)
    {
        if(i == 0) continue;
        
        var v = CouraselElements[index + i];
        if(v) 
        {
            v.currentTime = 0;
            v.play();
        }
    }
    
}

//Resize about icon text dynamically
var text = document.querySelectorAll(".aboutIcon p");
for(var i = 0; i < text.length; i++)
{
    if(text[i].innerHTML.length > 10)
    {
        text[i].style["font-size"] = "20px";
    }
}







