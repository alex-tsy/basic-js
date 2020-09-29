const CustomError = require("../extensions/custom-error");

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
            if (message.charCodeAt(i) >= 65 && message.charCodeAt(i) <= 90) {
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
        return (currentSymbol + currentKey.charCodeAt(0)) % 26 + 65;
    }

    dec(currentSymbol, currentKey) {
        return (currentSymbol + 26 - currentKey.charCodeAt(0)) % 26 + 65;
    }

    encrypt(message, key) {
        return this.cipher(message, key, this.enc);
    }

    decrypt(message, key) {
        return this.cipher(message, key, this.dec)
    }
}

module.exports = VigenereCipheringMachine;
