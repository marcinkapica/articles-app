$(function() {

    var loadButton = $('#loadButton');
    var postList = $('#postList');
    var loader = $('#loader');
    postList.hide();

    loadButton.on('click', function() {
        loader.show();
        loadButton.html('Loading ...');
        loadButton.addClass('buttonToBottom');

        var getData = $.ajax({
            dataType: "json",
            url: 'https://www.future-processing.pl/blog/wp-json/wp/v2/posts',
            type: 'GET',
            success: function(posts) {
                $.each(posts, function(index, post) {
                    var titleHTML = '<h1 class="title">'+post.title.rendered+'</h1>';
                    var date = moment(post.date).format('DD-MM-YYYY');
                    var dateHTML = '<time class="date">Posted on '+date+'</time>';
                    var excerptHTML = '<span class="text">'+post.excerpt.rendered+'</span>';
                    var readMoreHTML = '<a href="'+post.link+'" class="link">Read more <i class="fa fa-angle-right" aria-hidden="true"></i></a>';
                    postList.append('<li class="list__item">'+titleHTML+'<div class="content">'+dateHTML+excerptHTML+readMoreHTML+'</div><hr></li>');
                })
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

