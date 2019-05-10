$(document).ready(function(){
    // change Quotes

    let quotes = [`"A new email service being developed by a group from MIT and CERN promises to bring secure, encrypted email to the masses and keep sensitive information away from prying eyes."`,
        `"They who can give up essential liberty to obtain a little temporary safety deserve neither liberty nor safety."`,
        `"Make a radical change in your lifestyle and begin to boldly do things which you may previously never have thought of doing, or been too hesitant to attempt."`
    ];
    let currentQuote = 0;
    let $buttonQuotes = $('.button-quotes');
    let $quoteControls = 'quoteControls';
    let qouteAcitveClass = 'quoteControls--isActive';
    let $sliderQuote = $('#sliderQuote');

    for (let i = 0; i < quotes.length; i++) {
        $buttonQuotes.append(`
          <label
            data-quote="${i}"
            class="${$quoteControls}"
            for="quote-${i}"
          >
        `);
    }

    let changeQuote = function() {

        $sliderQuote.html(quotes[currentQuote]);

        $(`.${$quoteControls}`).removeClass(qouteAcitveClass);
        $(`.${$quoteControls}[data-quote="${currentQuote}"]`).addClass(qouteAcitveClass);
      }

    changeQuote();

    $(`.${$quoteControls}`).click(function() {
        currentQuote = $(this).attr('data-quote');
        changeQuote();
    });

    //   -----End----

    // --burger menu--

    $('.menu-btn').on('click', function(e) {
      e.preventDefault;
      $(this).toggleClass('menu-btn_active');
      
      // $('.burger-nav').animate({
      //   left: '0px'
      // }, 200);

      $('.burger-nav').toggleClass('burger-nav_active');
    });
});