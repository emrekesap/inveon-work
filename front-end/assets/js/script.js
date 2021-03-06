"use strict";

var main = {
    productView: function () {

        if($(".triple-grid-button").length){
            $(".triple-grid-button").on({
                click: function () {
                    var _this = $(this);
                    $(".product-container ul li").css("width", "33.3333%");
                    $(".icon-quad-grid ").removeClass("active");
                    $(".icon-triple-grid").addClass("active");
                }
            })
        }

        if($(".quad-grid-button").length){
            $(".quad-grid-button").on({
                click: function () {
                    var _this = $(this);
                    $(".product-container ul li").css("width", "25%");
                    $(".icon-triple-grid ").removeClass("active");
                    $(".icon-quad-grid").addClass("active");
                }
            })
        }

    },


}
$(function () {
    main.productView();
});

