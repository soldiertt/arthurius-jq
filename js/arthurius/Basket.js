var Arthurius = (function () {
    /** Basket obj **/
    var Basket = function () {
        this.orders = [];
        this.total = 0;
        this.count = 0;
    };
    /*Basket.prototype = {
        add: function (article) {
            this.articles.push(article);
        },
        articles: function() {
            return this.articles;
        }
    };*/
    var Order = function (article) {
        this.article = article;
        this.count = 1;
    };

    return {
        Basket : Basket,
        Order : Order
    };
})();







