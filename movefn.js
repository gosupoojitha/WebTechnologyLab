/* exported move */
/* eslint-env browser */
/* eslint no-console:0*/
function move(a, i, d) {
    var len = a.length;
    if (i < 0) {
        i = i + len;
    }
    if (d < 0) {
        d = d + len;
    }
    var j;
    var temp = a[i];
    if (i < d) {
        j = 0;
        while (j < d) {
            a[j] = a[j + 1];
            j++;
        }
    } else {
        j = len - 1;
        while (j >= d) {
            a[j] = a[j - 1]
            j--;
        }
    }
    a[d] = temp;
    return a;
}
