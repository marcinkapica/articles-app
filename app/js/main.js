'use strict';

$(document).ready(function() {
  var button = $('#button');
  var articlesWrapper = $('#articles-wrapper');
  var loader = $('#loader');
  var errorInfo = $('#error-info');
  var loadingTime = 3000;
  var getData = function() {
    return $.ajax({
      dataType: 'json',
      url: 'https://newsapi.org/v1/articles?source=national-geographic&sortBy=top&apiKey=d237d9ccd0744ebba3291d6104da926f',
      type: 'GET'
    });
  };

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
    button.html('Load the articles');
    button.removeClass('button-downward');
  }

  function showList(data) {
    var articlesTemplate = Handlebars.compile($('#articles-template').html());

    errorInfo.hide();
    loader.hide();
    button.hide();
    articlesWrapper.html(articlesTemplate(data));
    articlesWrapper.fadeIn();
  }

  Handlebars.registerHelper('parseDate', function(date) {
    return moment(date).format('DD.MM.YYYY');
  });

  articlesWrapper.hide();
  errorInfo.hide();

  button.on('click', function() {
    showLoader();
    setTimeout(function() {
      getData().done(function(data) {
        showList(data);
      }).fail(function(jqXHR) {
        showError(jqXHR);
      });
    }, loadingTime);
  });
});
