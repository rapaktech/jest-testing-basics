const chunkArray = (arr, len) => {
    const chunkedArray = [];

    arr.forEach(val => {
        // get last element
        const last = chunkedArray[chunkedArray.length - 1];

        // check if last and last length is equal to the chunk length
        if (!last || last.length === len) {
            chunkedArray.push([val]);
        } else {
            last.push(val);
        }
    });

    return chunkedArray;
}

module.exports = chunkArray;