const sequence = {
    _value: 1, //convention
    get value() { return this._value++ },
    set value(value) { this._value = value}
}

console.log(sequence.value, sequence.value)
sequence.value = 1000
console.log(sequence.value, sequence.value)