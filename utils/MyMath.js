
class MyMath {
    static sum = (a, b) => a + b;
    static sub = (a, b) => a - b;
    static mylty = (a, b) => a * b;
    static div = (a, b) => a / b;
}

const object = {
    key1: 'value1',
    key2: 'value2'
}

const superFunction = () => {
    return 1 + 2;
}

// експортуємо один об'єкт MyMath і все 
// module.exports = MyMath;

// Задача заекспортувати і MyMath і object і superFunction

module.exports = {
    MyMath, object, superFunction
}

