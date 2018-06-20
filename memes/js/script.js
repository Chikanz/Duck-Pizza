imagesLoaded( 'body', { background: 'section' }, function() {
    document.querySelector('#loading').className = 'loaded'; 
} );

AOS.init( { duration: 1000 } ); 
var scrollOffset = 0; 
animateScroll(); 

var titles = 
[
    "",
    "A prehistoric delivery",
    "Ancient memes",
    "The dark ages",
    "Industrial revolution",
    "Memes in War time",
    "Modern day memes" , 
    ""
]; 

var dates = 
[
    "",
    "circa 10,000 B.C.",
    "circa 2000 B.C.",
    "circa 1300 A.D.",
    "circa 1800 A.D.",
    "circa 1950 A.D.",
    "",
    "",
]; 


//Save bubble animation classes to save resauces
var bubbles = document.querySelectorAll( '#dark img' ); 
var bubbleClasses = [];
for(var i = 0; i < bubbles.length; i++)
{
    var classes = [];
    for(var j = 0; j <  bubbles[i].classList.length; j++ )
    {
        classes.push(bubbles[i].classList.item(j));
    }
    bubbleClasses.push(classes);
}

clearBubbles();


function clearBubbles()
{
    for(var i = 0; i < bubbles.length; i++)
    {
        bubbles[i].className = "disapear";
    }
}

function loadBubbles()
{
    for(var i = 0; i < bubbles.length; i++)
    {
        bubbles[i].className = "";
        for(var j = 0; j <  bubbleClasses[i].length; j++ )
        {
            console.log(bubbleClasses[i][j]);
            bubbles[i].classList.add(bubbleClasses[i][j]);            
        }    
    }
}
/////

//Nav links
var navLinks = document.querySelectorAll('#navlinks a'); 

var vid = document.getElementById('vid'); //for video

for ( var i = 0; i < navLinks.length; i++)
{
    navLinks[i].addEventListener( 'click', selectLink ); 
    navLinks[i].addEventListener( 'click', setScrollOffset );     
    navLinks[i].index = i;
}


function selectLink() 
{
    for ( var i = 0; i < navLinks.length; i++ ) 
    {
        navLinks[ i ].className = '';
    } 
    
    this.className = 'selected'; 
    
    //Set titles
    var title = document.getElementById('title');        
    title.innerHTML = titles[this.index];
    
    var subtitle = document.getElementById('subtitle');   
    subtitle.innerHTML =  dates[this.index];
    
    //topshadow
    if(this.index == 0 || this.index == navLinks.length - 1)
        document.getElementById('topBar').className = ""
    else
        document.getElementById('topBar').className = "shadow"

    
    clearBubbles();
    //vid.pause();
    
    //Animation triggers
    switch(this.index)
    {
        case 1:
            triggerPCAnim();
            break;
            
        case 3:
            loadBubbles();
            break;
            
        case 4:
            newsPaper();
            break;      
            
        case 5:
            vid.play();
            break;
    }
} 


function setScrollOffset( event ) 
{
    var section = document.querySelector( this.hash ); 
    event.preventDefault();
    scrollOffset = section.offsetTop; 
    requestAnimationFrame( animateScroll ); 
    
}

function animateScroll() 
{
    var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
    var scrollDistance = Math.round( scrollOffset - scrollPosition );
    
    if ( scrollDistance > 0 ) 
    {
        scrollPosition += Math.ceil( scrollDistance / 10 );
        requestAnimationFrame( animateScroll ); 
    }
    else if ( scrollDistance < 0 )
    {
        scrollPosition += Math.floor( scrollDistance / 10 );
        requestAnimationFrame( animateScroll ); 
    }

    document.documentElement.scrollTop = scrollPosition;
    document.body.scrollTop = scrollPosition; 
} 


function triggerPCAnim()
{
    //Glow
    var glow = document.querySelector('#glow');
    setTimeout(function()
        {            
            glow.classList.add('glowAnim'); 
        },1000);
    
    //PC
    var pc = document.querySelector('#pc');
    setTimeout(function()
        {
            pc.classList.remove('disapear'); 
            pc.classList.add('pcAnim'); 
        },2000);   
}

function newsPaper()
{
    var paper = document.querySelector('#paper');
    paper.className = "paperanim";
}

function playVid()
{
    vid.play();
}

//JQuery stuff
$( '#message' ).on( 'input', remaining ); 
function remaining()
{
    var remain = this.maxLength - this.value.length; 
    $('#remaining').text( remain + ' characters left' ); 
}

//Twitter
$( '#twitter' ).on( 'submit', checkForm ); 
function checkForm(event)
{
    event.preventDefault();
    var twit = $('#message').val();
    tweet = encodeURIComponent(twit);    
    
    if(twit.length > 0)
    {
        window.open('https://twitter.com/intent/tweet?text=' + tweet, '' , 'top="500",left="500",menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600')
    }
    else
    {
        alert("Hey! Type something in the box first, wise guy")
    }
}


