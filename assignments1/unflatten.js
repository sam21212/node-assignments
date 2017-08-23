function merge(ans,arr,val)
{
	var len=arr.length-1;
	for(var i=0;i<len;i++)
	{
		var key=arr[i];
		if(!(key in ans))
		{
			if(arr[i+1]>='0'&&arr[i+1]<='9')
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
  for(var i in flatObject)
  {
  	    var arr=[];
  		arr=i.split('.');
        merge(ans,arr,flatObject[i]);
  }
  return ans;
}