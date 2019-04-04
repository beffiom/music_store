var Cart = require("cart.js");

describe("Cart Tests", function () {
    describe("Cart Add", function () {
        it("starts off as empty", function() {
            var car = new Cart();
            expect(cart.count()).toBE(0);
        });

        it("should return one when item added.", function() {
            var car = new Cart();
            cart.add({};)
            expect(cart.count()).toBE(1);
        });
    });
});
