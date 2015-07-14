var api_server = "http://api.appaudit.io:5902/api/";
var show_report = function(sha1, cb) {
	$.get(api_server + 'report/show/' + sha1, cb);
}

var find_report = function(psha1, cb) {
	$.get(api_server + 'report/find/' + psha1, cb);
}

var get_stats = function(cb) {
	$.get(api_server + 'stats', cb);	
}