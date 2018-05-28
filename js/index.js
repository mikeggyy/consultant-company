    // 螢幕大小改變後重新load
    window.addEventListener("resize", function () {
        window.location.reload();
    });
    // 第一屏
    window.addEventListener("load", function () {
        var nav = document.querySelector("nav");

        // 當螢幕大小發生變化事件
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
                if (windowTop >= (main01Top - 100) && windowTop < main02Top - 100) {
                    nav.querySelectorAll("span")[0].style.color = "#177B57";
                    nav.querySelectorAll("span")[1].style.color = "white";
                    nav.querySelectorAll("span")[2].style.color = "white";
                    nav.querySelectorAll("span")[3].style.color = "white";
                    nav.querySelectorAll("span")[4].style.color = "white";
                } else if (windowTop >= (main02Top - 100) && windowTop < (main03Top - 100)) {
                    nav.querySelectorAll("span")[0].style.color = "white";
                    nav.querySelectorAll("span")[1].style.color = "#177B57";
                    nav.querySelectorAll("span")[2].style.color = "white";
                    nav.querySelectorAll("span")[3].style.color = "white";
                    nav.querySelectorAll("span")[4].style.color = "white";
                } else if (windowTop >= (main03Top - 100) && windowTop < (main04Top - 100)) {
                    nav.querySelectorAll("span")[0].style.color = "white";
                    nav.querySelectorAll("span")[1].style.color = "white";
                    nav.querySelectorAll("span")[2].style.color = "#177B57";
                    nav.querySelectorAll("span")[3].style.color = "white";
                    nav.querySelectorAll("span")[4].style.color = "white";
                } else if (windowTop >= (main04Top - 100) && windowTop < (main05Top - 100)) {
                    nav.querySelectorAll("span")[0].style.color = "white";
                    nav.querySelectorAll("span")[1].style.color = "white";
                    nav.querySelectorAll("span")[2].style.color = "white";
                    nav.querySelectorAll("span")[3].style.color = "#177B57";
                    nav.querySelectorAll("span")[4].style.color = "white";
                } else if (windowTop >= (main05Top - 100)) {
                    nav.querySelectorAll("span")[0].style.color = "white";
                    nav.querySelectorAll("span")[1].style.color = "white";
                    nav.querySelectorAll("span")[2].style.color = "white";
                    nav.querySelectorAll("span")[3].style.color = "white";
                    nav.querySelectorAll("span")[4].style.color = "#177B57";
                }

            });
            // 右邊選單點擊事件
            $("#zone-01").click(function () {
                $("html,body").animate({
                    scrollTop: $("#main-01").offset().top
                }, 700);
                return false;
            });
            $("#zone-02").click(function () {
                $("html,body").animate({
                    scrollTop: $("#main-02").offset().top
                }, 700);
                return false;
            });
            $("#zone-03").click(function () {
                $("html,body").animate({
                    scrollTop: $("#main-03").offset().top
                }, 700);
                return false;
            });
            $("#zone-04").click(function () {
                $("html,body").animate({
                    scrollTop: $("#main-04").offset().top
                }, 700);
                return false;
            });
            $("#zone-05").click(function () {
                $("html,body").animate({
                    scrollTop: $("#main-05").offset().top
                }, 700);
                return false;
            });
        } else if ($(window).width() >= 992) {
            // 螢幕大於寬度992時觸發
            // 讓螢幕一進網頁置頂
            $("html,body").animate({
                scrollTop: $("#main-01").offset().top
            }, 50);
            // 滑鼠滾輪整屏移動
            document.querySelector("#main-01").style.transition = "1s ease";
            document.querySelector("#main-02").style.transition = "1s ease";
            document.querySelector("#main-03").style.transition = "1s ease";
            document.querySelector("#main-04").style.transition = "1s ease";
            document.querySelector("#main-05").style.transition = "1s ease";
            nav.querySelectorAll("span")[0].style.transition = "1s ease";
            nav.querySelectorAll("span")[1].style.transition = "1s ease";
            nav.querySelectorAll("span")[2].style.transition = "1s ease";
            nav.querySelectorAll("span")[3].style.transition = "1s ease";
            nav.querySelectorAll("span")[4].style.transition = "1s ease";

            document.querySelector("#main-01").addEventListener("wheel", function (event) {
                var y = event.deltaY;
                if (y > 0) {
                    document.querySelector("#main-02").style.top = "-100vh";
                    nav.querySelectorAll("span")[0].style.color = "white";
                    nav.querySelectorAll("span")[1].style.color = "#177B57";
                    nav.querySelectorAll("span")[2].style.color = "white";
                    nav.querySelectorAll("span")[3].style.color = "white";
                    nav.querySelectorAll("span")[4].style.color = "white";
                }
            });
            document.querySelector("#main-02").addEventListener("wheel", function (event) {
                var y = event.deltaY;
                if (y > 0) {
                    document.querySelector("#main-03").style.top = "-200vh";
                    nav.querySelectorAll("span")[0].style.color = "white";
                    nav.querySelectorAll("span")[1].style.color = "white";
                    nav.querySelectorAll("span")[2].style.color = "#177B57";
                    nav.querySelectorAll("span")[3].style.color = "white";
                    nav.querySelectorAll("span")[4].style.color = "white";
                } else if (y < 0) {
                    document.querySelector("#main-02").style.top = "100vh";
                    nav.querySelectorAll("span")[0].style.color = "#177B57";
                    nav.querySelectorAll("span")[1].style.color = "white";
                    nav.querySelectorAll("span")[2].style.color = "white";
                    nav.querySelectorAll("span")[3].style.color = "white";
                    nav.querySelectorAll("span")[4].style.color = "white";
                }
            });
            document.querySelector("#main-03").addEventListener("wheel", function (event) {
                var y = event.deltaY;
                if (y > 0) {
                    document.querySelector("#main-04").style.top = "-300vh";
                    nav.querySelectorAll("span")[0].style.color = "white";
                    nav.querySelectorAll("span")[1].style.color = "white";
                    nav.querySelectorAll("span")[2].style.color = "white";
                    nav.querySelectorAll("span")[3].style.color = "#177B57";
                    nav.querySelectorAll("span")[4].style.color = "white";
                } else if (y < 0) {
                    document.querySelector("#main-03").style.top = "100vh";
                    document.querySelector("#main-02").style.top = "-100vh";
                    nav.querySelectorAll("span")[0].style.color = "white";
                    nav.querySelectorAll("span")[1].style.color = "#177B57";
                    nav.querySelectorAll("span")[2].style.color = "white";
                    nav.querySelectorAll("span")[3].style.color = "white";
                    nav.querySelectorAll("span")[4].style.color = "white";
                }
            });
            document.querySelector("#main-04").addEventListener("wheel", function (event) {
                var y = event.deltaY;
                if (y > 0) {
                    document.querySelector("#main-05").style.top = "-400vh";
                    nav.querySelectorAll("span")[0].style.color = "white";
                    nav.querySelectorAll("span")[1].style.color = "white";
                    nav.querySelectorAll("span")[2].style.color = "white";
                    nav.querySelectorAll("span")[3].style.color = "white";
                    nav.querySelectorAll("span")[4].style.color = "#177B57";
                } else if (y < 0) {
                    document.querySelector("#main-04").style.top = "100vh";
                    document.querySelector("#main-03").style.top = "-200vh";
                    nav.querySelectorAll("span")[0].style.color = "white";
                    nav.querySelectorAll("span")[1].style.color = "white";
                    nav.querySelectorAll("span")[2].style.color = "#177B57";
                    nav.querySelectorAll("span")[3].style.color = "white";
                    nav.querySelectorAll("span")[4].style.color = "white";
                }
            });
            document.querySelector("#main-05").addEventListener("wheel", function (event) {
                var y = event.deltaY;
                if (y < 0) {
                    document.querySelector("#main-05").style.top = "100vh";
                    document.querySelector("#main-04").style.top = "-300vh";
                    nav.querySelectorAll("span")[0].style.color = "white";
                    nav.querySelectorAll("span")[1].style.color = "white";
                    nav.querySelectorAll("span")[2].style.color = "white";
                    nav.querySelectorAll("span")[3].style.color = "#177B57";
                    nav.querySelectorAll("span")[4].style.color = "white";
                }
            });

            // 右邊選單點擊事件
            $("#zone-01").click(function () {
                document.querySelector("#main-02").style.top = "0vh";
                document.querySelector("#main-03").style.top = "0vh";
                document.querySelector("#main-04").style.top = "0vh";
                document.querySelector("#main-05").style.top = "0vh";
                nav.querySelectorAll("span")[0].style.color = "#177B57";
                nav.querySelectorAll("span")[1].style.color = "white";
                nav.querySelectorAll("span")[2].style.color = "white";
                nav.querySelectorAll("span")[3].style.color = "white";
                nav.querySelectorAll("span")[4].style.color = "white";
            });
            $("#zone-02").click(function () {
                document.querySelector("#main-02").style.top = "-100vh";
                document.querySelector("#main-03").style.top = "0vh";
                document.querySelector("#main-04").style.top = "0vh";
                document.querySelector("#main-05").style.top = "0vh";
                nav.querySelectorAll("span")[0].style.color = "white";
                nav.querySelectorAll("span")[1].style.color = "#177B57";
                nav.querySelectorAll("span")[2].style.color = "white";
                nav.querySelectorAll("span")[3].style.color = "white";
                nav.querySelectorAll("span")[4].style.color = "white";
            });
            $("#zone-03").click(function () {
                document.querySelector("#main-02").style.top = "0vh";
                document.querySelector("#main-03").style.top = "-200vh";
                document.querySelector("#main-04").style.top = "0vh";
                document.querySelector("#main-05").style.top = "0vh";
                nav.querySelectorAll("span")[0].style.color = "white";
                nav.querySelectorAll("span")[1].style.color = "white";
                nav.querySelectorAll("span")[2].style.color = "#177B57";
                nav.querySelectorAll("span")[3].style.color = "white";
                nav.querySelectorAll("span")[4].style.color = "white";
            });
            $("#zone-04").click(function () {
                document.querySelector("#main-02").style.top = "0vh";
                document.querySelector("#main-03").style.top = "0vh";
                document.querySelector("#main-04").style.top = "-300vh";
                document.querySelector("#main-05").style.top = "0vh";
                nav.querySelectorAll("span")[0].style.color = "white";
                nav.querySelectorAll("span")[1].style.color = "white";
                nav.querySelectorAll("span")[2].style.color = "white";
                nav.querySelectorAll("span")[3].style.color = "#177B57";
                nav.querySelectorAll("span")[4].style.color = "white";
            });
            $("#zone-05").click(function () {
                document.querySelector("#main-02").style.top = "0vh";
                document.querySelector("#main-03").style.top = "0vh";
                document.querySelector("#main-04").style.top = "0vh";
                document.querySelector("#main-05").style.top = "-400vh";
                nav.querySelectorAll("span")[0].style.color = "white";
                nav.querySelectorAll("span")[1].style.color = "white";
                nav.querySelectorAll("span")[2].style.color = "white";
                nav.querySelectorAll("span")[3].style.color = "white";
                nav.querySelectorAll("span")[4].style.color = "#177B57";
            });


        }
        // 第二屏圖片切換
        var select = document.querySelector(".language").querySelector("select");
        var screen = document.getElementsByClassName("screen");
        for (var i = 0; i < screen.length; i++) {
            screen[i].style.transition = "1s";
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
        // 語言點擊事件
        select.style.left = "-300%";
        document.querySelector(".language-img-box").addEventListener("click", function () {
            if (select.style.left == "-300%") {
                select.style.transition = ".5s ease";
                select.style.left = "0px";
            } else {
                select.style.transition = ".5s ease";
                select.style.left = "-300%";
            }

        });

    });