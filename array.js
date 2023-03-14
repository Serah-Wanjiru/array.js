
//find the last element of the following array
let array1 = [3,7,34,90,12];
let v = array1.slice(-1);
console.log(v);

let array2 = [true,"green","where",12,56];
let a =array2.slice(-1);
console.log(a);


//write js program that will join the following array element into a string
let mypets=["cow","bird","snake","dog"];
console.log(mypets.join());


//write a js script sort the following array items
let s = [-5,9,5,3,2,-3,6,8,4,1];
console.log(s.sort());

let r=["apple","mango","apple","orange","mango","mango"];
//console.log(r.sort());
function removeDuplicates(r) {
    return [... new Set(r)];
}
  
console.log(removeDuplicates(r));


//Write a JS script to search for the following word in the array.


let arr5 =["the","way","x",4]
let y ="the"
if(arr5.includes(y)){
console.log(y+"was found");
}
else{
    console.log("the search was not found");
}

let k = "senvik"
let k2 = k.split('').sort().join('');
console.log(k2);





