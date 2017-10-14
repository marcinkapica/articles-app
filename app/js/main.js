$(function() {

    var loadButton = $('#loadButton');
    var postList = $('#postList');
    var loader = $('#loader');
    postList.hide();

    Handlebars.registerHelper('parseDate', function(date) {
        return  moment(date).format('DD.MM.YYYY');
    });

    loadButton.on('click', function() {
        loader.show();
        loadButton.html('Loading ...');
        loadButton.addClass('buttonToBottom');

        var getData = $.ajax({
            dataType: "json",
            url: 'https://www.future-processing.pl/blog/wp-json/wp/v2/posts',
            type: 'GET',
            success: function(data) {
                var template = Handlebars.compile($('#listTemplate').html());
                var dataObject = {
                    "posts": data
                };
                postList.html(template(dataObject));
            }
        });

        setTimeout(function() {
            getData.then(function(){
                loader.hide();
                loadButton.hide();
                postList.fadeIn();
            });
        }, 3000);

    });

});

