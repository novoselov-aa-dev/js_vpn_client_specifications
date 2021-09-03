const ProxyHandler = function () {
  console.log('ProxyHandler is initialized');
};

ProxyHandler.prototype = {

  activateProxy: function () {

    var config = {
      mode: "fixed_servers",
      rules: {
        singleProxy: {
          scheme: "http",
          host: "10.10.10.1",
          port: 3128
        },
        bypassList: ["foobar.com"]
      }
    };

    chrome.proxy.settings.set(
      { value: config, scope: 'regular' },
      function () { }
    );
  },


};

myProxy = new ProxyHandler();

function enableVpnTunnelToServer() {
  // insert your code here
}

chrome.runtime.onInstalled.addListener(() => {

  enableVpnTunnelToServer();
  myProxy.activateProxy();
  console.log("activating proxy");
});