import Vue from 'vue';
import VueGtag from 'vue-gtag';

export const GA_TRACKING_ID = "G-K64QJ0E61J";

Vue.use(VueGtag, {
    config: { id: GA_TRACKING_ID }
  })
