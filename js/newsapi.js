    var newsdata;

    function getTopNews() {
        $.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=8bc0f6181d85423dbf8dc3a877fb49bf', // url
            function(data, textStatus, jqXHR) { // success callback
                $("#news-container").empty();
                console.log('status: ' + textStatus + ', data:' + data);
                newsdata = data;
                if (data.totalResults > 0) {
                    $.each(data.articles, function(index, news) {
                        $("#news-container").append("<div class=\"col current\"> <img id=\"mainimage\" class=\"img-fluid img-thumbnail\" src=" + news.urlToImage + " style=\"width: 100%; height: 40%;\" onerror=\"standby()\">" +
                            "<div class=\"spacing\"> <h4>" + news.title + "</h4>" +
                            "<p class=\"font1 \">" + news.source.name + "</p>" +
                            "<p class=\"font2 \">" + news.description + "</p>" +
                            "<p class=\"font1 \"><a href=\"" + news.url + "\" target=\"_blank\">More</a></p></div></div>");
                    });
                } else {
                    $("#news-container").append("<h3>No News Found</h3>");
                }

            });
    }

    function searchNews(query) {
        $("#news-container").empty();
        console.log(query)
        $.get('https://newsapi.org/v2/everything?q=' + query + '&from=2020-02-19&sortBy=popularity&apiKey=8bc0f6181d85423dbf8dc3a877fb49bf', // url
            function(data, textStatus, jqXHR) { // success callback
                console.log('status: ' + textStatus + ', data:' + data);
                newsdata = data;
                if (data.totalResults > 0) {
                    $.each(data.articles, function(index, news) {
                        $("#news-container").append("<div class=\"col current\"> <img id=\"mainimage\" class=\"img-fluid img-thumbnail\" src=" + news.urlToImage + " style=\"width: 100%; height: 40%;\" onerror=\"standby()\">" +
                            "<div class=\"spacing\"> <h4>" + news.title + "</h4>" +
                            "<p class=\"font1 \">" + news.source.name + "</p>" +
                            "<p class=\"font2 \">" + news.description + "</p>" +
                            "<p class=\"font1 \"><a href=\"" + news.url + "\" target=\"_blank\">More</a></p></div></div>");
                    });
                } else {
                    $("#news-container").append("<h3>No News Found</h3>");
                }

            });
    }

    function categoryNews(category) {
        $("#news-container").empty();
        console.log(category)
        $.get('https://newsapi.org/v2/top-headlines?country=us&category=' + category + '&apiKey=8bc0f6181d85423dbf8dc3a877fb49bf', // url
            function(data, textStatus, jqXHR) { // success callback
                console.log('status: ' + textStatus + ', data:' + data);
                newsdata = data;
                if (data.totalResults > 0) {
                    $.each(data.articles, function(index, news) {
                        $("#news-container").append("<div class=\"col current\"> <img id=\"mainimage\" class=\"img-fluid img-thumbnail\" src=" + news.urlToImage + " style=\"width: 100%; height: 40%;\" onerror=\"standby()\">" +
                            "<div class=\"spacing\"> <h4>" + news.title + "</h4>" +
                            "<p class=\"font1 \">" + news.source.name + "</p>" +
                            "<p class=\"font2 \">" + news.description + "</p>" +
                            "<p class=\"font1 \"><a href=\"" + news.url + "\" target=\"_blank\">More</a></p></div></div>");
                    });
                } else {
                    $("#news-container").append("<h3>No News Found</h3>");
                }

            });
    }

    $(function() {
        $('#search-button').click(function() {
            if (!$('#search-field').val()) {
                console.log('error no input')
            } else {
                newsQueryTerm = $('#search-field').val();
                searchNews(newsQueryTerm);
            }
        });
        $('#category-business').click(function() {
            categoryNews('business');
        });
        $('#category-entertainment').click(function() {
            categoryNews('entertainment');
        });
        $('#category-sports').click(function() {
            categoryNews('sports');
        });
        $('#category-technology').click(function() {
            categoryNews('technology');
        });
    });