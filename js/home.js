var home = {};
var maps = null;
// 监听当前位置

home.init = function(successCb){
	// plus.geolocation.watchPosition(function(data){
	// 	maps = data.address.city.replace('市','');
	// 	console.log(maps);
	// },function(err){
	// 	mui.toast('获取定位信息失败，请检查网络')
		
	// 	// console.log(JSON.stringify(err));
	// })
	
	fGetCityLimit(successCb)
}

// 请求限行城市数据
function fGetCityLimit(){
	mui.ajax('https://api.jisuapi.com/vehiclelimit/city',{
		dataType: 'json',
		data:{
			appkey:'15b163096b822dbf'
		},
		success:function(data){
			var result = data.result;
		}
	}
	
	)
}