(function(exports){
  function SingleArticleModel(ApiCallsModel) {
    this._singleArticle = []
    this._apiCallsModel = new ApiCallsModel
  }

SingleArticleModel.prototype.getSingleArticle = function() {
  return this._singleArticle
};

SingleArticleModel.prototype.makeSingleArticleApiCall = function(articleUrl) {
  this._singleArticle = this._apiCallsModel.loadSingleArticle(articleUrl);
};

  exports.SingleArticleModel = SingleArticleModel
})(this);
