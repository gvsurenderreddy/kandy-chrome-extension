# Kandy Chrome Extension

The Kandy Chrome Extension is an extension to be used alongside the [Kandy Screensharing API](https://developer-staging.kandy.io/tutorials/screensharing) to enable screensharing in web applications.

Chrome supports screensharing, but requires an extension to handle desktop media capturing. The Kandy Chrome Extension is a base extenson provided by Kandy.io that can be customized and white-labeled for your Kandy application.

To use this extension with your application, you will need to fork or download the repository, customize it for your needs, then publish / distribute it to your users.

### How it Works

When starting to screenshare on Chrome, Kandy will send a message to the extension to start the process. The extension tells Chrome to capture the screen so that Kandy can share it with another user.

### Extension Configuration

The base extension provided is functional, but will only work on a very limited set of domains (ie. only for testing on localhost ). To customize the extension for your application, you will need to reconfigure some of the entries in the `manifest.json` file and white-label it as your own extension.

##### Reconfiguration

The following list are the entries of `manifest.json` that should be changed, and the reason they need to be changed.

1. name
2. description
3. author
4. homepage
    * The above four are user viewable. They should be changed to reference your application/extension.
5. externally_connectable: `matches` is the array of domains the extension will work on. You need to change this to your domain(s). See the [Chrome docs](https://developer.chrome.com/extensions/manifest/externally_connectable) for details.

##### Icons

As well as reconfiguration, you will need to replace the default icon's provided in the base extension. If you rename the icon files, you will also need to reconfigure the `icons` entry in the manifest file.

### Packaging the Extension

Chrome extensions don't necessarily need to be packaged. See Chrome's documentation about [Packaging](https://developer.chrome.com/extensions/packaging) to determine if you need to or not.

### Distributing the Extension

Once you've created a custom extension, there are a number of different [distribution options](https://developer.chrome.com/webstore#distribution-options) available.

### Feedback

If you have any feedback, questions, or issues with the base extension, please let us know by creating a Github issue or submitting a support ticket via our [website](http://community.kandy.io/hc/en-us/requests/new).
