'use strict';

$(document).ready(function() {
  var button = $('#button');
  var list = $('#list');
  var loader = $('#loader');
  var errorInfo = $('#error-info');

  function showLoader() {
    loader.show();
    errorInfo.hide();
    button.html('Loading ...');
    button.addClass('button-downward');
  }

  function showError(xhr) {
    var errorTemplate = Handlebars.compile($('#error-template').html());
    var context = { number: xhr.status, text: xhr.statusText };
    errorInfo.html(errorTemplate(context));
    loader.hide();
    errorInfo.fadeIn();
    button.html('Load the posts');
    button.removeClass('button-downward');
  }

  function showList(data) {
    var itemTemplate = Handlebars.compile($('#list-item-template').html());
    loader.hide();
    button.hide();
    list.fadeIn();
    list.html(itemTemplate(data));
  }

  Handlebars.registerHelper('parseDate', function(date) {
    return moment(date).format('DD.MM.YYYY');
  });

  list.hide();
  errorInfo.hide();

  button.on('click', function() {
    var getData = $.ajax({
      dataType: 'json',
      url: 'https://www.future-processing.pl/blog/wp-json/wp/v2/posts',
      type: 'GET'
    });
    showLoader();

    setTimeout(function() {
      getData.done(function(data) {
        showList(data);
      }).fail(function(jqXHR) {
        showError(jqXHR);
      });
    }, 3000);
  });
});

