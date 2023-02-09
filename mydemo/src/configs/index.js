import Button from './components/button';
import video from './components/video.json';
import tabbar from './components/tabbar.json';
import Counter from './components/counter.json';
import showToast from './actions/showToast';

export const components = {
  Button,
  video,
  tabbar,
  Counter,
};

export const actions = {
  showToast,
};

export default {
  components,
  actions,
};
