function receivesAFunction(Cheese) {
    Cheese();
  }

  function returnsANamedFunction() {
    function cheesyFunction() {
      console.log("This is a cheesy function!");
    }
    return cheesyFunction;
  }

  function returnsAnAnonymousFunction() {
    return function() {
      console.log("This is an anonymous cheesy function!");
    };
  }