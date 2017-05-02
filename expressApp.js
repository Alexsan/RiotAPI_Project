var express = require('express');

var request = require('request');

var http = require('http');
var https = require('https');
var fs = require('fs');
var cors = require('cors');

var options = {
	key: fs.readFileSync(__dirname + '/app/ssl_certs/private.key'),
	cert: fs.readFileSync(__dirname + '/app/ssl_certs/public.crt')
	// ca: fs.readFileSync('C:/wamp/bin/php/php5.5.12/cacert.pem')
};

var apiKey = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx';

var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use(function (req, res, next) {
	
// Website you wish to allow to connect
// res.setHeader('Access-Control-Allow-Origin', 'http://heimerlode.com');
// res.setHeader('Access-Control-Allow-Origin', 'https://heimerlode.com');
res.setHeader('Access-Control-Allow-Origin', req.headers.origin || '*');
// Request methods you wish to allow
res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
// res.setHeader('Access-Control-Allow-Methods', 'OPTIONS');
// Request headers you wish to allow
// res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type, Authorization, Content-Length, origin, accept, client-security-token, Cache-Control, *');
// next();
// Set to true if you need the website to include cookies in the requests sent to the API (e.g. in case you use sessions)
res.setHeader('Access-Control-Allow-Credentials', true);
cors();
// next();

if(req.method === 'OPTIONS')
{
	console.log(req.headers);
	console.log(req.method + "this");
	res.statusCode = 204;	
	return res.end();
}
else
{
	console.log(req.method + "that");
	return next();
}
});

// This works
// app.listen(3000, function() {
	// console.log('Example app listening on port 3000!');
// });

app.use("/bower_components", express.static('bower_components'));
app.use("/node_modules", express.static('node_modules'));
app.use("/app", express.static('app'));

app.get('/*', function(req, res) {
	res.sendFile(__dirname + '/app/index.html');
});

// app.post('/RiotAPI_Project', function (req, res) {
app.post('/', function (req, res) {
	if(req.body.PID == "000")
	{
		console.log(req.body.region);
		// res.send("hello");
		request('https://'+req.body.region+'.api.pvp.net/api/lol/'+req.body.region+'/v1.4/summoner/by-name/'+req.body.summonerName+'?api_key='+apiKey+'', function (error, response, body) {
			res.send(response.body);
		});	
	}
	else if(req.body.PID == "001")
	{
		console.log(req.body.region);
		request('https://'+req.body.region+'.api.pvp.net/api/lol/'+req.body.region+'/v1.4/summoner/'+req.body.summonerId+'?api_key='+apiKey+'', function (error, response, body) {
			res.send(response.body);
		});
	}
	else if(req.body.PID == "002")
	{
		console.log(req.body.region);
		request('https://'+req.body.region+'.api.pvp.net/api/lol/'+req.body.region+'/v1.4/summoner/'+req.body.summonerId+'/masteries?api_key='+apiKey+'', function (error, response, body) {
			res.send(response.body);
		});		
	}
	else if(req.body.PID == "003")
	{
		console.log(req.body.region);
		request('https://'+req.body.region+'.api.pvp.net/api/lol/'+req.body.region+'/v1.4/summoner/'+req.body.summonerId+'/name?api_key='+apiKey+'', function (error, response, body) {
			res.send(response.body);
		});		
	}
	else if(req.body.PID == "004")
	{
		console.log(req.body.region);
		request('https://'+req.body.region+'.api.pvp.net/api/lol/'+req.body.region+'/v1.4/summoner/'+req.body.summonerId+'/runes?api_key='+apiKey+'', function (error, response, body) {
			res.send(response.body);
		});
	}
	else if(req.body.PID == "005")
	{
		console.log(req.body.freeToPlay);
		request('https://'+req.body.region+'.api.pvp.net/api/lol/'+req.body.region+'/v1.2/champion?freeToPlay='+req.body.freeToPlay+'&api_key='+apiKey+'', function (error, response, body) {
			res.send(response.body);
		});
	}
	else if(req.body.PID == "006")
	{
		console.log(req.body.championId);
		request('https://'+req.body.region+'.api.pvp.net/api/lol/'+req.body.region+'/v1.2/champion/'+req.body.championId+'?api_key='+apiKey+'', function (error, response, body) {
			res.send(response.body);
		});
	}
	else if(req.body.PID == "007")
	{
		console.log(req.body.region);
		// https://na.api.pvp.net/observer-mode/rest/consumer/getSpectatorGameInfo/NA1/46294522?api_key=9ee4d4e7-6799-4add-865a-a1e6e15afa30
		request('https://'+req.body.region+'.api.pvp.net/observer-mode/rest/consumer/getSpectatorGameInfo/'+req.body.platformId+'/'+req.body.summonerId+'?api_key='+apiKey+'', function (error, response, body) {
			res.send(response.body);
		});
	}
	else if(req.body.PID == "008")
	{
		console.log(req.body.region);
		request('https://'+req.body.region+'.api.pvp.net/observer-mode/rest/featured?api_key='+apiKey+'', function (error, response, body) {
			res.send(response.body);
		});
	}
	else if(req.body.PID == "009")
	{
		console.log(req.body.region);
		request('https://'+req.body.region+'.api.pvp.net/api/lol/'+req.body.region+'/v1.3/game/by-summoner/'+req.body.summonerId+'/recent?api_key='+apiKey+'', function (error, response, body) {
			res.send(response.body);
		});
	}
	else if(req.body.PID == "010")
	{
		console.log(req.body.region);
		request('https://'+req.body.region+'.api.pvp.net/api/lol/'+req.body.region+'/v2.5/league/by-summoner/'+req.body.summonerId+'?api_key='+apiKey+'', function (error, response, body) {
			res.send(response.body);
		});
	}
	else if(req.body.PID == "011")
	{
		console.log(req.body.region);
		request('https://'+req.body.region+'.api.pvp.net/api/lol/'+req.body.region+'/v2.5/league/by-summoner/'+req.body.summonerId+'/entry?api_key='+apiKey+'', function (error, response, body) {
			res.send(response.body);
		});
	}
	else if(req.body.PID == "012")
	{
		console.log(req.body.region);
		request('https://'+req.body.region+'.api.pvp.net/api/lol/'+req.body.region+'/v2.5/league/by-team/'+req.body.teamId+'?api_key='+apiKey+'', function (error, response, body) {
			res.send(response.body);
		});
	}
	else if(req.body.PID == "013")
	{
		console.log(req.body.region);
		request('https://'+req.body.region+'.api.pvp.net/api/lol/'+req.body.region+'/v2.5/league/by-team/'+req.body.teamId+'/entry?api_key='+apiKey+'', function (error, response, body) {
			res.send(response.body);
		});
	}
	else if(req.body.PID == "014")
	{
		console.log(req.body.region);		
		request('https://'+req.body.region+'.api.pvp.net/api/lol/'+req.body.region+'/v2.5/league/challenger/?type='+req.body.gameType+'&api_key='+apiKey+'', function (error, response, body) {
			res.send(response.body);
		});
	}
	else if(req.body.PID == "015")
	{
		console.log(req.body.region);
		request('https://'+req.body.region+'.api.pvp.net/api/lol/'+req.body.region+'/v2.5/league/master/?type='+req.body.gameType+'&api_key='+apiKey+'', function (error, response, body) {
			res.send(response.body);
		});
	}
	else if(req.body.PID == "016")
	{
		console.log(req.body.champData);
		request('https://global.api.pvp.net/api/lol/static-data/'+req.body.region+'/v1.2/champion?locale='+req.body.locale+'&version='+req.body.version+'&dataById='+req.body.dataId+'&champData='+req.body.champData+'&api_key='+apiKey+'', function (error, response, body) {
			res.send(response.body);
		});
	}
	else if(req.body.PID == "017")
	{
		console.log(req.body.champData);
		request('https://global.api.pvp.net/api/lol/static-data/'+req.body.region+'/v1.2/champion/'+req.body.championId+'?locale='+req.body.locale+'&version='+req.body.version+'&champData='+req.body.champData+'&api_key='+apiKey+'', function (error, response, body) {
			res.send(response.body);
		});
	}
	else if(req.body.PID == "018")
	{
		console.log(req.body.itemListData);
		request('https://global.api.pvp.net/api/lol/static-data/'+req.body.region+'/v1.2/item?locale='+req.body.locale+'&version='+req.body.version+'&itemListData='+req.body.itemListData+'&api_key='+apiKey+'', function (error, response, body) {
			res.send(response.body);
		});
	}
	else if(req.body.PID == "019")
	{
		console.log(req.body.locale);
		request('https://global.api.pvp.net/api/lol/static-data/'+req.body.region+'/v1.2/item/'+req.body.itemId+'?locale='+req.body.locale+'&version='+req.body.version+'&itemData='+req.body.itemListData+'&api_key='+apiKey+'', function (error, response, body) {
			res.send(response.body);
		});
	}
	else if(req.body.PID == "020")
	{
		request('https://global.api.pvp.net/api/lol/static-data/'+req.body.region+'/v1.2/language-strings?locale='+req.body.locale+'&version='+req.body.version+'&api_key='+apiKey+'', function (error, response, body) {
			res.send(response.body);
		});
	}
	else if(req.body.PID == "021")
	{
		request('https://global.api.pvp.net/api/lol/static-data/'+req.body.region+'/v1.2/languages?api_key='+apiKey+'', function (error, response, body) {
			res.send(response.body);
		});
	}
	else if(req.body.PID == "022")
	{
		request('https://global.api.pvp.net/api/lol/static-data/'+req.body.region+'/v1.2/map?locale='+req.body.locale+'&version='+req.body.version+'&api_key='+apiKey+'', function (error, response, body) {
			res.send(response.body);
		});
	}
	else if(req.body.PID == "023")
	{
		console.log(req.body.masteryListData);
		request('https://global.api.pvp.net/api/lol/static-data/'+req.body.region+'/v1.2/mastery?locale='+req.body.locale+'&version='+req.body.version+'&masteryListData='+req.body.masteryListData+'&api_key='+apiKey+'', function (error, response, body) {
			res.send(response.body);
		});
	}
	else if(req.body.PID == "024")
	{
		request('https://global.api.pvp.net/api/lol/static-data/'+req.body.region+'/v1.2/mastery/'+req.body.masteryId+'?locale='+req.body.locale+'&version='+req.body.version+'&masteryData='+req.body.masteryListData+'&api_key='+apiKey+'', function (error, response, body) {
			res.send(response.body);
		});
	}
	else if(req.body.PID == "025")
	{
		request('https://global.api.pvp.net/api/lol/static-data/'+req.body.region+'/v1.2/realm?api_key='+apiKey+'', function (error, response, body) {
			res.send(response.body);
		});
	}
	else if(req.body.PID == "026")
	{
		console.log(req.body.runeListData);
		request('https://global.api.pvp.net/api/lol/static-data/'+req.body.region+'/v1.2/rune?locale='+req.body.locale+'&version='+req.body.version+'&runeListData='+req.body.runeListData+'&api_key='+apiKey+'', function (error, response, body) {
			res.send(response.body);
		});
	}
	else if(req.body.PID == "027")
	{
		request('https://global.api.pvp.net/api/lol/static-data/'+req.body.region+'/v1.2/rune/'+req.body.runeId+'?locale='+req.body.locale+'&version='+req.body.version+'&runeData='+req.body.runeListData+'&api_key='+apiKey+'', function (error, response, body) {
			res.send(response.body);
		});
	}
	else if(req.body.PID == "028")
	{
		console.log(req.body.spellData);
		request('https://global.api.pvp.net/api/lol/static-data/'+req.body.region+'/v1.2/summoner-spell?locale='+req.body.locale+'&version='+req.body.version+'&dataById='+req.body.dataId+'&spellData='+req.body.spellData+'&api_key='+apiKey+'', function (error, response, body) {
			res.send(response.body);
		});
	}
	else if(req.body.PID == "029")
	{
		console.log(req.body.spellData);
		request('https://global.api.pvp.net/api/lol/static-data/'+req.body.region+'/v1.2/summoner-spell/'+req.body.spellId+'?locale='+req.body.locale+'&version='+req.body.version+'&spellData='+req.body.spellData+'&api_key='+apiKey+'', function (error, response, body) {
			res.send(response.body);
		});
	}
	else if(req.body.PID == "030")
	{
		request('https://global.api.pvp.net/api/lol/static-data/'+req.body.region+'/v1.2/versions?api_key='+apiKey+'', function (error, response, body) {
			res.send(response.body);
		});
	}
	else if(req.body.PID == "031")
	{
		request('http://status.leagueoflegends.com/shards?api_key='+apiKey+'', function (error, response, body) {
			res.send(response.body);
		});
	}
	else if(req.body.PID == "032")
	{
		request('http://status.leagueoflegends.com/shards/'+req.body.region+'?api_key='+apiKey+'', function (error, response, body) {
			res.send(response.body);
		});
	}
	else if(req.body.PID == "033")
	{
		request('https://'+req.body.region+'.api.pvp.net/api/lol/'+req.body.region+'/v2.2/match/'+req.body.matchId+'?includeTimeline='+req.body.includeTimeLine+'&api_key='+apiKey+'', function (error, response, body) {
			res.send(response.body);
		});
	}
	else if(req.body.PID == "034")
	{
		request('https://'+req.body.region+'.api.pvp.net/api/lol/'+req.body.region+'/v2.2/matchlist/by-summoner/'+req.body.summonerId+'?championIds='+req.body.championId+'&rankedQueues='+req.body.rankedQueues+'&seasons='+req.body.seasons+'&beginTime='+req.body.beginTime+'&endTime='+req.body.endTime+'&beginIndex='+req.body.beginIndex+'&endIndex='+req.body.endIndex+'&api_key='+apiKey+'', function (error, response, body) {
			res.send(response.body);
		});
	}
	else if(req.body.PID == "035")
	{
		request('https://'+req.body.region+'.api.pvp.net/api/lol/'+req.body.region+'/v1.3/stats/by-summoner/'+req.body.summonerId+'/ranked?season='+req.body.seasons+'&api_key='+apiKey+'', function (error, response, body) {
			res.send(response.body);
		});
	}
	else if(req.body.PID == "036")
	{
		request('https://'+req.body.region+'.api.pvp.net/api/lol/'+req.body.region+'/v1.3/stats/by-summoner/'+req.body.summonerId+'/summary?season='+req.body.seasons+'&api_key='+apiKey+'', function (error, response, body) {
			res.send(response.body);
		});
	}
	else if(req.body.PID == "037")
	{
		request('https://'+req.body.region+'.api.pvp.net/api/lol/'+req.body.region+'/v2.4/team/by-summoner/'+req.body.summonerId+'/?api_key='+apiKey+'', function (error, response, body) {
			res.send(response.body);
		});
	}
	else if(req.body.PID == "038")
	{
		request('https://'+req.body.region+'.api.pvp.net/api/lol/'+req.body.region+'/v2.4/team/'+req.body.teamId+'/?api_key='+apiKey+'', function (error, response, body) {
			res.send(response.body);
		});
	}
	else
	{
		res.send("No data was acquired.");
	}
});

// var httpsServer = https.createServer(options, app).listen(3040);
var httpServer = http.createServer(app).listen(3030);

var httpsServer = https.createServer(options, app);
httpsServer.listen(3040, function() {
	console.log('Example app listening on port 3040!');
});

// var httpServer = http.createServer(app);
// httpServer.listen(3030);