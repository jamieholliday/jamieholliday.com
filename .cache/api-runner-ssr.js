var plugins = [{
      plugin: require('/Users/peterfox/Documents/jamieholliday.com/node_modules/gatsby-plugin-styled-components/gatsby-ssr.js'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/peterfox/Documents/jamieholliday.com/node_modules/gatsby-plugin-google-analytics/gatsby-ssr.js'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/peterfox/Documents/jamieholliday.com/node_modules/gatsby-plugin-react-helmet/gatsby-ssr.js'),
      options: {"plugins":[]},
    }]
"use strict";

// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   require('/path/to/plugin1/gatsby-ssr.js'),
//   require('/path/to/plugin2/gatsby-ssr.js'),
// ]

var apis = require("./api-ssr-docs");

module.exports = function (api, args, defaultReturn) {
  if (!apis[api]) {
    console.log("This API doesn't exist", api);
  }
  // Run each plugin in series.
  var results = plugins.map(function (plugin) {
    if (plugin.plugin[api]) {
      var result = plugin.plugin[api](args, plugin.options);
      return result;
    }
  }

  // Filter out undefined results.
  );results = results.filter(function (result) {
    return typeof result !== "undefined";
  });

  if (results.length > 0) {
    return results;
  } else {
    return [defaultReturn];
  }
};
//# sourceMappingURL=api-runner-ssr.js.map