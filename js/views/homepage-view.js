'use strict';

(function(exports){
  function HomepageView(NewsListModel, ApiCallsModel) {
    this._newsListModel = new NewsListModel(ApiCallsModel)
  }

HomepageView.prototype.displayHeadlines = function(articles) {
    var htmlToReturn = "<ul>";
    articles.forEach(function(article){
      var articleTitle = article.articleTitle
      var articleUrl = article.articleUrl
      htmlToReturn += ("<li><a href=\"#articles/" + articleUrl + "\">" + articleTitle + "</a></li>")
  });
  htmlToReturn += "</ul>"
  return htmlToReturn
};

  exports.HomepageView = HomepageView
})(this);
