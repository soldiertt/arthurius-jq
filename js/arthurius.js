$(function() {
    $.getJSON("http://localhost/arthurius-rest/public/category", function (result) {
        var $options = $(".categori-search-option");
        $.each(result, function(key, categ) {
            $options.append($("<option />").val(categ.type).text(categ.title));
        });
        $options.trigger("chosen:updated");
    });

    App.Basket.init();

    $("#addToBasket").click(function ($event) {
        App.Basket.addItem({"id":"610","ref":"vn42779","marque":"Victorinox","name":"Victorinox polyvalants","description":null,"picture":"vn42779.jpg","manche":null,"acier":null,"size":"20,30 cm","promo":null,"price":"24","piece":null});
        $event.preventDefault();
    });

    $("#clearBasket").click(function ($event) {
        sessionStorage.clear();
        $event.preventDefault();
    });
});

