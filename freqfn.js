/* exported freqcal */
/* eslint-env browser */
/* eslint no-console:0*/
function freqcal(a){
    var count=[];
    var len=a.length;
    var i=0;
    while(i<len)
        {
            count[a[i]]=count[a[i]]++;
            i++;
        }
    return count;
}