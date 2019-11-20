(function($) {
  // 1. get request to grab random post and append to the dom

  // add a click event for the get post 'show me another' button then run ajax below
  $('#new-quote-button').on('click', function(event) {
    event.preventDefault();

    $.ajax({
      method: 'GET',
      url:
        qod_vars.rest_url +
        '/wp/v2/posts?filter[orderby]=rand&filter[posts_per_page]=1'
    })
      .done(function(data) {
        console.log(data[0]);
        $('.entry-content').html(data[0].content.rendered);
        $('.entry-title').html(data[0].title.rendered);
        if (data[0]._qod_quote_source !== undefined) {
          $('.source').html(data[0]._qod_quote_source);
          $('.source-src').attr('src', data[0]._qod_quote_source_url);
        }

        // append the quote to the DOM
      })
      .fail(function(error) {
        console.log('an error has occurred', error);
      });
  });
  // 2. post a new quote using the post method
  // using a form to submit (.submit event)
  // data:
})(jQuery);
