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

// head功能
headFeatures = function () {
    var select = document.querySelector(".language").querySelector("select");
    // 語言彈出視窗
    document.querySelector(".language-img-box").addEventListener("click", function () {
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