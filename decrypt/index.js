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

	let passList_pre = [];
	let passList = [];


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


/**
 * @takes
 *    passwords_pre: [String], // passwords, generated in the previous iteration
 *    alphabet: String,        // alphabet to generate from -> [a-b][A-B][0-9]
 *    max_n: Number,           // max length for the recursion & max length for a password
 *    min_n: Number            // min length for a password
 *
 * @returns passwords : [String]
 */
function generateNlengthPasswords( passwords_pre, alphabet, max_n, min_n ) {
	!passwords_pre && ( passwords_pre = genereteMinLengthPasswords() );
	let passwords = [].concat( passwords_pre );

	// track by passwords, generated in the previous iteration
	for(let i = 0; i < passwords_pre; i++) {
		let curPass_trackBy = passwords_pre[i]; // cur - current

		// track by alphabet
		for(let j = 0; j < alphabet.length; j++) {
			passwords.push( curPass_trackBy + alphabet[j] );

			// experimantal, it might be working better
			// maybe, there will be doubled passwords
			passwords.push( alphabet[j] + curPass_trackBy );
		}
	}

	if( passwords_pre <= max_n )
		generateNlengthPasswords( passwords, alphabet, max_n );
	else
		return passwords;
}

/**
 * @takes
 *    alphabet: String, // alphabet to generate from -> [a-b][A-B][0-9]
 *    min_n: Number     // min length for a password
 *
 * @returns passwords : [String] // min length passwords
 */
fuction genereteMinLengthPasswords(alphabet, min_n) {
	let passwords = [];

	// не, туту рекурсию надо сделать а не циклы
	for(i = 0; i < alphabet.length; i++) {
		for(j = 0; j < alphabet.length; j++) {
			passwords.push( alphabet[i] + alphabet[j] );
		}
	}

	return passwords;
}

// получаем массив со всеми(или почти всеми) возможными паролями

// хешируем все пароли в sha256, так как искомый пароль зашифрован с пом. алго. sha256

// проходимся по массиву, ищем совпадение шифрованных паролей. Достаём по нужному индексу нужный пароль



// сгенерировали пароли на 2 символа

// на след. итерации к каждому элементу массива(строки из 2-х символов) прибавляем по одному из всех символов алфавита