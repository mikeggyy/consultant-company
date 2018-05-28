window.addEventListener("load", function () {
    console.log();
    // 切換語言按鈕點擊監聽
    document.querySelector(".language").querySelector("select").addEventListener("change", function () {
        if (document.querySelector(".language").querySelector("select").value == "TW") {
            loadTwContent();
        } else if (document.querySelector(".language").querySelector("select").value == "CN") {
            loadCnContent();
        } else if (document.querySelector(".language").querySelector("select").value == "EN") {
            loadEngContent();
        } else if (document.querySelector(".language").querySelector("select").value == "VN") {
            loadVnContent();
        } else if (document.querySelector(".language").querySelector("select").value == "KH") {
            loadKhContent();
        }
    });

    // json import using ajax
    function loadEngContent() {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'src/en.json', true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                console.log(xhr.responseText);
                // json.parse將json轉換成物件 之後抓取你要的名稱
                document.querySelector('.language').querySelector('select').querySelectorAll('option')[0].innerHTML = JSON.parse(xhr.responseText).language_EN;
                document.querySelector('.language').querySelector('select').querySelectorAll('option')[1].innerHTML = JSON.parse(xhr.responseText).language_TW;
                document.querySelector('.language').querySelector('select').querySelectorAll('option')[2].innerHTML = JSON.parse(xhr.responseText).language_CN;
                document.querySelector('.language').querySelector('select').querySelectorAll('option')[3].innerHTML = JSON.parse(xhr.responseText).language_KN;
                document.querySelector('.language').querySelector('select').querySelectorAll('option')[4].innerHTML = JSON.parse(xhr.responseText).language_VN;
            }
        }
        xhr.send();
    }

    function loadTwContent() {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'src/tw.json', true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                console.log(xhr.responseText);
                // json.parse將json轉換成物件 之後抓取你要的名稱
                document.querySelector('.language').querySelector('select').querySelectorAll('option')[0].innerHTML = JSON.parse(xhr.responseText).language_EN;
                document.querySelector('.language').querySelector('select').querySelectorAll('option')[1].innerHTML = JSON.parse(xhr.responseText).language_TW;
                document.querySelector('.language').querySelector('select').querySelectorAll('option')[2].innerHTML = JSON.parse(xhr.responseText).language_CN;
                document.querySelector('.language').querySelector('select').querySelectorAll('option')[3].innerHTML = JSON.parse(xhr.responseText).language_KN;
                document.querySelector('.language').querySelector('select').querySelectorAll('option')[4].innerHTML = JSON.parse(xhr.responseText).language_VN;
            }
        }
        xhr.send();
    }

    function loadCnContent() {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'src/cn.json', true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                console.log(xhr.responseText);
                // json.parse將json轉換成物件 之後抓取你要的名稱
                document.querySelector('.language').querySelector('select').querySelectorAll('option')[0].innerHTML = JSON.parse(xhr.responseText).language_EN;
                document.querySelector('.language').querySelector('select').querySelectorAll('option')[1].innerHTML = JSON.parse(xhr.responseText).language_TW;
                document.querySelector('.language').querySelector('select').querySelectorAll('option')[2].innerHTML = JSON.parse(xhr.responseText).language_CN;
                document.querySelector('.language').querySelector('select').querySelectorAll('option')[3].innerHTML = JSON.parse(xhr.responseText).language_KN;
                document.querySelector('.language').querySelector('select').querySelectorAll('option')[4].innerHTML = JSON.parse(xhr.responseText).language_VN;
            }
        }
        xhr.send();
    }

    function loadVnContent() {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'src/kh.json', true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                console.log(xhr.responseText);
                // json.parse將json轉換成物件 之後抓取你要的名稱
                document.querySelector('.language').querySelector('select').querySelectorAll('option')[0].innerHTML = JSON.parse(xhr.responseText).language_EN;
                document.querySelector('.language').querySelector('select').querySelectorAll('option')[1].innerHTML = JSON.parse(xhr.responseText).language_TW;
                document.querySelector('.language').querySelector('select').querySelectorAll('option')[2].innerHTML = JSON.parse(xhr.responseText).language_CN;
                document.querySelector('.language').querySelector('select').querySelectorAll('option')[3].innerHTML = JSON.parse(xhr.responseText).language_KN;
                document.querySelector('.language').querySelector('select').querySelectorAll('option')[4].innerHTML = JSON.parse(xhr.responseText).language_VN;
            }
        }
        xhr.send();
    }

    function loadKhContent() {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'src/vn.json', true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                console.log(xhr.responseText);
                // json.parse將json轉換成物件 之後抓取你要的名稱
                document.querySelector('.language').querySelector('select').querySelectorAll('option')[0].innerHTML = JSON.parse(xhr.responseText).language_EN;
                document.querySelector('.language').querySelector('select').querySelectorAll('option')[1].innerHTML = JSON.parse(xhr.responseText).language_TW;
                document.querySelector('.language').querySelector('select').querySelectorAll('option')[2].innerHTML = JSON.parse(xhr.responseText).language_CN;
                document.querySelector('.language').querySelector('select').querySelectorAll('option')[3].innerHTML = JSON.parse(xhr.responseText).language_KN;
                document.querySelector('.language').querySelector('select').querySelectorAll('option')[4].innerHTML = JSON.parse(xhr.responseText).language_VN;
            }
        }
        xhr.send();
    }

});