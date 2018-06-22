window.addEventListener("load", function () {
	headFeatures();
	if (window.location.href.substr(-3, 3) == "#01") {
		urlLinkToService_1();
	} else if (window.location.href.substr(-3, 3) == "#02") {
		urlLinkToService_2();
	} else if (window.location.href.substr(-3, 3) == "#03") {
		urlLinkToService_3();
	} else if (window.location.href.substr(-3, 3) == "#04") {
		urlLinkToService_4();
	} else if (window.location.href.substr(-3, 3) == "#05") {
		urlLinkToService_5();
	} else if (window.location.href.substr(-3, 3) == "#06") {
		urlLinkToService_6();
	}

	// 點擊nav選單改變顯示的服務項目
	var serviceList = document.querySelector("#hideMenu").querySelector(".serviceList");
	serviceList.querySelectorAll("a")[0].addEventListener("click", function () {
		urlLinkToService_1();
		headFeatures();
	});
	serviceList.querySelectorAll("a")[1].addEventListener("click", function () {
		urlLinkToService_2();
		headFeatures();
	});
	serviceList.querySelectorAll("a")[2].addEventListener("click", function () {
		urlLinkToService_3();
		headFeatures();
	});
	serviceList.querySelectorAll("a")[3].addEventListener("click", function () {
		urlLinkToService_4();
		headFeatures();
	});
	serviceList.querySelectorAll("a")[4].addEventListener("click", function () {
		urlLinkToService_5();
		headFeatures();
	});
	serviceList.querySelectorAll("a")[5].addEventListener("click", function () {
		urlLinkToService_6();
		headFeatures();
	});
	iconClick();
});