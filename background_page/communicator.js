function listen(event_owner, event_name, callback)
{
  var event_object_field_name = "on" + event_name;
  event_owner[event_object_field_name].addListener(callback);
}

var communicator = {
  _alreadyConnectedToContentScript: false,
  _observers: [],

  connectToContentScript: function()
  {
    if (this._alreadyConnectedToContentScript) return;

    var observers = this._observers;
    function contentScriptMessageProcessor(port_from_connect_script)
    {
      listen(port_from_connect_script, "Message", function(link_url) {
        for (var order_num in observers) observers[order_num](link_url);
      });
    }

    listen(chrome.extension, "Connect", contentScriptMessageProcessor);
    this._alreadyConnectedToContentScript = true;
  },

  observeForRightClickedLink: function(callback)
  {
    this._observers.push(callback);
  }
};

