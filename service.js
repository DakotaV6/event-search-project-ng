"use strict"
function Service($location){

    const self = this;

    self.loadSearchSection= () =>{
        $location.path("/search");
    }

    self.loadFavs = () => {
        $location.path("/favorites");
    }
}

angular
    .module("App")
    .service("Service", Service)