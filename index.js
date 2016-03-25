module.exports = function(primaryArray, interleafValue) {
  return primaryArray
    .slice(1)
    .reduce(function(interleavedArray, itemValue, itemIndex) {
      return interleavedArray.concat([ interleafValue, itemValue ]);
    }, [primaryArray[0]]);
}
