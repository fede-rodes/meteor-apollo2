Package.describe({
  name: 'orcprogramming:meteor-apollo2',
  version: '0.0.1',
  summary: ' 🚀 Add Apollo 2 to your Meteor app',
  git: 'https://github.com/fede-rodes/meteor-apollo2',
});

Package.onUse(function(api) {
  api.versionsFrom('1.4.2');
  api.use(['ecmascript', 'accounts-base']);

  api.mainModule('src/main-client.js', 'client');
  api.mainModule('src/main-server.js', 'server');
});

Package.onTest(function(api) {
  api.use([
    'ecmascript',
    'practicalmeteor:mocha',
    'practicalmeteor:chai',
    'practicalmeteor:mocha-console-runner',
    'http',
    'random',
    'accounts-base',
    'apollo',
  ]);

  api.mainModule('tests/client.js', 'client');
  api.mainModule('tests/server.js', 'server');
});
