(function($) {
  // a changable variable to hold the url
  let lastPage = '';

  // get request which grabs random post and appends to DOM
  $('#new-quote-button').on('click', function(event) {
    event.preventDefault();

    lastPage = document.URL;

    $.ajax({
      method: 'GET',
      url:
        qod_vars.rest_url +
        '/wp/v2/posts?filter[orderby]=rand&filter[posts_per_page]=1'
    })
      .done(function(data) {
        //returns the first item of the data array
        const qodData = data.shift();

        history.pushState(null, null, qod_vars.home_url + '/' + qodData.slug);

        $('.entry-content').html(qodData.content.rendered);
        $('.entry-title').html(`&mdash; ${qodData.title.rendered}`);
        if (
          qodData._qod_quote_source.length &&
          qodData._qod_quote_source_url.length
        ) {
          $('.source').html(
            `&nbsp; &#44;<a class='source-src' href='${qodData._qod_quote_source_url}'> &nbsp; ${qodData._qod_quote_source}</a>`
          );
        } else if (qodData._qod_quote_source.length) {
          $('.source').html(
            ` &nbsp; 	&#44; &nbsp;  ${qodData._qod_quote_source}`
          );
        } else {
          $('.source').html('');
        }
      })
      .fail(function(error) {
        alert('an error has occurred', error);
      });

    //updates the page url when we click forward or back buttons
    $(window).on('popstate', function() {
      //update url
      window.location.replace(lastPage);
    });
  });
})(jQuery);

//IIFE mode (Immediately Invoked Function Expression) creates effective scope for jQuery
