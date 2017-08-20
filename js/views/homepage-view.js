'use strict';

(function(exports){
  function HomepageView(NewsListModel) {
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
  console.log(htmlToReturn)
  document.getElementById("app").innerHTML = htmlToReturn
};

  exports.HomepageView = HomepageView
})(this);
