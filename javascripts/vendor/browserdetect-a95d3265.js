var BrowserDetect={init:function(){this.browser=this.searchString(this.dataBrowser)||"Other",this.version=this.searchVersion(navigator.userAgent)||this.searchVersion(navigator.appVersion)||"Unknown"},searchString:function(r){for(var i=0;i<r.length;i++){var t=r[i].string;if(this.versionSearchString=r[i].subString,-1!=t.indexOf(r[i].subString))return r[i].identity}},searchVersion:function(r){var i=r.indexOf(this.versionSearchString);if(-1!=i)return parseFloat(r.substring(i+this.versionSearchString.length+1))},dataBrowser:[{string:navigator.userAgent,subString:"Chrome",identity:"Chrome"},{string:navigator.userAgent,subString:"MSIE",identity:"Explorer"},{string:navigator.userAgent,subString:"Firefox",identity:"Firefox"},{string:navigator.userAgent,subString:"Safari",identity:"Safari"},{string:navigator.userAgent,subString:"Opera",identity:"Opera"}]};BrowserDetect.init();