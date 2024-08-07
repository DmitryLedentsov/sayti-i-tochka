$(() => {
    console.log('js loaded ', `mobile mode: ${isMobile()}` );
    //scrollbar только для больших мониторов
    
    if(!isMobile()){
 
        var scrollbar = window.Scrollbar;
        $view = $('.view');
        $view.css('position','fixed');
        $view.css('top','0');
        $view.css('left','0');
        $view.css('right','0');
        $view.css('bottom','0');
        
        scrollbar = scrollbar.init($view[0], {
            damping: 0.14,
        });
    }

    //$('#btn).on('click', function(e){
        scrollTo('#footer');// тут надо id расставить у всех элементов для скрола
    //})
  
    //кроссбраузерная функция скрола
    function scrollTo(id){
        if(scrollbar) scrollbar.scrollIntoView(document.querySelector(id));
        else{
            $('html, body').animate({
                scrollTop: $(id).offset().top
            }, 2000);
        }
    }

});

