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
      .done(
        function(data) {
          //returns the first item of the array
          const qodData = data.shift();
          $('.entry-content').html(qodData.content.rendered);
          $('.entry-title').html(`&mdash; ${qodData.title.rendered}`);
          if (
            qodData._qod_quote_source.length &&
            qodData._qod_quote_source_url.length
          ) {
            $('.source').html(
              `&nbsp; &#44;<a class="source-src" href="${qodData._qod_quote_source_url}"> &nbsp; ${qodData._qod_quote_source}</a>`
            );
          } else if (qodData._qod_quote_source.length) {
            $('.source').html(
              ` &nbsp; 	&#44; &nbsp;  ${qodData._qod_quote_source}`
            );
          } else {
            $('.source').html('');
          }
        }

        // append the quote to the DOM
      )
      .fail(function(error) {
        alert('an error has occurred', error);
      });
  });

  $('#submit-quote').on('click', function(event) {
    event.preventDefault();

    $.ajax({
      method: 'post',
      url: qod_vars.rest_url + 'wp/v2/posts/',
      data: {
        title: $('#quote-author').val(),
        content: $('#quote-content').val(),
        _qod_quote_source: $('#quote-source').val(),
        _qod_quote_source_url: $('#quote-source-url').val(),
        status: 'pending'
      },

      beforeSend: function(xhr) {
        xhr.setRequestHeader('X-WP-Nonce', qod_vars.nonce);
      }
    })
      .done(function() {
        $('#quote-submission-form').slideUp(function() {
          $('.quote-submission-wrapper').html(
            `<p>Success! Your quote has been submited!.</p>`
          );
        });
      })
      .fail(function(error) {
        alert(`Opps! Something went wrong there, please try again! ${error}`);
      });
  });
  // 2. post a new quote using the post method
  // using a form to submit (.submit event)
  // data:
})(jQuery);
