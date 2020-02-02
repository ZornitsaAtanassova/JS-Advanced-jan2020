## _<p align=center>Quick Reference:</p>_ _<p align=center>A simple description of the [array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) methods</p>_

***

## :sparkles: Simulation of Queue and Stack by array methods - push(); pop(); shift();

![Image of Queue and Stack simulation by array methods - push(); pop(); shift();](https://github.com/ZornitsaAtanassova/JS-Advanced-jan2020/blob/master/my-Wikies/Infographics/Queue-Stack_in-JS.png)

***

## :sparkles: Table of frequently used array methods:

Method description | Returns | Changes the array | Does not change the array |
------------ | ------------- |------------- | ------------- |
[*unshift( --value1--, ?...,--valueN-- );*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift) Add to the front of an Array | new **length** of the array | :heavy_check_mark: | :heavy_multiplication_x: |
[*shift();*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift) Remove from the front of an Array | that removed **element** | :heavy_check_mark: | :heavy_multiplication_x: |
[*push( --value1--, ?...,--valueN--_);*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push) Add to the end of an Array | new **length** of the array | :heavy_check_mark: | :heavy_multiplication_x: |
[*pop();*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop) Remove from the end of an Array | that removed **element** | :heavy_check_mark: | :heavy_multiplication_x: |
[*sort( ?--comparator function--);*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) Sorts the elements of an array. Converting the elements into **strings, then comparing** their sequences of UTF-16 code. If no sort criteria is given, it sorting it in ascending order | sorted **array** |:heavy_check_mark: | :heavy_multiplication_x: |
[*reverse();*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse) **Reverses** an array | reversed **array** | :heavy_check_mark: | :heavy_multiplication_x: |
[*indexOf( --search value--, ?--after index-- );*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf) Default finds the index of the first met search item | the first met **index**, or **-1** if it is not present | :heavy_multiplication_x: | :heavy_check_mark: |
[*includes( --search value--, ?--after index-- );*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes) Determines whether an array includes a certain value | **true**, or **false** | :heavy_multiplication_x: | :heavy_check_mark: |
[*join( --some separator-- );*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join) Create a new string by **concatenating all** of the elements in an array with some **separator** | new **string** with some separator | :heavy_multiplication_x: | :heavy_check_mark: |
[*toString();*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toString) Create a new string by **concatenating all** of the elements in an array by **commas** | new **string** with commas | :heavy_multiplication_x: | :heavy_check_mark: |
[*concat( --another arrays--);*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat) **Merge** two or more arrays | **new array** | :heavy_multiplication_x: | :heavy_check_mark: |
[*forEach( _--callback function--_ );*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) Loop over an Array and executes a provided function once for each array element | **function return** | could | could |
[*map( _--callback function--_ );*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) Creates a new array. Loop over an Array and executes a provided function once for each array element | **new array** | :heavy_multiplication_x: | :heavy_check_mark: |
[*filter( _--callback function--_);*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) Creates a new array with all elements that **pass the test** implemented by the provided function | **new array** | :heavy_multiplication_x: | :heavy_check_mark: |
[*slice( ?--from index include--, ?--to index exclude-- );*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice) **Copy** (shadow copy) a portion(or all) of an array **value** into a new array object selected from begin to end (end not included) | **new array** | :heavy_multiplication_x: | :heavy_check_mark: |
[*splice( --from index include--, --remove how match--, ?--add/replace value1--, ?...,--add/replace valueN-- );*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) Changes the contents of an array by **removing** or **replacing** existing elements and/or **adding** new elements | **changed array** and **new array** | :heavy_check_mark: | :heavy_multiplication_x: |
[*fill( --value--, ?--from index include--, ?--to index exclude-- );*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill) **Replace** a value in range of an Array. Оr if no range is given, it fills it completely | **changed array** | :heavy_check_mark: | :heavy_multiplication_x: |
[*reduce( --reducer function-- );*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce) **Reduce** all array elements to a **single output value** | **single output value** | :heavy_multiplication_x: | :heavy_check_mark: |
 |  |  |  |  | 
---
## :owl: Table with simple examples:
*For examples, these initial arrays are used:* ```const arr = ['a', 'b'];``` and ```const arrNum = [4, 100, 1];```

Examples | Returns | Original array state |
-------- | ------- |--------------------- |
```arr.unshift('some1');``` | ```4``` | **```['some1', 'a', 'b']```** |
```arr.shift();``` | ```some1``` | **```['a', 'b']```** |  |
```arr.push('c', 'some2');``` | ```4``` | **```['a', 'b', 'c', 'some2']```** |
```arr.pop();``` | ```some2``` | **```['a', 'b', 'c']```** |
-------- | ------- |------- |
*`1 case:`* ```arr.sort((a, b) => b.localeCompare(a));``` | ```['c', 'b', 'a']``` | **```['c', 'b', 'a']```** |
*`2 case:`* ```arr.sort();``` | ```['a', 'b', 'c']``` | **```['a', 'b', 'c']```** |
*`3 case:`* ```arr.sort((a, b) => a - b);``` | ```['a', 'b', 'c']``` | **```['a', 'b', 'c']```** |
*`4 case:`* ```arr.sort((a, b) => b - a);``` | ```['c', 'b', 'a']``` | **```['c', 'b', 'a']```** |
*`5 case:`* ```arrNum.sort();``` | ```[1, 100, 4]``` | **```[1, 100, 4]```** |
*`6 case:`* ```arrNum.sort((a, b) => a - b);``` | ```[1, 4, 100]``` | **```[1, 4, 100]```** |
-------- | ------- |------- |
```arr.reverse();``` | ```['a', 'b', 'c']``` | **```['a', 'b', 'c']```** |
-------- | ------- |------- |
*`1 case:`* ```arr.indexOf('c');``` | ```2``` | ```['a', 'b', 'c']``` |
*`2 case:`* ```arr.indexOf('b', 0);``` | ```1``` | ```['a', 'b', 'c']``` |
*`3 case:`* ```arr.indexOf('b', 2);``` | ```-1``` | ```['a', 'b', 'c']``` |
-------- | ------- |------- |
*`1 case:`* ```arr.include('a');``` | ```true``` | ```['a', 'b', 'c']``` |
*`2 case:`* ```arr.include('ab');``` | ```false``` | ```['a', 'b', 'c']``` |
*`3 case:`* ```arr.include('a', 1);``` | ```false``` | ```['a', 'b', 'c']``` |
*`4 case:`* ```arr.include('b', arr.length - 2);``` | ```true``` | ```['a', 'b', 'c']``` |
-------- | ------- |------- |
*`1 case:`* ```arr.join();``` | ```a,b,c``` | ```['a', 'b', 'c']``` |
*`2 case:`* ```arr.join('');``` | ```abc``` | ```['a', 'b', 'c']``` |
*`3 case:`* ```arr.join(' - ');``` | ```a - b - c``` | ```['a', 'b', 'c']``` |
-------- | ------- |------- |
```arr.toString();``` | ```a,b,c``` | ```['a', 'b', 'c']``` |
```arr.concat(arrNum);``` | **new array:** ```['a', 'b', 'c', 1, 4, 100]``` | ```['a', 'b', 'c']``` |
```arr.forEach(function(el, id) { console.log(el, id); });``` | a 0 :arrow_heading_down: b 1 :arrow_heading_down: c 2 | ```['a', 'b', 'c']``` |
-------- | ------- |------- |
*`1 case:`* ```arr.map(function(x) { return x.toUpperCase(); });``` | **new array:** ```['A', 'B', 'C']``` | ```['a', 'b', 'c']``` |
*`2 case:`* ```arr.map(el => Number(el));``` | **new array:** ```[NaN, NaN, NaN]``` | ```['a', 'b', 'c']``` |
-------- | ------- |------- |
```arr.filter(el => el === 'a');``` | **new array:** ```['a']``` | ```['a', 'b', 'c']``` |
-------- | ------- |------- |
*`1 case:`* ```arr.slice(1, 2);``` | **new array:** ```['b']``` | ```['a', 'b', 'c']``` |
*`2 case:`* ```arr.slice(0);``` | **new array:** ```['a', 'b', 'c']``` | ```['a', 'b', 'c']``` |
*`2 case:`* ```arr.slice();``` | **new array:** ```['a', 'b', 'c']``` | ```['a', 'b', 'c']``` |
-------- | ------- |------- |
*`1 case:`* ```arr.splice(2, 1);``` | **new array:** ```['c']``` | **```['a', 'b']```** |
*`2 case:`* ```arr.splice(1, 0, 'some');``` | **new array:** ```[]``` | **```['a', 'some', 'b']```** |
*`3 case:`* ```arr.splice(0, 3, 'ab', 'cd', 'ef', '...');``` | **new array:** ```['a', 'some', 'b']``` | **```['ab', 'cd', 'ef', '...']```** |
-------- | ------- |------- |
*`1 case:`* ```arr.fill('*', 1, 3);``` | ```['ab', '*', '*', '...']``` | **```['ab', '*', '*', '...']```** |
*`2 case:`* ```arr.fill('*');``` | ```['*', '*', '*', '*']``` | **```['*', '*', '*', '*']```** |
-------- | ------- |------- |
*`1 case:`* ```arrNum.reduce((a, b) => a + b);``` | ```105``` | ```[1, 4, 100]``` |
*`2 case:`* ```arrNum.reduce((a, b) => a + b, '');``` | ```14100``` | ```[1, 4, 100]``` |
*`3 case:`* ```arrNum.reduce((a, b) => (a + b) / arrNum.length);``` | ```35``` | ```[1, 4, 100]``` |
|  |  |  |

*The initial arrays: ```arr = ['a', 'b']``` after was modified by applied methods, now looks like this: ```arr = ['*', '*', '*', '*']```. And ```arrNum = [4, 100, 1]``` now look like this: ```arrNum = [1, 4, 100]```*

---
