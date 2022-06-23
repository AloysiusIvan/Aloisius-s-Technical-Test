// Expected Result = 7
// Direction : Find median of this array
const input = [8, 7, 7, 9, 5, 4, 2, 9];

function result(input) {
    input.sort(function(a,b){
      return a - b;
    });
    var set = Math.floor(input.length / 2);
    if (input.length % 2){
        return input[set];
    }
    return (input[set - 1] + input[set]) / 2;
}

console.log(result(input)); 