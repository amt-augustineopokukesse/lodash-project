//Create containing object
const _ = {
  //Implement _.clamp()
  clamp(number,lower,upper) {
    const lowerClampedValue = Math.max(number, lower);
    const clampedValue = Math.min(lowerClampedValue, upper);
    return clampedValue;
  },
  // Implement .inRange()
  inRange(number, start, end) {
    if (typeof end === "undefined") {
      end = start;
      start = 0;
    }
    if (start > end) {
      let temp = end;
      end = start;
      start = temp;
    }
    if (number >= start && number < end) {
      return true;
    } else {
      return false;
    }
  },
  /* String methods */
// 1. Implement .words()
words(string) {
  const words = string.split(' ');
  return words;
},

// 2. Implement .pad()
pad(string, length) {
  if (length <= string.length) {
    return string
  };
  const startPaddingLength = Math.floor((length - string.length)/2);
  const endPaddingLength = length - string.length - startPaddingLength;
  const paddedString = ' '.repeat(startPaddingLength) + string + ' '.repeat(endPaddingLength);
  return paddedString;
},
/* Object methods */
// 1. Implement _.has()
has(object, key) {
  const hasValue = object[key];
  if (hasValue != undefined) {
    return true;
  } else {
    return false;
  }
},

// 2. Implement _.invert()
invert(object) {
  const invertedObject = {};
    for (let key in object) {
      const originalValue = object[key];
      invertedObject[originalValue] = key;
    }
   return invertedObject;
},

// 3. Implement _.findKey()
findKey(object, predicate) {
  for (let key in object) {
    const value = object[key];
    const predicateReturnValue = predicate(value);
    if (predicateReturnValue) {
      return key;
    }
  }
  return undefined;
},
/*Methods for arrays  */
//1. Implement _.drop()
drop(array, n) {
  if (n === undefined) {
    n = 1;
  }
  let droppedArray = array.slice(n, array.length);
  return droppedArray;
},
//2. Implement _.dropWhile()
dropWhile(array, predicate) {
  let dropNumber = array.findIndex((element, index) => {
    return !predicate(element, index, array)
  });
  const droppedArray = this.drop(array,dropNumber);
  return droppedArray;
},
// 3. Implement _.chunk()
chunk(array, size) {
  if (size === undefined) {
    size = 1;
  }
  const arrayChunks = [];
  for (let i = 0; i < array.length; i += size) {
    let arrayChunk = array.slice(i, i + size);
    arrayChunks.push(arrayChunk);
  }
  return arrayChunks
}
};


// Do not write or modify code below this line.
module.exports = _;