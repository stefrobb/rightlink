function openLinkInNewTab(link_url)
{
  _withCurrentTabOfTopmostWindowDo(function(base_tab) {
    _emulateNativeOpenLinkInNewTab(link_url, base_tab);
  });
}

function _withCurrentTabOfTopmostWindowDo(action_callback)
{
  chrome.tabs.getSelected(null, action_callback);
}

function _emulateNativeOpenLinkInNewTab(url, base_tab)
{
  chrome.tabs.create({
    windowId: base_tab.windowId,
    index:    base_tab.index + 1,
    url:      url,
    selected: false
  });
}

