function displayCart(cart) {
    var cartArray = cart;

    //store span id=albumList
    var resultItems = document.getElementById("resultItems");

    if (cartArray.length > 0) {
        document.getElementById("albumQueryResponse").innerHTML = "You currently have (" +  cartArray.length ") items in your cart";
        for (var i = 0; i < cartArray.length; i++) {
            var album = cartArray[i];

            //create new section to add album info and append to span
            var albumSection = document.createElement("section");
            resultItems.appendChild(albumSection);

            //Block 1 Containing Image
            var block1 = document.createElement("div");
            block1.id = "block1";
            albumSection.appendChild(block1);

            var albumCover = document.createElement("img");
            albumCover.src = album.img;
            block1.appendChild(albumCover);

            var title = document.createElement("h2");
            title.appendChild(document.createTextNode(album.title));
            block1.appendChild(title);

            var format = document.createElement("h4");
            format.appendChild(document.createTextNode(album.format));
            block1.appendChild(format);

            //var artist = document.createElement("h3");
            //artist.appendChild(document.createTextNode(album.artist));
            //block1.appendChild(artist);

            //Block 2 Containing Tracklisting
            var block2 = document.createElement("div");
            block2.id = "block2";
            albumSection.appendChild(block2);

            var price = document.createElement("h2");
            price.appendChild(document.createTextNode("$" + album.price));
            block2.appendChild(price);

        }

        //create new section to add album info and append to span
        var totalSection = document.createElement("section");
        resultItems.appendChild(totalSection);

        var total = document.createElement("h2");
        total.appendChild(document.createTextNode("Total"));
        totalSection.appendChild(total);

        var total = document.createElement("h3");
        total.appendChild(document.createTextNode("$" + cartArray.getTotal()));
        totalSection.appendChild(total);
    }
}

// Call this function when the page has loaded
// and when clicks occur:
function init() {
    'use strict';

    var shoppingCart = localStorage.getItem("shoppingCart");
    document.getElementById("pageTitle").innerHTML = "Music Store | Your Cart" + searchVal;

    dispayCart(shoppingCart);
}
/// Establish functionality on window load:
window.onload = init;
