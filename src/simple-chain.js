const CustomError = require("../extensions/custom-error");

const chainMaker = {
    chain: new Array(),
    getLength() {
        return this.chain.length;
    },
    addLink(value) {
        this.chain.push(`( ${value !== undefined ? value : ''} )~~`);
        return this;
    },
    removeLink(position) {
        if (Number.isInteger(position) && this.chain[position - 1] !== undefined) {
            this.chain.splice(position - 1, 1);
            return this;
        }
        this.chain = new Array();
        throw new Error();
    },
    reverseChain() {
        this.chain.reverse();
        return this;
    },
    finishChain() {
        let strChain = '' + this.chain.join('').slice(0, -2);
        this.chain = new Array();
        return strChain;
    }
};

module.exports = chainMaker;
