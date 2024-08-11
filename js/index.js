$(() => {
    console.log('js loaded ', `mobile mode: ${isMobile()}`);
    //scrollbar только для больших мониторов

    if (!isMobile()) {// если декстоп

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

        //ресайз под большие экраны

        //TODO: сделать чтоб на больших экранах блоки сайта были не такими огромными
        //творческий момент - не знаю как именно но чтоб аккуратно выглядело
        //можно добавить отдельные классы 
        resizeElement('.heading',0.90);//навбар и футер например не надо ресайзить
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

    function resizeElement(selector, scale){
        $('.resizeable').css({
            '-webkit-transform' : `scale(${scale})`,
               '-moz-transform' : `scale(${scale})`,
                '-ms-transform' : `scale(${scale})`,
                 '-o-transform' : `scale(${scale})`,
                    'transform' : `scale(${scale})`
        });
    }

});

