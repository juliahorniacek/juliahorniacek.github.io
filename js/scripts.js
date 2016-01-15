window.posts = [
    "introductions_01-08-2016.html",
    "this-little-writers-not-so-pretty-reality_01-15-2016.html"
];


$(document).ready(function() {
    $('iframe').load(function() {
        this.style.height =
        this.contentWindow.document.body.offsetHeight + 20;
        var t = this.style.height;
        $(".leftSide").height(t);
    });
});

function nextPost(v) {
    var nextPostIndex = -1;
    for (var i = 0; i < window.posts.length; ++i) {
        if (window.posts[i] == v) {
            nextPostIndex = i+1;
            break;
        }
    }
    if (nextPostIndex >= window.posts.length) {
        //There is no next post, so disable the button
        alert("there is no next post!!! haha");
    }
    else {
        //Move the iframe to window.posts[nextPostIndex]
        document.location.href = window.posts[nextPostIndex];
    }
}

function previousPost(v) {
    var previousPostIndex = -1;
    for (var i = 0; i < window.posts.length; ++i) {
        if (window.posts[i] == v) {
            previousPostIndex = i-1;
            break;
        }
    }
    if (previousPostIndex < 0) {
        //There is no previous post, so disable the button
        alert("there is no previous post!!! haha");
    }
    else {
        //Move the iframe to window.posts[previousPostIndex]
        document.location.href = window.posts[previousPostIndex];
    }

}
