"use strict"
const home = {

    template:`
    <section class="home">
    <a href="" ng-click="$ctrl.seeFavs()"> See Your Favorites <i class="fas fa-heart"></i> </a>
    <h1 class="bold">Flashing Lights Concert Finder</h1>
    <h2 class="bold">Experiences Start Here</h2>
    <button class="start-btn" ng-click="$ctrl.goSearch()">Start</button>
    <section class="reviews">
    <section class="review1">
       <p>Perfection!!</p>
       <p>"Thanks to Flashing Lights I easily found my favorite artist's tour schedule."</p>
     </section>
     <section class="review2">
       <p>Thank you!</p>
       <p>"I had a great experience with my friends at a concert in my own city."</p>
     </section>
     <section class="review3">
       <p>Amazing!</p>
       <p>"Just start finding concerts now! You won't regret it."</p>
     </section>
    </section>
    </section>
     `,

    controller: ["Service", function(Service){

        const vm=this;
        vm.goSearch = () =>{
            Service.loadSearchSection();
        }

        vm.seeFavs = () => {
            Service.loadFavs();
        }

    }]




}

angular
    .module("App")
    .component("home",home);