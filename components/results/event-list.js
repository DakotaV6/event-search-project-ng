"use strict"
const eventList = {
    templateUrl: "components/results/event-list.html",
    controller: ["Service", function(Service){
        const vm = this;
        vm.eventData = Service.getJSON();
        vm.events = vm.eventData.data._embedded.events;
        console.log(vm.events);
        vm.saveFav = (event) => {
            Service.setFav(event);
        };
       vm.noResultsFound = () => {
            if(vm.events.length < 1){
                return true;
            } else {
                return false;
            }
        };
        
    }]
}

angular
    .module("App")
    .component("eventList", eventList)




