function secondLargest(array) {
 
  for(var iter=0;iter<array.length;iter++)
    {
        for(var sec_iter=0;sec_iter<array.length-iter-1;sec_iter++)
          {
              if(array[sec_iter]>array[sec_iter+1])
                {
                  temp=array[sec_iter];
                  array[sec_iter]=array[sec_iter+1];
                  array[sec_iter+1]=temp;
                }
          }
    }
  for(iter=array.length-1;iter>=1;iter--)
    {
      if(array[iter]!=array[iter-1])
          return array[iter-1];
    }
}