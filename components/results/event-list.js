"use strict"
const eventList = {

    templateUrl: "components/results/event-list.html",

//we will two child components, bucketListPage, and the other one is event
    controller: [function(){
        const vm= this;

ff
        vm.saveFav = (fav) => {
            Service.setFavData(fav);
        }
    }
    ]
}

angular
    .module("App")
    .component("eventList", eventList)