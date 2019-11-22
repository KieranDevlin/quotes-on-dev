(function($) {
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
        $('.quote-submission-wrapper').html(
          `<p>Opps! Something went wrong there, please try again!.</p>`
        );
      });
  });
})(jQuery);

//IIFE mode (Immediately Invoked Function Expression) creates effective scope for jQuery
