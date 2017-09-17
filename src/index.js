module.exports  = function check(str, bracketsConfig) {
var checkArr = str.split('');
var flag = [];
var specCount = 0;
for(var i=0; i < checkArr.length; i++){
	if(bracketsConfig.indexOf(checkArr[i]) == 1){
		return false;
	}
for(var i=0; i < checkArr.length; i++){
	for(var j=0; j<bracketsConfig.length; j++){
		if(checkArr[i] == bracketsConfig[j][0]){
			if(checkArr[i] == bracketsConfig[j][1]){
				if(specCount == 0){
				flag.push(j)
				specCount++
				}
				else{
					flag.pop();
					specCount--;
				}
			}
			else{flag.push(j)};
		}
		if(checkArr[i] == bracketsConfig[j][1]){
			if(checkArr[i] != bracketsConfig[j][0]){
			if (j == flag[flag.length - 1]){
				flag.pop();
			}
			else{return false;}
		}
		}
	}
}
if(flag.length != 0){
	return false;
}
}
return true;
}


