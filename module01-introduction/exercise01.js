// number: primitive
x = 42
typeof (x) // number
y = new Number(42)
typeof (y) // object
y++ // number
// be careful:
x = 1 / 0; // Infinity
x = 0 / 0; // NaN
x = -1 / 0; // -Infinity
Number.isFinite(x)
Number.isInteger(x)
Number.isNaN(x)
x = 108
x.toString(2) // '1101100'
x.toString(8) // '154'
x.toString(16) // '6c'
parseInt("6c", 16) // 108
// boolean
42 + true // 43
// string
x = "\ud834\udd1e" // '𝄞'
// object
// function