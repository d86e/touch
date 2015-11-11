# touch
jQuery的滑动手势事件插件

touch方法接收两个参数:

1.滑动的方向,如:top,bottom,left,right

2.回调方法,事件发生后运行的函数

使用示例:

    //向上滑动事件
    $("body").touch("top",function(){
        console.log("top");
    })

    //向下滑动事件
    $("body").touch("bottom",function(){
        console.log("bottom");
    })

    //向左滑动事件
    $("body").touch("left",function(){
        console.log("left");
    })

    //向左滑动事件
    $("body").touch("right",function(){
        console.log("right");
    })
