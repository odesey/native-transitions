Package.describe({
  name: 'jamielob:native-transitions-components',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Great components to use with the native-transitions package.',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.3-cordova-beta.2');
  api.use('ecmascript');
  api.use(['templating'], 'client');
  api.use('jamielob:native-transitions', 'client');
  api.addFiles('ntBackButton.html', 'client');
});
