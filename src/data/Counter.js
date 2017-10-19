let _counter = 7;

/**
 * This is a simple counter for providing unique ids.
 */
const Counter = {
  increment() {
    //return 'id-' + String(_counter++);
    return ({
      num: _counter + 1,
      id: 'id-' + String(_counter++),

    });
  }
};

export default Counter;