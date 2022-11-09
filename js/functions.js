export const arrayLength = (array) => {
    let counter = 0;
    for (const i in array) {
        counter = Number(i) + 1;
    }
    return counter;
};

export const myPush = (array, element) => {
    let j = arrayLength(array);
    array[j] = element;
    return arrayLength(array);
};
