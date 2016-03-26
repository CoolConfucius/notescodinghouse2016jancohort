//pretest 
// var x; 
// var y = x === null; 
// console.log(y);
// var arr = ['1', '2'];
// console.log(arr + '3');
// console.log(arr);
// arr[arr.length] = '3'; 
// console.log(arr);

// function createArrayFromAtoB(a, b) {
//   var array = []; 
//   for (var i = a; i <= b; i++) {
//     array.push(i);
//   };
//   return array; 
// }
// console.log(createArrayFromAtoB(2,5));

// function splitSum(code, splitter) {
//   var array = code.split(splitter); 
//   var sum = 0; 
//   for (var i = 0; i < array.length; i++) {
//     sum += parseFloat(array[i]); 
//   };
//   return sum; 
// }
// console.log(splitSum('3/4/5/1', '/'));
// console.log(splitSum('-1$-5$5$-4', '$'));

// function decoder(key, code) {
//   var array = []; 
//   var keyArray = key.split(''); 
//   for (var i = 0; i < code.length; i++) {
//     array.push(keyArray[code[i]]); 
//   };
//   return array.join('');
// }
// console.log(decoder('ABCDEFGHIJKLMNOPQRSTUVWXYZ', [2, 14, 3, 8, 13, 6] ) );


// function compressor(s) {
//   var array = s.split(''); 
//   var output = []; 
//   output.push(array[0]); 
//   var count = 1; 
//   for (var i = 1; i < array.length; i++) {
//     if (Number.isInteger(parseInt(output[output.length-1]))) {
//       if (output[output.length-2] !== array[i]) {
//         if (count > 1) {
//           output.push(count.toString()); 
//           count = 1; 
//         };
//         output.push(array[i]);       
//       } else {
//         count++; 
//       }
//     } else {
//       if (output[output.length-1] !== array[i]) {
//         if (count > 1) {
//           output.push(count.toString()); 
//           count = 1; 
//         };
//         output.push(array[i]);       
//       } else {
//         count++; 
//       }
      
//     }

//   };
//   return output.join('');
// }



// function compressor(s) {
//   var array = s.split(''); 
//   var output = []; 
//   output.push(array[0]); 
//   var count = 1; 
//   // output.push(count.toString());
//   var status = false; 
//   console.log(output);
//   for (var i = 1; i < array.length; i++) {
//     if (!status) {
//       if (output[output.length-1] !== array[i]) {
//         output.push(count.toString()); 
//         output.push(array[i]);       
//         count = 1; 
//         status = true; 
//       } else {
//         count++; 
//         console.log(output, count);
//       }      
//     } else {
      
//       if (output[output.length-2] !== array[i]) {
//         output.push(count.toString()); 
//         output.push(array[i]);       
//         count = 1; 
//       } else {
//         count++; 
//         console.log(output, count);
//       }    
//     }
//   }
//   return output.join('').split('1').join('');
// }

// console.log(compressor('aaaabbbbbbbcccccpqrstuv'));

// 2016 1 6

// function countBy(x, n) {
//     var array = []; 
//     for (var i = 0; i < n; i++ ){
//       array.push(x + x * i);
//     }
//     return array; 
// }; 
// console.log(countBy(2, 5));

//Cade 
// function countBy(x, n) {
//   var results = []; 
//   console.log('results before:', results);
//   for (var i = x; results.length < n; i = i + x){
//       //var i = x is the initializer of the statement. runs just once before loop begins. The second part is called the condition. truth, the loop goes again. false, the loop stops. bascially telling it how long we want it to run. In this case, it's not long enough if the length is less than n. that's our condition. we want to keep going in this loop as long as the result.length is < n. three parts of a for loop: initializer, condition, iteration. THe last part is the statement that'll get executed at the end of every iteration of the loop. i++ is increment, same thing as i = i + 1. But we don't wnat that in this example. Here, we want i = i + x. Every iteration, we'll be adding x to i. 
//       results.push(i);
//       console.log('results:', results);
//       console.log('i:', i);
//     }
//     console.log('results after:', results);
//     return results; 
//   }; 


//   function countBy(x, n) {
//     var results = []; 
//     console.log('results before:', results);    
//     // for (var i = 1; i <= n; i = i++){
//     //   results.push(x * i);
//     //   console.log('results:', results);
//     //   console.log('i:', i);
//     // }
//     var num = x; 
//     while(results.length < n){
//       results.push(num);
//       num = num + x; 
//     }

//     console.log('results after:', results);
//     return results; 
//   }; 


// 2016 1 7
function makeNegative(numbers) {
  var array = numbers; 
  for (var i = 0; i < array.length; i++) {
    if(array[i] > 0){
      array[i] *= -1; 
    }
  };
  return array; 
};
console.log(makeNegative([5, 11, -5, 2, 0, -9]));

//Cade: nice way to do this is use JS built in iterators. These include forEach, map, reduce, every, sum, sort... etc. 
//Map would be most appropriate here. Map allows you to take one array, do something on each item, and the new thing will go into the same position of the new array. The simplest way to do this one would be map. 
function makeNegative(numbers) {
  // numbers.map(function(num, index, array){ });
  // don't need index or array. 
  // numbers.map(function(num){ });
  //map will return a new array. That's the end goal. So we don't need the variable 
  return numbers.map(function(num){
  //   if(num > 0){
  //     num *= -1;
  //     // same as num = num * -1;
  //   }
  //   return num; 
  // or we can
    return Math.abs(num) * -1; 
  });

};

//I think map is the most efficient way to do this. But we can do this with a for loop. 
function makeNegative(numbers) {
  var negs = []; 
  for (var i = 0; i < numbers.length; i++) {
    var neg = Math.abs(numbers[i]) * -1; 
    negs.push(neg);
  }
  return negs; 
};
// essentially we did the same thing. 