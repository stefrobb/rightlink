var port_to_controller = chrome.extension.connect();
function openUrlInNewBackgroundTab(url) { port_to_controller.postMessage(url) }

function handleRightClickOnLink(event)
{
  if (event.altKey || event.ctrlKey) return;

  event.preventDefault();
  openUrlInNewBackgroundTab(this.href);
}

var flag = 'Chrome_RightLink_extension_was_already_injected_in_this_document';
if (!document[flag]) $('a').live('contextmenu', handleRightClickOnLink);
document[flag] = true;

