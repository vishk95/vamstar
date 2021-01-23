const mainDiv = document.getElementById("page-main-content");

const items = mainDiv.querySelectorAll("div.item > div.views-field.views-field-nothing > span.field-content > span.col-sm-6.lbl-licitacao > font > font");

const publicationDate = items[0].innerHTML;
const biddingDate = items[3].innerHTML;

const object = mainDiv.querySelectorAll("div.item > div.views-field.views-field-nothing > span.field-content > p > font > font")[0].innerHTML;
const links = mainDiv.querySelectorAll('a[href^="http://"]');

function printLinks() {
    let i = 0;
    let linkString = ""
    while ( i < links.length ){
        linkString += links[i].href + "\n"
        i++;
    }
    return linkString;
};

console.log(`Publication Date : ${publicationDate}\n\nBidding Date : ${biddingDate}\n\nObject : ${object}\n\nLinks : ${printLinks()}`);


