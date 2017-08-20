(function(exports){
  function NewsController(HomepageView, NewsListModel, ApiCallsModel) {
    this._homepageView = new HomepageView(NewsListModel, ApiCallsModel)
  }
  NewsController.prototype.displayArticleList = function(articles) {
    var htmlToReturn = this._homepageView.displayHeadlines(articles)
    console.log('htmltoreturn: ' + htmlToReturn)
    document.getElementById("app").innerHTML = htmlToReturn;
  };

  NewsController.prototype.makeUrlChangeToDisplayArticle = function () {
    var self = this;
    window.addEventListener("hashchange", function() {
      self.showArticleContentForCurrentPage();
    });
  };

  NewsController.prototype.showArticleContentForCurrentPage = function() {
    var self = this;
    if (location.hash === "#articles") {
      self.displayArticleList();
    }
    else this.showArticleContent(this.getArticleIdFromUrl(location));
  };

  NewsController.prototype.getArticleIdFromUrl = function(location) {
    return location.hash.split("/")[1];
  };

  NewsController.prototype.showArticleContent = function(articleId) {
    var selectedArticle = this.noteList.getArticleFromId(articleId);
    singleArticleView = new SingleArticleView(selectedArticle);
    exports.document.getElementById("app").innerHTML = singleArticleView.display();
  };

  exports.NewsController = NewsController;
})(this);
