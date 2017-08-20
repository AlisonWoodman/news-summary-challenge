header.displayHeader("Newslist Model tests");

(function(){
  var description = "Newslist can store article when created"
  newsListModel.addArticles(exampleHeadlines)
  console.log(newsListModel.getArticles()[0])
  assert.isTrue(newsListModel.getArticles()[0] === "{articleTitle: \"‘Las Ramblas cries but it is alive’: Barcelona  recovers historic defiance\", articleUrl: \"world/2017/aug/19/las-ramblas-cries-barcelona-recovers-defiance-attacks\"}", description)
})();

// (function(){
//   var description = "Newslist can add articles"
//   newsListModel.addArticle("/anothertesturl")
//   assert.isTrue(newsListModel.getArticles()[1].getUrl() === "/anothertesturl", description)
// })();
