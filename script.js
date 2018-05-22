


// var sayHi = function test(a, b, array){
// 	for(var name of array){
// 		console.log(name);
// 	}
// 	return a * b;
// }



// var str = sayHi(5,  5, names)
// console.log(str);









// function show(_render){
// 	_render(function(first, second ){
// 		return first * second;
// 	}); 
// }


// show(function(_callback){
// 	let a = _callback(5,8);
// 	console.log("result: "+a) 
// })



// function showArray(array, cheking){
// 	let i = array.length-1
// 	for(;cheking(i);){
// 		console.log(array[i]);
// 		i--
// 	}
// }

let names = ["Turkan", "Nigar", "Nermin", "Nicat", "Elshad"]

// showArray(names, function(index){
// 	return index == -1 ? false : true
// });




// let arrow =  x => x * 2;   // single parameter

// let arrow = () => "hello world"   // no parameter

// let arrow  = (x, y, z) => (x - y) * z;  // multiple parameter


// let arrow = (array, callback) => {
// 	for(let name of array){
// 		console.log(name)
// 	}

// 	return callback(5,8);
// }

// let result = arrow(names, (a,b)=>{
// 	return 	a * b;
// });


// console.log(result)


// let arrowFunc = (array, _runCall)=>{
// 	_runCall(array)
// }

// arrowFunc(["apple", "banana", "kiwi"], (_array)=>{
// 	for(let name of _array){
// 		console.log(name)
// 	}
// })


let test = (callback) => {
 	return	callback(()=>5, ()=>8);
}

 let result = test((_a, _b)=>{
 	return _a()  * _b()
 })

console.log(result)











