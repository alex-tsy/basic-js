const CustomError = require("../extensions/custom-error");
const ASCII_CODE_A = 65;
const ASCII_CODE_Z = 90;
const ABC_LENGTH = 26;
class VigenereCipheringMachine {
    constructor(order = true) {
        this.reverse = !order;
    }

    cipher(message, key, func) {
        if (message == undefined || key == undefined) {
            throw new Error();
        }

        let enc = '';
        let keyIndex = 0;
        message = message.toUpperCase();
        key = key.toUpperCase();

        for (let i = 0; i < message.length; i++) {
            let currentKey = key[keyIndex % key.length];
            if (message.charCodeAt(i) >= ASCII_CODE_A && message.charCodeAt(i) <= ASCII_CODE_Z) {
                let encCode = func(message.charCodeAt(i), currentKey);
                enc += String.fromCharCode(encCode);
                keyIndex++;
            }
            else {
                enc += message[i];
            }
        }
        return this.reverse ? enc.split('').reverse().join('') : enc;
    }

    enc(currentSymbol, currentKey) {
        return (currentSymbol + currentKey.charCodeAt(0)) % ABC_LENGTH + ASCII_CODE_A;
    }

    dec(currentSymbol, currentKey) {
        return (currentSymbol + ABC_LENGTH - currentKey.charCodeAt(0)) % ABC_LENGTH + ASCII_CODE_A;
    }

    encrypt(message, key) {
        return this.cipher(message, key, this.enc);
    }

    decrypt(message, key) {
        return this.cipher(message, key, this.dec)
    }
}

module.exports = VigenereCipheringMachine;
