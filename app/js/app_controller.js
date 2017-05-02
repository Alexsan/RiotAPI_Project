// var riotApiControllers = angular.module('riotApiControllers', []);

// riotApiControllers.controller('test', ['$scope', '$http', '$resource', function($scope, $http, $resource) {
// }]);

var riotApiControllers = angular.module('riotApiControllers', []);
riotApiControllers.factory('commentCode', ['$window', function()
{
	return function()
	{
		/** Disqus Code Section **/
		$(document.body).on('click', '.show-comments', function(){
			  var disqus_shortname = 'heimerlode'; // Replace this value with *your* username.

			if (typeof(disqus_loaded) == "undefined" || !disqus_loaded) {
				  disqus_loaded = 1;
				  $.ajax({
						  type: "GET",
						  url: "//" + disqus_shortname + ".disqus.com/embed.js",
						  dataType: "script",
						  cache: true
				  });
			}
			  $(this).html('Hide Comments');
			  $("#disqus_thread").show();
			  $(this).removeClass('show-comments').addClass('hide-comments');
		});
		
		$(document.body).on('click', '.hide-comments', function()
		{
			  $(this).html('Show Comments');
			  $(this).removeClass('hide-comments').addClass('show-comments');
			  $("#disqus_thread").hide();
		});
	/** !Disqus Code Section **/
	};
}]);

var regions = {
	availableOptions: [
		{id: '1', name: 'br'},
		{id: '2', name: 'eune'},
		{id: '3', name: 'euw'},
		{id: '4', name: 'kr'},
		{id: '5', name: 'lan'},
		{id: '6', name: 'las'},
		{id: '7', name: 'na'},
		{id: '8', name: 'oce'},
		{id: '9', name: 'ru'},
		{id: '10', name: 'tr'}
	],
	selectedOption: {id: '7', name: 'na'} //This sets the default value of the select in the ui
};

var platform = {
	availableOptions: [
		{id: '1', name: 'NA1'},
		{id: '2', name: 'BR1'},
		{id: '3', name: 'LA1'},
		{id: '4', name: 'LA2'},
		{id: '5', name: 'OC1'},
		{id: '6', name: 'EUN1'},
		{id: '7', name: 'TR1'},
		{id: '8', name: 'RU'},
		{id: '9', name: 'EUW1'},
		{id: '10', name: 'KR'}
	],
	selectedOption: {id: '1', name: 'NA1'} //This sets the default value of the select in the ui
};
	 
var freeToPlay = {
	availableOptions: [
		{id: '1', name: 'true'},
		{id: '2', name: 'false'}
	],
	selectedOption: {id: '2', name: 'false'}
};

var gameType = {
	availableOptions: [
		{id: '1', name: 'RANKED_SOLO_5x5'},
		{id: '2', name: 'RANKED_TEAM_3x3'},
		{id: '3', name: 'RANKED_TEAM_5x5'}
	],
	selectedOption: {id: '1', name: 'RANKED_SOLO_5x5'} //This sets the default value of the select in the ui
};

var champData = {
	availableOptions: [
		{id: '1', name: 'all'},
		{id: '2', name: 'allytips'},
		{id: '3', name: 'altimages'},
		{id: '4', name: 'blurb'},
		{id: '5', name: 'enemytips'},
		{id: '6', name: 'image'},
		{id: '7', name: 'info'},
		{id: '8', name: 'lore'},
		{id: '9', name: 'partype'},
		{id: '10', name: 'passive'},
		{id: '11', name: 'recommended'},
		{id: '12', name: 'skins'},
		{id: '13', name: 'spells'},
		{id: '14', name: 'stats'},
		{id: '15', name: 'tags'}
	]
};

var dataById = {
	availableOptions: [
	{id: '1', name: 'true'},
	{id: '2', name: 'false'}
	],
	selectedOption: {id: '2', name: 'false'}
}

var itemList = {
	availableOptions: [
		{id: '1', name: 'all'},
		{id: '2', name: 'colloq'},
		{id: '3', name: 'consumeOnFull'},
		{id: '4', name: 'consumed'},
		{id: '5', name: 'depth'},
		{id: '6', name: 'from'},
		{id: '7', name: 'gold'},
		{id: '8', name: 'groups'},
		{id: '9', name: 'hideFromAll'},
		{id: '10', name: 'image'},
		{id: '11', name: 'inStore'},
		{id: '12', name: 'into'},
		{id: '13', name: 'maps'},
		{id: '14', name: 'requiredChampion'},
		{id: '15', name: 'sanitizedDescription'},
		{id: '16', name: 'specialRecipe'},
		{id: '17', name: 'stacks'},
		{id: '18', name: 'stats'},
		{id: '19', name: 'tags'},
		{id: '20', name: 'tree'}
	]
};

var regions_alt = {
	availableOptions: [
		{id: '1', name: 'br'},
		{id: '2', name: 'eune'},
		{id: '3', name: 'euw'},
		{id: '4', name: 'kr'},
		{id: '5', name: 'lan'},
		{id: '6', name: 'las'},
		{id: '7', name: 'na'},
		{id: '8', name: 'oce'},
		{id: '9', name: 'pbe'},
		{id: '10', name: 'ru'},
		{id: '11', name: 'tr'}
	],
	selectedOption: {id: '7', name: 'na'}
};

var masteryList = {
	availableOptions: [
		{id: '1', name: 'all'},
		{id: '2', name: 'image'},
		{id: '3', name: 'masteryTree'},
		{id: '4', name: 'prereq'},
		{id: '5', name: 'ranks'},
		{id: '6', name: 'sanitizedDescription'},
		{id: '7', name: 'tree'},
	]
};

var runeList = {
	availableOptions: [
		{id: '1', name: 'all'},
		{id: '2', name: 'basic'},
		{id: '3', name: 'colloq'},
		{id: '4', name: 'consumeOnFull'},
		{id: '5', name: 'consumed'},
		{id: '6', name: 'depth'},
		{id: '7', name: 'from'},
		{id: '8', name: 'gold'},
		{id: '9', name: 'hideFromAll'},
		{id: '10', name: 'image'},
		{id: '11', name: 'inStore'},
		{id: '12', name: 'into'},
		{id: '13', name: 'maps'},
		{id: '14', name: 'requiredChampion'},
		{id: '15', name: 'sanitizedDescription'},
		{id: '16', name: 'specialRecipe'},
		{id: '17', name: 'stacks'},
		{id: '18', name: 'stats'},
		{id: '19', name: 'tags'},
	]
};

var spellList = {
	availableOptions: [
		{id: '1', name: 'all'},
		{id: '2', name: 'cooldown'},
		{id: '3', name: 'cooldownBurn'},
		{id: '4', name: 'cost'},
		{id: '5', name: 'costBurn'},
		{id: '6', name: 'costType'},
		{id: '7', name: 'effect'},
		{id: '8', name: 'effectBurn'},
		{id: '9', name: 'image'},
		{id: '10', name: 'key'},
		{id: '11', name: 'leveltip'},
		{id: '12', name: 'maxrank'},
		{id: '13', name: 'modes'},
		{id: '14', name: 'range'},
		{id: '15', name: 'rangeBurn'},
		{id: '16', name: 'resource'},
		{id: '17', name: 'sanitizedDescription'},
		{id: '18', name: 'sanitizedTooltip'},
		{id: '19', name: 'tooltip'},
		{id: '20', name: 'vars'}
	]
};

var includeTimeLine = {
	availableOptions: [
	{id: '1', name: 'true'},
	{id: '2', name: 'false'}
	],
	selectedOption: {id: '1', name: 'true'}
}

var seasons = {
	availableOptions: [
	{id: '1', name: 'PRESEASON3'},
	{id: '2', name: 'SEASON3'},
	{id: '3', name: 'PRESEASON2014'},
	{id: '4', name: 'SEASON2014'},
	{id: '5', name: 'PRESEASON2015'},
	{id: '6', name: 'SEASON2015'}
	]
}

var sBrowser, locale_origForm, sUsrAg = navigator.userAgent;

if(sUsrAg.indexOf("Chrome") > -1 && sUsrAg.indexOf("Edge") == -1 && sUsrAg.indexOf("MSIE") == -1 && sUsrAg.indexOf("Firefox") == -1 && sUsrAg.indexOf("Safari") > -1 && sUsrAg.indexOf("Edge") == -1 && sUsrAg.indexOf("OPR") == -1) {
    sBrowser = "Google Chrome";
} else if (sUsrAg.indexOf("Safari") > -1 && sUsrAg.indexOf("Edge") == -1 && sUsrAg.indexOf("MSIE") == -1 && sUsrAg.indexOf("Firefox") == -1 && sUsrAg.indexOf("Chrome") == -1 && sUsrAg.indexOf("Edge") == -1 && sUsrAg.indexOf("OPR") == -1) {
    sBrowser = "Apple Safari";
} else if (sUsrAg.indexOf("OPR") > -1) {
    sBrowser = "Opera";
} else if (sUsrAg.indexOf("Firefox") > -1) {
    sBrowser = "Mozilla Firefox";
} else if (sUsrAg.indexOf("MSIE") > -1) {
    sBrowser = "Microsoft Internet Explorer";
} else if (sUsrAg.indexOf("Edge") > -1) {
    sBrowser = "Microsoft Edge";
}

if(sBrowser != "Microsoft Internet Explorer")
{
	locale_origForm = navigator.language;
}
else
{
	locale_origForm = window.navigator.language;
}

locale_newForm = locale_origForm.replace("-", "_");

riotApiControllers.controller('summoner-by-name', ['$scope', '$http', '$resource', 'commentCode', function($scope, $http, $resource, commentCode) {
	$scope.summonerName = {text: 'abc'};	
	$scope.items = regions; 
			$scope.submit = function ()
			{
				setTimeout(function() {
						data = {"summonerName": $scope.summonerName.text, "region": $scope.items.selectedOption.name, "PID": "000"};
							$http({
								method: 'POST',
								url: 'https://localhost:3040',
								dataType: "json",
								headers: {
									"Content-Type": "application/json",
									"Content-Length": data.length
								},
								data: data 
							}).then(function(response) {
								var jsonString = JSON.stringify(response.data, null, '\t');
								document.getElementById("results").innerHTML = "<pre><code>"+jsonString+"</code></pre>";
							}, function errorCallback(error) {
								console.log(error);
								document.getElementById("results").innerHTML = "<pre><code>The server returns "+error.data+"</code></pre>";
							});
				}, 1000);
			}
			commentCode();
	// });
}]);

riotApiControllers.controller('summoner-by-id', ['$scope', '$http', '$resource', 'commentCode', function($scope, $http, $resource, commentCode) {
	$scope.summonerId = {text: '23649881'};
	$scope.items = regions;

			$scope.submit = function ()
			{
				setTimeout(function() {
						data = {"summonerId": $scope.summonerId.text, "region": $scope.items.selectedOption.name, "PID": "001"};
							$http({
								method: 'POST',
								url: 'https://localhost:3040',
								dataType: "json",
								headers: {
									"Content-Type": "application/json",
									"Content-Length": data.length
								},
								data: data 
							}).then(function(response) {
								var jsonString = JSON.stringify(response.data, null, '\t');
								document.getElementById("results").innerHTML = "<pre><code>"+jsonString+"</code></pre>";
							}, function errorCallback(error) {
								console.log(error);
								document.getElementById("results").innerHTML = "<pre><code>The server returns "+error.data+"</code></pre>";
							});
				}, 1000);
			}
			commentCode();
	// });
}]);

riotApiControllers.controller('summoner-masteries', ['$scope', '$http', '$resource', 'commentCode', function($scope, $http, $resource, commentCode) {
	$scope.summonerId = {text: '23649881'};
	$scope.items = regions;
			
			$scope.submit = function ()
			{
				setTimeout(function() {
						data = {"summonerId": $scope.summonerId.text, "region": $scope.items.selectedOption.name, "PID": "002"};
							$http({
								method: 'POST',
								url: 'https://localhost:3040',
								dataType: "json",
								headers: {
									"Content-Type": "application/json",
									"Content-Length": data.length
								},
								data: data 
							}).then(function(response) {
								var jsonString = JSON.stringify(response.data, null, '\t');
								document.getElementById("results").innerHTML = "<pre><code>"+jsonString+"</code></pre>";
							}, function errorCallback(error) {
								console.log(error);
								document.getElementById("results").innerHTML = "<pre><code>The server returns "+error.data+"</code></pre>";
							});
				}, 1000);
			}
			commentCode();
	// });
}]);

riotApiControllers.controller('summoner-name', ['$scope', '$http', '$resource', 'commentCode', function($scope, $http, $resource, commentCode) {
	$scope.summonerId = {text: '23649881'};
	$scope.items = regions;
	$scope.$watch('summonerId.text', function (tmpStr) 
	{
			$scope.submit = function ()
			{
				setTimeout(function() {
						data = {"summonerId": $scope.summonerId.text, "region": $scope.items.selectedOption.name, "PID": "003"};
							$http({
								method: 'POST',
								url: 'https://localhost:3040',
								dataType: "json",
								headers: {
									"Content-Type": "application/json",
									"Content-Length": data.length
								},
								data: data 
							}).then(function(response) {
								var jsonString = JSON.stringify(response.data, null, '\t');
								document.getElementById("results").innerHTML = "<pre><code>"+jsonString+"</code></pre>";
							}, function errorCallback(error) {
								console.log(error);
								document.getElementById("results").innerHTML = "<pre><code>The server returns "+error.data+"</code></pre>";
							});
				}, 1000);
			}
			commentCode();
	});
}]);

riotApiControllers.controller('summoner-runes', ['$scope', '$http', '$resource', 'commentCode', function($scope, $http, $resource, commentCode) {
	$scope.summonerId = {text: '23649881'};
	$scope.items = regions;	
	// $scope.$watch('summonerId.text', function (tmpStr) 
	// {
			// $scope.fetchData = function ()
			$scope.submit = function ()
			{
				// if (!tmpStr || tmpStr.length == 0)
					// return 0;
				setTimeout(function() {
					// if (tmpStr === $scope.summonerId.text)
					// {
						data = {"summonerId": $scope.summonerId.text, "region": $scope.items.selectedOption.name, "PID": "004"};
							$http({
								method: 'POST',
								// url: 'http://localhost:3000/RiotAPI_Project',
								// url: 'https://localhost:3030/RiotAPI_Project',
								url: 'https://localhost:3040',
								dataType: "json",
								headers: {
									"Content-Type": "application/json",
									"Content-Length": data.length
								},
								data: data 
							}).then(function(response) {
								// $scope.posts = response.data;
								var jsonString = JSON.stringify(response.data, null, '\t');
								document.getElementById("results").innerHTML = "<pre><code>"+jsonString+"</code></pre>";
							}, function errorCallback(error) {
								console.log(error);
								document.getElementById("results").innerHTML = "<pre><code>The server returns "+error.data+"</code></pre>";
							});
					// }
				// };
				}, 1000);
			}
			commentCode();
	// });
}]);

riotApiControllers.controller('champion-list', ['$scope', '$http', '$resource', 'commentCode', function($scope, $http, $resource, commentCode) {
	// $scope.summonerName = {text: 'abc'};	
	$scope.items = freeToPlay;
	$scope.items1 = regions; 
	// $scope.$watch('items.selectedOption', function (tmpStr) 
	// {
			// // $scope.fetchData = function ()
			$scope.submit = function ()
			{
				// if (!tmpStr || tmpStr.length == 0)
					// return 0;
				setTimeout(function() {
					// if (tmpStr === $scope.summonerName.text)
					// {
						data = {"freeToPlay": $scope.items.selectedOption.name, "region": $scope.items1.selectedOption.name, "PID": "005"};
							$http({
								method: 'POST',
								// url: 'http://localhost:3000/RiotAPI_Project',
								// url: 'https://localhost:3030/RiotAPI_Project',
								url: 'https://localhost:3040',
								dataType: "json",
								headers: {
									//"User-Agent": "NodeJS/1.0",
									// "Content-Type": "application/x-www-form-urlencoded",
									"Content-Type": "application/json",
									"Content-Length": data.length
								},
								// params: {summonerName: $scope.summonerName.text}
								data: data 
							}).then(function(response) {
								// $scope.posts = response.data;
								var jsonString = JSON.stringify(response.data, null, '\t');
								document.getElementById("results").innerHTML = "<pre><code>"+jsonString+"</code></pre>";
							}, function errorCallback(error) {
								console.log(error);
								document.getElementById("results").innerHTML = "<pre><code>The server returns "+error.data+"</code></pre>";
							});
					// }
				// };
				}, 1000);
			}
			commentCode();
	// });
}]);

riotApiControllers.controller('champion-by-id', ['$scope', '$http', '$resource', 'commentCode', function($scope, $http, $resource, commentCode) {
	$scope.championId = {text: '266'};
	$scope.items = regions;	
	// $scope.$watch('championId.text', function (tmpStr) 
	// {
			// $scope.fetchData = function ()
			$scope.submit = function ()
			{
				// if (!tmpStr || tmpStr.length == 0)
					// return 0;
				setTimeout(function() {
					// if (tmpStr === $scope.championId.text)
					// {
						data = {"championId": $scope.championId.text, "region": $scope.items.selectedOption.name, "PID": "006"};
							$http({
								method: 'POST',
								// url: 'http://localhost:3000/RiotAPI_Project',
								// url: 'https://localhost:3030/RiotAPI_Project',
								url: 'https://localhost:3040',
								dataType: "json",
								headers: {
									"Content-Type": "application/json",
									"Content-Length": data.length
								},
								data: data 
							}).then(function(response) {
								// $scope.posts = response.data;
								var jsonString = JSON.stringify(response.data, null, '\t');
								document.getElementById("results").innerHTML = "<pre><code>"+jsonString+"</code></pre>";
							}, function errorCallback(error) {
								console.log(error);
								document.getElementById("results").innerHTML = "<pre><code>The server returns "+error.data+"</code></pre>";
							});
					// }
				// };
				}, 1000);
			}
			
			commentCode();
	// });
}]);

riotApiControllers.controller('current-game', ['$scope', '$http', '$resource', 'commentCode', function($scope, $http, $resource, commentCode) {
	$scope.summonerId = {text: '23649881'};	
	$scope.items = platform;
	
	$scope.submit = function ()
	{
		if($scope.items.selectedOption.name == 'NA1')
		{
			$scope.items1 = {selectedOption: {id: '7', name: 'na'}};
		}
		else if($scope.items.selectedOption.name == 'BR1')
		{
			$scope.items1 = {selectedOption: {id: '1', name: 'br'}};
		}
		else if($scope.items.selectedOption.name == 'LA1')
		{
			$scope.items1 = {selectedOption: {id: '5', name: 'lan'}};
		}
		else if($scope.items.selectedOption.name == 'LA2')
		{
			$scope.items1 = {selectedOption: {id: '6', name: 'las'}};
		}
		else if($scope.items.selectedOption.name == 'OC1')
		{
			$scope.items1 = {selectedOption: {id: '8', name: 'oce'}};
		}
		else if($scope.items.selectedOption.name == 'EUN1')
		{
			$scope.items1 = {selectedOption: {id: '7', name: 'eune'}};
		}
		else if($scope.items.selectedOption.name == 'TR1')
		{
			$scope.items1 = {selectedOption: {id: '7', name: 'na'}};
		}
		else if($scope.items.selectedOption.name == 'RU')
		{
			$scope.items1 = {selectedOption: {id: '9', name: 'ru'}};
		}
		else if($scope.items.selectedOption.name == 'EUW1')
		{
			$scope.items1 = {selectedOption: {id: '2', name: 'eune'}};
		}
		else if($scope.items.selectedOption.name == 'KR1')
		{
			$scope.items1 = {selectedOption: {id: '4', name: 'kr'}};
		}
		else
		{
			$scope.items1 = {selectedOption: {id: '7', name: 'na'}};
		}
		setTimeout(function() {
				data = {"summonerId": $scope.summonerId.text, "platformId": $scope.items.selectedOption.name, "region": $scope.items1.selectedOption.name, "PID": "007"};
					$http({
						method: 'POST',
						// url: 'http://localhost:3000/RiotAPI_Project',
						// url: 'https://localhost:3030/RiotAPI_Project',
						url: 'https://localhost:3040',
						dataType: "json",
						headers: {
							//"User-Agent": "NodeJS/1.0",
							// "Content-Type": "application/x-www-form-urlencoded",
							"Content-Type": "application/json",
							"Content-Length": data.length
						},
						// params: {summonerName: $scope.summonerName.text}
						data: data 
					}).then(function(response) {
						// $scope.posts = response.data;
						var jsonString = JSON.stringify(response.data, null, '\t');
						document.getElementById("results").innerHTML = "<pre><code>"+jsonString+"</code></pre>";
					}, function errorCallback(error) {
								console.log(error);
								document.getElementById("results").innerHTML = "<pre><code>The server returns "+error.data+"</code></pre>";
					});
		}, 1000);
	}
	
	commentCode();	
	
}]);

riotApiControllers.controller('featured-game', ['$scope', '$http', '$resource', 'commentCode', function($scope, $http, $resource, commentCode) {
	$scope.items = regions;	
			$scope.submit = function ()
			{
				setTimeout(function() {
						data = {"region": $scope.items.selectedOption.name, "PID": "008"};
							$http({
								method: 'POST',
								// url: 'http://localhost:3000/RiotAPI_Project',
								// url: 'https://localhost:3030/RiotAPI_Project',
								url: 'https://localhost:3040',
								dataType: "json",
								headers: {
									"Content-Type": "application/json",
									"Content-Length": data.length
								},
								data: data 
							}).then(function(response) {
								// $scope.posts = response.data;
								var jsonString = JSON.stringify(response.data, null, '\t');
								document.getElementById("results").innerHTML = "<pre><code>"+jsonString+"</code></pre>";
							}, function errorCallback(error) {
								console.log(error);
								document.getElementById("results").innerHTML = "<pre><code>The server returns "+error.data+"</code></pre>";
							});
				}, 1000);
			}
			commentCode();
}]);

riotApiControllers.controller('game-stats', ['$scope', '$http', '$resource', 'commentCode', function($scope, $http, $resource, commentCode) {
	$scope.summonerId = {text: '23649881'};
	$scope.items = regions;
	$scope.submit = function ()
	{
		setTimeout(function() {
				data = {"summonerId": $scope.summonerId.text, "region": $scope.items.selectedOption.name, "PID": "009"};
					$http({
						method: 'POST',
						// url: 'http://localhost:3000/RiotAPI_Project',
						// url: 'https://localhost:3030/RiotAPI_Project',
						url: 'https://localhost:3040',
						dataType: "json",
						headers: {
							"Content-Type": "application/json",
							"Content-Length": data.length
						},
						data: data 
					}).then(function(response) {
						// $scope.posts = response.data;
						var jsonString = JSON.stringify(response.data, null, '\t');
						document.getElementById("results").innerHTML = "<pre><code>"+jsonString+"</code></pre>";
					}, function errorCallback(error) {
								console.log(error);
								document.getElementById("results").innerHTML = "<pre><code>The server returns "+error.data+"</code></pre>";
					});
		}, 1000);
	}
	commentCode();
}]);

riotApiControllers.controller('league-by-summonerId', ['$scope', '$http', '$resource', 'commentCode', function($scope, $http, $resource, commentCode) {
	$scope.summonerId = {text: '23649881'};
	$scope.items = regions;
	$scope.submit = function ()
	{
		setTimeout(function() {
				data = {"summonerId": $scope.summonerId.text, "region": $scope.items.selectedOption.name, "PID": "010"};
					$http({
						method: 'POST',
						// url: 'http://localhost:3000/RiotAPI_Project',
						// url: 'https://localhost:3030/RiotAPI_Project',
						url: 'https://localhost:3040',
						dataType: "json",
						headers: {
							"Content-Type": "application/json",
							"Content-Length": data.length
						},
						data: data 
					}).then(function(response) {
						// $scope.posts = response.data;
						var jsonString = JSON.stringify(response.data, null, '\t');
						document.getElementById("results").innerHTML = "<pre><code>"+jsonString+"</code></pre>";
					}, function errorCallback(error) {
								console.log(error);
								document.getElementById("results").innerHTML = "<pre><code>The server returns "+error.data+"</code></pre>";
					});
		}, 1000);
	}
	commentCode();
}]);

riotApiControllers.controller('leagueEntry-by-summonerId', ['$scope', '$http', '$resource', 'commentCode', function($scope, $http, $resource, commentCode) {
	$scope.summonerId = {text: '23649881'};
	$scope.items = regions;
	$scope.submit = function ()
	{
		setTimeout(function() {
				data = {"summonerId": $scope.summonerId.text, "region": $scope.items.selectedOption.name, "PID": "011"};
					$http({
						method: 'POST',
						// url: 'http://localhost:3000/RiotAPI_Project',
						// url: 'https://localhost:3030/RiotAPI_Project',
						url: 'https://localhost:3040',
						dataType: "json",
						headers: {
							"Content-Type": "application/json",
							"Content-Length": data.length
						},
						data: data 
					}).then(function(response) {
						// $scope.posts = response.data;
						var jsonString = JSON.stringify(response.data, null, '\t');
						document.getElementById("results").innerHTML = "<pre><code>"+jsonString+"</code></pre>";
					}, function errorCallback(error) {
						console.log(error);
						document.getElementById("results").innerHTML = "<pre><code>The server returns "+error.data+"</code></pre>";
					});
		}, 1000);
	}
	commentCode();
}]);

riotApiControllers.controller('league-by-teamId', ['$scope', '$http', '$resource', 'commentCode', function($scope, $http, $resource, commentCode) {
	$scope.teamId = {text: 'TEAM-59ffb7c0-9864-11e4-a636-c81f66dd45c9'};
	$scope.items = regions;
	$scope.submit = function ()
	{
		setTimeout(function() {
				data = {"teamId": $scope.teamId.text, "region": $scope.items.selectedOption.name, "PID": "012"};
					$http({
						method: 'POST',
						// url: 'http://localhost:3000/RiotAPI_Project',
						// url: 'https://localhost:3030/RiotAPI_Project',
						url: 'https://localhost:3040',
						dataType: "json",
						headers: {
							"Content-Type": "application/json",
							"Content-Length": data.length
						},
						data: data 
					}).then(function(response) {
						// $scope.posts = response.data;
						var jsonString = JSON.stringify(response.data, null, '\t');
						document.getElementById("results").innerHTML = "<pre><code>"+jsonString+"</code></pre>";
					}, function errorCallback(error) {
						console.log(error);
						document.getElementById("results").innerHTML = "<pre><code>The server returns "+error.data+"</code></pre>";
					});
		}, 1000);
	}
	commentCode();
}]);

riotApiControllers.controller('leagueEntry-by-teamId', ['$scope', '$http', '$resource', 'commentCode', function($scope, $http, $resource, commentCode) {
	$scope.teamId = {text: 'TEAM-59ffb7c0-9864-11e4-a636-c81f66dd45c9'};
	$scope.items = regions;
	$scope.submit = function ()
	{
		setTimeout(function() {
				data = {"teamId": $scope.teamId.text, "region": $scope.items.selectedOption.name, "PID": "013"};
					$http({
						method: 'POST',
						// url: 'http://localhost:3000/RiotAPI_Project',
						// url: 'https://localhost:3030/RiotAPI_Project',
						url: 'https://localhost:3040',
						dataType: "json",
						headers: {
							"Content-Type": "application/json",
							"Content-Length": data.length
						},
						data: data 
					}).then(function(response) {
						// $scope.posts = response.data;
						var jsonString = JSON.stringify(response.data, null, '\t');
						document.getElementById("results").innerHTML = "<pre><code>"+jsonString+"</code></pre>";
					}, function errorCallback(error) {
						console.log(error);
						document.getElementById("results").innerHTML = "<pre><code>The server returns "+error.data+"</code></pre>";
					});
		}, 1000);
	}
	commentCode();
}]);

riotApiControllers.controller('challengerLeague', ['$scope', '$http', '$resource', 'commentCode', function($scope, $http, $resource, commentCode) {
	$scope.items = gameType;
	$scope.items1 = regions;
	$scope.submit = function ()
	{
		setTimeout(function() {
				data = {"gameType": $scope.items.selectedOption.name, "region": $scope.items1.selectedOption.name, "PID": "014"};
					$http({
						method: 'POST',
						// url: 'http://localhost:3000/RiotAPI_Project',
						// url: 'https://localhost:3030/RiotAPI_Project',
						url: 'https://localhost:3040',
						dataType: "json",
						headers: {
							"Content-Type": "application/json",
							"Content-Length": data.length
						},
						data: data 
					}).then(function(response) {
						// $scope.posts = response.data;
						var jsonString = JSON.stringify(response.data, null, '\t');
						document.getElementById("results").innerHTML = "<pre><code>"+jsonString+"</code></pre>";
					}, function errorCallback(error) {
						console.log(error);
						document.getElementById("results").innerHTML = "<pre><code>The server returns "+error.data+"</code></pre>";
					});
		}, 1000);
	}
	commentCode();
}]);

riotApiControllers.controller('masterLeague', ['$scope', '$http', '$resource', 'commentCode', function($scope, $http, $resource, commentCode) {
	$scope.items = gameType;
	$scope.items1 = regions;
	$scope.submit = function ()
	{
		setTimeout(function() {
				data = {"gameType": $scope.items.selectedOption.name, "region": $scope.items1.selectedOption.name, "PID": "015"};
					$http({
						method: 'POST',
						// url: 'http://localhost:3000/RiotAPI_Project',
						// url: 'https://localhost:3030/RiotAPI_Project',
						url: 'https://localhost:3040',
						dataType: "json",
						headers: {
							"Content-Type": "application/json",
							"Content-Length": data.length
						},
						data: data 
					}).then(function(response) {
						// $scope.posts = response.data;
						var jsonString = JSON.stringify(response.data, null, '\t');
						document.getElementById("results").innerHTML = "<pre><code>"+jsonString+"</code></pre>";
					}, function errorCallback(error) {
						console.log(error);
						document.getElementById("results").innerHTML = "<pre><code>The server returns "+error.data+"</code></pre>";
					});
		}, 1000);
	}
	commentCode();
}]);

riotApiControllers.controller('static-data-champions', ['$scope', '$http', '$resource', 'commentCode', function($scope, $http, $resource, commentCode) {
	$scope.locale = {text: locale_newForm};
	$scope.version = {text: ''};
	$scope.items = dataById;
	$scope.items1 = champData;
	// $scope.selectedOption = [$scope.items.availableOptions[1], $scope.items.availableOptions[2]];
	$scope.selectedOption1 = [];
	$scope.items2 = regions;
	
	$scope.submit = function ()
	{	
		$scope.champDataArr = [];
		for(var index = 0; index < $scope.selectedOption1.length; ++index)
		{
			$scope.champDataArr.push($scope.selectedOption1[index].name)
		
		}
		
		// console.log($scope.champDataArr);	
		
		setTimeout(function() {
				data = {"locale": $scope.locale.text, "version": $scope.version.text, "dataId": $scope.items.selectedOption.name, "champData": $scope.champDataArr, "region": $scope.items2.selectedOption.name, "PID": "016"};
					$http({
						method: 'POST',
						// url: 'http://localhost:3000/RiotAPI_Project',
						// url: 'https://localhost:3030/RiotAPI_Project',
						url: 'https://localhost:3040',
						dataType: "json",
						headers: {
							"Content-Type": "application/json",
							"Content-Length": data.length
						},
						data: data 
					}).then(function(response) {
						// $scope.posts = response.data;
						var jsonString = JSON.stringify(response.data, null, '\t');
						document.getElementById("results").innerHTML = "<pre><code>"+jsonString+"</code></pre>";
					}, function errorCallback(error) {
						console.log(error);
						document.getElementById("results").innerHTML = "<pre><code>The server returns "+error.data+"</code></pre>";
					});
		}, 1000);
	}
	commentCode();
}]);

riotApiControllers.controller('static-data-championsById', ['$scope', '$http', '$resource', 'commentCode', function($scope, $http, $resource, commentCode) {
	$scope.locale = {text: locale_newForm};
	$scope.version = {text: ''};
	$scope.championId = {text: '412'};
	$scope.items1 = champData;
	$scope.selectedOption1 = [];
	$scope.items2 = regions;
	
	$scope.submit = function ()
	{	
		$scope.champDataArr = [];
		for(var index = 0; index < $scope.selectedOption1.length; ++index)
		{
			$scope.champDataArr.push($scope.selectedOption1[index].name)
		
		}
		
		setTimeout(function() {
				data = {"locale": $scope.locale.text, "version": $scope.version.text, "championId": $scope.championId.text, "champData": $scope.champDataArr, "region": $scope.items2.selectedOption.name, "PID": "017"};
					$http({
						method: 'POST',
						// url: 'http://localhost:3000/RiotAPI_Project',
						// url: 'https://localhost:3030/RiotAPI_Project',
						url: 'https://localhost:3040',
						dataType: "json",
						headers: {
							"Content-Type": "application/json",
							"Content-Length": data.length
						},
						data: data 
					}).then(function(response) {
						// $scope.posts = response.data;
						var jsonString = JSON.stringify(response.data, null, '\t');
						document.getElementById("results").innerHTML = "<pre><code>"+jsonString+"</code></pre>";
					}, function errorCallback(error) {
						console.log(error);
						document.getElementById("results").innerHTML = "<pre><code>The server returns "+error.data+"</code></pre>";
					});
		}, 1000);
	}
	commentCode();
}]);

riotApiControllers.controller('static-data-items', ['$scope', '$http', '$resource', 'commentCode', function($scope, $http, $resource, commentCode) {
	$scope.locale = {text: locale_newForm};
	$scope.version = {text: ''};
	$scope.items = itemList;
	$scope.selectedOption = [];
	$scope.items1 = regions;
	
	$scope.submit = function ()
	{	
		$scope.itemListArr = [];
		for(var index = 0; index < $scope.selectedOption.length; ++index)
		{
			$scope.itemListArr.push($scope.selectedOption[index].name)
		
		}
		
		// console.log($scope.champDataArr);	
		
		setTimeout(function() {
				data = {"locale": $scope.locale.text, "version": $scope.version.text, "itemListData": $scope.itemListArr, "region": $scope.items1.selectedOption.name, "PID": "018"};
					$http({
						method: 'POST',
						// url: 'http://localhost:3000/RiotAPI_Project',
						// url: 'https://localhost:3030/RiotAPI_Project',
						url: 'https://localhost:3040',
						dataType: "json",
						headers: {
							"Content-Type": "application/json",
							"Content-Length": data.length
						},
						data: data 
					}).then(function(response) {
						// $scope.posts = response.data;
						var jsonString = JSON.stringify(response.data, null, '\t');
						document.getElementById("results").innerHTML = "<pre><code>"+jsonString+"</code></pre>";
					}, function errorCallback(error) {
						console.log(error);
						document.getElementById("results").innerHTML = "<pre><code>The server returns "+error.data+"</code></pre>";
					});
		}, 1000);
	}
	commentCode();
}]);

riotApiControllers.controller('static-data-itemsById', ['$scope', '$http', '$resource', 'commentCode', function($scope, $http, $resource, commentCode) {
	$scope.locale = {text: locale_newForm};
	$scope.version = {text: ''};
	$scope.itemId = {text: '1001'};
	$scope.items = itemList;
	$scope.selectedOption = [];
	$scope.items1 = regions;
	
	$scope.submit = function ()
	{	
		$scope.itemListArr = [];
		for(var index = 0; index < $scope.selectedOption.length; ++index)
		{
			$scope.itemListArr.push($scope.selectedOption[index].name)
		
		}	
		
		setTimeout(function() {
				data = {"itemId": $scope.itemId.text, "locale": $scope.locale.text, "version": $scope.version.text, "itemListData": $scope.itemListArr, "region": $scope.items1.selectedOption.name, "PID": "019"};
					$http({
						method: 'POST',
						// url: 'http://localhost:3000/RiotAPI_Project',
						// url: 'https://localhost:3030/RiotAPI_Project',
						url: 'https://localhost:3040',
						dataType: "json",
						headers: {
							"Content-Type": "application/json",
							"Content-Length": data.length
						},
						data: data 
					}).then(function(response) {
						// $scope.posts = response.data;
						var jsonString = JSON.stringify(response.data, null, '\t');
						document.getElementById("results").innerHTML = "<pre><code>"+jsonString+"</code></pre>";
					}, function errorCallback(error) {
						console.log(error);
						document.getElementById("results").innerHTML = "<pre><code>The server returns "+error.data+"</code></pre>";
					});
		}, 1000);
	}
	commentCode();
}]);

riotApiControllers.controller('static-data-languageStrings', ['$scope', '$http', '$resource', 'commentCode', function($scope, $http, $resource, commentCode) {
	$scope.locale = {text: locale_newForm};
	$scope.version = {text: ''};
	$scope.items = regions_alt;
	
	$scope.submit = function ()
	{	
		setTimeout(function() {
				data = {"locale": $scope.locale.text, "version": $scope.version.text, "region": $scope.items.selectedOption.name, "PID": "020"};
					$http({
						method: 'POST',
						// url: 'http://localhost:3000/RiotAPI_Project',
						// url: 'https://localhost:3030/RiotAPI_Project',
						url: 'https://localhost:3040',
						dataType: "json",
						headers: {
							"Content-Type": "application/json",
							"Content-Length": data.length
						},
						data: data 
					}).then(function(response) {
						// $scope.posts = response.data;
						var jsonString = JSON.stringify(response.data, null, '\t');
						document.getElementById("results").innerHTML = "<pre><code>"+jsonString+"</code></pre>";
					}, function errorCallback(error) {
						console.log(error);
						document.getElementById("results").innerHTML = "<pre><code>The server returns "+error.data+"</code></pre>";
					});
		}, 1000);
	}
	commentCode();
}]);

riotApiControllers.controller('static-data-languages', ['$scope', '$http', '$resource', 'commentCode', function($scope, $http, $resource, commentCode) {
	$scope.items = regions_alt;
	
	$scope.submit = function ()
	{	
		setTimeout(function() {
				data = {"region": $scope.items.selectedOption.name, "PID": "021"};
					$http({
						method: 'POST',
						// url: 'http://localhost:3000/RiotAPI_Project',
						// url: 'https://localhost:3030/RiotAPI_Project',
						url: 'https://localhost:3040',
						dataType: "json",
						headers: {
							"Content-Type": "application/json",
							"Content-Length": data.length
						},
						data: data 
					}).then(function(response) {
						// $scope.posts = response.data;
						var jsonString = JSON.stringify(response.data, null, '\t');
						document.getElementById("results").innerHTML = "<pre><code>"+jsonString+"</code></pre>";
					}, function errorCallback(error) {
						console.log(error);
						document.getElementById("results").innerHTML = "<pre><code>The server returns "+error.data+"</code></pre>";
					});
		}, 1000);
	}
	commentCode();
}]);

riotApiControllers.controller('static-data-maps', ['$scope', '$http', '$resource','commentCode', function($scope, $http, $resource, commentCode) {
	$scope.locale = {text: locale_newForm};
	$scope.version = {text: ''};
	$scope.items = regions_alt;
	
	$scope.submit = function ()
	{	
		setTimeout(function() {
				data = {"locale": $scope.locale.text, "version": $scope.version.text, "region": $scope.items.selectedOption.name, "PID": "022"};
					$http({
						method: 'POST',
						// url: 'http://localhost:3000/RiotAPI_Project',
						// url: 'https://localhost:3030/RiotAPI_Project',
						url: 'https://localhost:3040',
						dataType: "json",
						headers: {
							"Content-Type": "application/json",
							"Content-Length": data.length
						},
						data: data 
					}).then(function(response) {
						// $scope.posts = response.data;
						var jsonString = JSON.stringify(response.data, null, '\t');
						document.getElementById("results").innerHTML = "<pre><code>"+jsonString+"</code></pre>";
					}, function errorCallback(error) {
						console.log(error);
						document.getElementById("results").innerHTML = "<pre><code>The server returns "+error.data+"</code></pre>";
					});
		}, 1000);
	}
	commentCode();
}]);

riotApiControllers.controller('static-data-masteries', ['$scope', '$http', '$resource', 'commentCode', function($scope, $http, $resource, commentCode) {
	$scope.locale = {text: locale_newForm};
	$scope.version = {text: ''};
	$scope.items = masteryList;
	$scope.selectedOption = [];
	$scope.items1 = regions;
	
	$scope.submit = function ()
	{	
		$scope.itemListArr = [];
		for(var index = 0; index < $scope.selectedOption.length; ++index)
		{
			$scope.itemListArr.push($scope.selectedOption[index].name)
		
		}
		
		// console.log($scope.champDataArr);	
		
		setTimeout(function() {
				data = {"locale": $scope.locale.text, "version": $scope.version.text, "masteryListData": $scope.itemListArr, "region": $scope.items1.selectedOption.name, "PID": "023"};
					$http({
						method: 'POST',
						// url: 'http://localhost:3000/RiotAPI_Project',
						// url: 'https://localhost:3030/RiotAPI_Project',
						url: 'https://localhost:3040',
						dataType: "json",
						headers: {
							"Content-Type": "application/json",
							"Content-Length": data.length
						},
						data: data 
					}).then(function(response) {
						// $scope.posts = response.data;
						var jsonString = JSON.stringify(response.data, null, '\t');
						document.getElementById("results").innerHTML = "<pre><code>"+jsonString+"</code></pre>";
					}, function errorCallback(error) {
						console.log(error);
						document.getElementById("results").innerHTML = "<pre><code>The server returns "+error.data+"</code></pre>";
					});
		}, 1000);
	}
	commentCode();
}]);

riotApiControllers.controller('static-data-masteriesById', ['$scope', '$http', '$resource', 'commentCode', function($scope, $http, $resource, commentCode) {
	$scope.locale = {text: locale_newForm};
	$scope.version = {text: ''};
	$scope.masteryId = {text: '6161'};
	$scope.items = masteryList;
	$scope.selectedOption = [];
	$scope.items1 = regions;
	
	$scope.submit = function ()
	{	
		$scope.masteryListArr = [];
		for(var index = 0; index < $scope.selectedOption.length; ++index)
		{
			$scope.masteryListArr.push($scope.selectedOption[index].name)
		
		}	
		
		setTimeout(function() {
				data = {"masteryId": $scope.masteryId.text, "locale": $scope.locale.text, "version": $scope.version.text, "masteryListData": $scope.masteryListArr, "region": $scope.items1.selectedOption.name, "PID": "024"};
					$http({
						method: 'POST',
						// url: 'http://localhost:3000/RiotAPI_Project',
						// url: 'https://localhost:3030/RiotAPI_Project',
						url: 'https://localhost:3040',
						dataType: "json",
						headers: {
							"Content-Type": "application/json",
							"Content-Length": data.length
						},
						data: data 
					}).then(function(response) {
						// $scope.posts = response.data;
						var jsonString = JSON.stringify(response.data, null, '\t');
						document.getElementById("results").innerHTML = "<pre><code>"+jsonString+"</code></pre>";
					}, function errorCallback(error) {
						console.log(error);
						document.getElementById("results").innerHTML = "<pre><code>The server returns "+error.data+"</code></pre>";
					});
		}, 1000);
	}
	commentCode();
}]);

riotApiControllers.controller('static-data-realms', ['$scope', '$http', '$resource', function($scope, $http, $resource) {
	$scope.items = regions_alt;
	
	$scope.submit = function ()
	{	
		setTimeout(function() {
				data = {"region": $scope.items.selectedOption.name, "PID": "025"};
					$http({
						method: 'POST',
						// url: 'http://localhost:3000/RiotAPI_Project',
						// url: 'https://localhost:3030/RiotAPI_Project',
						url: 'https://localhost:3040',
						dataType: "json",
						headers: {
							"Content-Type": "application/json",
							"Content-Length": data.length
						},
						data: data 
					}).then(function(response) {
						// $scope.posts = response.data;
						var jsonString = JSON.stringify(response.data, null, '\t');
						document.getElementById("results").innerHTML = "<pre><code>"+jsonString+"</code></pre>";
					}, function errorCallback(error) {
						console.log(error);
						document.getElementById("results").innerHTML = "<pre><code>The server returns "+error.data+"</code></pre>";
					});
		}, 1000);
	}
}]);

riotApiControllers.controller('static-data-runes', ['$scope', '$http', '$resource', function($scope, $http, $resource) {
	$scope.locale = {text: locale_newForm};
	$scope.version = {text: ''};
	$scope.items = runeList;
	$scope.selectedOption = [];
	$scope.items1 = regions;
	
	$scope.submit = function ()
	{	
		$scope.runeListArr = [];
		for(var index = 0; index < $scope.selectedOption.length; ++index)
		{
			$scope.runeListArr.push($scope.selectedOption[index].name)
		
		}
		
		// console.log($scope.champDataArr);	
		
		setTimeout(function() {
				data = {"locale": $scope.locale.text, "version": $scope.version.text, "runeListData": $scope.runeListArr, "region": $scope.items1.selectedOption.name, "PID": "026"};
					$http({
						method: 'POST',
						// url: 'http://localhost:3000/RiotAPI_Project',
						// url: 'https://localhost:3030/RiotAPI_Project',
						url: 'https://localhost:3040',
						dataType: "json",
						headers: {
							"Content-Type": "application/json",
							"Content-Length": data.length
						},
						data: data 
					}).then(function(response) {
						// $scope.posts = response.data;
						var jsonString = JSON.stringify(response.data, null, '\t');
						document.getElementById("results").innerHTML = "<pre><code>"+jsonString+"</code></pre>";
					}, function errorCallback(error) {
						console.log(error);
						document.getElementById("results").innerHTML = "<pre><code>The server returns "+error.data+"</code></pre>";
					});
		}, 1000);
	}
}]);

riotApiControllers.controller('static-data-runesById', ['$scope', '$http', '$resource', 'commentCode', function($scope, $http, $resource, commentCode) {
	$scope.locale = {text: locale_newForm};
	$scope.version = {text: ''};
	$scope.runeId = {text: '5001'};
	$scope.items = runeList;
	$scope.selectedOption = [];
	$scope.items1 = regions;
	
	$scope.submit = function ()
	{	
		$scope.runeListArr = [];
		for(var index = 0; index < $scope.selectedOption.length; ++index)
		{
			$scope.runeListArr.push($scope.selectedOption[index].name)
		
		}	
		
		setTimeout(function() {
				data = {"runeId": $scope.runeId.text, "locale": $scope.locale.text, "version": $scope.version.text, "runeListData": $scope.runeListArr, "region": $scope.items1.selectedOption.name, "PID": "027"};
					$http({
						method: 'POST',
						// url: 'http://localhost:3000/RiotAPI_Project',
						// url: 'https://localhost:3030/RiotAPI_Project',
						url: 'https://localhost:3040',
						dataType: "json",
						headers: {
							"Content-Type": "application/json",
							"Content-Length": data.length
						},
						data: data 
					}).then(function(response) {
						// $scope.posts = response.data;
						var jsonString = JSON.stringify(response.data, null, '\t');
						document.getElementById("results").innerHTML = "<pre><code>"+jsonString+"</code></pre>";
					}, function errorCallback(error) {
						console.log(error);
						document.getElementById("results").innerHTML = "<pre><code>The server returns "+error.data+"</code></pre>";
					});
		}, 1000);
	}
	commentCode();
}]);

riotApiControllers.controller('static-data-summonerSpells', ['$scope', '$http', '$resource', 'commentCode', function($scope, $http, $resource, commentCode) {
	$scope.locale = {text: locale_newForm};
	$scope.version = {text: ''};
	$scope.items = dataById;
	$scope.items1 = spellList;
	$scope.selectedOption1 = [];
	$scope.items2 = regions;
	
	$scope.submit = function ()
	{	
		$scope.spellDataArr = [];
		for(var index = 0; index < $scope.selectedOption1.length; ++index)
		{
			$scope.spellDataArr.push($scope.selectedOption1[index].name)
		
		}
		
		// console.log($scope.champDataArr);	
		
		setTimeout(function() {
				data = {"locale": $scope.locale.text, "version": $scope.version.text, "dataId": $scope.items.selectedOption.name, "spellData": $scope.spellDataArr, "region": $scope.items2.selectedOption.name, "PID": "028"};
					$http({
						method: 'POST',
						// url: 'http://localhost:3000/RiotAPI_Project',
						// url: 'https://localhost:3030/RiotAPI_Project',
						url: 'https://localhost:3040',
						dataType: "json",
						headers: {
							"Content-Type": "application/json",
							"Content-Length": data.length
						},
						data: data 
					}).then(function(response) {
						//$scope.posts = response.data;
						var jsonString = JSON.stringify(response.data, null, '\t');
						document.getElementById("results").innerHTML = "<pre><code>"+jsonString+"</code></pre>";
					}, function errorCallback(error) {
						console.log(error);
						document.getElementById("results").innerHTML = "<pre><code>The server returns "+error.data+"</code></pre>";
					});
		}, 1000);
	}
	commentCode();
}]);

riotApiControllers.controller('static-data-summonerSpellsById', ['$scope', '$http', '$resource', 'commentCode', function($scope, $http, $resource, commentCode) {
	$scope.locale = {text: locale_newForm};
	$scope.version = {text: ''};
	$scope.spellId = {text: '1'};
	$scope.items1 = spellList;
	$scope.selectedOption1 = [];
	$scope.items2 = regions;
	
	$scope.submit = function ()
	{	
		$scope.spellDataArr = [];
		for(var index = 0; index < $scope.selectedOption1.length; ++index)
		{
			$scope.spellDataArr.push($scope.selectedOption1[index].name)
		
		}
		
		setTimeout(function() {
				data = {"locale": $scope.locale.text, "version": $scope.version.text, "spellId": $scope.spellId.text, "spellData": $scope.spellDataArr, "region": $scope.items2.selectedOption.name, "PID": "029"};
					$http({
						method: 'POST',
						// url: 'http://localhost:3000/RiotAPI_Project',
						// url: 'https://localhost:3030/RiotAPI_Project',
						url: 'https://localhost:3040',
						dataType: "json",
						headers: {
							"Content-Type": "application/json",
							"Content-Length": data.length
						},
						data: data 
					}).then(function(response) {
						// $scope.posts = response.data;
						// console.log($scope.posts);
						var jsonString = JSON.stringify(response.data, null, '\t');
						document.getElementById("results").innerHTML = "<pre><code>"+jsonString+"</code></pre>";
					}, function errorCallback(error) {
						console.log(error);
						document.getElementById("results").innerHTML = "<pre><code>The server returns "+error.data+"</code></pre>";
					});
		}, 1000);
	}
	commentCode();
}]);

riotApiControllers.controller('static-data-versions', ['$scope', '$http', '$resource', 'commentCode', function($scope, $http, $resource, commentCode) {
	$scope.items = regions_alt;
	
	$scope.submit = function ()
	{	
		setTimeout(function() {
				data = {"region": $scope.items.selectedOption.name, "PID": "030"};
					$http({
						method: 'POST',
						// url: 'http://localhost:3000/RiotAPI_Project',
						// url: 'https://localhost:3030/RiotAPI_Project',
						url: 'https://localhost:3040',
						dataType: "json",
						headers: {
							"Content-Type": "application/json",
							"Content-Length": data.length
						},
						data: data 
					}).then(function(response) {
						// $scope.posts = response.data;
						var jsonString = JSON.stringify(response.data, null, '\t');
						document.getElementById("results").innerHTML = "<pre><code>"+jsonString+"</code></pre>";
					}, function errorCallback(error) {
						console.log(error);
						document.getElementById("results").innerHTML = "<pre><code>The server returns "+error.data+"</code></pre>";
					});
		}, 1000);
	}
	commentCode();
}]);

riotApiControllers.controller('shards', ['$scope', '$http', '$resource', 'commentCode', function($scope, $http, $resource, commentCode) {
	// $scope.submit = function ()
	// {	
		setTimeout(function() {
				data = {"PID": "031"};
					$http({
						method: 'POST',
						// url: 'https://localhost:3030/RiotAPI_Project',
						url: 'https://localhost:3040',
						dataType: "json",
						headers: {
							"Content-Type": "application/json",
							"Content-Length": data.length
						},
						data: data 
					}).then(function(response) {
						// $scope.posts = response.data;
						var jsonString = JSON.stringify(response.data, null, '\t');
						document.getElementById("results").innerHTML = "<pre><code>"+jsonString+"</code></pre>";
					}, function errorCallback(error) {
						console.log(error);
						document.getElementById("results").innerHTML = "<pre><code>The server returns "+error.data+"</code></pre>";
					});
		}, 1000);
		commentCode();
	// }
}]);

riotApiControllers.controller('shardsByRegion', ['$scope', '$http', '$resource', 'commentCode', function($scope, $http, $resource, commentCode) {
	$scope.items = regions_alt;
	
	$scope.submit = function ()
	{	
		setTimeout(function() {
				data = {"region": $scope.items.selectedOption.name, "PID": "032"};
					$http({
						method: 'POST',
						// url: 'http://localhost:3000/RiotAPI_Project',
						// url: 'https://localhost:3030/RiotAPI_Project',
						url: 'https://localhost:3040',
						dataType: "json",
						headers: {
							"Content-Type": "application/json",
							"Content-Length": data.length
						},
						data: data 
					}).then(function(response) {
						// $scope.posts = response.data;
						var jsonString = JSON.stringify(response.data, null, '\t');
						document.getElementById("results").innerHTML = "<pre><code>"+jsonString+"</code></pre>";
					}, function errorCallback(error) {
						console.log(error);
						document.getElementById("results").innerHTML = "<pre><code>The server returns "+error.data+"</code></pre>";
					});
		}, 1000);
	}
	commentCode();
}]);

riotApiControllers.controller('matchByMatchId', ['$scope', '$http', '$resource', 'commentCode', function($scope, $http, $resource, commentCode) {
	$scope.matchId = {text: '1984560386'};
	$scope.items = includeTimeLine;
	$scope.items1 = regions;
	
	$scope.submit = function ()
	{	
		setTimeout(function() {
				data = {"includeTimeLine": $scope.items.selectedOption.name, "matchId": $scope.matchId.text, "region": $scope.items1.selectedOption.name, "PID": "033"};
					$http({
						method: 'POST',
						// url: 'http://localhost:3000/RiotAPI_Project',
						// url: 'https://localhost:3030/RiotAPI_Project',
						url: 'https://localhost:3040',
						dataType: "json",
						headers: {
							"Content-Type": "application/json",
							"Content-Length": data.length
						},
						data: data 
					}).then(function(response) {
						// $scope.posts = response.data;
						var jsonString = JSON.stringify(response.data, null, '\t');
						document.getElementById("results").innerHTML = "<pre><code>"+jsonString+"</code></pre>";
					}, function errorCallback(error) {
						console.log(error);
						document.getElementById("results").innerHTML = "<pre><code>The server returns "+error.data+"</code></pre>";
					});
		}, 1000);
	}
	commentCode();
}]);

riotApiControllers.controller('matchlistBySummonerId', ['$scope', '$http', '$resource', 'commentCode', function($scope, $http, $resource, commentCode) {
	$scope.summonerId = {text: '23649881'};
	$scope.championId = {text: '412'};
	$scope.items = regions;
	$scope.items1 = gameType;
	$scope.items2 = seasons;
	$scope.selectedOption1 = [];
	$scope.selectedOption2 = [];
	$scope.beginTime = {text: ''};
	$scope.endTime = {text: ''};
	$scope.beginIndex = {text: ''};
	$scope.endIndex = {text: ''}; 
	
	$scope.submit = function ()
	{	
		$scope.rankedQueuesArr = [];
		for(var index = 0; index < $scope.selectedOption1.length; ++index)
		{
			$scope.rankedQueuesArr.push($scope.selectedOption1[index].name)
		
		}
		
		$scope.seasonListArr = [];
		for(var index = 0; index < $scope.selectedOption2.length; ++index)
		{
			$scope.seasonListArr.push($scope.selectedOption2[index].name)
		
		}
	
		setTimeout(function() {
				data = {"summonerId": $scope.summonerId.text, "championId": $scope.championId.text, "region": $scope.items.selectedOption.name, "rankedQueues": $scope.rankedQueuesArr, "seasons": $scope.seasonListArr, "beginTime": $scope.beginTime.text, "endTime": $scope.endTime.text, "beginIndex": $scope.beginIndex.text, "endIndex": $scope.endIndex.text, "PID": "034"};
					$http({
						method: 'POST',
						// url: 'http://localhost:3000/RiotAPI_Project',
						// url: 'https://localhost:3030/RiotAPI_Project',
						url: 'https://localhost:3040',
						dataType: "json",
						headers: {
							"Content-Type": "application/json",
							"Content-Length": data.length
						},
						data: data 
					}).then(function(response) {
						// $scope.posts = response.data;
						// $scope.posts = response;
						var jsonString = JSON.stringify(response.data, null, '\t');
						document.getElementById("results").innerHTML = "<pre><code>"+jsonString+"</code></pre>";
					}, function errorCallback(error) {
						console.log(error);
						document.getElementById("results").innerHTML = "<pre><code>The server returns "+error.data+"</code></pre>";
					});
		}, 1000);
	}
	commentCode();
}]);

riotApiControllers.controller('rankedStats', ['$scope', '$http', '$resource', 'commentCode', function($scope, $http, $resource, commentCode) {
	$scope.summonerId = {text: '23649881'};
	$scope.items = regions;
	$scope.items1 = seasons;
	$scope.selectedOption1 = []; 
	
	$scope.submit = function ()
	{	
		$scope.seasonListArr = [];
		for(var index = 0; index < $scope.selectedOption1.length; ++index)
		{
			$scope.seasonListArr.push($scope.selectedOption1[index].name)
		
		}
	
		setTimeout(function() {
				data = {"summonerId": $scope.summonerId.text, "region": $scope.items.selectedOption.name, "seasons": $scope.seasonListArr, "PID": "035"};
					$http({
						method: 'POST',
						// url: 'http://localhost:3000/RiotAPI_Project',
						// url: 'https://localhost:3030/RiotAPI_Project',
						url: 'https://localhost:3040',
						dataType: "json",
						headers: {
							"Content-Type": "application/json",
							"Content-Length": data.length
						},
						data: data 
					}).then(function(response) {
						// $scope.posts = response.data;
						// $scope.posts = response;
						var jsonString = JSON.stringify(response.data, null, '\t');
						document.getElementById("results").innerHTML = "<pre><code>"+jsonString+"</code></pre>";
					}, function errorCallback(error) {
						console.log(error);
						document.getElementById("results").innerHTML = "<pre><code>The server returns "+error.data+"</code></pre>";
					});
		}, 1000);
	}
	commentCode();
}]);

riotApiControllers.controller('summaryStats', ['$scope', '$http', '$resource', 'commentCode', function($scope, $http, $resource, commentCode) {
	$scope.summonerId = {text: '23649881'};
	$scope.items = regions;
	$scope.items1 = seasons;
	$scope.selectedOption1 = []; 
	
	$scope.submit = function ()
	{	
		$scope.seasonListArr = [];
		for(var index = 0; index < $scope.selectedOption1.length; ++index)
		{
			$scope.seasonListArr.push($scope.selectedOption1[index].name)
		
		}
	
		setTimeout(function() {
				data = {"summonerId": $scope.summonerId.text, "region": $scope.items.selectedOption.name, "seasons": $scope.seasonListArr, "PID": "036"};
					$http({
						method: 'POST',
						// url: 'http://localhost:3000/RiotAPI_Project',
						// url: 'https://localhost:3030/RiotAPI_Project',
						url: 'https://localhost:3040',
						dataType: "json",
						headers: {
							"Content-Type": "application/json",
							"Content-Length": data.length
						},
						data: data 
					}).then(function(response) {
						// $scope.posts = response.data;
						// $scope.posts = response;
						var jsonString = JSON.stringify(response.data, null, '\t');
						document.getElementById("results").innerHTML = "<pre><code>"+jsonString+"</code></pre>";
					}, function errorCallback(error) {
						console.log(error);
						document.getElementById("results").innerHTML = "<pre><code>The server returns "+error.data+"</code></pre>";
					});
		}, 1000);
	}
	commentCode();
}]);

riotApiControllers.controller('teamBySummonerId', ['$scope', '$http', '$resource', 'commentCode', function($scope, $http, $resource, commentCode) {
	$scope.summonerId = {text: '23649881'};
	$scope.items = regions;
	$scope.submit = function ()
	{
		data = {"summonerId": $scope.summonerId.text, "region": $scope.items.selectedOption.name, "PID": "037"};
			$http({
				method: 'POST',
				// url: 'https://localhost:3030/RiotAPI_Project',
				url: 'https://localhost:3030',
				dataType: "json",
				headers: {
					"Content-Type": "application/json",
					"Content-Length": data.length
				},
				data: data 
			}).then(function(response) {
				// $scope.posts = response.data;
				var jsonString = JSON.stringify(response.data, null, '\t');
				document.getElementById("results").innerHTML = "<pre><code>"+jsonString+"</code></pre>";
			}, function errorCallback(error) {
				// console.log(xhr);
				// console.log(status);
				console.log(error);
				document.getElementById("results").innerHTML = "<pre><code>"+error.data+"</code></pre>";
			});
	}
	commentCode();
}]);

riotApiControllers.controller('teamByTeamId', ['$scope', '$http', '$resource', 'commentCode', function($scope, $http, $resource, commentCode) {
	$scope.teamId = {text: 'TEAM-e4936d7b-b80e-4367-a76c-5ccf7388c995'};
	$scope.items = regions;
	$scope.submit = function ()
	{
		data = {"teamId": $scope.teamId.text, "region": $scope.items.selectedOption.name, "PID": "038"};
			$http({
				method: 'POST',
				// url: 'https://localhost:3030/RiotAPI_Project',
				url: 'https://localhost:3040',
				dataType: "json",
				headers: {
					"Content-Type": "application/json",
					"Content-Length": data.length
				},
				data: data 
			}).then(function(response) {
				// $scope.posts = response.data;
				var jsonString = JSON.stringify(response.data, null, '\t');
				document.getElementById("results").innerHTML = "<pre><code>"+jsonString+"</code></pre>";
			}, function errorCallback(error) {
				console.log(error);
				document.getElementById("results").innerHTML = "<pre><code>The server returns "+error.data+"</code></pre>";
			});
	}
	commentCode();
}]);