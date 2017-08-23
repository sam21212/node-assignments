function secondLargest(array) {
 
  for(var i=0;i<array.length;i++)
    {
        for(j=0;j<array.length-i-1;j++)
          {
              if(array[j]>array[j+1])
                {
                  temp=array[j];
                  array[j]=array[j+1];
                  array[j+1]=temp;
                }
          }
    }
  for(i=array.length-1;i>=1;i--)
    {
      if(array[i]!=array[i-1])
          return array[i-1];
    }
}