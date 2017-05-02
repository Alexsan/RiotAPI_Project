// var riotApiApp = angular.module("riotApiApp", ["ngResource", "ngRoute", "riotApiControllers"]);
// riotApiApp.config(["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider) {
	// $routeProvider.when("/test", {
        // templateUrl: "views/test_view.html",
        // controller: "test"
    // }).otherwise({
		// redirectTo: ""
    // });
	// $locationProvider.html5Mode(true);
// }]);

var riotApiApp = angular.module("riotApiApp", ["ngResource", "ngRoute", "riotApiControllers"]);
riotApiApp.config(["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider) {
    $routeProvider.when("/summoner-by-name", {
        templateUrl: "summoner-views/summoner-by-name.html",
        controller: "summoner-by-name"
    }).when("/summoner-by-id", {
        templateUrl: "summoner-views/summoner-by-id.html",
        controller: "summoner-by-id"
    }).when("/summoner-masteries", {
        templateUrl: "summoner-views/summoner-masteries.html",
        controller: "summoner-masteries"
    }).when("/summoner-name", {
        templateUrl: "summoner-views/summoner-name.html",
        controller: "summoner-name"
    }).when("/summoner-runes", {
        templateUrl: "summoner-views/summoner-runes.html",
        controller: "summoner-runes"
    }).when("/champion-list", {
        templateUrl: "champion-views/champion-list.html",
        controller: "champion-list"
    }).when("/champion-by-id", {
        templateUrl: "champion-views/champion-by-id.html",
        controller: "champion-by-id"
    }).when("/current-game", {
        templateUrl: "current-game-views/current-game.html",
        controller: "current-game"
    }).when("/featured-game", {
        templateUrl: "featured-game-views/featured-game.html",
        controller: "featured-game"
    }).when("/game-stats", {
        templateUrl: "game-stats-views/game-stats.html",
        controller: "game-stats"
    }).when("/league-by-summonerId", {
        templateUrl: "league-views/league-by-summonerId.html",
        controller: "league-by-summonerId"
    }).when("/leagueEntry-by-summonerId", {
        templateUrl: "league-views/leagueEntry-by-summonerId.html",
        controller: "leagueEntry-by-summonerId"
    }).when("/league-by-teamId", {
        templateUrl: "league-views/league-by-teamId.html",
        controller: "league-by-teamId"
    }).when("/leagueEntry-by-teamId", {
        templateUrl: "league-views/leagueEntry-by-teamId.html",
        controller: "leagueEntry-by-teamId"
    }).when("/challengerLeague", {
        templateUrl: "league-views/challengerLeague.html",
        controller: "challengerLeague"
    }).when("/masterLeague", {
        templateUrl: "league-views/masterLeague.html",
        controller: "masterLeague"
    }).when("/static-data-champions", {
        templateUrl: "static-data-views/static-data-champions.html",
        controller: "static-data-champions"
    }).when("/static-data-championsById", {
        templateUrl: "static-data-views/static-data-championsById.html",
        controller: "static-data-championsById"
    }).when("/static-data-items", {
        templateUrl: "static-data-views/static-data-items.html",
        controller: "static-data-items"
    }).when("/static-data-itemsById", {
        templateUrl: "static-data-views/static-data-itemsById.html",
        controller: "static-data-itemsById"
    }).when("/static-data-languageStrings", {
        templateUrl: "static-data-views/static-data-languageStrings.html",
        controller: "static-data-languageStrings"
    }).when("/static-data-languages", {
        templateUrl: "static-data-views/static-data-languages.html",
        controller: "static-data-languages"
    }).when("/static-data-maps", {
        templateUrl: "static-data-views/static-data-maps.html",
        controller: "static-data-maps"
    }).when("/static-data-masteries", {
        templateUrl: "static-data-views/static-data-masteries.html",
        controller: "static-data-masteries"
    }).when("/static-data-masteriesById", {
        templateUrl: "static-data-views/static-data-masteriesById.html",
        controller: "static-data-masteriesById"
    }).when("/static-data-realms", {
        templateUrl: "static-data-views/static-data-realms.html",
        controller: "static-data-realms"
    }).when("/static-data-runes", {
        templateUrl: "static-data-views/static-data-runes.html",
        controller: "static-data-runes"
    }).when("/static-data-runesById", {
        templateUrl: "static-data-views/static-data-runesById.html",
        controller: "static-data-runesById"
    }).when("/static-data-summonerSpells", {
        templateUrl: "static-data-views/static-data-summonerSpells.html",
        controller: "static-data-summonerSpells"
    }).when("/static-data-summonerSpellsById", {
        templateUrl: "static-data-views/static-data-summonerSpellsById.html",
        controller: "static-data-summonerSpellsById"
    }).when("/static-data-versions", {
        templateUrl: "static-data-views/static-data-versions.html",
        controller: "static-data-versions"
    }).when("/shards", {
        templateUrl: "status-views/shards.html",
        controller: "shards"
    }).when("/shardsByRegion", {
        templateUrl: "status-views/shardsByRegion.html",
        controller: "shardsByRegion"
    }).when("/matchByMatchId", {
        templateUrl: "match-views/matchByMatchId.html",
        controller: "matchByMatchId"
    }).when("/matchlistBySummonerId", {
        templateUrl: "matchlist-views/matchlistBySummonerId.html",
        controller: "matchlistBySummonerId"
    }).when("/rankedStats", {
        templateUrl: "stats-views/rankedStats.html",
        controller: "rankedStats"
    }).when("/summaryStats", {
        templateUrl: "stats-views/summaryStats.html",
        controller: "summaryStats"
    }).when("/teamBySummonerId", {
        templateUrl: "team-views/teamBySummonerId.html",
        controller: "teamBySummonerId"
    }).when("/teamByTeamId", {
        templateUrl: "team-views/teamByTeamId.html",
        controller: "teamByTeamId"
    }).otherwise({
		redirectTo: ""
    });
	$locationProvider.html5Mode(true);
}]);
