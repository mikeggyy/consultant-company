resizeLoad();
// 第一屏
window.addEventListener("load", function () {
    // 重新load的時候回到頂部
    headFeatures();
    $("html,body").animate({
        scrollTop: $("#main-01").offset().top
    }, 10);

    // 當螢幕大小發生變化事件
    var nav = document.querySelector("nav");
    if ($(window).width() < 992) {
        // 螢幕寬度小於992時觸發
        // 右邊選單滾輪偵測(highlight)
        nav.querySelectorAll("span")[0].style.transition = "1s ease";
        nav.querySelectorAll("span")[1].style.transition = "1s ease";
        nav.querySelectorAll("span")[2].style.transition = "1s ease";
        nav.querySelectorAll("span")[3].style.transition = "1s ease";
        nav.querySelectorAll("span")[4].style.transition = "1s ease";
        window.addEventListener("scroll", function () {
            var main01Top = $("#main-01").offset().top;
            var main02Top = $("#main-02").offset().top;
            var main03Top = $("#main-03").offset().top;
            var main04Top = $("#main-04").offset().top;
            var main05Top = $("#main-05").offset().top;
            var windowTop = document.scrollingElement.scrollTop;
            if (windowTop >= (main01Top - 200) && windowTop < main02Top - 200) {
                navHighLight01();
            } else if (windowTop >= (main02Top - 200) && windowTop < (main03Top - 200)) {
                navHighLight02();
            } else if (windowTop >= (main03Top - 200) && windowTop < (main04Top - 200)) {
                navHighLight03();
                clientCount();
                caseCount();
                serviceHours();
            } else if (windowTop >= (main04Top - 200) && windowTop < (main05Top - 200)) {
                navHighLight04();
            } else if (windowTop >= (main05Top - 200)) {
                navHighLight05();
            }
        });

    } else if ($(window).width() >= 992) {
        // 螢幕大於寬度992時觸發
        $(function(){
            $('#dowebok').fullpage({
                afterLoad: function(anchorLink, index){
                    // if(index==1){
                    //     navHighLight01();
                    // }
                    // if(index == 2){
                    //     navHighLight02();
                    // }
                    // if(index == 3){
                    //     navHighLight03();
                    // }
                    // if(index == 4){
                    //     navHighLight04();
                    // }
                    // if(index == 5){
                    //     navHighLight05();
                    // }
                },
                onLeave: function(index, nextIndex){
                    if(nextIndex == '1'){
                        navHighLight01();
                    }
                    if(nextIndex == '2'){
                        navHighLight02();
                    }
                    if(nextIndex == '3'){
                        navHighLight03();
                    }
                    if(nextIndex == '4'){
                        navHighLight04();
                    }
                    if(nextIndex == '5'){
                        navHighLight05();
                    }
                }
        
            });
        });
        // 滑鼠滾輪整屏移動
        nav.querySelectorAll("span")[0].style.transition = ".25s ease";
        nav.querySelectorAll("span")[1].style.transition = ".25s ease";
        nav.querySelectorAll("span")[2].style.transition = ".25s ease";
        nav.querySelectorAll("span")[3].style.transition = ".25s ease";
        nav.querySelectorAll("span")[4].style.transition = ".25s ease";

        // document.querySelector("#main-01").addEventListener("wheel", function (event) {
        //     var y = event.deltaY;
        //     setTimeout(function () {
        //         if (y > 80) {
        //             htmlScreenToZone2();
        //         }
        //     }, 80);
        // });

        // document.querySelector("#main-02").addEventListener("wheel", function (event) {
        //     var y = event.deltaY;
        //     setTimeout(function () {
        //         if (y > 80) {
        //             htmlScreenToZone3();
        //             clientCount();
        //             caseCount();
        //             serviceHours();
        //         } else if (y < -80) {
        //             htmlScreenToZone1();
        //         }
        //     }, 80);
        // });

        // document.querySelector("#main-03").addEventListener("wheel", function (event) {
        //     var y = event.deltaY;
        //     setTimeout(function () {
        //         if (y > 80) {
        //             htmlScreenToZone4();
        //         } else if (y < -80) {
        //             htmlScreenToZone2();
        //         }
        //     }, 80);
        // });

        // document.querySelector("#main-04").addEventListener("wheel", function (event) {
        //     var y = event.deltaY;
        //     setTimeout(function () {
        //         if (y > 80) {
        //             htmlScreenToZone5();
        //         } else if (y < -80) {
        //             htmlScreenToZone3();
        //         }
        //     }, 80);
        // });

        // document.querySelector("#main-05").addEventListener("wheel", function (event) {
        //     var y = event.deltaY;
        //     setTimeout(function () {
        //         if (y < -80) {
        //             htmlScreenToZone4();
        //         }
        //     }, 80);
        // });
    }

    // 第二屏圖片切換
    var screen = document.getElementsByClassName("screen");
    for (var i = 0; i < screen.length; i++) {
        screen[i].style.transition = ".5s";
        screen[i].querySelector(".select-screen").children[0].addEventListener("click", function () {
            document.querySelector(".second-screen").style.left = "200%";
            document.querySelector(".three-screen").style.left = "200%";
            document.querySelector(".four-screen").style.left = "200%";
            document.querySelector(".five-screen").style.left = "200%";
            document.querySelector(".six-screen").style.left = "200%";
        });
        screen[i].querySelector(".select-screen").children[1].addEventListener("click", function () {
            document.querySelector(".second-screen").style.left = "0";
            document.querySelector(".three-screen").style.left = "200%";
            document.querySelector(".four-screen").style.left = "200%";
            document.querySelector(".five-screen").style.left = "200%";
            document.querySelector(".six-screen").style.left = "200%";
        });
        screen[i].querySelector(".select-screen").children[2].addEventListener("click", function () {
            document.querySelector(".three-screen").style.left = "0";
            document.querySelector(".four-screen").style.left = "200%";
            document.querySelector(".five-screen").style.left = "200%";
            document.querySelector(".six-screen").style.left = "200%";
        });
        screen[i].querySelector(".select-screen").children[3].addEventListener("click", function () {
            document.querySelector(".four-screen").style.left = "0";
            document.querySelector(".five-screen").style.left = "200%";
            document.querySelector(".six-screen").style.left = "200%";
        });
        screen[i].querySelector(".select-screen").children[4].addEventListener("click", function () {
            document.querySelector(".five-screen").style.left = "0";
            document.querySelector(".six-screen").style.left = "200%";
        });
        screen[i].querySelector(".select-screen").children[5].addEventListener("click", function () {
            document.querySelector(".six-screen").style.left = "0";
        });
    }


    // 右邊選單點擊事件
    // $("#zone-01").click(function () {
    //     navHighLight01();
    //     // $("html,body").animate({
    //     //     scrollTop: $("#main-01").offset().top
    //     // }, 250);
    //     // return false;
    // });
    // $("#zone-02").click(function () {
    //     navHighLight02();
    //     // $("html,body").animate({
    //     //     scrollTop: $("#main-02").offset().top
    //     // }, 250);
    //     // return false;
    // });
    // $("#zone-03").click(function () {
    //     // clientCount();
    //     // caseCount();
    //     // serviceHours();
    //     navHighLight03();
    //     // $("html,body").animate({
    //     //     scrollTop: $("#main-03").offset().top
    //     // }, 250);
    //     // return false;
    // });
    // $("#zone-04").click(function () {
    //     navHighLight04();
    //     // $("html,body").animate({
    //     //     scrollTop: $("#main-04").offset().top
    //     // }, 250);
    //     // return false;
    // });
    // $("#zone-05").click(function () {
    //     navHighLight05();
    //     // $("html,body").animate({
    //     //     scrollTop: $("#main-05").offset().top
    //     // }, 250);
    //     // return false;
    // });

});