var tools = 
[
    {
        name:'HSOptimizer',
        src:'http://hsoptimizer.github.io/ancient/'
    },
    {
        name:'Philni\'s Optimizer',
        src:'http://philni.neocities.org/ancientssoul.html'
    },
    {
        name:'Ancients Optimizer',
        src:'http://wieschie.github.io/'
    },
    {
        name:'Auto Regilder',
        src:'http://theriebel.de/gilding/'
    },
    {
        name:'Raid Rewards',
        src:'http://mr1penguin.github.io/ch/hs_for_raid/'
    },
    {
        name:'Clicker Lister',
        src:'http://dobruj01.github.io/clicker-lister/'
    },
    {
        name:'Relics Lister',
        src:'http://dobruj01.github.io/RelicZoneFinder/'
    },
    {
        name:'Mercenary Lister',
        src:'https://jsfiddle.net/A45327Eq/vruwmyao/embedded/result/'
    },
    {
        name:'Save decoder',
        src:'http://chlist.github.io/decoder/'
    }
];

$.each(tools, function(i, tool){
    $('#nav-mobile').append( 
    '<li><a href="' + tool['src'] + '">' + tool['name'] + '</a></li>'
    );

    $('#cards').append(
        `<div class="col s12 m4 tool">
            <div class="card card-avatar">
                <div class="card-content">
                    <span class="card-title grey-text text-darken-4"> ${tool['name']} <br/></span>
                    <a href="${tool['src']}" target="_blank">
                        <button class="btn waves-effect waves-light blue darken-1">
                            Open <i class="mdi-content-send right white-text"></i>
                        </button>
                    </a>
                </div>
            </div>
        </div>`
    );
});

$('.side-nav>li>a').on('click', function() {
    event.preventDefault();
    loadTool($(this).attr("href"));
});

function loadTool(url) {
    if(!$("#content").hasClass("myIframe")){
        $("#content").addClass('myIframe');
    }
    $("#content").html('<iframe src="' + url + '" frameborder="0"></iframe>');
    $iframe[0].contentWindow.focus();
}
