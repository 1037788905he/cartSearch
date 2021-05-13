var oauth = {};

//获取的列表和当前点击的做对比
oauth.fFilterOauth = function( id,oauthList ){
	// console.log(JSON.stringify(oauthList));
	// console.log(id);
	for( var i in oauthList){
		if( oauthList[i].id == id ){
			return oauthList[i]
		}
	}
	return null;
}