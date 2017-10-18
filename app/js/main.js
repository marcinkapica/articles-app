'use strict';

$(document).ready(function() {
  var button = $('#button');
  var list = $('#list');
  var loader = $('#loader');
  var getData = $.ajax({
    dataType: 'json',
    url: 'https://www.future-processing.pl/blog/wp-json/wp/v2/posts',
    type: 'GET',
    success: function(data) {
      var template = Handlebars.compile($('#list-item-template').html());
      list.html(template(data));
    }
  });

  function showLoader() {
    loader.show();
    button.html('Loading ...');
    button.addClass('button-downward');
  }

  function showList() {
    loader.hide();
    button.hide();
    list.fadeIn();
  }

  Handlebars.registerHelper('parseDate', function(date) {
    return moment(date).format('DD.MM.YYYY');
  });

  list.hide();

  button.on('click', function() {
    showLoader();

    setTimeout(function() {
      getData.then(function() {
        showList();
      });
    }, 3000);
  });
});

