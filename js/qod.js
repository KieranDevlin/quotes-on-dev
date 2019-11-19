(function($) {
  // 1. get request to grab random post and append to the dom

  // add a click event for the get post 'show me another' button then run ajax below
  $.ajax({
    method: 'GET',
    url:
      qod_vars.rest_url +
      '/wp/v2/posts?filter[orderby]=rand&filter[posts_per_page]=1'
    // data:
  })
    .done(function() {
      // append the quote to the DOM
    })
    .fail(function(error) {
      console.log('an error has occurred', error);
    });

  // 2. post a new quote using the post method
  // using a form to submit (.submit event)
})(jQuery);
