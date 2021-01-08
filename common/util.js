
function antiShake(){
	let flag = true;
	const toggle = () => flag = true;
	return function(callback){
		if(!flag) return 0;
		flag = false;
		callback && callback(toggle);
	}
}

function throttle(){
	let timer = -1;
	return function(time, callback){
		if(timer) clearTimeout(timer);
		timer = setTimeout(() => {
			callback && callback();
		}, time)
	}
}

export {
	antiShake,
	throttle
}