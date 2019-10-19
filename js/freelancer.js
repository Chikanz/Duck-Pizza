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

//Get recent uploads via Youtube API
function show_my_videos(data) 
{	    
    var blogpeek = document.querySelector(".blogpeek");

    for (var i = 0; i < blogpeek.children.length; i++) 
    {
        //Get info from json
        var desc = data.items[i].snippet.description;
        var title = data.items[i].snippet.title;
        var id = data.items[i].snippet.resourceId.videoId;
        var descLength = 230;
        var dotdot = desc.length > descLength ? "..." : "";
        var imageURL = data.items[i].snippet.thumbnails.standard.url;        
        
        //Yeet into document
        blogpeek.children[i].querySelector("h2").innerHTML = title;
        
        //Change text without removing link
        var your_div = blogpeek.children[i].querySelector("p");
        var text_to_change = your_div.childNodes[0];
        text_to_change.nodeValue = desc.substring(0,descLength) + dotdot;    
        
        blogpeek.children[i].querySelector("img").src = imageURL;
        
        var links = blogpeek.children[i].querySelectorAll(".link");
        
        //Set all links
        for(var j = 0; j < links.length; j++)
        {
            links[j].href = "https://www.youtube.com/watch?v=" + id;
        }
    }
    
    
}

//Pls no steal API key ok thanks
//from https://gist.github.com/AAlakkad/7749594
var url =
  "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=3&playlistId=UU_I02j_siBz4y7L06nBjjiA&key=AIzaSyDYUCB36eBWo1aAVbUZh-b_6QE-MOM_4CE";

$.ajax({
  url: url,
  dataType: "jsonp",
  success: function(data) {
    console.log(data);
    show_my_videos(data);
  }
});
