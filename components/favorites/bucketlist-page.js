"use strict";

const bucketlistPage = {
    templateUrl: "components/favorites/bucketlist-page.html",
    controller: ["Service", function(Service){
        const vm = this;
        vm.favList = Service.getFav();
        vm.removeFav = (index) => {
            Service.removeEvent(index);
            Service.getFav();
        }
    }]
}

angular
.module("App")
.component("bucketlistPage", bucketlistPage);