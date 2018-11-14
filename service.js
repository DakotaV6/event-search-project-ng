"use strict"
function Service($location){

    const self = this;

    self.favArray = [];
    self.loadSearchSection = () =>{
        $location.path("/search");
    }

    self.loadFavs = () => {
        $location.path("/favorites");
    }

    self.setFavData = (fav) =>{

        favArray.push(fav)
    }
}

angular
    .module("App")
    .service("Service", Service)