function calculateFrequency(string) {
  
  var freq={};
  for(var i=0;i<string.length;i++)
    {
         var ch=string.charAt(i);
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