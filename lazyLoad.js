/**
 * Created by ShanGuo on 2017/12/27.
 */
function lazyLoad() {
    const images = document.getElementsByTagName('img');
    const len = images.length;
    let n = 0;
    return function () {
        const seeHeight = document.documentElement.clientHeight;
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

        for(let i = n; i <len; i++ ){
            if(images[i].offsetTop < seeHeight + scrollTop){
                if(images[i].getAttribute('src') === '//www.baidu.com/img/bd_logo1.png'){
                    images[i].src = images[i].getAttribute('data-src');
                    images[i].removeAttribute('data-src');
                }
                n= n +1
            }
        }
    }
}

let loadImages = lazyLoad();
window.onload = function () {
    loadImages();
    // window.addEventListener('scroll',loadImages,false)
    window.addEventListener('scroll',
        throttle(loadImages, 500 , 1000),
        false
    )
};