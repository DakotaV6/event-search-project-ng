"use strict"
const searchCriteria = {

    templateUrl: "components/search-criteria/search-criteria.html",
    controller: ["Service", function(Service){
        const vm = this;
        vm.eventSearch = (keyword, zipCode, startDate, endDate) => {
            Service.searchTM(keyword, zipCode, startDate, endDate);
        };
        vm.loadEvents = () => {
            Service.loadEventList();
        }
    }]

}

angular
    .module("App")
    .component("searchCriteria", searchCriteria);