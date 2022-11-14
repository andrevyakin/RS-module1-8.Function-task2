const getSumOfNumbers = (number, type = "odd") => {
    if (isNaN(Number(number)) || number === "" ||
        type !== "odd" && type !== "even" && type !== "")
        return NaN;

    const filterType = num => {
        if (type === "odd")
            return num % 2;
        else if (type === "even")
            return !(num % 2);
        else return true;
    }

    return [...Array(number + 1)
        .keys()]
        .map(i => i++)
        .filter(i => filterType(i))
        .reduce((acc, el) => acc + el);
}

console.log(getSumOfNumbers(10, "odd"));
console.log(getSumOfNumbers(10, "even"));
console.log(getSumOfNumbers(10, ""));