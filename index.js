var needle = require("needle");
var cheerio = require("cheerio");
var async = require("async");


aUrl = "https://www.pravda.com.ua/articles/2019/04/21/7213071/";



var q = async.queue(function(url){
        needle.get(url,function(err,res){
        if(err) throw(err);
        
        var $ = cheerio.load(res.body);
        
        console.log($(".el__map_item").text().replace(/Недійсні бюлетені: %/g,"\n").replace(" Регіон (Опрацьовано)  За Зеленського За Порошенка","").replace("Екзит-пол  За Зеленського За Порошенка   Національний екзит-пол  73% 25.5% Недійсні бюлетені: 1.5%   Екзит-пол 112 + NewsOne  73.7% 26.3%    Екзит-пол ТСН  72.8% 27.2%",""));        
        
        });
    },10);


q.push(aUrl);

