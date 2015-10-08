
Package.describe({
  name    : 'semantic:ui-icon',
  summary : 'Semantic UI - Icon: Single component release',
  version : '1.12.3',
  git     : 'git://github.com/Semantic-Org/UI-Icon.git',
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles([
    'icon.css',
    'assets/fonts/icons.eot',
    'assets/fonts/icons.svg',
    'assets/fonts/icons.ttf',
    'assets/fonts/icons.woff',
    'assets/fonts/icons.woff2'
  ], 'client');
});
