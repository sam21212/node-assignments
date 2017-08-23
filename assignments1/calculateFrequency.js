function calculateFrequency(string) {
  
  var freq={};
  for(var iter=0;iter<string.length;iter++)
    {
         var ch=string.charAt(iter);
      if(ch>='a'&&ch<='z')
        {
         if(freq[ch])
            freq[ch]++;
        else
            freq[ch]=1;
        }
    }
  return freq;
}