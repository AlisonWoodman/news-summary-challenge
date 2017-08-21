(function(exports){
  function NewsController(HomepageView, NewsListModel, ApiCallsModel, SingleArticleModel) {
    this._homepageView = new HomepageView(NewsListModel, ApiCallsModel)
    this._singleArticleModel = new SingleArticleModel(ApiCallsModel)
  }
  NewsController.prototype.displayArticleList = function(articles) {
    var htmlToReturn = this._homepageView.displayHeadlines(articles)
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
    else self.showArticleContent(self.getArticleUrlFromUrl(location));
  };

  NewsController.prototype.getArticleUrlFromUrl = function(location) {
    return location.hash.split("#articles/")[1];
  };

  NewsController.prototype.showArticleContent = function(articleUrl) {
    this._singleArticleModel.makeSingleArticleApiCall(articleUrl)
    console.log('single article.get...: ' + this._singleArticleModel.getSingleArticle());
  };

  exports.NewsController = NewsController;
})(this);
