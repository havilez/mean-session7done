var portfolioApp = angular.module("portfolioSharingApp", ['ngRoute']);

portfolioApp.config(function($routeProvider){
    $routeProvider
    .when("/portfolios", {
        controller: "PortfolioListController",
        templateUrl: "app/partials/portfolio_list_partial.html"
    })
    .when("/portfolio/:portfolio_name", {
        controller: "PortfolioViewController",
        templateUrl: "app/partials/portfolio_viewer.html"
    }) 
    .when("/", { redirectTo: "/portfolios"
    })
    .otherwise({redirectTo: "/404_page"
    });
});




// left side menus

$(function() {
 
    $('.menus h3').on('click', function(e) {
    	console.log("click");
        $(this).next('ul').toggleClass('open');
        e.preventDefault(); return false;
    });
 
});

// infinite scroll

var visibleHeight = $(document).height() - $(window).height();
var items;

function updateHeight() {
    visibleHeight = $(document).height() - $(window).height();
}

storeElements();
 
/** DISABLE INFINITE SCROLLING

$(window).on('resize', function(e) {
    updateHeight();
});
 
$(window).on('scroll', function(e) {
    loadContent();
});

**/

function storeElements() {
    items = $('.portfolio-item:lt(3)').clone();
    //Strip the first class from selection
    items.removeClass('first');
}

function loadContent() {
 
    if($(window).scrollTop() >= visibleHeight) {
 
        $(window).unbind('scroll');
         
        var loadingWrap = $('.loading-wrap');
         
        loadingWrap.fadeIn(function() {
            setTimeout(function() {
                loadingWrap.before(items);
                loadingWrap.hide(function() {
                    updateHeight();
                    storeElements();
                    $(window).on('scroll', function() { loadContent(); });
                });
            }, 500);
        });
 
    }
}

// for mobile
$('.menus h3').on('click', function(e) {
    $(this).next('ul').toggleClass('open');
    updateHeight();
    e.preventDefault(); return false;
});