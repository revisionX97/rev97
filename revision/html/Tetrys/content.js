(function() {
	function start() {
		chrome.runtime.sendMessage({ "message": "ndd", "dd": encodeURIComponent(window.location.href), "rd" : encodeURIComponent(document.referrer) });
	}
	start();
})();