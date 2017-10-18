'use strict';

$(document).ready(function() {
  var button = $('#button');
  var list = $('#list');
  var loader = $('#loader');
  list.hide();

  Handlebars.registerHelper('parseDate', function(date) {
    return moment(date).format('DD.MM.YYYY');
  });

  button.on('click', function() {
    var getData = $.ajax({
      dataType: 'json',
      url: 'https://www.future-processing.pl/blog/wp-json/wp/v2/posts',
      type: 'GET',
      success: function(data) {
        var template = Handlebars.compile($('#list-item-template').html());
        list.html(template(data));
      }
    });

    loader.show();
    button.html('Loading ...');
    button.addClass('button-downward');

    setTimeout(function() {
      getData.then(function() {
        loader.hide();
        button.hide();
        list.fadeIn();
      });
    }, 3000);
  });
});

