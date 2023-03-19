/* eslint-disable prefer-spread */
const EventManager = {
  list: new Map(),
  on(eventType, eventAction) {
    this.list.has(eventType) || this.list.set(eventType, []);
    if (this.list.get(eventType)) this.list.get(eventType).push(eventAction);
    return this;
  },

  emit(eventType, ...args) {
    this.list.get(eventType) &&
      this.list.get(eventType).forEach((cb) => {
        cb.apply(null, args);
      });
  },
};

export default EventManager;
