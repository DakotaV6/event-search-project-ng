"use strict"
function Service($location){

    const self = this;

    self.loadSearchSection= () =>{
        $location.path("/search");
    }
}

angular
    .module("App")
    .service("Service", Service)