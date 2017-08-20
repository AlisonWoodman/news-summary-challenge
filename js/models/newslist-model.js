'use strict';

(function(exports){
  function NewsListModel(ApiCallsModel) {
    this._articles = []
    this._apiCallsModel = new ApiCallsModel
  }

NewsListModel.prototype.getArticles = function() {
  return this._articles
};

NewsListModel.prototype.makeHeadlinesApiCall = function() {
  this._articles = this._apiCallsModel.loadEditorsPicks();
};

  exports.NewsListModel = NewsListModel
})(this);
