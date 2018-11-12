"use strict"
const searchCriteria = {

    template: `<input type="text" placeholder="search1">
                <button>Search</button>`,



    controller: [function(){


        const vm=this;


    }] 

}

angular
    .module("App")
    .component("searchCriteria", searchCriteria);