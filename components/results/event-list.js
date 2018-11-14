"use strict"
const eventList = {
    templateUrl: "components/results/event-list.html",
    controller: ["Service", function(Service){
        const vm = this;
        vm.eventData = Service.getJSON();
        vm.events = vm.eventData.data._embedded.events;
        // console.log(vm.events);

        // events.data._embedded.events //List of events (array of event objects)
        // [index].dates.start.localDate // Date in format: "yyyy-MM-dd"
        // [index]._embedded.venues[0].address.line1 // Location Address
        // [index]._embedded.venues[0].city.name // Location City
        // [index].name // Event Name
        // [index]._embedded.venues[""0""].name // Venue Name
        // [index].url // Link to event in TM
    }]
}

angular
    .module("App")
    .component("eventList", eventList)