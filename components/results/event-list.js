"use strict"
const eventList = {
    templateUrl: "components/results/event-list.html",
    controller: ["Service", function(Service){
        const vm = this;
        vm.eventData = Service.getJSON();
        vm.events = vm.eventData.data._embedded.events;
        vm.saveFav = (event) => {
            Service.setFav(event);
        };
        console.log(vm.events);
    }]
}

angular
    .module("App")
    .component("eventList", eventList)