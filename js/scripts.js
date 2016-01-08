$(document).ready(function() {
    $('iframe').load(function() {
        this.style.height =
        this.contentWindow.document.body.offsetHeight + 20;
        var t = this.style.height;
        $(".leftSide").height(t);
    });
});
