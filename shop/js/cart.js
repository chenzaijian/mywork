/**
 * Created by czj on 2018/3/1.
 */
$(function() {

    $(".jd_cart .cart_tips .txt").animate({
        "fontSize": "18px"
    }, 400)
    var flag=true;
    $(".jd_cart .cart_title > div > .check_icon").click(function(){

        if(flag){
             //$(".jd_cart .cart_title > div > .check_icon").removeClass("check_icon");
             $(".jd_cart .cart_title > div > .check_icon").addClass("nocheck_icon");
             flag=false;
        }
        else{
            $(".jd_cart .cart_title > div > .check_icon").removeClass("nocheck_icon");
            //$(".jd_cart .cart_title > div > .check_icon").addClass("check_icon");
            flag=true;
        }
    })


     $(".jd_cart .jd_cart_content ul li a .select_icon ").click(function() {
         //console.log("aaa")
         if ($(this).attr("class") == "select_icon") {
             $(this).addClass("noselect");

         }
         else {
             $(this).removeClass("noselect");

         }
     })  //选择按钮


    //console.log(test)
    //$(".jd_cart .jd_cart_content ul li a .pro_detail .name").text(str);
    //var lis=$("$(".jd_cart .jd_cart_content ul li a .pro_detail .name")").children("name");
    var lis=document.querySelectorAll(".jd_cart .jd_cart_content ul li a .pro_detail .name")
    for(var i=0;i<lis.length;i++)
    {
        var str=lis[i].textContent.substr(0,35) + " ...";
        //console.log(str)
        lis[i].textContent=str;
    }
//    截取名字长度

    $(".jd_cart .jd_cart_content ul li a .pro_detail .check .del").click(function(){
         var a=$(this).parentsUntil($(this),'li')
        //var b=a.index()
        //console.log(a)

        a.remove();
    })

     $(".jd_cart .jd_total  .jd_total_box .total_left .check_all").click(function(){
         if ($(this).attr("class") == "check_all") {
             $(this).addClass("nocheck");
             $(".jd_cart .jd_cart_content ul li a .select_icon").addClass("noselect");
         }
         else {
             $(this).removeClass("nocheck");
             $(".jd_cart .jd_cart_content ul li a .select_icon").removeClass("noselect");
         }
     })   //  全选
    function test(c,pr){

        var total = document.querySelector(".jd_cart .jd_total  .jd_total_box .total_left" +
            " .total_sum .total .total_num")
        var price = document.querySelectorAll(".jd_cart_content ul li a .pro_detail .price .price_num")
        var flag = document.querySelectorAll(" .jd_cart .jd_cart_content ul li a .select_icon")
        var sum=0;

        //console.log(flag)

        for (var i = 0; i < flag.length; i++) {
            if (flag[i].className == "select_icon") {

                sum = sum + parseFloat(price[i].textContent);
            }
            else {
                //sum = sum + parseFloat(price[i].textContent)*c;
                sum = sum;
            }

        }

           total.textContent = sum


     //   var total = document.querySelector(".jd_cart .jd_total  .jd_total_box .total_left" +
     //       " .total_sum .total .total_num")

     //var aaa=$(".jd_cart .jd_cart_content ul li a .pro_detail .check .num_box input").val()
     //   console.log(aaa)
        //var price = document.querySelectorAll(".jd_cart_content ul li a .pro_detail .price .price_num")

        //console.log(b)

    }
    $(".jd_cart .jd_cart_content ul li a .select_icon ").click(function() {
        var inps=document.querySelectorAll(".jd_cart_content ul li a .pro_detail .check .num_box input")
      //var li=inps[0].parentsUntil(inps[0],'li')
        console.log()
        var li=$(this).parentsUntil($(this),'li')
        //
        var f=0
        var c=li.find("input").val()
       if(c){
           c=parseInt(c);
       }else{
           c=1;
       }
        var d=li.find("span")
        //console.log(d)
        for(var i=0;i< d.length;i++)
        {
            if(d[i].className=="price_num"){
              f = d[i];
            }
        }
        if ($(this).attr("class") == "select_icon"){
            c=c;
            sum=sum+(c-1)*f.textContent
        }else{
            c=1;
        }
        //    console.log(c)
        //console.log( f.textContent)
       //test(c, f.textContent);

            var total = document.querySelector(".jd_cart .jd_total  .jd_total_box .total_left" +
                " .total_sum .total .total_num")
            var price = document.querySelectorAll(".jd_cart_content ul li a .pro_detail .price .price_num")
            var flag = document.querySelectorAll(" .jd_cart .jd_cart_content ul li a .select_icon")

            //sum=sum+(c-1)*f.textContent
            //console.log(flag)

            for (var i = 0; i < flag.length; i++) {
                if (flag[i].className == "select_icon") {

                    sum = sum + parseFloat(price[i].textContent);
                }
                else {
                    //sum = sum + parseFloat(price[i].textContent)*c;
                    sum = sum;
                }

            }

            total.textContent = sum

    })
    $(".jd_cart .jd_total  .jd_total_box .total_left .check_all").click(function(){
       test();
    })
    $(".jd_cart .jd_cart_content ul li a .pro_detail .check .del").click(function(){

        test();
    })
    $(".jd_cart .jd_cart_content ul li a .pro_detail .check .num_box .add").click(function(){
        //$(".jd_cart .jd_cart_content ul li a .pro_detail .check .num_box input").val()
        var sl=    $(this).siblings("input").val()
        sl=parseInt(sl)+1;
        $(this).siblings("input").val(sl)
    })
    $(".jd_cart .jd_cart_content ul li a .pro_detail .check .num_box .cut").click(function(){

        var sl=    $(this).siblings("input").val()
        if(parseInt(sl)>1){
        sl=parseInt(sl)-1;
        $(this).siblings("input").val(sl)
        }
        else
        {
           return false;
        }
    })


})
