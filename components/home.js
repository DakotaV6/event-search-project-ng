"use strict"
const home = {

    template:`
    <section class="home">
    <a class="fav" href="" ng-click="$ctrl.seeFavs()">Favorites <i class="fas fa-heart"></i> </a>
    <h1 class="bold">Flashing Lights Concert Finder</h1>
    <h2 class="bold">Experiences Start Here</h2>
    <button class="start-btn" ng-click="$ctrl.goSearch()">Start</button>
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