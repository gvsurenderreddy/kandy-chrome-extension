# Kandy Chrome Extension

Chrome supports screensharing, but requires an extension to handle desktop media capturing. The Kandy Chrome Extension is a base extenson provided by Kandy.io that can be customized and white-labeled for your application.

### How it Works

When starting screensharing on Chrome, Kandy will send a message to the extension to start the process. The extension tells Chrome to capture the screen so that Kandy can share it with another user.

### Extension Configuration

The base extension provided is functional, but will only work on certain domains (by ). To customize the extension for your application, you will need to reconfigure some of the entries in the `manifest.json` file and white-label it as your own extension.

##### Reconfiguration

The following list are the entries of `manifest.json` that should be changed, and the reason they need to be changed.

1. name
2. description
3. author
4. homepage
    * The above four are user viewable. They should be changed to reference your application/extension.
5. externally_connectable: Matches is the array of domains the extension will work on. You need to change this to your domain(s). See the [Chrome docs](https://developer.chrome.com/extensions/manifest/externally_connectable) for details.

### Packaging the Extension

Chrome extensions don't necessarily need to be packaged. See Chrome's documentation about [Packaging](https://developer.chrome.com/extensions/packaging) to determine if you need to or not.

### Distributing the Extension

Once you've created a custom extension, there are a number of different [distribution options](https://developer.chrome.com/webstore#distribution-options) available.
