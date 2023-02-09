Component({
  properties: {
    src: {
      type: String,
      value: '',
    },
  },
  data: {},
  methods: {
    triggerCustomEvent(e) {
      this.triggerEvent('customevent', e);
    },
  },
});
