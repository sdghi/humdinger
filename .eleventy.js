const yaml = require('yaml');

module.exports = (config) => {
  config.setTemplateFormats([
    // Templates:
    'html',
    'njk',
    'md',
    // Static Assets:
    'css',
    'jpeg',
    'jpg',
    'png',
    'svg',
    'woff',
    'woff2',
  ]);

  config.addPassthroughCopy('docs/assets');
  config.addPassthroughCopy('docs/js');
  config.addWatchTarget('docs/js');

  // Reload the browser if external changes are made
  config.setBrowserSyncConfig({
    files: ['./lib'],
  });

  // Set YAML as default content file
  config.addDataExtension('yaml', (contents) => yaml.parse(contents));

  // 11ty filter
  config.addNunjucksFilter('log', (content) => console.log('log', content));

  return {
    dir: {
      input: 'docs',
      output: 'site',
    },
  };
};
