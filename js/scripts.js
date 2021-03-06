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
    "introducing-fit-and-engaged_04-08-2016.html",
    "serving-up-some-positivity-with-a-side-of-protein-waffles_04-22-2016.html",
    "introducing-a-before-b-and-the-turkey-avocado-burger-lettuce-wrap_05-04-2016.html",
    "weighing-it-out-fitness-and-food_05-20-2016.html",
    "making-the-switch-from-iifym-to-intuitive-eating_07-01-2016.html"
];

window.fitAndEngagedPosts = [
    ["Weighing It Out: Fitness and Food", "weighing-it-out-fitness-and-food_05-20-2016.html","Follow along on Julia's journey towards eating more and feeling great"],
    ["Introducing A before B and the Turkey Avocado Burger Lettuce Wrap", "introducing-a-before-b-and-the-turkey-avocado-burger-lettuce-wrap_05-04-2016.html","Learn how to get the abs you've always wanted and how to make a delicious turkey burger dinner"],
    ["Introducing: Fit and Engaged!", "introducing-fit-and-engaged_04-08-2016.html","Follow along with Julia's preparation for her wedding over the course of the next year"],
    ["Wedding Bells and Building Muscle", "wedding-bells-and-building-muscle_01-22-2016.html","All about Julia's upcoming wedding and preparation"]
];

window.lifestylePosts = [
    ["Making the Switch: From IIFYM to Intuitive Eating", "making-the-switch-from-iifym-to-intuitive-eating_07-01-2016.html","See why Julia made the switch from counting macros to following her intuition when eating"],
    ["Serving Up Some Positivity With A Side Of Protein Waffles", "serving-up-some-positivity-with-a-side-of-protein-waffles_04-22-2016.html","Check out the delicious (and healthy) protein waffles Julia made!"],
    ["My Top 5 Must-Have Beauty Buys for Spring 2016", "my-top-5-must-have-beauty-buys-for-spring-2016_03-25-2016.html","The 5 beauty products you must have in Spring 2016"],
    ["All About My Glam Brows", "all-about-my-glam-brows_03-12-2016.html","Tutorial on how Julia tends to her brows"],
    ["Recap: My First Almost Flawless NYFW", "recap-my-first-almost-flawless-nyfw_02-19-2016.html","Follow Julia through her first experience at the New York Fashion Week"],
    ["Love Thoughts and the Cosmo Cameo", "love-thoughts-and-the-cosmo-cameo_02-12-2016.html","Read about Julia and Mark's big Cosmo debut"],
    ["Change Your Mind, Change Your World", "change-your-mind-change-your-world_02-05-2016.html","All about Julia's struggles with eating disorders and how she changed her mind to overcome them"],
    ["Announcement and Analysis", "announcement-and-analysis_01-29-2016.html","Read about life after graduation for Julia"],
    ["This Little Writer's Not So Pretty Reality", "this-little-writers-not-so-pretty-reality_01-15-2016.html","The reality of Julia's physical struggles and her ability to overcome them"],
    ["Introductions", "introductions_01-08-2016.html","An introduction to Julia Horniacek and her blog"]
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
