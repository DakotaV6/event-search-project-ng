"use strict"
const searchCriteria = {

    templateUrl: "components/search-criteria/search-criteria.html",
    controller: ["Service", function(Service){
        const vm = this;
        vm.searchPara = {
            keyword: "",
            zipCode: "",
            startDate: "",
            endDate: "",
        };
        vm.eventSearch = (searchPara) => {
            const beginDate = searchPara.startDate.toISOString().replace(/:\s*/g, "%3a");
            searchPara.startDate = beginDate.split("").splice(0, beginDate.length - 5).join("");
            const finishDate = searchPara.endDate.toISOString().replace(/:\s*/g, "%3a");
            searchPara.endDate = finishDate.split("").splice(0, finishDate.length - 5).join("");
            Service.searchTM(searchPara);
        };
    }]

}

angular
    .module("App")
    .component("searchCriteria", searchCriteria);