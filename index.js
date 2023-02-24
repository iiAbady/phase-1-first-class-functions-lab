// Code your solution in this file!
function returnFirstTwoDrivers(drivers) {
	return drivers.slice(0, 2);
}


function returnLastTwoDrivers(drivers) { 
	return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(value) {
	return multiple =>  multiple * value;
}


function fareDoubler(value) {
	return value * 2;
}

function fareTripler(value) {
	return value * 3;
}

function selectDifferentDrivers(arrayOfDrivers, cb) {
	return cb(arrayOfDrivers);
}