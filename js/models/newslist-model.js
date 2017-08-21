
(function(exports){
  function NewsListModel(ApiCallsModel) {
    this._articles = []
    this._singleArticle = []
    this._apiCallsModel = new ApiCallsModel
  }

NewsListModel.prototype.getArticles = function() {
  return this._articles
};

NewsListModel.prototype.addArticles = function(articles) {
  this._articles = articles
};


NewsListModel.prototype.makeSingleArticleApiCall = function(articleUrl) {
  this._singleArticle = this._apiCallsModel.loadSingleArticle(articleUrl);
};

NewsListModel.prototype.makeHeadlinesApiCall = function() {
  this._articles = this._apiCallsModel.loadEditorsPicks();
};

  exports.NewsListModel = NewsListModel
})(this);
