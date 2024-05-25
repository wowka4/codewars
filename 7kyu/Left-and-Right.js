/*So, your mission is...
...to write 2 functions ( left$(str, i) & right$(str, i) ) (left & right in Ruby or Python) that will work as the BASIC ones did,... except :
i may be a negative integer. In this case the function returns the whole string but i right(/left)-most chars (respectively in left$(/right$) function).
if i === 0 : returns an empty string;
if no i is provided consider it should be 1 ( not zero ).
if i is greater than str length : returns the whole str.
and
if i is a string ( yes it can ) : returns part of str at left(/right) of i.
returns left of first occurence of i
returns right of last occurence of i
Examples:
var str = 'Hello (not so) cruel World!'
left$(str,5)   // -> 'Hello'
left$(str,-22) // -> 'Hello'
left$(str,1)   // -> 'H'
left$(str)     // -> 'H' too
left$(str,0)   // -> ''
left$(str,99)  // -> 'Hello (not so) cruel World!'*/
//Solution:

function left$( str, i ) {
    if (i === undefined) i = 1;
    if (typeof i === 'string') i = str.indexOf(i);
    return str.slice(0, i);
}

function right$( str, i ){
    if (i === undefined) i = 1;
    if (typeof i === 'string') i = str.length - str.lastIndexOf(i) - i.length;
    return i ? str.slice(-i) : '';
}

const str = 'Hello o o o  World';
console.log(right$(str, ' W'));