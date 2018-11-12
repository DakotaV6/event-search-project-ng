"use strict"
const home = {

    template:`<h1>Look up a concert</h1>
              <button ng-click="$ctrl.goSearch()">Search</button>
              `,

    controller: ["Service", function(Service){

        const vm=this;
        vm.goSearch = () =>{
            Service.loadSearchSection();
        }

    }]




}

angular
    .module("App")
    .component("home",home);