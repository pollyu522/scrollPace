$(document).ready(function(){
    $(window).scroll(function(){
        var windowHeight = $(window).height(),
            windowWidth = $(window).width(),
            docHeight = $(document).height(),
            scrollHeight = $(window).scrollTop(),
            proportion = scrollHeight / (docHeight-windowHeight);

        $('#progress').width(proportion * windowWidth);
    });
});







































