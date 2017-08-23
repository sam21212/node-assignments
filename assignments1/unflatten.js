function merge(ans,arr,val)
{
	var len=arr.length-1;
	for(var iter=0;iter<len;iter++)
	{
		var key=arr[iter];
		if(!(key in ans))
		{
			if(arr[iter+1]>='0'&&arr[iter+1]<='9')
				ans[key]=[];
			else
				ans[key]={};
		}
		ans=ans[key];
	}
	ans[arr[len]]=val;
}
function unflatten(flatObject) {
	var ans={};
  for(var key in flatObject)
  {
  	    var arr=[];
  		arr=key.split('.');
        merge(ans,arr,flatObject[key]);
  }
  return ans;
}