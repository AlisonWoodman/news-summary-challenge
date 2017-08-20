header.displayHeader("Homepage view tests");

(function(){
var description = "Displays list of articles"
homepageview = new HomepageView()
assert.isTrue(homepageView.displayHeadlines() === "/testurl", description)
})();
