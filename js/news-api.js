'use strict';

(function(exports){
  function ApiCallsModel() {
    this._articleArray = []
  }
  ApiCallsModel.prototype.loadwholeArticle = function(){
    this.load('http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/world?show-editors-picks=true&show-fields=body', function(xhr) {
      var json = JSON.parse(xhr.responseText);
      // document.getElementById("app").innerHTML = json.response.content.webTitle + json.response.content.fields.body;
      document.getElementById("app").innerHTML = xhr.responseText
      // Headline
      console.log(json.response.content.webTitle)
      // // Article text
      console.log(json.response.content.fields.body)
    })
  };

  ApiCallsModel.prototype.getArticleArray = function() {
    return this._articleArray
  }

  ApiCallsModel.prototype.loadEditorsPicks = function(){
    var self = this;
    this.load('http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/world?show-editors-picks=true&show-fields=body',
    function(xhr) {
      var json = JSON.parse(xhr.responseText);
      document.getElementById("app").innerHTML = xhr.responseText
        json.response.editorsPicks.forEach(function(article){
        var articleTitle = article.webTitle;
        var articleUrl = article.id
        self._articleArray.push({'articleTitle': articleTitle, 'articleUrl' : articleUrl})
      });
    });
    return self._articleArray
  };

  ApiCallsModel.prototype.load = function(url, callback) {
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
      exports.ApiCallsModel = ApiCallsModel
  })(this);
