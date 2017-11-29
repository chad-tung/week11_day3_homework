var arrayTasks = {

	concat: function (arr1, arr2) {
		return arr1.concat(arr2);
	},

	insertAt: function (arr, itemToAdd, index) {
		arr.splice(index, 0, itemToAdd);
		return arr;
	},

	square: function (arr) {
		var newArr = [];
		arr.forEach(function(item) {
			newArr.push(item**2);
		});
		return newArr
	},

	sum: function (arr) {
		return arr.reduce((total, currentValue) => total + currentValue);
	},

	findDuplicates: function (arr) {
		newArr = [];
		for(var i=1; i < arr.length; i++) {
			if (arr[i-1] === arr[i] && (!newArr.includes(arr[i]))) {
				newArr.push(arr[i]);
			}
		}
		return newArr;

	},

	removeAndClone: function (arr, valueToRemove) {
		var newArr = []
		arr.forEach(function(item) {
			if (item != valueToRemove) {
				newArr.push(item);
			};
		});
		return newArr;
	},

	findIndexesOf: function (arr, itemToFind) {
		var newArr = [];
		arr.forEach(function(item, index) {
			if (item === itemToFind) {
				newArr.push(index);
			};
		});
		return newArr;
	},

	sumOfAllEvenNumbersSquared: function (arr) {
		var newArr = [];
		arr.forEach(function(item) {
			if (item % 2 === 0) {
				newArr.push(item**2);
			}
		});
		return newArr.reduce((total, currentValue) => total + currentValue);
	}

}

module.exports = arrayTasks
