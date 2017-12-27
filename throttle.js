/**
 * Created by ShanGuo on 2017/12/27.
 */
function throttle(fn, dealy, atleast) {
    let timeout = null;
    let startTime = Date.now();
    return function(){
        const curTime = Date.now();
        clearTimeout(timeout);
        if(curTime - startTime >= atleast){
            fn();
            startTime = curTime
        }else{
            timeout = setTimeout(fn,dealy)
        }
    }
}