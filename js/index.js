// 实现直播盒子的进入显示离开隐藏
$('.head .logo-zhibo ').mouseenter(function(){
   $('.head .logo-fl .zhobofenlei').css('display','block');
})
$('.head .logo-zhibo ').mouseleave(function(){
       $('.head .logo-fl .zhobofenlei').css('display','none');
    })
   

     

// 实现赛事盒子的进入显示离开隐藏
$('.head .logo-fenlei ').mouseenter(function(){
       $('.head .logo-fl .saishi').css('display','block');
    })
    $('.head .logo-fenlei ').mouseleave(function(){
           $('.head .logo-fl .saishi').css('display','none');
        })

// 实现观看历史盒子的进入显示离开隐藏
$('.head-right .right3').mouseenter(function(){
    $('.head-right .right3 .xl-box1 ').css('display','block');
    })

$('.head-right .right3').mouseleave(function(){
    $('.head-right .right3 .xl-box1 ').css('display','none');
    })

    // 实现下载盒子的进入显示离开隐藏
$('.head-right .right4').mouseenter(function(){
    $('.head-right .right4  .right4-xlbox ').css('display','block');
    })

$('.head-right .right4').mouseleave(function(){
    $('.head-right .right4 .right4-xlbox ').css('display','none');
    })
    
    // 头部结束···································

    // 实现中部导航赛事进入显示离开隐藏
$('.nav-head .nav-head-saishi-xiabox').mouseenter(function(){
    $('.nav-head .nav-head-saishi-xiabox .nav-menu').stop();
    $('.nav-head .nav-head-saishi-xiabox .nav-menu').fadeIn(200).animate({top:328},200);
})

$('.nav-head .nav-head-saishi-xiabox').mouseleave(function(){
    $('.nav-head .nav-head-saishi-xiabox .nav-menu').stop();
    $('.nav-head .nav-head-saishi-xiabox .nav-menu').css('display','none').animate({top:308},200);
 
    
})


    // 实现中部导航式神进入显示离开隐藏
    $('.nav-head .nav-xiabox').mouseenter(function(){
        $('.nav-head .nav-xiabox .nav-ssgl').stop();
        $('.nav-head .nav-xiabox .nav-ssgl').css('display','block').animate({top:328},200);
        
    })
    
    $('.nav-head .nav-xiabox').mouseleave(function(){
        $('.nav-head .nav-xiabox .nav-ssgl').stop();
        $('.nav-head .nav-xiabox .nav-ssgl').css('display','none').animate({top:308},200);
        
    })


        // 实现中部导航打发进入显示离开隐藏
        $('.nav-head .nav-dfgl-box').mouseenter(function(){
            $('.nav-head .nav-dfgl-box .nav-dfgl').stop();
            $('.nav-head .nav-dfgl-box .nav-dfgl').css('display','block').animate({top:328},200);
            
        })
        
        $('.nav-head .nav-dfgl-box').mouseleave(function(){
            $('.nav-head .nav-dfgl-box .nav-dfgl').stop();
            $('.nav-head .nav-dfgl-box .nav-dfgl').css('display','none').animate({top:308},200);
            
        })
            function lbt(){
                            // 实现中部轮播图
                var v =0;
                $('.nav-body .nav-body-banner ul li').click(function(){
                    v=$(this).index();
                        $('.nav-body .nav-body-banner a').eq(v).css('display','block').siblings().css('display','none');
                        $(this).css('background','#0093fb').siblings().css('background','#fff');
                    
                })
                // 轮播图定时器
                var dsq;
            function hanshu(){
             dsq=  window.setInterval(function(){
                    // alert('1')
                    if(v == 0){
                        v = 1;
                        $('.nav-body .nav-body-banner a').eq(v).css('display','block').siblings().css('display','none');
                        $('.nav-body .nav-body-banner li').eq(v).css('background','#0093fb').siblings().css('background','#fff');
                    }else if(v == 1){
                        v = 0;
                        $('.nav-body .nav-body-banner a').eq(v).css('display','block').siblings().css('display','none');
                        $('.nav-body .nav-body-banner li').eq(v).css('background','#0093fb').siblings().css('background','#fff');
                    }
                },1000)

              }
              hanshu();
              $('.nav-body .nav-body-banner').mouseenter(function(){
                  window.clearInterval(dsq);
              });
              $('.nav-body .nav-body-banner').mouseleave(function(){
                hanshu();
            });

            }
                lbt();


                // 实现视频列表点击事件
        
        $('.dt-top  .dianji1').click(function(){
           $(this).addClass('active').parent().siblings().children().removeClass('active');
           $('.dt-shipin .shipin-ull1').css('display','block').siblings().css('display','none');
        })


        $('.dt-top  .dianji2').click(function(){
         
           
            $(this).addClass('active').parent().siblings().children().removeClass('active');
            $('.dt-shipin .shipin-ull2').css('display','block').siblings().css('display','none');
         })
         $('.dt-top  .dianji3').click(function(){
         
           
            $(this).addClass('active').parent().siblings().children().removeClass('active');
            $('.dt-shipin .shipin-ull3').css('display','block').siblings().css('display','none');
         })


        //  实现鼠标进入视频播放按钮显示功能
    
        $('.dt-shipin ul li .dt-tpBox').mouseenter(function(){
        $(this).next().children('.st').css('color','#0093fb');
        $(this).parent().css('border-shadow','2px #000')
           
        })


        $('.dt-shipin ul li .dt-tpBox').mouseleave(function(){
            $(this).next().children('.st').css('color','#333');
        })


        // 实现点击右侧年月日按钮
        $('.tlab-right .tabs li').click(function(){
            $(this).addClass('active').siblings().removeClass('active');
            var v = $(this).index();
            $('.tlab-right .list').eq(v).css('display','block').siblings().css('display','none');
           
        })


        // 实现右侧轮播图
        function ycLbt(){
            var index=0;
            $('.youce-lb .zb-lbt .yd li').click(function(){
                 index = $(this).index();
                $(this).addClass('active').siblings().removeClass('active');
                $('.zb-lbt .banner .banner-ul li').eq(index).css('display','block').siblings().css('display','none');
                $('.zb-lbt .banner .banner-yh li').eq(index).css('display','block').siblings().css('display','none');
                $('.zb-lbt .banner .text li').eq(index).css('display','block').siblings().css('display','none');
                $('.zb-lbt .banner .btm-text li').eq(index).css('display','block').siblings().css('display','none');
        
            })
      
        var dsq;
           function stim(){
                // 自动轮播
                dsq = window.setInterval(function(){
               
                index ++;
                if(index >= 3){
                    index =0;
                }
                // alert(index);
                $('.youce-lb .zb-lbt .yd li').eq(index).addClass('active').siblings().removeClass('active');
                $('.zb-lbt .banner .banner-ul li').eq(index).css('display','block').siblings().css('display','none');
                $('.zb-lbt .banner .banner-yh li').eq(index).css('display','block').siblings().css('display','none');
                $('.zb-lbt .banner .text li').eq(index).css('display','block').siblings().css('display','none');
                $('.zb-lbt .banner .btm-text li').eq(index).css('display','block').siblings().css('display','none');
            },1000);
          

           }
           stim();
            // 鼠标进去停止自动轮播离开继续自动轮播
            $('.zb-lbt ').mouseenter(function(){
               
               window.clearInterval(dsq);
            })
            $('.zb-lbt ').mouseleave(function(){
                stim();
             })
        }
         ycLbt();


        // 实现右侧固定盒子
        // 获取右侧TAB切换盒子的位置
     var v1 = $('.lb-dt  .dt-top').offset().top;
        // 注册个滚动事件
        $(window).scroll(function(){
             // 获取当前与顶部的距离
                var v2 = $(window).scrollTop();
                if(v2 >= v1){
                    $('.yc-gd-box .gd-ul  .li1' ).css('display','block');
                
                }else{
                    $('.yc-gd-box .gd-ul  .li1' ).css('display','none');
            
                }
        });
        // 实现点击元素回到顶部

        $('.yc-gd-box .gd-ul  .li1').click(function(){
            $('html,body').animate({scrollTop:0},500);
        })

        // 实现鼠标放上显示离开隐藏二维码
        $('.yc-gd-box .gd-ul  .li5').mouseenter(function(){
            $(this).children('.sj-box').css('display','block');
        })
        $('.yc-gd-box .gd-ul  .li5').mouseleave(function(){
            $(this).children('.sj-box').css('display','none');
        })

        $('.yc-gd-box .gd-ul  .li6').mouseenter(function(){
            $(this).children('.sj-box').css('display','block');
        })
        $('.yc-gd-box .gd-ul  .li6').mouseleave(function(){
            $(this).children('.sj-box').css('display','none');
        })