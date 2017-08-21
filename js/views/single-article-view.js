'use strict';

(function(exports){
  function SingleArticleView(headline, content) {
    this._headline = headline
    this._content = content
  }

SingleArticleView.prototype.displayArticle = function(article) {
  var htmlToReturn = ("<h1>" + this.getHeadline() + "</h1>" + "<div>" + this.getContent() + "/div")
  console.log('htmltoreturn: ' + htmlToReturn) 
};

SingleArticleView.prototype.getHeadline = function() {
  return this._headline
};

SingleArticleView.prototype.getContent = function() {
  return this._content
};

  exports.SingleArticleView = SingleArticleView
})(this);
