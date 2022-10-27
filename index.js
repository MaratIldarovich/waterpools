function calculateWaterAmount(landscape) {
    const lastLengthByHeight = {};

    let sum = 0;

    for(let length=0; length<landscape.length; length++){
        for(let height=0; height<landscape[length]; height++){
            if (lastLengthByHeight[height]) {
                sum += (length - lastLengthByHeight[height]) - 1;
            }
   
            lastLengthByHeight[height] = length + '';
        }
    }

    return sum;
}

module.exports = { calculateWaterAmount };