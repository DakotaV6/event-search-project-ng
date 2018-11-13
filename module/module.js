angular
    .module("App", ["ngRoute"])
    .config(["$routeProvider", ($routeProvider) => {
        $routeProvider
            .when("/home", {
                template: "<home></home>"
            })
            .when("/search", {
                template: "<search-criteria></search-criteria>"
            })
            .when("/event-list", {
                template: "<event-list></event-list>"
            })
            .when("/favorites", {
                template: "<bucketlist-page></bucketlist-page>"
            })

    }]);