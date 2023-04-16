const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    this.square = this.generateSquare();
  }

  generateSquare() {
    const a = this.alphabet;
    let square = [];
    for (var i = 0; i < a.length; i++) {
      square[i] = a.slice(i).concat(a.slice(0, i));
    }

    return square;
  }

  encrypt(message, key) {
    return this.crypt(message, key, true);
  }

  decrypt(message, key) {
    return this.crypt(message, key, false);
  }

  crypt(message, key, encrypt) {
    if (!message || !key) {
      throw Error('Incorrect arguments!');
    }

    message = message.toUpperCase();
    key = key.toUpperCase();

    while (key.length < message.length) {
      key += key;
    }

    let result = '';
    let keyIndex = 0;

    for (let i = 0; i < message.length; i++) {
      if (message[i] !== ' ' && this.alphabet.includes(message[i])) {
        if (encrypt) {
          result +=
            this.square[this.alphabet.indexOf(message[i])][
            this.alphabet.indexOf(key[keyIndex])
            ];
        } else {
          result +=
            this.alphabet[
            this.square[this.alphabet.indexOf(key[keyIndex])].indexOf(
              message[i]
            )
            ];
        }
        keyIndex++;
      } else {
        result += message[i];
      }
    }

    if (!this.isDirect) {
      return result.split('').reverse().join('');
    }

    return result;
  }
}




module.exports = {
  VigenereCipheringMachine
};
