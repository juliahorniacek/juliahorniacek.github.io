window.posts = [
    "introductions_01-08-2016.html",
    "this-little-writers-not-so-pretty-reality_01-15-2016.html",
    "wedding-bells-and-building-muscle_01-22-2016.html",
    "announcement-and-analysis_01-29-2016.html",
    "change-your-mind-change-your-world_02-05-2016.html",
    "love-thoughts-and-the-cosmo-cameo_02-12-2016.html",
    "recap-my-first-almost-flawless-nyfw_02-19-2016.html",
    "all-about-my-glam-brows_03-12-2016.html",
    "my-top-5-must-have-beauty-buys-for-spring-2016_03-25-2016.html",
    "introducing-fit-and-engaged_04-08-2016.html"
];


$(document).ready(function() {
    $("body").hide();
    $("body").fadeIn(2000);
    var queryString = window.location.search;
    if (queryString.length > 0) {
        var url = queryString.split("?")[1].split("&")[0].split("=")[1];
        $("iframe").attr("src", "content/" + url);
    }
    $('iframe').load(function() {
        this.style.height = this.contentWindow.document.body.offsetHeight + 20;
        var t = this.style.height;
        $(".leftSide").height(t);

        var v = location.href.split('/').slice(-1)[0].split("=")[1];
        if (v == undefined) {
            v = this.src.split("/").slice(-1)[0];
        }
        checkNext(v);
        checkPrev(v);
    });
});

function nextPost(v) {
    var x = checkNext(v);
    if (x != -1) {
        //Move the iframe to window.posts[nextPostIndex]
        $("body").fadeOut("2000");
        parent.location.href = "../blog.html?post=" + window.posts[x];
    }
}

function previousPost(v) {
    var x = checkPrev(v);
    if (x != -1) {
        //Move the iframe to window.posts[previousPostIndex]
        $("body").fadeOut("2000");
        parent.location.href = "../blog.html?post=" + window.posts[x];
    }
}

function checkNext(v) {
    var nextPostIndex = -1;
    for (var i = 0; i < window.posts.length; ++i) {
        if (window.posts[i] == v) {
            nextPostIndex = i+1;
            break;
        }
    }
    if (nextPostIndex >= window.posts.length) {
        //There is no next post, so disable the button
        document.getElementById("iframeblogpost").contentWindow.document.getElementById("nextpost").style.color = "#BBBBBB";
        document.getElementById("iframeblogpost").contentWindow.document.getElementById("nextpost").style.cursor = "default";
        return -1;
    }
    return nextPostIndex;
}

function checkPrev(v) {
    var previousPostIndex = -1;
    for (var i = 0; i < window.posts.length; ++i) {
        if (window.posts[i] == v) {
            previousPostIndex = i-1;
            break;
        }
    }
    if (previousPostIndex < 0) {
        //There is no previous post, so disable the button
        document.getElementById("iframeblogpost").contentWindow.document.getElementById("prevpost").style.color = "#BBBBBB";
        document.getElementById("iframeblogpost").contentWindow.document.getElementById("prevpost").style.cursor = "default";
        return -1;
    }
    return previousPostIndex;
}
