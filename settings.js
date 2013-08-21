var channel_regexp = /\/(\d+)\/search/;  // 从地址栏获取 channel 号的正则表达式.
// var channel_regexp = /^(\d+)\./;   // 从域名获取 channel 号的正则表达式.
var channel_match_source = document.location.toString();    // 从地址栏获取
// var channel_match_source =document.location.hostname;    // 从域名处获取

var regexp_idx = 1;                      // 正则匹配结果 索引.
var channel = channel_match_source.match(channel_regexp)[regexp_idx];

var rpcurl = "https://avlog.avplayer.org/rpc/search?"


