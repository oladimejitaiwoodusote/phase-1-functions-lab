// Code your solution in this file!
function distanceFromHqInBlocks(someValue){
    return Math.abs(someValue - 42);
}

function distanceFromHqInFeet(someValue){
    return distanceFromHqInBlocks(someValue) * 264;
}

function distanceTravelledInFeet(start, destination){
    return Math.abs((destination - start) * 264);
}

function calculatesFarePrice(start, destination){
    let price = distanceTravelledInFeet(start, destination);
    if (price <= 400){
        return 0;
    }
    else if (price > 400 && price < 2000){
        return ((price - 400) * 2)/100;
    }
    else if (price > 2000 && price < 2500){
        return (25);
    }
    else {
        return "cannot travel that far";
    }
}