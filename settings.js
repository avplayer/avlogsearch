var channel_regexp = /\/(\d+)\/search/;  // 从地址栏获取 channel 号的正则表达式.
var regexp_idx = 1;                      // 正则匹配结果 索引.
var channel = document.location.toString().match(channel_regexp)[regexp_idx];

var rpcurl = "https://avlog.avplayer.org/rpc/search?"


