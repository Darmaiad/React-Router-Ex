let _counter = 7;

/**
 * This is a simple counter for providing unique ids.
 */
const Counter = {
  increment() {
    //return 'id-' + String(_counter++);
    _counter++;
    return ({
      num: _counter,
      id: 'id-' + String(_counter),

    });
  }
};

export default Counter;