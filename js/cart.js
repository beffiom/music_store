var cartArray = [];

function addToCart(albumID) {
    for (i = 0; i<albumDatabase.length; i++){
        if (albumDatabase[i].id == albumID){
            cartArray.push(albumDatabase[i])
        }
    }
}

function removeFromCart(albumID) {
    for (i = 0; i<albumDatabase.length; i++){
        if (albumDatabase[i].id == albumID){
            cartArray.pop(albumDatabase[i]);
        }
    }
}

function getItems() {
    return cartArray;
}

function getTotal() {
    var cartTotal = 0;
    for (i = 0; i<cartArray.length; i++){
        cartTotal = cartTotal + cartArray[i].price;
    }
    return cartTotal;
}

function save() {

}

function load() {

}

function init() {
    document.getElementById("addBtn-class1").onclick = function () {
        var albumID = document.getElementById("albumID1").innerHTML;
        for (var i = 0; i < artistDatabase.length; i++) {
            if (albumID == artistDatabase[i].id){
                addToCart(artistDatabase[i]);
            }
        }
    };

    document.getElementById("addBtn-class2").onclick = function () {
        var albumID = document.getElementById("albumID2").innerHTML;
        for (var i = 0; i < artistDatabase.length; i++) {
            if (albumID == artistDatabase[i].id){
                addToCart(artistDatabase[i]);
            }
        }
    };

    document.getElementById("addBtn-class3").onclick = function () {
        var albumID = document.getElementById("albumID3").innerHTML;
        for (var i = 0; i < artistDatabase.length; i++) {
            if (albumID == artistDatabase[i].id){
                addToCart(artistDatabase[i]);
            }
        }
    };

    document.getElementById("addBtn-class4").onclick = function () {
        var albumID = document.getElementById("albumID4").innerHTML;
        for (var i = 0; i < artistDatabase.length; i++) {
            if (albumID == artistDatabase[i].id){
                addToCart(artistDatabase[i]);
            }
        }
    };

    document.getElementById("addBtn-class5").onclick = function () {
        var albumID = document.getElementById("albumID5").innerHTML;
        for (var i = 0; i < artistDatabase.length; i++) {
            if (albumID == artistDatabase[i].id){
                addToCart(artistDatabase[i]);
            }
        }
    };

    document.getElementById("addBtn-class6").onclick = function () {
        var albumID = document.getElementById("albumID6").innerHTML;
        for (var i = 0; i < artistDatabase.length; i++) {
            if (albumID == artistDatabase[i].id){
                addToCart(artistDatabase[i]);
            }
        }
    };

    var cartLink = document.getElementById('shopping');

    while (cartArray.length>0) {
        cartLink.innerHTML = "items (" + cartArray.length + ")";
        cartLink.setAttribute("target", "../cart.html")

    }

    var shoppingCart[] = cartArray;
    localStorage.setItem("shoppingCart", shoppingCart);
    return true;
}

/// Establish functionality on window load:
init();
