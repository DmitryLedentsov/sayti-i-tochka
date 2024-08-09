$(() => {
    console.log('js loaded ', `mobile mode: ${isMobile()}`);
    //scrollbar только для больших мониторов

    if (!isMobile()) {

        var scrollbar = window.Scrollbar;
        $view = $('.view');
        $view.css('position', 'fixed');
        $view.css('top', '0');
        $view.css('left', '0');
        $view.css('right', '0');
        $view.css('bottom', '0');

        scrollbar = scrollbar.init($view[0], {
            damping: 0.14,
        });
    }

    $('#nav-about').on('click', function (e) {
        e.preventDefault();
        scrollTo('#about');
    });

    $('#nav-why-us').on('click', function (e) {
        e.preventDefault();
        scrollTo('#why-us');
    });

    $('#nav-process').on('click', function (e) {
        e.preventDefault();
        scrollTo('#process');
    });

    $('#nav-services').on('click', function (e) {
        e.preventDefault();
        scrollTo('#services');
    });

    $('#nav-portfolio').on('click', function (e) {
        e.preventDefault();
        scrollTo('#portfolio');
    });

    //кроссбраузерная функция скрола
    function scrollTo(id) {
        if (scrollbar) scrollbar.scrollIntoView(document.querySelector(id));
        else {
            $('html, body').animate({
                scrollTop: $(id).offset().top
            }, 2000);
        }
    }

});

