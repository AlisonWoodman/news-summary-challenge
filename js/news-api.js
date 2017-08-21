'use strict';

(function(exports){
  function ApiCallsModel() {
    this._articleArray = []
    this._singleArticle = []
  }
  ApiCallsModel.prototype.loadSingleArticle = function(articleUrl){
    var self = this;
    var htmlToLoad = "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/" + articleUrl + "?show-fields=body"
    this.load(htmlToLoad, function(xhr) {
      var json = JSON.parse(xhr.responseText);
      var htmlHeadline = json.response.content.webTitle;
      var htmlContent = json.response.content.fields.body;
      self._singleArticle.push({'headline' : htmlHeadline, "content" : htmlContent})
      console.log('singlearticle: ' + self._singleArticle)
      return self.getSingleArticle();
    });
  };

  ApiCallsModel.prototype.getArticleArray = function() {
    return this._articleArray
  }

  ApiCallsModel.prototype.getSingleArticle = function() {
    return this._singleArticle
  }

  ApiCallsModel.prototype.loadEditorsPicks = function(){
    var self = this;
    this.load('http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/world?show-editors-picks=true&show-fields=body',
    function(xhr) {
      console.log (json)
      var json = JSON.parse(xhr.responseText);
        json.response.editorsPicks.forEach(function(article){
        var articleTitle = article.webTitle;
        var articleUrl = article.id
        self._articleArray.push({'articleTitle': articleTitle, 'articleUrl' : articleUrl})
      });
      return self._articleArray
    });
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
