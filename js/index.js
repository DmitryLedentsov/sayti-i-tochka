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
        //const scaleFactor = 0.8;
        //const elementsToResize = ['.about', '.advantages', '.process', '.services', '.portfolio'];
        //
        //elementsToResize.forEach(selector => {
        //    resizeElement(selector, scaleFactor);
        //});
        //resizeElement('.heading',0.9);
        
        //навбар и футер например не надо ресайзить
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
        $(selector).css({
            '-webkit-transform' : `scale(${scale})`,
               '-moz-transform' : `scale(${scale})`,
                '-ms-transform' : `scale(${scale})`,
                 '-o-transform' : `scale(${scale})`,
                    'transform' : `scale(${scale})`
        });

        var $el = $(selector);
    
        //$el.css('width', ($el.width()/window.innerWidth)*100*scale+'vw');
        //$el.css('height', ($el.height()/window.innerHeight)*100*scale+'vh');
        //$el.height(scale* $el.height());
    }

});

