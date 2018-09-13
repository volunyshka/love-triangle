/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var x = 0;
  for (var i = 1 ; i < preferences.length; i++) {
    var a;
    var b;
    var c;
    a = preferences[i-1];
    b = preferences[a-1];
    c  = preferences [b-1];
    if (c === i && i< a && i<b) {
      x++

      

    }


  } return x;
};

//getLoveTrianglesCount([2,3,1]);