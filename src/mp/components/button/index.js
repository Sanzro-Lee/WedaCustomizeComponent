Component({
  properties: {
    style: {
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
