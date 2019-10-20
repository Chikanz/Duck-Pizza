//Gfycat killed thier JS API so I was just hotlinking gifs for a bit, but that doesn't work for new ones for some reason.
//Getting them via the API seems to work... for now... (bit slow tho)
//https://github.com/gfycat/gfycat.js/issues/25
//https://codepen.io/porcelanosa/pen/PXJBrZ?editors=1111

$(document).ready(loadGifs());
window.onresize = loadGifs;

function loadGifs() {
    var url = 'https://api.gfycat.com/v1/gfycats/'
    $('.gfyitem').each(function (index) {
        var gifID = $(this).data('id')
        var blockID = $(this).attr('id')
        var itemImg = $(this)    
        $.get(url + gifID, function (data) {
            var videoString = '<div id="' + blockID + '"><video loop="true" autoplay="true" muted><source src="' + data.gfyItem.mp4Url + '" type="video/mp4; codecs=\"avc1.42E01E, mp4a.40.2\""><source src="' + data.gfyItem.webmUrl + '" type="video/webm; codecs=\"vp8, vorbis\""></video></div>'
            itemImg.replaceWith(videoString)
        });
    })
}