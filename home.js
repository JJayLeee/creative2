

let url = "https://gnews.io/api/v4/top-headlines?token=9f5e323c64bee1c60a934ab1e102bb26&lang=en";

fetch(url)
    .then(function (response) {
        return response.json();
    }).then(function (json) {
        console.log(json)
        let result = "";
        for (let i = 0; i < 10; i++) {
            let imageSrc = json.articles[i].image;
            if (imageSrc == null) imageSrc = "images/noImage.png";
            let url = json.articles[i].url;
            let title = json.articles[i].title;
            let source = json.articles[i].source.name;
            let description = json.articles[i].description;
            result += "<div class='news_element'>"; // display flex
            result += "<div class='news_content'>";
            result += "<h2 class='source'>" + source + "</h2>";
            result += "<a href='" + url + "'> <h1 class='title'>" + title + "</h1></a>";
            result += "<p class='description'>" + description + "</p>";
            result += "</div>"; // news content
            result += "<a href='" + url + "'> <img src=" + imageSrc + "></a>";
            result += "</div>"; // news element
            console.log(result);
        }
        document.getElementById("news_container").innerHTML = result;
    });
