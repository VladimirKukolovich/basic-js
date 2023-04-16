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
  constructor(_bool) {
     this.direction = _bool === false ? _bool: true;
     this.wordNum = "ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  }
  encrypt(str, key) {
      if(!str || !key) {
          throw new Error('Incorrect arguments!');
      }
      const keyStr = key.toUpperCase().repeat(Math.ceil(str.length / key.length)).split('');
      const keyNum = [];
     for(let i = 0; i < str.length; i++) {
      const STR = str.toUpperCase().split('');
      this.wordNum.includes(STR[i])? keyNum.push(keyStr[i]):( keyNum.push(""), keyStr.splice(i, 0, ""))
     }
      const encStr = str.toUpperCase().split('')
      .map((el, ind) => this.wordNum.includes(el)?
       this.wordNum[this.wordNum.findIndex((i) => i === el) + this.wordNum.findIndex((i) => i === keyNum[ind])]: el)
       return this.direction? encStr.join(''): encStr.reverse().join('');
  }
  decrypt(str, key) {
      if(!str || !key) {
          throw new Error('Incorrect arguments!')
      }
      const keyStr = key.toUpperCase().repeat(Math.ceil(str.length / key.length)).split('');
      const keyNum = [];
      const STR = str.toUpperCase().split('');
     for(let i = 0; i < str.length; i++) {
      this.wordNum.includes(STR[i])? keyNum.push(keyStr[i]):( keyNum.push(""), keyStr.splice(i, 0, ""))
     }
      const decStr = STR
      .map((el, ind) => this.wordNum.includes(el)?
       this.wordNum[(this.wordNum.findIndex((i) => i === el ) - this.wordNum.findIndex((i) => i === keyNum[ind])) < 0? 
       (this.wordNum.findIndex((i) => i === el ) - this.wordNum.findIndex((i) => i === keyNum[ind])) + 26:
       (this.wordNum.findIndex((i) => i === el ) - this.wordNum.findIndex((i) => i === keyNum[ind]))]: el)
       return this.direction? decStr.join(''): decStr.reverse().join('');

  }
}

module.exports = {
  VigenereCipheringMachine
};
