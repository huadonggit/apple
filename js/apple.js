

window.onresize=function(){
    var widths=$(window).width();
    //alert(widths)
    if(widths>=740){
        $(".header1").css("display","block");
        $(".header2").css("display","none");
        $(".menu1").css("display","block");
        $(".menu2").css("display","none")
    }else{
        $(".header1").css("display","none");
        $(".header2").css("display","block");
        $(".menu1").css("display","none");
        $(".menu2").css("display","block")
    }
}

$(function(){
    window.onresize();

    $(".btn").click(function(){
        $(".con").slideToggle(200);
    })

$(".con1").each(function(index){
    this.index=index;
    $(this).click(function(e){
        $(".menu2 .cons").eq(this.index).slideToggle(300);
        e.preventDefault();
    })
})

    //$(".banner .bbtn .btn").each(function(index))

 var t=setInterval(move,2000);
var num=0;
    function move(){
        num++;
        if(num>=4){
            num=0
        }
        $(".bcon").animate({"marginLeft":(-$(".bcon div").width())},500,function(){
            $(".bcon div:first").appendTo($(".bcon"));
            $(".bcon").css("marginLeft",0);
        });
        $(".bbtn .btn").css("background","#999").css("border","none").eq(num).css("background","#fff").css("border","1px solid #2398d3");
    }

    $(".bbtn .btn").each(function(index){
        this.index=index;
        $(this).mouseover(function(){
            $(this).siblings().css("background","#999").end().css("background","#777")
        })
        $(this).click(function(){
            clearInterval(t);
            $(".bbtn .btn").css("background","#999").css("border","none").eq(this.index).css("background","#fff").css("border","1px solid #2398d3");
            $(".bcon").animate({"marginLeft":(-$(".bcon div").width())*this.index},500)
        })

    })













})