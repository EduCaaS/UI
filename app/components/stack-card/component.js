// Stack Card component. Added by EduCaaS
import Ember from 'ember';
import Util from 'ui/utils/util';

const {
  computed,
} = Ember;

const {
  constructUrl
} = Util;

export default Ember.Component.extend({

  publicLink: computed('model.services.lastObject.endpointsMap', function(){
    let services = this.get('model.services').filterBy('publicEndpoints');
    let endpoints = services.get('lastObject.endpointsMap') || {};
    let ports = Object.keys(endpoints);
    if (ports.length > 0) {
      let [ port ] = ports;
      let ips = endpoints[port];
      let [ip] = ips;
      return constructUrl(false, ip, port);
    }
  })
});
