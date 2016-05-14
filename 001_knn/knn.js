
//Start off with what passes the first test.
function KNN(kSize){
	this.kSize = kSize;
	this.points = [];
}

KNN.prototype.train = function(trainingArray) {
	//console.log(trainingArray)
	this.points = this.points.concat(trainingArray)
}

KNN.prototype._distance = function(vector1, vector2) {
	var norm1 = vector1.reduce(function(a, b) {
		return a + b
	})
	var norm2 = vector2.reduce(function(a, b) {
		return a + b
	})
	return Math.abs(norm2 - norm1)

}

KNN.prototype._distances = function(vector, trainingArray) {
	//console.log(this)
	var newDistanceArray = [];
	var self = this;


	trainingArray.forEach(function(element) {
		newDistanceArray.push([self._distance(vector, element[0]), element[1]])
	//console.log(self._distance(vector, element[0]))
	})
	return newDistanceArray
}

KNN.prototype._sorted = function(distanceArray) {
	var sortedArray = distanceArray.sort(function(a, b) {
		return a[0]-b[0]
	})
	var finalArray = [];
	sortedArray.forEach(function(element) {
		finalArray.push(element[1])
	})
	return finalArray;
}

KNN.prototype._majority = function(num, array) {
	var shortArray = array.slice(0, num);
	var counts = {};
	shortArray.forEach(function(x) { 
		counts[x] = (counts[x] || 0)+1; })
	sortedCounts = [];
	for (var i in counts) {
		sortedCounts.push([i, counts[i]])
	}
	var sortedCountsArray = sortedCounts.sort(function(a, b) {
		return b[1] - a[1]
	})
	var mostCommon =  +sortedCountsArray[0][0]
	return mostCommon

}


module.exports = KNN