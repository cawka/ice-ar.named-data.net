$(document).ready(function() {
    var counter = 1;
    $("ol.bibliography").each(function() {
        var num = $(this).children("li").length;
        $(this).attr("start", counter);
        counter += num;
    });
});
