'use strict';

header.displayHeader("Homepage view tests");

(function(){
var description = "Displays list of articles in html"
homepageView.displayHeadlines(singleExampleHeadline);
console.log(document.getElementById('app').innerHTML)
assert.isTrue(document.getElementById('app').innerHTML === "<ul><li><a href=\"#articles/" + "world/2017" + "\">" + "Las Ramblas" + "</a></li></ul>", description)
})();
