

let url = "http://api.mediastack.com/v1/news?access_key=166ad4ed3fc5b39471279e75186a2964&countries=us&categories=business";

fetch(url)
    .then(function (response) {
        return response.json();
    }).then(function (json) {
        console.log(json)
        let result = "";
        for (let i = 0; i < 10; i++) {
            let imageSrc = json.data[i].image;
            if (imageSrc == null) imageSrc = "images/noImage.png";
            let url = json.data[i].url;
            let title = json.data[i].title;
            let author = json.data[i].author;
            if (author == null) author = "Author not available"
            let description = json.data[i].description;
            result += "<div class='news_element'>"; // display flex
            result += "<div class='news_content'>";
            result += "<a href='" + url + "'> <h1 class='title'>" + title + "</h1></a>";
            result += "<h2 class='author'>" + author + "</h2>";
            result += "<p class='description'>" + description + "</p>";
            result += "</div>"; // news content
            result += "<a href='" + url + "'> <img src=" + imageSrc + "></a>";
            result += "</div>"; // news element
            console.log(result);
        }
        document.getElementById("news_container").innerHTML = result;
    });