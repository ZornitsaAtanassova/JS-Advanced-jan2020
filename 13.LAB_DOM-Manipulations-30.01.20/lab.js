/* // Callback functins
function doSomething(callback) {
      if(true && typeof(callback) === 'function') {
            callback();
      }
}

function printHello() {
      console.log('Hello');
}

doSomething(printHello);
doSomething('something');
doSomething(printHello); */


// Event Loop mechanism - Stack calls first the functins, after them calls the events

/* function test() {
      console.log('Hello from test function');
      setTimeout(console.log, 2*1000, 'Hello from Event'); //2*1000 = 2 seconds
      console.log('This is after Event');
}

test(); */


function foo() {
      // debugger;
      // 3
      setTimeout(console.log, 0, 'Event foo');
      // 2
      console.log('from foo');
}
function bar() {
      //foo(); //foo bar Event foo

      // 1
      console.log('from bar');
      // 2
      foo(); // bar foo Event foo
}

bar();
bar();
