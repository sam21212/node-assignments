var flattenObject = function(ob) {
	var toReturn = {};
	var cnt=0;
	for (var i in ob) {
		if (!ob.hasOwnProperty(i)) continue;
		
		if ((typeof ob[i]) == 'object') {
			var flatObject = flattenObject(ob[i]);
			cnt=0;
			for (var x in flatObject)
			 {
				if (!flatObject.hasOwnProperty(x)) continue;
				cnt++;	
				toReturn[i + '.' + x] = flatObject[x];
			}
		}
		 else 
		 {
			toReturn[i] = ob[i];
		}
		console.log(cnt);
		console.log(i);
	}
	return toReturn;
};