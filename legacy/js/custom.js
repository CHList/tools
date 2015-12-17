    $('.nav.navbar-nav>li>a').on('click', function() {
        event.preventDefault();
        loadTool($(this).attr("href"));
    });
    $('#home').on('click', function() {
        window.location.href = ".";
    });
    
    function loadTool(url) {
        if ($('#self').length) {
            $("#self").remove();
        }
        if(!$("#content").hasClass("myIframe")){
            $("#content").addClass('myIframe');
        }
        $("#content").html('<iframe src="' + url + '" frameborder="0"></iframe>');
        Pace.restart();
    }
