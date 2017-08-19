// (function(exports){
function loadwholeArticle(){
  load('http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/politics/blog/2014/feb/17/alex-salmond-speech-first-minister-scottish-independence-eu-currency-live?show-fields=body', function(xhr) {
    var json = JSON.parse(xhr.responseText);
    document.getElementById("app").innerHTML = json.response.content.webTitle + json.response.content.fields.body;
    console.log(json)
    // Headline
    console.log(json.response.content.webTitle)
    // Article text
    console.log(json.response.content.fields.body)
  })
};

function load(url, callback) {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = ensureReadiness;
        function ensureReadiness() {
            if(xhr.readyState < 4) {
                return;
            }
            if(xhr.status !== 200) {
                return;
            }
            if(xhr.readyState === 4) {
                callback(xhr);
            }
        }
        xhr.open('GET', url, true);
        xhr.send('');
    }
