"use strict"
function Service($location, $http){

    const self = this;
    self.jsonPayload = null;

    self.loadSearchSection = () =>{
        $location.path("/search");
    }
    self.loadEventList = () => {
        $location.path("/event-list");
    }
    self.loadFavs = () => {
        $location.path("/favorites");
    }

    self.searchTM = (keyword, zipCode, startDate, endDate) => {
        return $http ({
            method: "GET",
            url: `https://app.ticketmaster.com/discovery/v2/events.json?keyword=${keyword}&zipcode=${zipCode}&countryCode=US&startDateTime=${startDate}&endDateTime=${endDate}&apikey=ar4LYjeBXX8Yk3PTj7FmCaAZmtQPqMpZ`
        }).then((data) => {
            self.jsonPayload = data;
            return self.jsonPayload;
        });
    };
    
    self.getJSON = () => {
        return jsonPayload;
    }
}

angular
    .module("App")
    .service("Service", Service)