class CustomerRegistrationInfo {
  #state = null;

  set state(data) {
    this.#state = data;
  }

  get state() {
    return this.#state;
  }

  get cusRegid() {
    if (!this.state || !this.#state.CustomerRegistrationId) {
      return null;
    }

    return this.#state.CustomerRegistrationId;
  }
}

export default new CustomerRegistrationInfo();
