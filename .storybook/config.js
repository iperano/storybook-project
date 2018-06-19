import { configure } from '@storybook/react';

function loadStories() {
  require('../stories/button.js');
  require('../stories/label.js');
  require('../stories/card.js');
  require('../stories/main.js');
  require('../stories/header.js');
  require('../stories/navigation.js');
  require('../stories/footer.js');
}

configure(loadStories, module);