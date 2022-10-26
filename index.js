function calculateWaterAmount(landscape) {
    const heightHash = {};

    let sum = 0;

    for(let length=0; length<landscape.length; length++){
        for(let height=0; height<landscape[length]; height++){
            sum += heightHash.hasOwnProperty(height) 
                ? (length - heightHash[height]) - 1  
                : 0;

            heightHash[height] = length;
        }
    }

    return sum;
}

module.exports = { calculateWaterAmount };