const onlyOne = (self, object, keyName) => {
  if(self[keyName] === undefined) {
    return object[keyName];
  }
  if(object[keyName] === undefined) {
    return self[keyName];
  }
};

Object.defineProperties(
  Object.prototype,
  {
    "mathematicalOperation": {
      value: function(object, ...operationList) {
        let ret = {};
        for(operation of operationList) {
          let operationFunc;
          switch(operation[0]) {
            case "+":
              operationFunc = this.plus;
              break;
            case "-":
              operationFunc = this.minus;
              break;
            case "*":
              operationFunc = this.times;
              break;
            case "/":
              operationFunc = this.division;
              break;
          }
          if(operationFunc === undefined) {
            continue;
          }

          for(let keyName of operation.slice(1)) {
            ret[keyName] = operationFunc.call(this, object, keyName);
          }
        }
        return ret;
      }
    },
    "plus": {
      value: function(object, keyName) {
        const value = onlyOne(this, object, keyName);
        if(value !== undefined) {
          return value;
        }
        return this[keyName] + object[keyName];
      },
      configurable: true,
      writable: true
    },
    "minus": {
      value: function(object, keyName) {
        const value = onlyOne(this, object, keyName);
        if(value !== undefined) {
          return value;
        }
        return this[keyName] - object[keyName];
      },
      configurable: true,
      writable: true
    },
    "times": {
      value: function(object, keyName) {
        const value = onlyOne(this, object, keyName);
        if(value !== undefined) {
          return value;
        }
        return this[keyName] * object[keyName];
      },
      configurable: true,
      writable: true
    },
    "division": {
      value: function(object, keyName) {
        const value = onlyOne(this, object, keyName);
        if(value !== undefined) {
          return value;
        }
        return this[keyName] / object[keyName];
      },
      configurable: true,
      writable: true
    }
  }
);
