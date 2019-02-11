import { configure } from '@storybook/react';

function loadStories() {
  require('../stories/button.js');
  require('../stories/card.js');
  require('../stories/footer.js');
  require('../stories/header.js');
  require('../stories/hyperlinkbutton.js');
  require('../stories/label.js');
  require('../stories/main.js');
  require('../stories/navigation.js');
  require('../stories/popup.js');
  require('../stories/roundiconbutton.js');
  require('../stories/menu.js');
  require('../stories/table.js');
}

configure(loadStories, module);