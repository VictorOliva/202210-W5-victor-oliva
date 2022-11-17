export const arrayLength = (array) => {
    let counter = 0;
    for (const i in array) {
        counter = Number(i) + 1;
    }
    return counter;
};

export const myPush = (array, element) => {
    let newArray = arrayLength(array);
    array[newArray] = element;
    return arrayLength(array);
};

export const myUnshift = (array, element) => {
    array = myPush(element, array);
    return arrayLength(array);
};
