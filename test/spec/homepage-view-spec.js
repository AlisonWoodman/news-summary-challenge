'use strict';

header.displayHeader("Homepage view tests");

(function(){
var description = "Displays list of articles in html"
assert.isTrue(homepageView.displayHeadlines(singleExampleHeadline) === "<ul><li><a href=\"#articles/" + "world/2017" + "\">" + "Las Ramblas" + "</a></li></ul>", description)
})();
