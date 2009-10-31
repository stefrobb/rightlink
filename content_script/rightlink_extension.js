var port_to_controller = chrome.extension.connect();
function openUrlInNewBackgroundTab(url) { port_to_controller.postMessage(url) }

$('a').live('contextmenu', function(event) {
  if (event.altKey || event.ctrlKey) return;

  event.preventDefault();
  openUrlInNewBackgroundTab(this.href);
});

