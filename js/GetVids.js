//Get recent uploads via Youtube API
function show_my_videos(data) 
{
    var blogpeek = document.querySelector(".blogpeek");

    for (var i = 0; i < blogpeek.children.length; i++) {
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
        text_to_change.nodeValue = desc.substring(0, descLength) + dotdot;

        blogpeek.children[i].querySelector("img").src = imageURL;

        var links = blogpeek.children[i].querySelectorAll(".link");

        //Set all links
        for (var j = 0; j < links.length; j++) {
            links[j].href = "https://www.youtube.com/watch?v=" + id;
        }
    }

    //Now cache data
    localStorage.setItem("YoutubeRevieved", Date.now())
    localStorage.setItem("YoutubeData", JSON.stringify(data));
}

//Pls no steal API key ok thanks
var url =
    "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=3&playlistId=UU_I02j_siBz4y7L06nBjjiA&key=AIzaSyDYUCB36eBWo1aAVbUZh-b_6QE-MOM_4CE";

var data = localStorage.getItem("YoutubeData")
if (data == null) //Get new data if we havn't already
{
    GetNewYoutubeData();
}
else
{
    var dateRetrieved = localStorage.getItem("YoutubeRevieved");
    if (Date.now() - dateRetrieved > 604800000) //More than a week difference
    {
        GetNewYoutubeData();
    }
    else //Otherwise load from local storage
    {        
        show_my_videos(JSON.parse(data));
    }
}

//from https://gist.github.com/AAlakkad/7749594
function GetNewYoutubeData() 
{
    $.ajax({
        url: url,
        dataType: "jsonp",
        success: function (data) {
            console.log(data);
            show_my_videos(data);
        }
    });
}