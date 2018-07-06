
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
                document.querySelector('#zone-01').innerHTML = JSON.parse(xhr.responseText).rightNav_01;
                document.querySelector('#zone-02').innerHTML = JSON.parse(xhr.responseText).rightNav_02;
                document.querySelector('#zone-03').innerHTML = JSON.parse(xhr.responseText).rightNav_03;
                document.querySelector('#zone-04').innerHTML = JSON.parse(xhr.responseText).rightNav_04;
                document.querySelector('#zone-05').innerHTML = JSON.parse(xhr.responseText).rightNav_05;
                document.querySelector('#main-01').querySelector('.text-box').querySelector('em').innerHTML = JSON.parse(xhr.responseText).firstScreen_01_text;
                document.querySelector('#main-01').querySelector('.text-box').querySelector('strong').innerHTML = JSON.parse(xhr.responseText).firstScreen_02_text;
                // document.querySelector('#main-01').querySelector('.text-box').querySelector('span').querySelector('a').innerHTML = JSON.parse(xhr.responseText).firstScreen_03_text;
                document.querySelector('#main-01').querySelector('.foot').querySelectorAll('strong')[0].innerHTML = JSON.parse(xhr.responseText).firstScreen_04_text;
                document.querySelector('#main-01').querySelector('.foot').querySelectorAll('strong')[1].innerHTML = JSON.parse(xhr.responseText).firstScreen_05_text;
                document.querySelector('#main-01').querySelector('.foot').querySelectorAll('strong')[2].innerHTML = JSON.parse(xhr.responseText).firstScreen_06_text;
                document.querySelector('#main-01').querySelector('.foot').querySelectorAll('strong')[3].innerHTML = JSON.parse(xhr.responseText).firstScreen_07_text;
                document.querySelector('#main-01').querySelector('.foot').querySelectorAll('strong')[4].innerHTML = JSON.parse(xhr.responseText).firstScreen_08_text;
                document.querySelector('#main-01').querySelector('.foot').querySelectorAll('strong')[5].innerHTML = JSON.parse(xhr.responseText).firstScreen_09_text;
                // document.querySelector('#main-01').querySelector('.foot-02').querySelector('em').innerHTML = JSON.parse(xhr.responseText).firstScreen_06_text;
                // document.querySelector('#main-01').querySelector('.foot-02').querySelector('strong').innerHTML = JSON.parse(xhr.responseText).firstScreen_07_text;
                document.querySelector('#main-02').querySelector('.first-screen').querySelectorAll('p')[0].innerHTML = JSON.parse(xhr.responseText).secondScreen_firstLayout_01_text;
                document.querySelector('#main-02').querySelector('.first-screen').querySelectorAll('strong')[0].innerHTML = JSON.parse(xhr.responseText).secondScreen_firstLayout_02_text;
                // document.querySelector('#main-02').querySelector('.first-screen').querySelectorAll('span')[0].querySelector('a').innerHTML = JSON.parse(xhr.responseText).secondScreen_firstLayout_03_text;
                document.querySelector('#main-02').querySelector('.second-screen').querySelectorAll('p')[0].innerHTML = JSON.parse(xhr.responseText).secondScreen_secondLayout_01_text;
                document.querySelector('#main-02').querySelector('.second-screen').querySelectorAll('strong')[0].innerHTML = JSON.parse(xhr.responseText).secondScreen_secondLayout_02_text;
                // document.querySelector('#main-02').querySelector('.second-screen').querySelectorAll('span')[0].querySelector('a').innerHTML = JSON.parse(xhr.responseText).secondScreen_secondLayout_03_text;
                document.querySelector('#main-02').querySelector('.three-screen').querySelectorAll('p')[0].innerHTML = JSON.parse(xhr.responseText).secondScreen_thirdLayout_01_text;
                document.querySelector('#main-02').querySelector('.three-screen').querySelectorAll('strong')[0].innerHTML = JSON.parse(xhr.responseText).secondScreen_thirdLayout_02_text;
                // document.querySelector('#main-02').querySelector('.three-screen').querySelectorAll('span')[0].querySelector('a').innerHTML = JSON.parse(xhr.responseText).secondScreen_thirdLayout_03_text;
                document.querySelector('#main-02').querySelector('.four-screen').querySelectorAll('p')[0].innerHTML = JSON.parse(xhr.responseText).secondScreen_fourthLayout_01_text;
                document.querySelector('#main-02').querySelector('.four-screen').querySelectorAll('strong')[0].innerHTML = JSON.parse(xhr.responseText).secondScreen_fourthLayout_02_text;
                // document.querySelector('#main-02').querySelector('.four-screen').querySelectorAll('span')[0].querySelector('a').innerHTML = JSON.parse(xhr.responseText).secondScreen_fourthLayout_03_text;
                document.querySelector('#main-02').querySelector('.five-screen').querySelectorAll('p')[0].innerHTML = JSON.parse(xhr.responseText).secondScreen_fifthLayout_01_text;
                document.querySelector('#main-02').querySelector('.five-screen').querySelectorAll('strong')[0].innerHTML = JSON.parse(xhr.responseText).secondScreen_fifthLayout_02_text;
                // document.querySelector('#main-02').querySelector('.five-screen').querySelectorAll('span')[0].querySelector('a').innerHTML = JSON.parse(xhr.responseText).secondScreen_fifthLayout_03_text;
                document.querySelector('#main-02').querySelector('.six-screen').querySelectorAll('p')[0].innerHTML = JSON.parse(xhr.responseText).secondScreen_sixthLayout_01_text;
                document.querySelector('#main-02').querySelector('.six-screen').querySelectorAll('strong')[0].innerHTML = JSON.parse(xhr.responseText).secondScreen_sixthLayout_02_text;
                // document.querySelector('#main-02').querySelector('.six-screen').querySelectorAll('span')[0].querySelector('a').innerHTML = JSON.parse(xhr.responseText).secondScreen_sixthLayout_03_text;
                document.querySelector('#main-03').querySelector('.text-box').querySelector('em').innerHTML = JSON.parse(xhr.responseText).thirdScreen_01_text;
                document.querySelector('#main-03').querySelector('.text-box').querySelectorAll('strong')[0].innerHTML = JSON.parse(xhr.responseText).thirdScreen_02_text;
                document.querySelector('#main-03').querySelector('.text-box').querySelectorAll('strong')[1].innerHTML = JSON.parse(xhr.responseText).thirdScreen_03_text;
                document.querySelector('#main-03').querySelector('.text-box').querySelectorAll('strong')[2].innerHTML = JSON.parse(xhr.responseText).thirdScreen_04_text;
                document.querySelector('#main-03').querySelector('.text-box').querySelectorAll('strong')[3].innerHTML = JSON.parse(xhr.responseText).thirdScreen_05_text;
                // document.querySelector('#main-03').querySelector('.text-box').querySelector('span').innerHTML = JSON.parse(xhr.responseText).thirdScreen_03_text;
                // document.querySelector('#main-03').querySelector('.foot-01').querySelector('em').innerHTML = JSON.parse(xhr.responseText).thirdScreen_04_text;
                // document.querySelector('#main-03').querySelector('.foot-01').querySelector('strong').innerHTML = JSON.parse(xhr.responseText).thirdScreen_05_text;
                // document.querySelector('#main-03').querySelector('.foot-02').querySelector('em').innerHTML = JSON.parse(xhr.responseText).thirdScreen_06_text;
                // document.querySelector('#main-03').querySelector('.foot-02').querySelector('strong').innerHTML = JSON.parse(xhr.responseText).thirdScreen_07_text;
                // document.querySelector('#main-03').querySelector('.foot-03').querySelector('em').innerHTML = JSON.parse(xhr.responseText).thirdScreen_08_text;
                // document.querySelector('#main-03').querySelector('.foot-03').querySelector('strong').innerHTML = JSON.parse(xhr.responseText).thirdScreen_09_text;
                document.querySelector('#main-04').querySelector('.text-box').querySelector('em').innerHTML = JSON.parse(xhr.responseText).fourthScreen_01_text;
                document.querySelector('#main-04').querySelector('.text-box').querySelectorAll('strong')[0].innerHTML = JSON.parse(xhr.responseText).fourthScreen_02_text;
                document.querySelector('#main-04').querySelector('.text-box').querySelectorAll('strong')[1].innerHTML = JSON.parse(xhr.responseText).fourthScreen_03_text;
                document.querySelector('#main-04').querySelector('.text-box').querySelectorAll('strong')[2].innerHTML = JSON.parse(xhr.responseText).fourthScreen_04_text;
                // document.querySelector('#main-04').querySelector('.text-box').querySelector('span').innerHTML = JSON.parse(xhr.responseText).fourthScreen_03_text;
                // document.querySelector('#main-04').querySelector('.foot-01').querySelector('em').innerHTML = JSON.parse(xhr.responseText).fourthScreen_04_text;
                // document.querySelector('#main-04').querySelector('.foot-01').querySelector('strong').innerHTML = JSON.parse(xhr.responseText).fourthScreen_05_text;
                // document.querySelector('#main-04').querySelector('.foot-02').querySelector('em').innerHTML = JSON.parse(xhr.responseText).fourthScreen_06_text;
                // document.querySelector('#main-04').querySelector('.foot-02').querySelector('strong').innerHTML = JSON.parse(xhr.responseText).fourthScreen_07_text;
                // document.querySelector('#main-04').querySelector('.foot-03').querySelector('em').innerHTML = JSON.parse(xhr.responseText).fourthScreen_08_text;
                // document.querySelector('#main-04').querySelector('.foot-03').querySelector('strong').innerHTML = JSON.parse(xhr.responseText).fourthScreen_09_text;
                document.querySelector('#main-05').querySelector('.text-box').querySelectorAll('em')[0].innerHTML = JSON.parse(xhr.responseText).fifthScreen_01_text;
                document.querySelector('#main-05').querySelector('.text-box').querySelectorAll('em')[1].innerHTML = JSON.parse(xhr.responseText).fifthScreen_02_text;
                // document.querySelector('#main-05').querySelector('.text-box').querySelector('strong').innerHTML = JSON.parse(xhr.responseText).fifthScreen_02_text;
                // document.querySelector('#main-05').querySelector('.text-box').querySelector('span').innerHTML = JSON.parse(xhr.responseText).fifthScreen_03_text;
                // document.querySelector('#main-05').querySelector('.foot-01').querySelectorAll('strong')[0].innerHTML = JSON.parse(xhr.responseText).fifthScreen_03_text;
                // document.querySelector('#main-05').querySelector('.foot-01').querySelectorAll('strong')[1].innerHTML = JSON.parse(xhr.responseText).fifthScreen_05_text_02;
                // document.querySelector('#main-05').querySelector('.foot-01').querySelectorAll('strong')[2].innerHTML = JSON.parse(xhr.responseText).fifthScreen_05_text_03;
                // document.querySelector('#main-05').querySelector('.foot-02').querySelector('em').innerHTML = JSON.parse(xhr.responseText).fifthScreen_06_text;
                // document.querySelector('#main-05').querySelector('.foot-02').querySelector('strong').innerHTML = JSON.parse(xhr.responseText).fifthScreen_07_text;
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
                document.querySelector('#zone-01').innerHTML = JSON.parse(xhr.responseText).rightNav_01;
                document.querySelector('#zone-02').innerHTML = JSON.parse(xhr.responseText).rightNav_02;
                document.querySelector('#zone-03').innerHTML = JSON.parse(xhr.responseText).rightNav_03;
                document.querySelector('#zone-04').innerHTML = JSON.parse(xhr.responseText).rightNav_04;
                document.querySelector('#zone-05').innerHTML = JSON.parse(xhr.responseText).rightNav_05;
                document.querySelector('#main-01').querySelector('.text-box').querySelector('em').innerHTML = JSON.parse(xhr.responseText).firstScreen_01_text;
                document.querySelector('#main-01').querySelector('.text-box').querySelector('strong').innerHTML = JSON.parse(xhr.responseText).firstScreen_02_text;
                // document.querySelector('#main-01').querySelector('.text-box').querySelector('span').querySelector('a').innerHTML = JSON.parse(xhr.responseText).firstScreen_03_text;
                document.querySelector('#main-01').querySelector('.foot').querySelectorAll('strong')[0].innerHTML = JSON.parse(xhr.responseText).firstScreen_04_text;
                document.querySelector('#main-01').querySelector('.foot').querySelectorAll('strong')[1].innerHTML = JSON.parse(xhr.responseText).firstScreen_05_text;
                document.querySelector('#main-01').querySelector('.foot').querySelectorAll('strong')[2].innerHTML = JSON.parse(xhr.responseText).firstScreen_06_text;
                document.querySelector('#main-01').querySelector('.foot').querySelectorAll('strong')[3].innerHTML = JSON.parse(xhr.responseText).firstScreen_07_text;
                document.querySelector('#main-01').querySelector('.foot').querySelectorAll('strong')[4].innerHTML = JSON.parse(xhr.responseText).firstScreen_08_text;
                document.querySelector('#main-01').querySelector('.foot').querySelectorAll('strong')[5].innerHTML = JSON.parse(xhr.responseText).firstScreen_09_text;
                // document.querySelector('#main-01').querySelector('.foot-02').querySelector('em').innerHTML = JSON.parse(xhr.responseText).firstScreen_06_text;
                // document.querySelector('#main-01').querySelector('.foot-02').querySelector('strong').innerHTML = JSON.parse(xhr.responseText).firstScreen_07_text;
                document.querySelector('#main-02').querySelector('.first-screen').querySelectorAll('p')[0].innerHTML = JSON.parse(xhr.responseText).secondScreen_firstLayout_01_text;
                document.querySelector('#main-02').querySelector('.first-screen').querySelectorAll('strong')[0].innerHTML = JSON.parse(xhr.responseText).secondScreen_firstLayout_02_text;
                // document.querySelector('#main-02').querySelector('.first-screen').querySelectorAll('span')[0].querySelector('a').innerHTML = JSON.parse(xhr.responseText).secondScreen_firstLayout_03_text;
                document.querySelector('#main-02').querySelector('.second-screen').querySelectorAll('p')[0].innerHTML = JSON.parse(xhr.responseText).secondScreen_secondLayout_01_text;
                document.querySelector('#main-02').querySelector('.second-screen').querySelectorAll('strong')[0].innerHTML = JSON.parse(xhr.responseText).secondScreen_secondLayout_02_text;
                // document.querySelector('#main-02').querySelector('.second-screen').querySelectorAll('span')[0].querySelector('a').innerHTML = JSON.parse(xhr.responseText).secondScreen_secondLayout_03_text;
                document.querySelector('#main-02').querySelector('.three-screen').querySelectorAll('p')[0].innerHTML = JSON.parse(xhr.responseText).secondScreen_thirdLayout_01_text;
                document.querySelector('#main-02').querySelector('.three-screen').querySelectorAll('strong')[0].innerHTML = JSON.parse(xhr.responseText).secondScreen_thirdLayout_02_text;
                // document.querySelector('#main-02').querySelector('.three-screen').querySelectorAll('span')[0].querySelector('a').innerHTML = JSON.parse(xhr.responseText).secondScreen_thirdLayout_03_text;
                document.querySelector('#main-02').querySelector('.four-screen').querySelectorAll('p')[0].innerHTML = JSON.parse(xhr.responseText).secondScreen_fourthLayout_01_text;
                document.querySelector('#main-02').querySelector('.four-screen').querySelectorAll('strong')[0].innerHTML = JSON.parse(xhr.responseText).secondScreen_fourthLayout_02_text;
                // document.querySelector('#main-02').querySelector('.four-screen').querySelectorAll('span')[0].querySelector('a').innerHTML = JSON.parse(xhr.responseText).secondScreen_fourthLayout_03_text;
                document.querySelector('#main-02').querySelector('.five-screen').querySelectorAll('p')[0].innerHTML = JSON.parse(xhr.responseText).secondScreen_fifthLayout_01_text;
                document.querySelector('#main-02').querySelector('.five-screen').querySelectorAll('strong')[0].innerHTML = JSON.parse(xhr.responseText).secondScreen_fifthLayout_02_text;
                // document.querySelector('#main-02').querySelector('.five-screen').querySelectorAll('span')[0].querySelector('a').innerHTML = JSON.parse(xhr.responseText).secondScreen_fifthLayout_03_text;
                document.querySelector('#main-02').querySelector('.six-screen').querySelectorAll('p')[0].innerHTML = JSON.parse(xhr.responseText).secondScreen_sixthLayout_01_text;
                document.querySelector('#main-02').querySelector('.six-screen').querySelectorAll('strong')[0].innerHTML = JSON.parse(xhr.responseText).secondScreen_sixthLayout_02_text;
                // document.querySelector('#main-02').querySelector('.six-screen').querySelectorAll('span')[0].querySelector('a').innerHTML = JSON.parse(xhr.responseText).secondScreen_sixthLayout_03_text;
                document.querySelector('#main-03').querySelector('.text-box').querySelector('em').innerHTML = JSON.parse(xhr.responseText).thirdScreen_01_text;
                document.querySelector('#main-03').querySelector('.text-box').querySelectorAll('strong')[0].innerHTML = JSON.parse(xhr.responseText).thirdScreen_02_text;
                document.querySelector('#main-03').querySelector('.text-box').querySelectorAll('strong')[1].innerHTML = JSON.parse(xhr.responseText).thirdScreen_03_text;
                document.querySelector('#main-03').querySelector('.text-box').querySelectorAll('strong')[2].innerHTML = JSON.parse(xhr.responseText).thirdScreen_04_text;
                document.querySelector('#main-03').querySelector('.text-box').querySelectorAll('strong')[3].innerHTML = JSON.parse(xhr.responseText).thirdScreen_05_text;
                // document.querySelector('#main-03').querySelector('.text-box').querySelector('span').innerHTML = JSON.parse(xhr.responseText).thirdScreen_03_text;
                // document.querySelector('#main-03').querySelector('.foot-01').querySelector('em').innerHTML = JSON.parse(xhr.responseText).thirdScreen_04_text;
                // document.querySelector('#main-03').querySelector('.foot-01').querySelector('strong').innerHTML = JSON.parse(xhr.responseText).thirdScreen_05_text;
                // document.querySelector('#main-03').querySelector('.foot-02').querySelector('em').innerHTML = JSON.parse(xhr.responseText).thirdScreen_06_text;
                // document.querySelector('#main-03').querySelector('.foot-02').querySelector('strong').innerHTML = JSON.parse(xhr.responseText).thirdScreen_07_text;
                // document.querySelector('#main-03').querySelector('.foot-03').querySelector('em').innerHTML = JSON.parse(xhr.responseText).thirdScreen_08_text;
                // document.querySelector('#main-03').querySelector('.foot-03').querySelector('strong').innerHTML = JSON.parse(xhr.responseText).thirdScreen_09_text;
                document.querySelector('#main-04').querySelector('.text-box').querySelector('em').innerHTML = JSON.parse(xhr.responseText).fourthScreen_01_text;
                document.querySelector('#main-04').querySelector('.text-box').querySelectorAll('strong')[0].innerHTML = JSON.parse(xhr.responseText).fourthScreen_02_text;
                document.querySelector('#main-04').querySelector('.text-box').querySelectorAll('strong')[1].innerHTML = JSON.parse(xhr.responseText).fourthScreen_03_text;
                document.querySelector('#main-04').querySelector('.text-box').querySelectorAll('strong')[2].innerHTML = JSON.parse(xhr.responseText).fourthScreen_04_text;
                // document.querySelector('#main-04').querySelector('.text-box').querySelector('span').innerHTML = JSON.parse(xhr.responseText).fourthScreen_03_text;
                // document.querySelector('#main-04').querySelector('.foot-01').querySelector('em').innerHTML = JSON.parse(xhr.responseText).fourthScreen_04_text;
                // document.querySelector('#main-04').querySelector('.foot-01').querySelector('strong').innerHTML = JSON.parse(xhr.responseText).fourthScreen_05_text;
                // document.querySelector('#main-04').querySelector('.foot-02').querySelector('em').innerHTML = JSON.parse(xhr.responseText).fourthScreen_06_text;
                // document.querySelector('#main-04').querySelector('.foot-02').querySelector('strong').innerHTML = JSON.parse(xhr.responseText).fourthScreen_07_text;
                // document.querySelector('#main-04').querySelector('.foot-03').querySelector('em').innerHTML = JSON.parse(xhr.responseText).fourthScreen_08_text;
                // document.querySelector('#main-04').querySelector('.foot-03').querySelector('strong').innerHTML = JSON.parse(xhr.responseText).fourthScreen_09_text;
                document.querySelector('#main-05').querySelector('.text-box').querySelectorAll('em')[0].innerHTML = JSON.parse(xhr.responseText).fifthScreen_01_text;
                document.querySelector('#main-05').querySelector('.text-box').querySelectorAll('em')[1].innerHTML = JSON.parse(xhr.responseText).fifthScreen_02_text;
                // document.querySelector('#main-05').querySelector('.text-box').querySelector('strong').innerHTML = JSON.parse(xhr.responseText).fifthScreen_02_text;
                // document.querySelector('#main-05').querySelector('.text-box').querySelector('span').innerHTML = JSON.parse(xhr.responseText).fifthScreen_03_text;
                // document.querySelector('#main-05').querySelector('.foot-01').querySelectorAll('strong')[0].innerHTML = JSON.parse(xhr.responseText).fifthScreen_03_text;
                // document.querySelector('#main-05').querySelector('.foot-01').querySelectorAll('strong')[1].innerHTML = JSON.parse(xhr.responseText).fifthScreen_05_text_02;
                // document.querySelector('#main-05').querySelector('.foot-01').querySelectorAll('strong')[2].innerHTML = JSON.parse(xhr.responseText).fifthScreen_05_text_03;
                // document.querySelector('#main-05').querySelector('.foot-02').querySelector('em').innerHTML = JSON.parse(xhr.responseText).fifthScreen_06_text;
                // document.querySelector('#main-05').querySelector('.foot-02').querySelector('strong').innerHTML = JSON.parse(xhr.responseText).fifthScreen_07_text;
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
                document.querySelector('#zone-01').innerHTML = JSON.parse(xhr.responseText).rightNav_01;
                document.querySelector('#zone-02').innerHTML = JSON.parse(xhr.responseText).rightNav_02;
                document.querySelector('#zone-03').innerHTML = JSON.parse(xhr.responseText).rightNav_03;
                document.querySelector('#zone-04').innerHTML = JSON.parse(xhr.responseText).rightNav_04;
                document.querySelector('#zone-05').innerHTML = JSON.parse(xhr.responseText).rightNav_05;
                document.querySelector('#main-01').querySelector('.text-box').querySelector('em').innerHTML = JSON.parse(xhr.responseText).firstScreen_01_text;
                document.querySelector('#main-01').querySelector('.text-box').querySelector('strong').innerHTML = JSON.parse(xhr.responseText).firstScreen_02_text;
                // document.querySelector('#main-01').querySelector('.text-box').querySelector('span').querySelector('a').innerHTML = JSON.parse(xhr.responseText).firstScreen_03_text;
                document.querySelector('#main-01').querySelector('.foot').querySelectorAll('strong')[0].innerHTML = JSON.parse(xhr.responseText).firstScreen_04_text;
                document.querySelector('#main-01').querySelector('.foot').querySelectorAll('strong')[1].innerHTML = JSON.parse(xhr.responseText).firstScreen_05_text;
                document.querySelector('#main-01').querySelector('.foot').querySelectorAll('strong')[2].innerHTML = JSON.parse(xhr.responseText).firstScreen_06_text;
                document.querySelector('#main-01').querySelector('.foot').querySelectorAll('strong')[3].innerHTML = JSON.parse(xhr.responseText).firstScreen_07_text;
                document.querySelector('#main-01').querySelector('.foot').querySelectorAll('strong')[4].innerHTML = JSON.parse(xhr.responseText).firstScreen_08_text;
                document.querySelector('#main-01').querySelector('.foot').querySelectorAll('strong')[5].innerHTML = JSON.parse(xhr.responseText).firstScreen_09_text;
                // document.querySelector('#main-01').querySelector('.foot-02').querySelector('em').innerHTML = JSON.parse(xhr.responseText).firstScreen_06_text;
                // document.querySelector('#main-01').querySelector('.foot-02').querySelector('strong').innerHTML = JSON.parse(xhr.responseText).firstScreen_07_text;
                document.querySelector('#main-02').querySelector('.first-screen').querySelectorAll('p')[0].innerHTML = JSON.parse(xhr.responseText).secondScreen_firstLayout_01_text;
                document.querySelector('#main-02').querySelector('.first-screen').querySelectorAll('strong')[0].innerHTML = JSON.parse(xhr.responseText).secondScreen_firstLayout_02_text;
                // document.querySelector('#main-02').querySelector('.first-screen').querySelectorAll('span')[0].querySelector('a').innerHTML = JSON.parse(xhr.responseText).secondScreen_firstLayout_03_text;
                document.querySelector('#main-02').querySelector('.second-screen').querySelectorAll('p')[0].innerHTML = JSON.parse(xhr.responseText).secondScreen_secondLayout_01_text;
                document.querySelector('#main-02').querySelector('.second-screen').querySelectorAll('strong')[0].innerHTML = JSON.parse(xhr.responseText).secondScreen_secondLayout_02_text;
                // document.querySelector('#main-02').querySelector('.second-screen').querySelectorAll('span')[0].querySelector('a').innerHTML = JSON.parse(xhr.responseText).secondScreen_secondLayout_03_text;
                document.querySelector('#main-02').querySelector('.three-screen').querySelectorAll('p')[0].innerHTML = JSON.parse(xhr.responseText).secondScreen_thirdLayout_01_text;
                document.querySelector('#main-02').querySelector('.three-screen').querySelectorAll('strong')[0].innerHTML = JSON.parse(xhr.responseText).secondScreen_thirdLayout_02_text;
                // document.querySelector('#main-02').querySelector('.three-screen').querySelectorAll('span')[0].querySelector('a').innerHTML = JSON.parse(xhr.responseText).secondScreen_thirdLayout_03_text;
                document.querySelector('#main-02').querySelector('.four-screen').querySelectorAll('p')[0].innerHTML = JSON.parse(xhr.responseText).secondScreen_fourthLayout_01_text;
                document.querySelector('#main-02').querySelector('.four-screen').querySelectorAll('strong')[0].innerHTML = JSON.parse(xhr.responseText).secondScreen_fourthLayout_02_text;
                // document.querySelector('#main-02').querySelector('.four-screen').querySelectorAll('span')[0].querySelector('a').innerHTML = JSON.parse(xhr.responseText).secondScreen_fourthLayout_03_text;
                document.querySelector('#main-02').querySelector('.five-screen').querySelectorAll('p')[0].innerHTML = JSON.parse(xhr.responseText).secondScreen_fifthLayout_01_text;
                document.querySelector('#main-02').querySelector('.five-screen').querySelectorAll('strong')[0].innerHTML = JSON.parse(xhr.responseText).secondScreen_fifthLayout_02_text;
                // document.querySelector('#main-02').querySelector('.five-screen').querySelectorAll('span')[0].querySelector('a').innerHTML = JSON.parse(xhr.responseText).secondScreen_fifthLayout_03_text;
                document.querySelector('#main-02').querySelector('.six-screen').querySelectorAll('p')[0].innerHTML = JSON.parse(xhr.responseText).secondScreen_sixthLayout_01_text;
                document.querySelector('#main-02').querySelector('.six-screen').querySelectorAll('strong')[0].innerHTML = JSON.parse(xhr.responseText).secondScreen_sixthLayout_02_text;
                // document.querySelector('#main-02').querySelector('.six-screen').querySelectorAll('span')[0].querySelector('a').innerHTML = JSON.parse(xhr.responseText).secondScreen_sixthLayout_03_text;
                document.querySelector('#main-03').querySelector('.text-box').querySelector('em').innerHTML = JSON.parse(xhr.responseText).thirdScreen_01_text;
                document.querySelector('#main-03').querySelector('.text-box').querySelectorAll('strong')[0].innerHTML = JSON.parse(xhr.responseText).thirdScreen_02_text;
                document.querySelector('#main-03').querySelector('.text-box').querySelectorAll('strong')[1].innerHTML = JSON.parse(xhr.responseText).thirdScreen_03_text;
                document.querySelector('#main-03').querySelector('.text-box').querySelectorAll('strong')[2].innerHTML = JSON.parse(xhr.responseText).thirdScreen_04_text;
                document.querySelector('#main-03').querySelector('.text-box').querySelectorAll('strong')[3].innerHTML = JSON.parse(xhr.responseText).thirdScreen_05_text;
                // document.querySelector('#main-03').querySelector('.text-box').querySelector('span').innerHTML = JSON.parse(xhr.responseText).thirdScreen_03_text;
                // document.querySelector('#main-03').querySelector('.foot-01').querySelector('em').innerHTML = JSON.parse(xhr.responseText).thirdScreen_04_text;
                // document.querySelector('#main-03').querySelector('.foot-01').querySelector('strong').innerHTML = JSON.parse(xhr.responseText).thirdScreen_05_text;
                // document.querySelector('#main-03').querySelector('.foot-02').querySelector('em').innerHTML = JSON.parse(xhr.responseText).thirdScreen_06_text;
                // document.querySelector('#main-03').querySelector('.foot-02').querySelector('strong').innerHTML = JSON.parse(xhr.responseText).thirdScreen_07_text;
                // document.querySelector('#main-03').querySelector('.foot-03').querySelector('em').innerHTML = JSON.parse(xhr.responseText).thirdScreen_08_text;
                // document.querySelector('#main-03').querySelector('.foot-03').querySelector('strong').innerHTML = JSON.parse(xhr.responseText).thirdScreen_09_text;
                document.querySelector('#main-04').querySelector('.text-box').querySelector('em').innerHTML = JSON.parse(xhr.responseText).fourthScreen_01_text;
                document.querySelector('#main-04').querySelector('.text-box').querySelectorAll('strong')[0].innerHTML = JSON.parse(xhr.responseText).fourthScreen_02_text;
                document.querySelector('#main-04').querySelector('.text-box').querySelectorAll('strong')[1].innerHTML = JSON.parse(xhr.responseText).fourthScreen_03_text;
                document.querySelector('#main-04').querySelector('.text-box').querySelectorAll('strong')[2].innerHTML = JSON.parse(xhr.responseText).fourthScreen_04_text;
                // document.querySelector('#main-04').querySelector('.text-box').querySelector('span').innerHTML = JSON.parse(xhr.responseText).fourthScreen_03_text;
                // document.querySelector('#main-04').querySelector('.foot-01').querySelector('em').innerHTML = JSON.parse(xhr.responseText).fourthScreen_04_text;
                // document.querySelector('#main-04').querySelector('.foot-01').querySelector('strong').innerHTML = JSON.parse(xhr.responseText).fourthScreen_05_text;
                // document.querySelector('#main-04').querySelector('.foot-02').querySelector('em').innerHTML = JSON.parse(xhr.responseText).fourthScreen_06_text;
                // document.querySelector('#main-04').querySelector('.foot-02').querySelector('strong').innerHTML = JSON.parse(xhr.responseText).fourthScreen_07_text;
                // document.querySelector('#main-04').querySelector('.foot-03').querySelector('em').innerHTML = JSON.parse(xhr.responseText).fourthScreen_08_text;
                // document.querySelector('#main-04').querySelector('.foot-03').querySelector('strong').innerHTML = JSON.parse(xhr.responseText).fourthScreen_09_text;
                document.querySelector('#main-05').querySelector('.text-box').querySelectorAll('em')[0].innerHTML = JSON.parse(xhr.responseText).fifthScreen_01_text;
                document.querySelector('#main-05').querySelector('.text-box').querySelectorAll('em')[1].innerHTML = JSON.parse(xhr.responseText).fifthScreen_02_text;
                // document.querySelector('#main-05').querySelector('.text-box').querySelector('strong').innerHTML = JSON.parse(xhr.responseText).fifthScreen_02_text;
                // document.querySelector('#main-05').querySelector('.text-box').querySelector('span').innerHTML = JSON.parse(xhr.responseText).fifthScreen_03_text;
                // document.querySelector('#main-05').querySelector('.foot-01').querySelectorAll('strong')[0].innerHTML = JSON.parse(xhr.responseText).fifthScreen_03_text;
                // document.querySelector('#main-05').querySelector('.foot-01').querySelectorAll('strong')[1].innerHTML = JSON.parse(xhr.responseText).fifthScreen_05_text_02;
                // document.querySelector('#main-05').querySelector('.foot-01').querySelectorAll('strong')[2].innerHTML = JSON.parse(xhr.responseText).fifthScreen_05_text_03;
                // document.querySelector('#main-05').querySelector('.foot-02').querySelector('em').innerHTML = JSON.parse(xhr.responseText).fifthScreen_06_text;
                // document.querySelector('#main-05').querySelector('.foot-02').querySelector('strong').innerHTML = JSON.parse(xhr.responseText).fifthScreen_07_text;
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
                document.querySelector('#zone-01').innerHTML = JSON.parse(xhr.responseText).rightNav_01;
                document.querySelector('#zone-02').innerHTML = JSON.parse(xhr.responseText).rightNav_02;
                document.querySelector('#zone-03').innerHTML = JSON.parse(xhr.responseText).rightNav_03;
                document.querySelector('#zone-04').innerHTML = JSON.parse(xhr.responseText).rightNav_04;
                document.querySelector('#zone-05').innerHTML = JSON.parse(xhr.responseText).rightNav_05;
                document.querySelector('#main-01').querySelector('.text-box').querySelector('em').innerHTML = JSON.parse(xhr.responseText).firstScreen_01_text;
                document.querySelector('#main-01').querySelector('.text-box').querySelector('strong').innerHTML = JSON.parse(xhr.responseText).firstScreen_02_text;
                // document.querySelector('#main-01').querySelector('.text-box').querySelector('span').querySelector('a').innerHTML = JSON.parse(xhr.responseText).firstScreen_03_text;
                document.querySelector('#main-01').querySelector('.foot').querySelectorAll('strong')[0].innerHTML = JSON.parse(xhr.responseText).firstScreen_04_text;
                document.querySelector('#main-01').querySelector('.foot').querySelectorAll('strong')[1].innerHTML = JSON.parse(xhr.responseText).firstScreen_05_text;
                document.querySelector('#main-01').querySelector('.foot').querySelectorAll('strong')[2].innerHTML = JSON.parse(xhr.responseText).firstScreen_06_text;
                document.querySelector('#main-01').querySelector('.foot').querySelectorAll('strong')[3].innerHTML = JSON.parse(xhr.responseText).firstScreen_07_text;
                document.querySelector('#main-01').querySelector('.foot').querySelectorAll('strong')[4].innerHTML = JSON.parse(xhr.responseText).firstScreen_08_text;
                document.querySelector('#main-01').querySelector('.foot').querySelectorAll('strong')[5].innerHTML = JSON.parse(xhr.responseText).firstScreen_09_text;
                // document.querySelector('#main-01').querySelector('.foot-02').querySelector('em').innerHTML = JSON.parse(xhr.responseText).firstScreen_06_text;
                // document.querySelector('#main-01').querySelector('.foot-02').querySelector('strong').innerHTML = JSON.parse(xhr.responseText).firstScreen_07_text;
                document.querySelector('#main-02').querySelector('.first-screen').querySelectorAll('p')[0].innerHTML = JSON.parse(xhr.responseText).secondScreen_firstLayout_01_text;
                document.querySelector('#main-02').querySelector('.first-screen').querySelectorAll('strong')[0].innerHTML = JSON.parse(xhr.responseText).secondScreen_firstLayout_02_text;
                // document.querySelector('#main-02').querySelector('.first-screen').querySelectorAll('span')[0].querySelector('a').innerHTML = JSON.parse(xhr.responseText).secondScreen_firstLayout_03_text;
                document.querySelector('#main-02').querySelector('.second-screen').querySelectorAll('p')[0].innerHTML = JSON.parse(xhr.responseText).secondScreen_secondLayout_01_text;
                document.querySelector('#main-02').querySelector('.second-screen').querySelectorAll('strong')[0].innerHTML = JSON.parse(xhr.responseText).secondScreen_secondLayout_02_text;
                // document.querySelector('#main-02').querySelector('.second-screen').querySelectorAll('span')[0].querySelector('a').innerHTML = JSON.parse(xhr.responseText).secondScreen_secondLayout_03_text;
                document.querySelector('#main-02').querySelector('.three-screen').querySelectorAll('p')[0].innerHTML = JSON.parse(xhr.responseText).secondScreen_thirdLayout_01_text;
                document.querySelector('#main-02').querySelector('.three-screen').querySelectorAll('strong')[0].innerHTML = JSON.parse(xhr.responseText).secondScreen_thirdLayout_02_text;
                // document.querySelector('#main-02').querySelector('.three-screen').querySelectorAll('span')[0].querySelector('a').innerHTML = JSON.parse(xhr.responseText).secondScreen_thirdLayout_03_text;
                document.querySelector('#main-02').querySelector('.four-screen').querySelectorAll('p')[0].innerHTML = JSON.parse(xhr.responseText).secondScreen_fourthLayout_01_text;
                document.querySelector('#main-02').querySelector('.four-screen').querySelectorAll('strong')[0].innerHTML = JSON.parse(xhr.responseText).secondScreen_fourthLayout_02_text;
                // document.querySelector('#main-02').querySelector('.four-screen').querySelectorAll('span')[0].querySelector('a').innerHTML = JSON.parse(xhr.responseText).secondScreen_fourthLayout_03_text;
                document.querySelector('#main-02').querySelector('.five-screen').querySelectorAll('p')[0].innerHTML = JSON.parse(xhr.responseText).secondScreen_fifthLayout_01_text;
                document.querySelector('#main-02').querySelector('.five-screen').querySelectorAll('strong')[0].innerHTML = JSON.parse(xhr.responseText).secondScreen_fifthLayout_02_text;
                // document.querySelector('#main-02').querySelector('.five-screen').querySelectorAll('span')[0].querySelector('a').innerHTML = JSON.parse(xhr.responseText).secondScreen_fifthLayout_03_text;
                document.querySelector('#main-02').querySelector('.six-screen').querySelectorAll('p')[0].innerHTML = JSON.parse(xhr.responseText).secondScreen_sixthLayout_01_text;
                document.querySelector('#main-02').querySelector('.six-screen').querySelectorAll('strong')[0].innerHTML = JSON.parse(xhr.responseText).secondScreen_sixthLayout_02_text;
                // document.querySelector('#main-02').querySelector('.six-screen').querySelectorAll('span')[0].querySelector('a').innerHTML = JSON.parse(xhr.responseText).secondScreen_sixthLayout_03_text;
                document.querySelector('#main-03').querySelector('.text-box').querySelector('em').innerHTML = JSON.parse(xhr.responseText).thirdScreen_01_text;
                document.querySelector('#main-03').querySelector('.text-box').querySelectorAll('strong')[0].innerHTML = JSON.parse(xhr.responseText).thirdScreen_02_text;
                document.querySelector('#main-03').querySelector('.text-box').querySelectorAll('strong')[1].innerHTML = JSON.parse(xhr.responseText).thirdScreen_03_text;
                document.querySelector('#main-03').querySelector('.text-box').querySelectorAll('strong')[2].innerHTML = JSON.parse(xhr.responseText).thirdScreen_04_text;
                document.querySelector('#main-03').querySelector('.text-box').querySelectorAll('strong')[3].innerHTML = JSON.parse(xhr.responseText).thirdScreen_05_text;
                // document.querySelector('#main-03').querySelector('.text-box').querySelector('span').innerHTML = JSON.parse(xhr.responseText).thirdScreen_03_text;
                // document.querySelector('#main-03').querySelector('.foot-01').querySelector('em').innerHTML = JSON.parse(xhr.responseText).thirdScreen_04_text;
                // document.querySelector('#main-03').querySelector('.foot-01').querySelector('strong').innerHTML = JSON.parse(xhr.responseText).thirdScreen_05_text;
                // document.querySelector('#main-03').querySelector('.foot-02').querySelector('em').innerHTML = JSON.parse(xhr.responseText).thirdScreen_06_text;
                // document.querySelector('#main-03').querySelector('.foot-02').querySelector('strong').innerHTML = JSON.parse(xhr.responseText).thirdScreen_07_text;
                // document.querySelector('#main-03').querySelector('.foot-03').querySelector('em').innerHTML = JSON.parse(xhr.responseText).thirdScreen_08_text;
                // document.querySelector('#main-03').querySelector('.foot-03').querySelector('strong').innerHTML = JSON.parse(xhr.responseText).thirdScreen_09_text;
                document.querySelector('#main-04').querySelector('.text-box').querySelector('em').innerHTML = JSON.parse(xhr.responseText).fourthScreen_01_text;
                document.querySelector('#main-04').querySelector('.text-box').querySelectorAll('strong')[0].innerHTML = JSON.parse(xhr.responseText).fourthScreen_02_text;
                document.querySelector('#main-04').querySelector('.text-box').querySelectorAll('strong')[1].innerHTML = JSON.parse(xhr.responseText).fourthScreen_03_text;
                document.querySelector('#main-04').querySelector('.text-box').querySelectorAll('strong')[2].innerHTML = JSON.parse(xhr.responseText).fourthScreen_04_text;
                // document.querySelector('#main-04').querySelector('.text-box').querySelector('span').innerHTML = JSON.parse(xhr.responseText).fourthScreen_03_text;
                // document.querySelector('#main-04').querySelector('.foot-01').querySelector('em').innerHTML = JSON.parse(xhr.responseText).fourthScreen_04_text;
                // document.querySelector('#main-04').querySelector('.foot-01').querySelector('strong').innerHTML = JSON.parse(xhr.responseText).fourthScreen_05_text;
                // document.querySelector('#main-04').querySelector('.foot-02').querySelector('em').innerHTML = JSON.parse(xhr.responseText).fourthScreen_06_text;
                // document.querySelector('#main-04').querySelector('.foot-02').querySelector('strong').innerHTML = JSON.parse(xhr.responseText).fourthScreen_07_text;
                // document.querySelector('#main-04').querySelector('.foot-03').querySelector('em').innerHTML = JSON.parse(xhr.responseText).fourthScreen_08_text;
                // document.querySelector('#main-04').querySelector('.foot-03').querySelector('strong').innerHTML = JSON.parse(xhr.responseText).fourthScreen_09_text;
                document.querySelector('#main-05').querySelector('.text-box').querySelectorAll('em')[0].innerHTML = JSON.parse(xhr.responseText).fifthScreen_01_text;
                document.querySelector('#main-05').querySelector('.text-box').querySelectorAll('em')[1].innerHTML = JSON.parse(xhr.responseText).fifthScreen_02_text;
                // document.querySelector('#main-05').querySelector('.text-box').querySelector('strong').innerHTML = JSON.parse(xhr.responseText).fifthScreen_02_text;
                // document.querySelector('#main-05').querySelector('.text-box').querySelector('span').innerHTML = JSON.parse(xhr.responseText).fifthScreen_03_text;
                // document.querySelector('#main-05').querySelector('.foot-01').querySelectorAll('strong')[0].innerHTML = JSON.parse(xhr.responseText).fifthScreen_03_text;
                // document.querySelector('#main-05').querySelector('.foot-01').querySelectorAll('strong')[1].innerHTML = JSON.parse(xhr.responseText).fifthScreen_05_text_02;
                // document.querySelector('#main-05').querySelector('.foot-01').querySelectorAll('strong')[2].innerHTML = JSON.parse(xhr.responseText).fifthScreen_05_text_03;
                // document.querySelector('#main-05').querySelector('.foot-02').querySelector('em').innerHTML = JSON.parse(xhr.responseText).fifthScreen_06_text;
                // document.querySelector('#main-05').querySelector('.foot-02').querySelector('strong').innerHTML = JSON.parse(xhr.responseText).fifthScreen_07_text;
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
                document.querySelector('#zone-01').innerHTML = JSON.parse(xhr.responseText).rightNav_01;
                document.querySelector('#zone-02').innerHTML = JSON.parse(xhr.responseText).rightNav_02;
                document.querySelector('#zone-03').innerHTML = JSON.parse(xhr.responseText).rightNav_03;
                document.querySelector('#zone-04').innerHTML = JSON.parse(xhr.responseText).rightNav_04;
                document.querySelector('#zone-05').innerHTML = JSON.parse(xhr.responseText).rightNav_05;
                document.querySelector('#main-01').querySelector('.text-box').querySelector('em').innerHTML = JSON.parse(xhr.responseText).firstScreen_01_text;
                document.querySelector('#main-01').querySelector('.text-box').querySelector('strong').innerHTML = JSON.parse(xhr.responseText).firstScreen_02_text;
                // document.querySelector('#main-01').querySelector('.text-box').querySelector('span').querySelector('a').innerHTML = JSON.parse(xhr.responseText).firstScreen_03_text;
                document.querySelector('#main-01').querySelector('.foot').querySelectorAll('strong')[0].innerHTML = JSON.parse(xhr.responseText).firstScreen_04_text;
                document.querySelector('#main-01').querySelector('.foot').querySelectorAll('strong')[1].innerHTML = JSON.parse(xhr.responseText).firstScreen_05_text;
                document.querySelector('#main-01').querySelector('.foot').querySelectorAll('strong')[2].innerHTML = JSON.parse(xhr.responseText).firstScreen_06_text;
                document.querySelector('#main-01').querySelector('.foot').querySelectorAll('strong')[3].innerHTML = JSON.parse(xhr.responseText).firstScreen_07_text;
                document.querySelector('#main-01').querySelector('.foot').querySelectorAll('strong')[4].innerHTML = JSON.parse(xhr.responseText).firstScreen_08_text;
                document.querySelector('#main-01').querySelector('.foot').querySelectorAll('strong')[5].innerHTML = JSON.parse(xhr.responseText).firstScreen_09_text;
                // document.querySelector('#main-01').querySelector('.foot-02').querySelector('em').innerHTML = JSON.parse(xhr.responseText).firstScreen_06_text;
                // document.querySelector('#main-01').querySelector('.foot-02').querySelector('strong').innerHTML = JSON.parse(xhr.responseText).firstScreen_07_text;
                document.querySelector('#main-02').querySelector('.first-screen').querySelectorAll('p')[0].innerHTML = JSON.parse(xhr.responseText).secondScreen_firstLayout_01_text;
                document.querySelector('#main-02').querySelector('.first-screen').querySelectorAll('strong')[0].innerHTML = JSON.parse(xhr.responseText).secondScreen_firstLayout_02_text;
                // document.querySelector('#main-02').querySelector('.first-screen').querySelectorAll('span')[0].querySelector('a').innerHTML = JSON.parse(xhr.responseText).secondScreen_firstLayout_03_text;
                document.querySelector('#main-02').querySelector('.second-screen').querySelectorAll('p')[0].innerHTML = JSON.parse(xhr.responseText).secondScreen_secondLayout_01_text;
                document.querySelector('#main-02').querySelector('.second-screen').querySelectorAll('strong')[0].innerHTML = JSON.parse(xhr.responseText).secondScreen_secondLayout_02_text;
                // document.querySelector('#main-02').querySelector('.second-screen').querySelectorAll('span')[0].querySelector('a').innerHTML = JSON.parse(xhr.responseText).secondScreen_secondLayout_03_text;
                document.querySelector('#main-02').querySelector('.three-screen').querySelectorAll('p')[0].innerHTML = JSON.parse(xhr.responseText).secondScreen_thirdLayout_01_text;
                document.querySelector('#main-02').querySelector('.three-screen').querySelectorAll('strong')[0].innerHTML = JSON.parse(xhr.responseText).secondScreen_thirdLayout_02_text;
                // document.querySelector('#main-02').querySelector('.three-screen').querySelectorAll('span')[0].querySelector('a').innerHTML = JSON.parse(xhr.responseText).secondScreen_thirdLayout_03_text;
                document.querySelector('#main-02').querySelector('.four-screen').querySelectorAll('p')[0].innerHTML = JSON.parse(xhr.responseText).secondScreen_fourthLayout_01_text;
                document.querySelector('#main-02').querySelector('.four-screen').querySelectorAll('strong')[0].innerHTML = JSON.parse(xhr.responseText).secondScreen_fourthLayout_02_text;
                // document.querySelector('#main-02').querySelector('.four-screen').querySelectorAll('span')[0].querySelector('a').innerHTML = JSON.parse(xhr.responseText).secondScreen_fourthLayout_03_text;
                document.querySelector('#main-02').querySelector('.five-screen').querySelectorAll('p')[0].innerHTML = JSON.parse(xhr.responseText).secondScreen_fifthLayout_01_text;
                document.querySelector('#main-02').querySelector('.five-screen').querySelectorAll('strong')[0].innerHTML = JSON.parse(xhr.responseText).secondScreen_fifthLayout_02_text;
                // document.querySelector('#main-02').querySelector('.five-screen').querySelectorAll('span')[0].querySelector('a').innerHTML = JSON.parse(xhr.responseText).secondScreen_fifthLayout_03_text;
                document.querySelector('#main-02').querySelector('.six-screen').querySelectorAll('p')[0].innerHTML = JSON.parse(xhr.responseText).secondScreen_sixthLayout_01_text;
                document.querySelector('#main-02').querySelector('.six-screen').querySelectorAll('strong')[0].innerHTML = JSON.parse(xhr.responseText).secondScreen_sixthLayout_02_text;
                // document.querySelector('#main-02').querySelector('.six-screen').querySelectorAll('span')[0].querySelector('a').innerHTML = JSON.parse(xhr.responseText).secondScreen_sixthLayout_03_text;
                document.querySelector('#main-03').querySelector('.text-box').querySelector('em').innerHTML = JSON.parse(xhr.responseText).thirdScreen_01_text;
                document.querySelector('#main-03').querySelector('.text-box').querySelectorAll('strong')[0].innerHTML = JSON.parse(xhr.responseText).thirdScreen_02_text;
                document.querySelector('#main-03').querySelector('.text-box').querySelectorAll('strong')[1].innerHTML = JSON.parse(xhr.responseText).thirdScreen_03_text;
                document.querySelector('#main-03').querySelector('.text-box').querySelectorAll('strong')[2].innerHTML = JSON.parse(xhr.responseText).thirdScreen_04_text;
                document.querySelector('#main-03').querySelector('.text-box').querySelectorAll('strong')[3].innerHTML = JSON.parse(xhr.responseText).thirdScreen_05_text;
                // document.querySelector('#main-03').querySelector('.text-box').querySelector('span').innerHTML = JSON.parse(xhr.responseText).thirdScreen_03_text;
                // document.querySelector('#main-03').querySelector('.foot-01').querySelector('em').innerHTML = JSON.parse(xhr.responseText).thirdScreen_04_text;
                // document.querySelector('#main-03').querySelector('.foot-01').querySelector('strong').innerHTML = JSON.parse(xhr.responseText).thirdScreen_05_text;
                // document.querySelector('#main-03').querySelector('.foot-02').querySelector('em').innerHTML = JSON.parse(xhr.responseText).thirdScreen_06_text;
                // document.querySelector('#main-03').querySelector('.foot-02').querySelector('strong').innerHTML = JSON.parse(xhr.responseText).thirdScreen_07_text;
                // document.querySelector('#main-03').querySelector('.foot-03').querySelector('em').innerHTML = JSON.parse(xhr.responseText).thirdScreen_08_text;
                // document.querySelector('#main-03').querySelector('.foot-03').querySelector('strong').innerHTML = JSON.parse(xhr.responseText).thirdScreen_09_text;
                document.querySelector('#main-04').querySelector('.text-box').querySelector('em').innerHTML = JSON.parse(xhr.responseText).fourthScreen_01_text;
                document.querySelector('#main-04').querySelector('.text-box').querySelectorAll('strong')[0].innerHTML = JSON.parse(xhr.responseText).fourthScreen_02_text;
                document.querySelector('#main-04').querySelector('.text-box').querySelectorAll('strong')[1].innerHTML = JSON.parse(xhr.responseText).fourthScreen_03_text;
                document.querySelector('#main-04').querySelector('.text-box').querySelectorAll('strong')[2].innerHTML = JSON.parse(xhr.responseText).fourthScreen_04_text;
                // document.querySelector('#main-04').querySelector('.text-box').querySelector('span').innerHTML = JSON.parse(xhr.responseText).fourthScreen_03_text;
                // document.querySelector('#main-04').querySelector('.foot-01').querySelector('em').innerHTML = JSON.parse(xhr.responseText).fourthScreen_04_text;
                // document.querySelector('#main-04').querySelector('.foot-01').querySelector('strong').innerHTML = JSON.parse(xhr.responseText).fourthScreen_05_text;
                // document.querySelector('#main-04').querySelector('.foot-02').querySelector('em').innerHTML = JSON.parse(xhr.responseText).fourthScreen_06_text;
                // document.querySelector('#main-04').querySelector('.foot-02').querySelector('strong').innerHTML = JSON.parse(xhr.responseText).fourthScreen_07_text;
                // document.querySelector('#main-04').querySelector('.foot-03').querySelector('em').innerHTML = JSON.parse(xhr.responseText).fourthScreen_08_text;
                // document.querySelector('#main-04').querySelector('.foot-03').querySelector('strong').innerHTML = JSON.parse(xhr.responseText).fourthScreen_09_text;
                document.querySelector('#main-05').querySelector('.text-box').querySelectorAll('em')[0].innerHTML = JSON.parse(xhr.responseText).fifthScreen_01_text;
                document.querySelector('#main-05').querySelector('.text-box').querySelectorAll('em')[1].innerHTML = JSON.parse(xhr.responseText).fifthScreen_02_text;
                // document.querySelector('#main-05').querySelector('.text-box').querySelector('strong').innerHTML = JSON.parse(xhr.responseText).fifthScreen_02_text;
                // document.querySelector('#main-05').querySelector('.text-box').querySelector('span').innerHTML = JSON.parse(xhr.responseText).fifthScreen_03_text;
                // document.querySelector('#main-05').querySelector('.foot-01').querySelectorAll('strong')[0].innerHTML = JSON.parse(xhr.responseText).fifthScreen_03_text;
                // document.querySelector('#main-05').querySelector('.foot-01').querySelectorAll('strong')[1].innerHTML = JSON.parse(xhr.responseText).fifthScreen_05_text_02;
                // document.querySelector('#main-05').querySelector('.foot-01').querySelectorAll('strong')[2].innerHTML = JSON.parse(xhr.responseText).fifthScreen_05_text_03;
                // document.querySelector('#main-05').querySelector('.foot-02').querySelector('em').innerHTML = JSON.parse(xhr.responseText).fifthScreen_06_text;
                // document.querySelector('#main-05').querySelector('.foot-02').querySelector('strong').innerHTML = JSON.parse(xhr.responseText).fifthScreen_07_text;
            }
        }
        xhr.send();
    }
