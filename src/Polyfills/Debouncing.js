/*
    What is a debounce function?

    Debounce function limits the execution of a function call and waits for a certain amount of time before running it again.
    
    <input 
        type="text"
        value=""
        onkeyup={getBetterFunc(this)}
    />
    <button 
        type="button"
    >Click</button>
*/

const getData = (e) => {
	console.log("Counter value: ", e.value);
}

const debounce = (fn, d) => {
    let timer;
	return function() {
  	const context = this,
    	    args = arguments;
     clearTimeout(timer);
  	timer = setTimeout(() => {
    	fn.apply(context, args);
    }, d)
  }
}

const getBetterFunc = debounce(getData, 300);
