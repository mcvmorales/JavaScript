// Background Colors
var bgs = ["#0F4C5C", "#4E6151", "#5E8C61", "#72BDA3", "#94E8B4", "#084C61", "#177E89", "#022F40", "#2E2D4D"];

// Twitter
window.twttr = (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0],
        t = window.twttr || {};
    if (d.getElementById(id)) return t;
    js = d.createElement(s);
    js.id = id;
    js.src = "https://platform.twitter.com/widgets.js";
    fjs.parentNode.insertBefore(js, fjs);

    t._e = [];
    t.ready = function(f) {
        t._e.push(f);
    };

    return t;
}(document, "script", "twitter-wjs"));



// Facebook
var fbquote = "";
var fbauthor = "";

window.fbAsyncInit = function() {
    FB.init({
        appId      : "298390780554607",
        xfbml      : true,
        version    : 'v2.8'
    });
    FB.AppEvents.logPageView();
};

(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
} (document, 'script', 'facebook-jssdk'));


$(document).ready(function() {
    get_quote();
    $("#getquote").on("click", function() {
        get_quote();
        $(".quote").html("");
    });
    document.getElementById('facebook').onclick = function() {
        FB.ui({
            method: 'stream.publish',
            display: 'popup',
            href: 'http://codepen.io/mcvmorales/pen/jVNGbq',
            quote: '"' + fbquote + '" -- ' + fbauthor
        }, function(response){});
    };
});



// Mashape Quote API
function get_quote() {
    jQuery.support.cors = true;
    $.ajax({
        url: 'https://andruxnet-random-famous-quotes.p.mashape.com/?="movies"',
        headers: {
            'X-Mashape-Key': 'KkXVP6kYwvmsh5IZtYqrPHHMPtgqp1E6ooRjsnNowMfR1P5fP8',
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'
        },
        type: 'POST',
        dataType: 'json',
        success: function (data) {
            $(".quote").html(data["quote"] +
                "<div class='author'>&mdash;&ensp;" +
                data["author"] + "</div>");
            fbquote = data["quote"];
            fbauthor = data["author"];
            $("a.share-twitter").attr("href", 'https://twitter.com/intent/tweet?text="' + data["quote"] + '" -- ' + data["author"]);
            $("a.share-linkedin").attr("href", "#");
            var bg = Math.floor(Math.random() * bgs.length);
            $("html body").animate({
                backgroundColor: bgs[bg]}, 1000);
            $(".button").animate({
                backgroundColor: bgs[bg]
            }, 1000);
        },
        error: function (x, y, z) {
            alert(x + '\n' + y + '\n' + z);
        }
    });
};
