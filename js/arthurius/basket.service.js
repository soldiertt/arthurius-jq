var App = {
    Basket : {
        init: function() {
            var basketJson = sessionStorage.getItem("basket");
            var basket;
            if (basketJson) {
                basket = JSON.parse(basketJson);
            } else {
                basket = new Arthurius.Basket();
            }
            App.Basket.updateBasketDisplay(basket);
            sessionStorage.setItem("basket", JSON.stringify(basket));
        },
        addItem: function(article) {
            var basketJson = sessionStorage.getItem("basket");
            var basket = JSON.parse(basketJson);
            var orderIndex = App.Basket.find(basket, article);
            if (orderIndex != -1) {
                basket.orders[orderIndex].count++;
            } else {
                basket.orders.push(new Arthurius.Order(article));
            }
            basket.count++;
            basket.total += parseFloat(article.price);
            App.Basket.updateBasketDisplay(basket);
            sessionStorage.setItem("basket", JSON.stringify(basket));
        },
        updateBasketDisplay: function(basket) {
            $.get('./templates/basket-minicart.html', function(template) {
               var rendered = Mustache.render(template, basket);
                $(".block-minicart").html(rendered);
            });
        },
        find: function(basket, article) {
            return basket.orders.map(function(order) {return order.article.id; }).indexOf(article.id);
        }
    }
};
