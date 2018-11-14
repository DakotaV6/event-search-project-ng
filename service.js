"use strict"
function Service($location, $http){

    const self = this;
    self.jsonPayload = null;
    self.bucket = [];
    self.setFav = (fav) => {
        self.bucket.push(fav);
    };
    self.getFav = () =>{
        return self.bucket;
    };
    self.removeEvent = (index) => {
        self.bucket.splice(index, 1);
    };
    self.loadSearchSection = () =>{
        $location.path("/search");
    }
    self.loadFavs = () => {
        $location.path("/favorites");
    }
    self.searchTM = (searchPara) => {
        return $http ({
            method: "GET",
            url: `https://app.ticketmaster.com/discovery/v2/events.json?apikey=ar4LYjeBXX8Yk3PTj7FmCaAZmtQPqMpZ&keyword=${searchPara.keyword}&postalCode=${searchPara.zipCode}&startDateTime=${searchPara.startDate}Z&endDateTime=${searchPara.endDate}Z&countryCode=US`
        }).then((data) => {
            // console.log(data);
            self.jsonPayload = data;
            $location.path("/event-list");
            return self.jsonPayload;
        });
    };
    
    self.getJSON = () => {
        return self.jsonPayload;
    }
}

angular
    .module("App")
    .service("Service", Service)
