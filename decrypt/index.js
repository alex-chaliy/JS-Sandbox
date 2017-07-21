/**
 * Отыскать один, захешированный пароль
 * Decrypt one hashed password
 */

const crypto = require('crypto');

// encrypted password that must be decrypted
let encrypted = 'f21fd975e1ca2bc48cfeea4bccbcf10adc390307b8609c686d0e8944488ff156';


/**
 * @returns passList : [String]
 */
function generatePasswords() {
	_minPassLength = 2;
	_maxPassLength = 20;

	let _abc = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
	let _num = '0123456789';
	let _allSymb = _abc + _num;

	let passList = [];

	for( let i = _minPassLength; i < _maxPassLength; i++ ) {
		
		for( let j = 0 ; j < _allSymb.length ; j++ ) {

			let _newPass = '';

			for( let k = 0 ; k < i ; k++ ) {
				_newPass += _allSymb[k];
			}

			passList.push( _newPass );
		}
	}

	return passList;
}


/**
 * @takes passList : [String]
 *
 * @returns hashedPassList : [{
 *    pass: String,
 *    hashedPass: String
 * }]
 */
function hashPasswords( passList ) {
	return hashedPassList;
}


/**
 * @takes hashedPassList : [{
 *    pass: String,
 *    hashedPass: String
 * }]
 *
 * @returns pass : String
 */
function getTruePass( hashedPassList ) {
	let currentPass = '';
	let currentHash = crypto.createHash('sha256').update( currentPass ).digest('hex');

	let truePass = undefined;


	!truePass && console.log('\n true pass wasn\'t discovered ');

	return truePass;
}

// получаем массив со всеми(или почти всеми) возможными паролями

// хешируем все пароли в sha256, так как искомый пароль зашифрован с пом. алго. sha256

// проходимся по массиву, ищем совпадение шифрованных паролей. Достаём по нужному индексу нужный пароль