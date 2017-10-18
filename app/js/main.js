'use strict';

$(document).ready(function() {
  var button = $('#button');
  var list = $('#list');
  var loader = $('#loader');

  function showLoader() {
    loader.show();
    button.html('Loading ...');
    button.addClass('button-downward');
  }

  function showError(xhr) {
    loader.hide();
    button.html(xhr.statusText);
    button.removeClass('button-downward');
  }

  function showList(data) {
    var template = Handlebars.compile($('#list-item-template').html());
    loader.hide();
    button.hide();
    list.fadeIn();
    list.html(template(data));
  }

  Handlebars.registerHelper('parseDate', function(date) {
    return moment(date).format('DD.MM.YYYY');
  });

  list.hide();

  button.on('click', function() {
    var getData = $.ajax({
      dataType: 'json',
      url: 'https://www.future-processing.pl/blog/wp-json/wp/v2/pofsts',
      type: 'GET'
    });
    showLoader();

    setTimeout(function() {
      getData.done(function(data) {
        showList(data);
      }).fail(function(jqXHR) {
        showError(jqXHR);
        // console.log('Request Status: ' + jqXHR.status + ' Status Text: ' + jqXHR.statusText);
      });
    }, 3000);
  });
});

