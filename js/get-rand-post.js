(function($) {
  // get request that grabs random post and append to the dom
  $('#new-quote-button').on('click', function(event) {
    event.preventDefault();

    $.ajax({
      method: 'GET',
      url:
        qod_vars.rest_url +
        '/wp/v2/posts?filter[orderby]=rand&filter[posts_per_page]=1'
    })
      .done(function(data) {
        //returns the first item of the array
        const qodData = data.shift();
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
  });
})(jQuery);

//IIFE mode (Immediately Invoked Function Expression) creates effective scope for jQuery
