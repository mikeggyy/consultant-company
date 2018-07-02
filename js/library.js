// resize load功能
resizeLoad = function () {
    // 螢幕寬度大於992時size發生變化重新load 
    window.addEventListener("resize", function () {
        if ($(window).width() >= 992) {
            zone01ScrollTop();
            location.reload();
        }
    });
}

// 偵測高度
detectHeight_01 = function () {
    window.addEventListener("scroll", function () {
        var a = $("#detect-01").offset().top;
        var b = document.scrollingElement.scrollTop;
        var c = a - 500;
        document.querySelectorAll(".textbox")[0].querySelectorAll("h3")[0].style.transition = "1s";
        document.querySelectorAll(".textbox")[0].querySelectorAll("p")[0].style.transition = "1s";
        // console.log(a);
        // console.log(b);
        if (c <= b) {
            setTimeout(function () {
                document.querySelectorAll(".textbox")[0].querySelectorAll("h3")[0].style.opacity = "1";
            }, 150);

            setTimeout(function () {
                document.querySelectorAll(".textbox")[0].querySelectorAll("p")[0].style.opacity = "1";
            }, 300);
        }
    }, false);
}

detectHeight_02 = function () {
    window.addEventListener("scroll", function () {
        var a = $("#detect-02").offset().top;
        var b = document.scrollingElement.scrollTop;
        var c = a - 500;
        document.querySelectorAll(".textbox")[1].querySelectorAll("h3")[0].style.transition = "1s";
        document.querySelectorAll(".textbox")[1].querySelectorAll("p")[0].style.transition = "1s";
        // console.log(a);
        // console.log(b);
        if (c <= b) {
            setTimeout(function () {
                document.querySelectorAll(".textbox")[1].querySelectorAll("h3")[0].style.opacity = "1";
            }, 150);

            setTimeout(function () {
                document.querySelectorAll(".textbox")[1].querySelectorAll("p")[0].style.opacity = "1";
            }, 300);
        }
    }, false);
}

detectHeight_03 = function () {
    window.addEventListener("scroll", function () {
        var a = $("#detect-03").offset().top;
        var b = document.scrollingElement.scrollTop;
        var c = a - 500;
        document.querySelectorAll(".textbox")[2].querySelectorAll("h3")[0].style.transition = "1s";
        document.querySelectorAll(".textbox")[2].querySelectorAll("ul")[0].style.transition = "1s";
        // console.log(a);
        // console.log(b);
        if (c <= b) {
            setTimeout(function () {
                document.querySelectorAll(".textbox")[2].querySelectorAll("h3")[0].style.opacity = "1";
            }, 150);

            setTimeout(function () {
                document.querySelectorAll(".textbox")[2].querySelectorAll("ul")[0].style.opacity = "1";
            }, 300);
        }
    }, false);
}

detectHeight_04 = function () {
    window.addEventListener("scroll", function () {
        var a = $("#detect-04").offset().top;
        var b = document.scrollingElement.scrollTop;
        var c = a - 500;
        document.querySelectorAll(".textbox")[3].querySelectorAll("h3")[0].style.transition = "1s";
        document.querySelectorAll(".textbox")[3].querySelectorAll("ul")[0].style.transition = "1s";
        // console.log(a);
        // console.log(b);
        if (c <= b) {
            setTimeout(function () {
                document.querySelectorAll(".textbox")[3].querySelectorAll("h3")[0].style.opacity = "1";
            }, 150);

            setTimeout(function () {
                document.querySelectorAll(".textbox")[3].querySelectorAll("ul")[0].style.opacity = "1";
            }, 300);
        }
    }, false);
}

// head功能
headFeatures = function () {
    var select = document.querySelector(".language").querySelector("select");
    // 語言彈出視窗
    document.querySelector("#languageBtn").addEventListener("click", function () {
        if (select.style.left == "-300%") {
            select.style.transition = ".5s ease";
            select.style.left = "0px";
        } else {
            select.style.transition = ".5s ease";
            select.style.left = "-300%";
        }
    });
    // 切換語言按鈕點擊監聽
    select.addEventListener("change", function () {
        if (select.value == "TW") {
            loadTwContent();
            select.style.transition = ".5s ease";
            select.style.left = "-300%";
        } else if (select.value == "CN") {
            loadCnContent();
            select.style.transition = ".5s ease";
            select.style.left = "-300%";
        } else if (select.value == "EN") {
            loadEngContent();
            select.style.transition = ".5s ease";
            select.style.left = "-300%";
        } else if (select.value == "VN") {
            loadVnContent();
            select.style.transition = ".5s ease";
            select.style.left = "-300%";
        } else if (select.value == "KH") {
            loadKhContent();
            select.style.transition = ".5s ease";
            select.style.left = "-300%";
        }
    });
}


// 數字跳動效果
var beatNum = 0;
clientCount = function () {
    var i = 0;
    var clientNum = 123;
    if (beatNum == 0) {
        setInterval(function () {
            if (i <= clientNum) {
                document.querySelector('#main-03').querySelector('.foot-01').querySelector('strong').innerHTML = i;
                i++;
            }
            return false;
        }, 50);
        beatNum++;
    }
}

caseCount = function () {
    var i = 0;
    var serviceHour = 368;
    if (beatNum == 1) {
        setInterval(function () {
            if (i <= serviceHour) {
                document.querySelector('#main-03').querySelector('.foot-02').querySelector('strong').innerHTML = i;
                i++;
            }
        }, 25);
        beatNum++;
    }
}

serviceHours = function () {
    var i = 0;
    var serviceHour = 1200;
    if (beatNum == 2) {
        setInterval(function () {
            if (i <= serviceHour) {
                document.querySelector('#main-03').querySelector('.foot-03').querySelector('strong').innerHTML = i;
                i++;
            }
        }, 1);
        beatNum++;
    }
}

// 右方nav highlight
navHighLight01 = function () {
    var nav = document.querySelector("nav");
    nav.querySelectorAll("span")[0].style.color = "#177B57";
    nav.querySelectorAll("span")[1].style.color = "white";
    nav.querySelectorAll("span")[2].style.color = "white";
    nav.querySelectorAll("span")[3].style.color = "white";
    nav.querySelectorAll("span")[4].style.color = "white";
}
navHighLight02 = function () {
    var nav = document.querySelector("nav");
    nav.querySelectorAll("span")[0].style.color = "white";
    nav.querySelectorAll("span")[1].style.color = "#177B57";
    nav.querySelectorAll("span")[2].style.color = "white";
    nav.querySelectorAll("span")[3].style.color = "white";
    nav.querySelectorAll("span")[4].style.color = "white";
}
navHighLight03 = function () {
    var nav = document.querySelector("nav");
    nav.querySelectorAll("span")[0].style.color = "white";
    nav.querySelectorAll("span")[1].style.color = "white";
    nav.querySelectorAll("span")[2].style.color = "#177B57";
    nav.querySelectorAll("span")[3].style.color = "white";
    nav.querySelectorAll("span")[4].style.color = "white";
}
navHighLight04 = function () {
    var nav = document.querySelector("nav");
    nav.querySelectorAll("span")[0].style.color = "white";
    nav.querySelectorAll("span")[1].style.color = "white";
    nav.querySelectorAll("span")[2].style.color = "white";
    nav.querySelectorAll("span")[3].style.color = "#177B57";
    nav.querySelectorAll("span")[4].style.color = "white";
}
navHighLight05 = function () {
    var nav = document.querySelector("nav");
    nav.querySelectorAll("span")[0].style.color = "white";
    nav.querySelectorAll("span")[1].style.color = "white";
    nav.querySelectorAll("span")[2].style.color = "white";
    nav.querySelectorAll("span")[3].style.color = "white";
    nav.querySelectorAll("span")[4].style.color = "#177B57";
}

// 每屏高度
zone01ScrollTop = function () {
    var Top = $("#main-01").offset().top;
    document.scrollingElement.scrollTop = Top;
}

zone02ScrollTop = function () {
    var Top = $("#main-02").offset().top;
    document.scrollingElement.scrollTop = Top;
}

zone03ScrollTop = function () {
    var Top = $("#main-03").offset().top;
    document.scrollingElement.scrollTop = Top;
}

zone04ScrollTop = function () {
    var Top = $("#main-04").offset().top;
    document.scrollingElement.scrollTop = Top;
}

zone05ScrollTop = function () {
    var Top = $("#main-05").offset().top;
    document.scrollingElement.scrollTop = Top;
}

// 屏幕由上移動至下效果
// zone01MoveToZone02 = function () {
//     var top = $("#main-01").offset().top;
//     var moveTo = $("#main-02").offset().top;
//     setInterval(function () {
//         if (top <= moveTo + 1) {
//             document.scrollingElement.scrollTop = top;
//             top = top + 10;
//         }
//     }, 0.1);
// }

// zone02MoveToZone03 = function () {
//     var top = $("#main-02").offset().top;
//     var moveTo = $("#main-03").offset().top;
//     setInterval(function () {
//         if (top <= moveTo + 1) {
//             document.scrollingElement.scrollTop = top;
//             top = top + 10;
//         }
//     }, 0.1);
// }

// zone03MoveToZone04 = function () {
//     var top = $("#main-03").offset().top;
//     var moveTo = $("#main-04").offset().top;
//     setInterval(function () {
//         if (top <= moveTo + 1) {
//             document.scrollingElement.scrollTop = top;
//             top = top + 10;
//         }
//     }, 0.1);
// }

// zone04MoveToZone05 = function () {
//     var top = $("#main-04").offset().top;
//     var moveTo = $("#main-05").offset().top;
//     setInterval(function () {
//         if (top <= moveTo + 1) {
//             document.scrollingElement.scrollTop = top;
//             top = top + 10;
//         }
//     }, 0.1);
// }

// 螢幕由下至上效果

// zone05MoveToZone04 = function () {
//     var top = $("#main-05").offset().top;
//     var moveTo = $("#main-04").offset().top;
//     setInterval(function () {
//         if (top >= moveTo - 1) {
//             document.scrollingElement.scrollTop = top;
//             top = top - 10;
//         }
//     }, 0.1);
// }

// zone04MoveToZone03 = function () {
//     var top = $("#main-04").offset().top;
//     var moveTo = $("#main-03").offset().top;
//     setInterval(function () {
//         if (top >= moveTo - 1) {
//             document.scrollingElement.scrollTop = top;
//             top = top - 10;
//         }
//     }, 0.1);
// }

// zone03MoveToZone02 = function () {
//     var top = $("#main-03").offset().top;
//     var moveTo = $("#main-02").offset().top;
//     setInterval(function () {
//         if (top >= moveTo - 1) {
//             document.scrollingElement.scrollTop = top;
//             top = top - 10;
//         }
//     }, 0.1);
// }

// zone02MoveToZone01 = function () {
//     var top = $("#main-02").offset().top;
//     var moveTo = $("#main-01").offset().top;
//     setInterval(function () {
//         if (top >= moveTo - 1) {
//             document.scrollingElement.scrollTop = top;
//             top = top - 10;
//         }
//     }, 0.1);
// }

// JQuery螢幕移動動畫

htmlScreenToZone1 = function () {
    navHighLight01();
    $("html,body").animate({
        scrollTop: $("#main-01").offset().top
    }, 250);
    return false;
}

htmlScreenToZone2 = function () {
    navHighLight02();
    $("html,body").animate({
        scrollTop: $("#main-02").offset().top
    }, 250);
    return false;
}

htmlScreenToZone3 = function () {
    navHighLight03();
    $("html,body").animate({
        scrollTop: $("#main-03").offset().top
    }, 250);
    return false;
}

htmlScreenToZone4 = function () {
    navHighLight04();
    $("html,body").animate({
        scrollTop: $("#main-04").offset().top
    }, 250);
    return false;
}

htmlScreenToZone5 = function () {
    navHighLight05();
    $("html,body").animate({
        scrollTop: $("#main-05").offset().top
    }, 250);
    return false;
}

// service 切換可見訊息

iconClick = function () {
    var iconBox = document.querySelector(".iconBox");
    var main_01 = document.querySelector(".main-01");
    var main_02 = document.querySelector(".main-02");
    var main_03 = document.querySelector(".main-03");
    var main_04 = document.querySelector(".main-04");
    var main_05 = document.querySelector(".main-05");
    var main_06 = document.querySelector(".main-06");
    main_01.style.transition = "1s";
    main_02.style.transition = "1s";
    main_03.style.transition = "1s";
    main_04.style.transition = "1s";
    main_05.style.transition = "1s";
    main_06.style.transition = "1s";
    iconBox.querySelectorAll(".img")[0].addEventListener("click", function () {
        main_01.style.opacity = 1;
        main_02.style.opacity = 0;
        main_03.style.opacity = 0;
        main_04.style.opacity = 0;
        main_05.style.opacity = 0;
        main_06.style.opacity = 0;
        document.scrollingElement.scrollTop = 0;
        iconBox.querySelectorAll(".img")[0].style.animation = "iconFocus 2s infinite";
        iconBox.querySelectorAll(".img")[1].style.animation = "";
        iconBox.querySelectorAll(".img")[2].style.animation = "";
        iconBox.querySelectorAll(".img")[3].style.animation = "";
        iconBox.querySelectorAll(".img")[4].style.animation = "";
        iconBox.querySelectorAll(".img")[5].style.animation = "";
    });
    iconBox.querySelectorAll(".img")[1].addEventListener("click", function () {
        main_01.style.opacity = 0;
        main_02.style.opacity = 1;
        main_03.style.opacity = 0;
        main_04.style.opacity = 0;
        main_05.style.opacity = 0;
        main_06.style.opacity = 0;
        document.scrollingElement.scrollTop = 0;
        iconBox.querySelectorAll(".img")[0].style.animation = "";
        iconBox.querySelectorAll(".img")[1].style.animation = "iconFocus 2s infinite";
        iconBox.querySelectorAll(".img")[2].style.animation = "";
        iconBox.querySelectorAll(".img")[3].style.animation = "";
        iconBox.querySelectorAll(".img")[4].style.animation = "";
        iconBox.querySelectorAll(".img")[5].style.animation = "";
    });
    iconBox.querySelectorAll(".img")[2].addEventListener("click", function () {
        main_01.style.opacity = 0;
        main_02.style.opacity = 0;
        main_03.style.opacity = 1;
        main_04.style.opacity = 0;
        main_05.style.opacity = 0;
        main_06.style.opacity = 0;
        document.scrollingElement.scrollTop = 0;
        iconBox.querySelectorAll(".img")[0].style.animation = "";
        iconBox.querySelectorAll(".img")[1].style.animation = "";
        iconBox.querySelectorAll(".img")[2].style.animation = "iconFocus 2s infinite";
        iconBox.querySelectorAll(".img")[3].style.animation = "";
        iconBox.querySelectorAll(".img")[4].style.animation = "";
        iconBox.querySelectorAll(".img")[5].style.animation = "";
    });
    iconBox.querySelectorAll(".img")[3].addEventListener("click", function () {
        main_01.style.opacity = 0;
        main_02.style.opacity = 0;
        main_03.style.opacity = 0;
        main_04.style.opacity = 1;
        main_05.style.opacity = 0;
        main_06.style.opacity = 0;
        document.scrollingElement.scrollTop = 0;
        iconBox.querySelectorAll(".img")[0].style.animation = "";
        iconBox.querySelectorAll(".img")[1].style.animation = "";
        iconBox.querySelectorAll(".img")[2].style.animation = "";
        iconBox.querySelectorAll(".img")[3].style.animation = "iconFocus 2s infinite";
        iconBox.querySelectorAll(".img")[4].style.animation = "";
        iconBox.querySelectorAll(".img")[5].style.animation = "";
    });
    iconBox.querySelectorAll(".img")[4].addEventListener("click", function () {
        main_01.style.opacity = 0;
        main_02.style.opacity = 0;
        main_03.style.opacity = 0;
        main_04.style.opacity = 0;
        main_05.style.opacity = 1;
        main_06.style.opacity = 0;
        document.scrollingElement.scrollTop = 0;
        iconBox.querySelectorAll(".img")[0].style.animation = "";
        iconBox.querySelectorAll(".img")[1].style.animation = "";
        iconBox.querySelectorAll(".img")[2].style.animation = "";
        iconBox.querySelectorAll(".img")[3].style.animation = "";
        iconBox.querySelectorAll(".img")[4].style.animation = "iconFocus 2s infinite";
        iconBox.querySelectorAll(".img")[5].style.animation = "";
    });
    iconBox.querySelectorAll(".img")[5].addEventListener("click", function () {
        main_01.style.opacity = 0;
        main_02.style.opacity = 0;
        main_03.style.opacity = 0;
        main_04.style.opacity = 0;
        main_05.style.opacity = 0;
        main_06.style.opacity = 1;
        document.scrollingElement.scrollTop = 0;
        iconBox.querySelectorAll(".img")[0].style.animation = "";
        iconBox.querySelectorAll(".img")[1].style.animation = "";
        iconBox.querySelectorAll(".img")[2].style.animation = "";
        iconBox.querySelectorAll(".img")[3].style.animation = "";
        iconBox.querySelectorAll(".img")[4].style.animation = "";
        iconBox.querySelectorAll(".img")[5].style.animation = "iconFocus 2s infinite";
    });
}

// 點首頁連結一進到Service的畫面
urlLinkToService_1 = function () {
    var iconBox = document.querySelector(".iconBox");
    var main_01 = document.querySelector(".main-01");
    var main_02 = document.querySelector(".main-02");
    var main_03 = document.querySelector(".main-03");
    var main_04 = document.querySelector(".main-04");
    var main_05 = document.querySelector(".main-05");
    var main_06 = document.querySelector(".main-06");
    main_01.style.opacity = 1;
    main_02.style.opacity = 0;
    main_03.style.opacity = 0;
    main_04.style.opacity = 0;
    main_05.style.opacity = 0;
    main_06.style.opacity = 0;
    document.scrollingElement.scrollTop = 0;
    if (main_01.style.opacity == 1) {
        iconBox.querySelectorAll(".img")[0].style.animation = "iconFocus 2s infinite";
        iconBox.querySelectorAll(".img")[1].style.animation = "";
        iconBox.querySelectorAll(".img")[2].style.animation = "";
        iconBox.querySelectorAll(".img")[3].style.animation = "";
        iconBox.querySelectorAll(".img")[4].style.animation = "";
        iconBox.querySelectorAll(".img")[5].style.animation = "";
    } else if (main_02.style.opacity == 1) {
        iconBox.querySelectorAll(".img")[0].style.animation = "";
        iconBox.querySelectorAll(".img")[1].style.animation = "iconFocus 2s infinite";
        iconBox.querySelectorAll(".img")[2].style.animation = "";
        iconBox.querySelectorAll(".img")[3].style.animation = "";
        iconBox.querySelectorAll(".img")[4].style.animation = "";
        iconBox.querySelectorAll(".img")[5].style.animation = "";
    } else if (main_03.style.opacity == 1) {
        iconBox.querySelectorAll(".img")[0].style.animation = "";
        iconBox.querySelectorAll(".img")[1].style.animation = "";
        iconBox.querySelectorAll(".img")[2].style.animation = "iconFocus 2s infinite";
        iconBox.querySelectorAll(".img")[3].style.animation = "";
        iconBox.querySelectorAll(".img")[4].style.animation = "";
        iconBox.querySelectorAll(".img")[5].style.animation = "";
    } else if (main_04.style.opacity == 1) {
        iconBox.querySelectorAll(".img")[0].style.animation = "";
        iconBox.querySelectorAll(".img")[1].style.animation = "";
        iconBox.querySelectorAll(".img")[2].style.animation = "";
        iconBox.querySelectorAll(".img")[3].style.animation = "iconFocus 2s infinite";
        iconBox.querySelectorAll(".img")[4].style.animation = "";
        iconBox.querySelectorAll(".img")[5].style.animation = "";
    } else if (main_05.style.opacity == 1) {
        iconBox.querySelectorAll(".img")[0].style.animation = "";
        iconBox.querySelectorAll(".img")[1].style.animation = "";
        iconBox.querySelectorAll(".img")[2].style.animation = "";
        iconBox.querySelectorAll(".img")[3].style.animation = "";
        iconBox.querySelectorAll(".img")[4].style.animation = "iconFocus 2s infinite";
        iconBox.querySelectorAll(".img")[5].style.animation = "";
    } else if (main_06.style.opacity == 1) {
        iconBox.querySelectorAll(".img")[0].style.animation = "";
        iconBox.querySelectorAll(".img")[1].style.animation = "";
        iconBox.querySelectorAll(".img")[2].style.animation = "";
        iconBox.querySelectorAll(".img")[3].style.animation = "";
        iconBox.querySelectorAll(".img")[4].style.animation = "";
        iconBox.querySelectorAll(".img")[5].style.animation = "iconFocus 2s infinite";
    }
}

urlLinkToService_2 = function () {
    var iconBox = document.querySelector(".iconBox");
    var main_01 = document.querySelector(".main-01");
    var main_02 = document.querySelector(".main-02");
    var main_03 = document.querySelector(".main-03");
    var main_04 = document.querySelector(".main-04");
    var main_05 = document.querySelector(".main-05");
    var main_06 = document.querySelector(".main-06");
    main_01.style.opacity = 0;
    main_02.style.opacity = 1;
    main_03.style.opacity = 0;
    main_04.style.opacity = 0;
    main_05.style.opacity = 0;
    main_06.style.opacity = 0;
    document.scrollingElement.scrollTop = 0;
    if (main_01.style.opacity == 1) {
        iconBox.querySelectorAll(".img")[0].style.animation = "iconFocus 2s infinite";
        iconBox.querySelectorAll(".img")[1].style.animation = "";
        iconBox.querySelectorAll(".img")[2].style.animation = "";
        iconBox.querySelectorAll(".img")[3].style.animation = "";
        iconBox.querySelectorAll(".img")[4].style.animation = "";
        iconBox.querySelectorAll(".img")[5].style.animation = "";
    } else if (main_02.style.opacity == 1) {
        iconBox.querySelectorAll(".img")[0].style.animation = "";
        iconBox.querySelectorAll(".img")[1].style.animation = "iconFocus 2s infinite";
        iconBox.querySelectorAll(".img")[2].style.animation = "";
        iconBox.querySelectorAll(".img")[3].style.animation = "";
        iconBox.querySelectorAll(".img")[4].style.animation = "";
        iconBox.querySelectorAll(".img")[5].style.animation = "";
    } else if (main_03.style.opacity == 1) {
        iconBox.querySelectorAll(".img")[0].style.animation = "";
        iconBox.querySelectorAll(".img")[1].style.animation = "";
        iconBox.querySelectorAll(".img")[2].style.animation = "iconFocus 2s infinite";
        iconBox.querySelectorAll(".img")[3].style.animation = "";
        iconBox.querySelectorAll(".img")[4].style.animation = "";
        iconBox.querySelectorAll(".img")[5].style.animation = "";
    } else if (main_04.style.opacity == 1) {
        iconBox.querySelectorAll(".img")[0].style.animation = "";
        iconBox.querySelectorAll(".img")[1].style.animation = "";
        iconBox.querySelectorAll(".img")[2].style.animation = "";
        iconBox.querySelectorAll(".img")[3].style.animation = "iconFocus 2s infinite";
        iconBox.querySelectorAll(".img")[4].style.animation = "";
        iconBox.querySelectorAll(".img")[5].style.animation = "";
    } else if (main_05.style.opacity == 1) {
        iconBox.querySelectorAll(".img")[0].style.animation = "";
        iconBox.querySelectorAll(".img")[1].style.animation = "";
        iconBox.querySelectorAll(".img")[2].style.animation = "";
        iconBox.querySelectorAll(".img")[3].style.animation = "";
        iconBox.querySelectorAll(".img")[4].style.animation = "iconFocus 2s infinite";
        iconBox.querySelectorAll(".img")[5].style.animation = "";
    } else if (main_06.style.opacity == 1) {
        iconBox.querySelectorAll(".img")[0].style.animation = "";
        iconBox.querySelectorAll(".img")[1].style.animation = "";
        iconBox.querySelectorAll(".img")[2].style.animation = "";
        iconBox.querySelectorAll(".img")[3].style.animation = "";
        iconBox.querySelectorAll(".img")[4].style.animation = "";
        iconBox.querySelectorAll(".img")[5].style.animation = "iconFocus 2s infinite";
    }
}

urlLinkToService_3 = function () {
    var iconBox = document.querySelector(".iconBox");
    var main_01 = document.querySelector(".main-01");
    var main_02 = document.querySelector(".main-02");
    var main_03 = document.querySelector(".main-03");
    var main_04 = document.querySelector(".main-04");
    var main_05 = document.querySelector(".main-05");
    var main_06 = document.querySelector(".main-06");
    main_01.style.opacity = 0;
    main_02.style.opacity = 0;
    main_03.style.opacity = 1;
    main_04.style.opacity = 0;
    main_05.style.opacity = 0;
    main_06.style.opacity = 0;
    document.scrollingElement.scrollTop = 0;
    if (main_01.style.opacity == 1) {
        iconBox.querySelectorAll(".img")[0].style.animation = "iconFocus 2s infinite";
        iconBox.querySelectorAll(".img")[1].style.animation = "";
        iconBox.querySelectorAll(".img")[2].style.animation = "";
        iconBox.querySelectorAll(".img")[3].style.animation = "";
        iconBox.querySelectorAll(".img")[4].style.animation = "";
        iconBox.querySelectorAll(".img")[5].style.animation = "";
    } else if (main_02.style.opacity == 1) {
        iconBox.querySelectorAll(".img")[0].style.animation = "";
        iconBox.querySelectorAll(".img")[1].style.animation = "iconFocus 2s infinite";
        iconBox.querySelectorAll(".img")[2].style.animation = "";
        iconBox.querySelectorAll(".img")[3].style.animation = "";
        iconBox.querySelectorAll(".img")[4].style.animation = "";
        iconBox.querySelectorAll(".img")[5].style.animation = "";
    } else if (main_03.style.opacity == 1) {
        iconBox.querySelectorAll(".img")[0].style.animation = "";
        iconBox.querySelectorAll(".img")[1].style.animation = "";
        iconBox.querySelectorAll(".img")[2].style.animation = "iconFocus 2s infinite";
        iconBox.querySelectorAll(".img")[3].style.animation = "";
        iconBox.querySelectorAll(".img")[4].style.animation = "";
        iconBox.querySelectorAll(".img")[5].style.animation = "";
    } else if (main_04.style.opacity == 1) {
        iconBox.querySelectorAll(".img")[0].style.animation = "";
        iconBox.querySelectorAll(".img")[1].style.animation = "";
        iconBox.querySelectorAll(".img")[2].style.animation = "";
        iconBox.querySelectorAll(".img")[3].style.animation = "iconFocus 2s infinite";
        iconBox.querySelectorAll(".img")[4].style.animation = "";
        iconBox.querySelectorAll(".img")[5].style.animation = "";
    } else if (main_05.style.opacity == 1) {
        iconBox.querySelectorAll(".img")[0].style.animation = "";
        iconBox.querySelectorAll(".img")[1].style.animation = "";
        iconBox.querySelectorAll(".img")[2].style.animation = "";
        iconBox.querySelectorAll(".img")[3].style.animation = "";
        iconBox.querySelectorAll(".img")[4].style.animation = "iconFocus 2s infinite";
        iconBox.querySelectorAll(".img")[5].style.animation = "";
    } else if (main_06.style.opacity == 1) {
        iconBox.querySelectorAll(".img")[0].style.animation = "";
        iconBox.querySelectorAll(".img")[1].style.animation = "";
        iconBox.querySelectorAll(".img")[2].style.animation = "";
        iconBox.querySelectorAll(".img")[3].style.animation = "";
        iconBox.querySelectorAll(".img")[4].style.animation = "";
        iconBox.querySelectorAll(".img")[5].style.animation = "iconFocus 2s infinite";
    }
}

urlLinkToService_4 = function () {
    var iconBox = document.querySelector(".iconBox");
    var main_01 = document.querySelector(".main-01");
    var main_02 = document.querySelector(".main-02");
    var main_03 = document.querySelector(".main-03");
    var main_04 = document.querySelector(".main-04");
    var main_05 = document.querySelector(".main-05");
    var main_06 = document.querySelector(".main-06");
    main_01.style.opacity = 0;
    main_02.style.opacity = 0;
    main_03.style.opacity = 0;
    main_04.style.opacity = 1;
    main_05.style.opacity = 0;
    main_06.style.opacity = 0;
    document.scrollingElement.scrollTop = 0;
    if (main_01.style.opacity == 1) {
        iconBox.querySelectorAll(".img")[0].style.animation = "iconFocus 2s infinite";
        iconBox.querySelectorAll(".img")[1].style.animation = "";
        iconBox.querySelectorAll(".img")[2].style.animation = "";
        iconBox.querySelectorAll(".img")[3].style.animation = "";
        iconBox.querySelectorAll(".img")[4].style.animation = "";
        iconBox.querySelectorAll(".img")[5].style.animation = "";
    } else if (main_02.style.opacity == 1) {
        iconBox.querySelectorAll(".img")[0].style.animation = "";
        iconBox.querySelectorAll(".img")[1].style.animation = "iconFocus 2s infinite";
        iconBox.querySelectorAll(".img")[2].style.animation = "";
        iconBox.querySelectorAll(".img")[3].style.animation = "";
        iconBox.querySelectorAll(".img")[4].style.animation = "";
        iconBox.querySelectorAll(".img")[5].style.animation = "";
    } else if (main_03.style.opacity == 1) {
        iconBox.querySelectorAll(".img")[0].style.animation = "";
        iconBox.querySelectorAll(".img")[1].style.animation = "";
        iconBox.querySelectorAll(".img")[2].style.animation = "iconFocus 2s infinite";
        iconBox.querySelectorAll(".img")[3].style.animation = "";
        iconBox.querySelectorAll(".img")[4].style.animation = "";
        iconBox.querySelectorAll(".img")[5].style.animation = "";
    } else if (main_04.style.opacity == 1) {
        iconBox.querySelectorAll(".img")[0].style.animation = "";
        iconBox.querySelectorAll(".img")[1].style.animation = "";
        iconBox.querySelectorAll(".img")[2].style.animation = "";
        iconBox.querySelectorAll(".img")[3].style.animation = "iconFocus 2s infinite";
        iconBox.querySelectorAll(".img")[4].style.animation = "";
        iconBox.querySelectorAll(".img")[5].style.animation = "";
    } else if (main_05.style.opacity == 1) {
        iconBox.querySelectorAll(".img")[0].style.animation = "";
        iconBox.querySelectorAll(".img")[1].style.animation = "";
        iconBox.querySelectorAll(".img")[2].style.animation = "";
        iconBox.querySelectorAll(".img")[3].style.animation = "";
        iconBox.querySelectorAll(".img")[4].style.animation = "iconFocus 2s infinite";
        iconBox.querySelectorAll(".img")[5].style.animation = "";
    } else if (main_06.style.opacity == 1) {
        iconBox.querySelectorAll(".img")[0].style.animation = "";
        iconBox.querySelectorAll(".img")[1].style.animation = "";
        iconBox.querySelectorAll(".img")[2].style.animation = "";
        iconBox.querySelectorAll(".img")[3].style.animation = "";
        iconBox.querySelectorAll(".img")[4].style.animation = "";
        iconBox.querySelectorAll(".img")[5].style.animation = "iconFocus 2s infinite";
    }
}

urlLinkToService_5 = function () {
    var iconBox = document.querySelector(".iconBox");
    var main_01 = document.querySelector(".main-01");
    var main_02 = document.querySelector(".main-02");
    var main_03 = document.querySelector(".main-03");
    var main_04 = document.querySelector(".main-04");
    var main_05 = document.querySelector(".main-05");
    var main_06 = document.querySelector(".main-06");
    main_01.style.opacity = 0;
    main_02.style.opacity = 0;
    main_03.style.opacity = 0;
    main_04.style.opacity = 0;
    main_05.style.opacity = 1;
    main_06.style.opacity = 0;
    document.scrollingElement.scrollTop = 0;
    if (main_01.style.opacity == 1) {
        iconBox.querySelectorAll(".img")[0].style.animation = "iconFocus 2s infinite";
        iconBox.querySelectorAll(".img")[1].style.animation = "";
        iconBox.querySelectorAll(".img")[2].style.animation = "";
        iconBox.querySelectorAll(".img")[3].style.animation = "";
        iconBox.querySelectorAll(".img")[4].style.animation = "";
        iconBox.querySelectorAll(".img")[5].style.animation = "";
    } else if (main_02.style.opacity == 1) {
        iconBox.querySelectorAll(".img")[0].style.animation = "";
        iconBox.querySelectorAll(".img")[1].style.animation = "iconFocus 2s infinite";
        iconBox.querySelectorAll(".img")[2].style.animation = "";
        iconBox.querySelectorAll(".img")[3].style.animation = "";
        iconBox.querySelectorAll(".img")[4].style.animation = "";
        iconBox.querySelectorAll(".img")[5].style.animation = "";
    } else if (main_03.style.opacity == 1) {
        iconBox.querySelectorAll(".img")[0].style.animation = "";
        iconBox.querySelectorAll(".img")[1].style.animation = "";
        iconBox.querySelectorAll(".img")[2].style.animation = "iconFocus 2s infinite";
        iconBox.querySelectorAll(".img")[3].style.animation = "";
        iconBox.querySelectorAll(".img")[4].style.animation = "";
        iconBox.querySelectorAll(".img")[5].style.animation = "";
    } else if (main_04.style.opacity == 1) {
        iconBox.querySelectorAll(".img")[0].style.animation = "";
        iconBox.querySelectorAll(".img")[1].style.animation = "";
        iconBox.querySelectorAll(".img")[2].style.animation = "";
        iconBox.querySelectorAll(".img")[3].style.animation = "iconFocus 2s infinite";
        iconBox.querySelectorAll(".img")[4].style.animation = "";
        iconBox.querySelectorAll(".img")[5].style.animation = "";
    } else if (main_05.style.opacity == 1) {
        iconBox.querySelectorAll(".img")[0].style.animation = "";
        iconBox.querySelectorAll(".img")[1].style.animation = "";
        iconBox.querySelectorAll(".img")[2].style.animation = "";
        iconBox.querySelectorAll(".img")[3].style.animation = "";
        iconBox.querySelectorAll(".img")[4].style.animation = "iconFocus 2s infinite";
        iconBox.querySelectorAll(".img")[5].style.animation = "";
    } else if (main_06.style.opacity == 1) {
        iconBox.querySelectorAll(".img")[0].style.animation = "";
        iconBox.querySelectorAll(".img")[1].style.animation = "";
        iconBox.querySelectorAll(".img")[2].style.animation = "";
        iconBox.querySelectorAll(".img")[3].style.animation = "";
        iconBox.querySelectorAll(".img")[4].style.animation = "";
        iconBox.querySelectorAll(".img")[5].style.animation = "iconFocus 2s infinite";
    }
}

urlLinkToService_6 = function () {
    var iconBox = document.querySelector(".iconBox");
    var main_01 = document.querySelector(".main-01");
    var main_02 = document.querySelector(".main-02");
    var main_03 = document.querySelector(".main-03");
    var main_04 = document.querySelector(".main-04");
    var main_05 = document.querySelector(".main-05");
    var main_06 = document.querySelector(".main-06");
    main_01.style.opacity = 0;
    main_02.style.opacity = 0;
    main_03.style.opacity = 0;
    main_04.style.opacity = 0;
    main_05.style.opacity = 0;
    main_06.style.opacity = 1;
    document.scrollingElement.scrollTop = 0;
    if (main_01.style.opacity == 1) {
        iconBox.querySelectorAll(".img")[0].style.animation = "iconFocus 2s infinite";
        iconBox.querySelectorAll(".img")[1].style.animation = "";
        iconBox.querySelectorAll(".img")[2].style.animation = "";
        iconBox.querySelectorAll(".img")[3].style.animation = "";
        iconBox.querySelectorAll(".img")[4].style.animation = "";
        iconBox.querySelectorAll(".img")[5].style.animation = "";
    } else if (main_02.style.opacity == 1) {
        iconBox.querySelectorAll(".img")[0].style.animation = "";
        iconBox.querySelectorAll(".img")[1].style.animation = "iconFocus 2s infinite";
        iconBox.querySelectorAll(".img")[2].style.animation = "";
        iconBox.querySelectorAll(".img")[3].style.animation = "";
        iconBox.querySelectorAll(".img")[4].style.animation = "";
        iconBox.querySelectorAll(".img")[5].style.animation = "";
    } else if (main_03.style.opacity == 1) {
        iconBox.querySelectorAll(".img")[0].style.animation = "";
        iconBox.querySelectorAll(".img")[1].style.animation = "";
        iconBox.querySelectorAll(".img")[2].style.animation = "iconFocus 2s infinite";
        iconBox.querySelectorAll(".img")[3].style.animation = "";
        iconBox.querySelectorAll(".img")[4].style.animation = "";
        iconBox.querySelectorAll(".img")[5].style.animation = "";
    } else if (main_04.style.opacity == 1) {
        iconBox.querySelectorAll(".img")[0].style.animation = "";
        iconBox.querySelectorAll(".img")[1].style.animation = "";
        iconBox.querySelectorAll(".img")[2].style.animation = "";
        iconBox.querySelectorAll(".img")[3].style.animation = "iconFocus 2s infinite";
        iconBox.querySelectorAll(".img")[4].style.animation = "";
        iconBox.querySelectorAll(".img")[5].style.animation = "";
    } else if (main_05.style.opacity == 1) {
        iconBox.querySelectorAll(".img")[0].style.animation = "";
        iconBox.querySelectorAll(".img")[1].style.animation = "";
        iconBox.querySelectorAll(".img")[2].style.animation = "";
        iconBox.querySelectorAll(".img")[3].style.animation = "";
        iconBox.querySelectorAll(".img")[4].style.animation = "iconFocus 2s infinite";
        iconBox.querySelectorAll(".img")[5].style.animation = "";
    } else if (main_06.style.opacity == 1) {
        iconBox.querySelectorAll(".img")[0].style.animation = "";
        iconBox.querySelectorAll(".img")[1].style.animation = "";
        iconBox.querySelectorAll(".img")[2].style.animation = "";
        iconBox.querySelectorAll(".img")[3].style.animation = "";
        iconBox.querySelectorAll(".img")[4].style.animation = "";
        iconBox.querySelectorAll(".img")[5].style.animation = "iconFocus 2s infinite";
    }
}

// serviceIconAnimation = function () {
//     var iconBox = document.querySelector(".iconBox");
//     var main_01 = document.querySelector(".main-01");
//     var main_02 = document.querySelector(".main-02");
//     var main_03 = document.querySelector(".main-03");
//     var main_04 = document.querySelector(".main-04");
//     var main_05 = document.querySelector(".main-05");
//     var main_06 = document.querySelector(".main-06");
//     if (main_01.style.opacity = 1) {
//         iconBox.querySelectorAll(".img")[0].style.animation = "iconFocus 2s infinite";
//         iconBox.querySelectorAll(".img")[1].style.animation = "";
//         iconBox.querySelectorAll(".img")[2].style.animation = "";
//         iconBox.querySelectorAll(".img")[3].style.animation = "";
//         iconBox.querySelectorAll(".img")[4].style.animation = "";
//         iconBox.querySelectorAll(".img")[5].style.animation = "";
//     }else if(main_02.style.opacity = 1){
//         iconBox.querySelectorAll(".img")[0].style.animation = "";
//         iconBox.querySelectorAll(".img")[1].style.animation = "iconFocus 2s infinite";
//         iconBox.querySelectorAll(".img")[2].style.animation = "";
//         iconBox.querySelectorAll(".img")[3].style.animation = "";
//         iconBox.querySelectorAll(".img")[4].style.animation = "";
//         iconBox.querySelectorAll(".img")[5].style.animation = "";
//     }else if(main_03.style.opacity = 1){
//         iconBox.querySelectorAll(".img")[0].style.animation = "";
//         iconBox.querySelectorAll(".img")[1].style.animation = "";
//         iconBox.querySelectorAll(".img")[2].style.animation = "iconFocus 2s infinite";
//         iconBox.querySelectorAll(".img")[3].style.animation = "";
//         iconBox.querySelectorAll(".img")[4].style.animation = "";
//         iconBox.querySelectorAll(".img")[5].style.animation = "";
//     }else if(main_04.style.opacity = 1){
//         iconBox.querySelectorAll(".img")[0].style.animation = "";
//         iconBox.querySelectorAll(".img")[1].style.animation = "";
//         iconBox.querySelectorAll(".img")[2].style.animation = "";
//         iconBox.querySelectorAll(".img")[3].style.animation = "iconFocus 2s infinite";
//         iconBox.querySelectorAll(".img")[4].style.animation = "";
//         iconBox.querySelectorAll(".img")[5].style.animation = "";
//     }else if(main_05.style.opacity = 1){
//         iconBox.querySelectorAll(".img")[0].style.animation = "";
//         iconBox.querySelectorAll(".img")[1].style.animation = "";
//         iconBox.querySelectorAll(".img")[2].style.animation = "";
//         iconBox.querySelectorAll(".img")[3].style.animation = "";
//         iconBox.querySelectorAll(".img")[4].style.animation = "iconFocus 2s infinite";
//         iconBox.querySelectorAll(".img")[5].style.animation = "";
//     }else if(main_06.style.opacity = 1){
//         iconBox.querySelectorAll(".img")[0].style.animation = "";
//         iconBox.querySelectorAll(".img")[1].style.animation = "";
//         iconBox.querySelectorAll(".img")[2].style.animation = "";
//         iconBox.querySelectorAll(".img")[3].style.animation = "";
//         iconBox.querySelectorAll(".img")[4].style.animation = "";
//         iconBox.querySelectorAll(".img")[5].style.animation = "iconFocus 2s infinite";
//     }
// }
