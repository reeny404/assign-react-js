export const KEY = {
  _02_MONTH: "02-cashbook-month",
};

class LocalStorage {
  #instance;

  constructor() {
    this.#instance = window.localStorage;
  }

  get(key) {
    this.#instance.getItem(key);
  }

  set(key, val) {
    this.#instance.setItem(key, val);
  }

  clear() {
    this.#instance.clear();
  }
}

export default new LocalStorage();
