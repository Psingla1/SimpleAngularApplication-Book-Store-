var myApp = angular.module("myApp", ['ngRoute']);

myApp.config(function($routeProvider){
	$routeProvider
		.when("/books", {
			templateUrl:"dynamicpart/book-list.html",
			controller:"BookListCtrl"
		})
		.when("/cart",{
			templateUrl:"dynamicpart/kart-list.html",
			controller:"CartListCtrl"
		})
		.otherwise({
			redirectTo:"/books"
		});
}); 
myApp.factory("cartHelper",function(){
	var cart=[];
	return {
		getCart:function(){
			return cart;
		},
		addToCart:function(book){
			cart.push(book);
		},
		buy:function(book){
			alert("Received your order.!");
		}
	}

});
myApp.factory("bookHelper",function(){
	var books= [
		{
			imgUrl:"book1.jpg",
			name: "Harry Potter and the Deathly Hallows",
			price: '$23.47',
			rating: 5,
			publisher:"Arthur A. Levine Books",
		
		},
		{
			imgUrl:"book2.jpg",
			name: "Cracking The Coding Interview",
			price:'$14.03',
			rating: 4.6,
			publisher: "CareerCup; 5th Revised & enlarged edition",
		
		},
		{
			imgUrl: "book3.jpg",
			name: "Chetan Bhagat 2 states",
			price:'$11.99',
			rating: 4,
			publisher:"Amazon Publishing ",
		
		},
		{
			imgUrl: "book4.jpeg",
			name: "Introduction to ALGORITHMS",
			price: '$66.32',
			rating: 4.8,
			publisher:"The MIT Press; 3rd edition",
		
		}
		
	];
	return{
		getBooks:function(){
			return books;
		}
	}
})
myApp.controller("CartListCtrl",function($scope,cartHelper){
	$scope.cart=cartHelper.getCart();
	$scope.buy=function(book){
		cartHelper.buy(book);
	}
});
myApp.controller("HeaderCtrl", function($scope,$location) {
	$scope.appDetails = {};
	$scope.appDetails.title = "BooKs Collection Website";
	$scope.nav={};
	$scope.nav.isActive=function(path){
		if(path=== $location.path()){
			return true;
		}
	}
});

myApp.controller("BookListCtrl", function($scope,bookHelper,cartHelper) {	
	$scope.books=bookHelper.getBooks();
	$scope.addToCart = function(book) {
		cartHelper.addToCart(book);
	}
});