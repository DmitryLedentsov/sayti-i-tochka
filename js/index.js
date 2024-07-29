$(() => {

    //scrollbar
    // $('.custom-scroll').scrollbar();

    console.log('js loaded');

    $view = $('.view');
    $view.css('position','fixed');
    $view.css('top','0');
    $view.css('left','0');
    $view.css('right','0');
    $view.css('bottom','0');

    var Scrollbar = window.Scrollbar;

    Scrollbar.init($view[0], {
        damping:0.14,
    });

});