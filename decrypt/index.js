/**
 * Отыскать один, захешированный пароль
 * Decrypt one hashed password
 */

const crypto = require('crypto');

// encrypted password that must be decrypted
let encrypted = 'f21fd975e1ca2bc48cfeea4bccbcf10adc390307b8609c686d0e8944488ff156';

let config = {
	alphabet: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ' + '0123456789',
	minPassLength: 2,
	maxPassLength: 20
}

/**
 * @returns passList : [String]
 */
function generatePasswords() {
	_minPassLength = 2;
	_maxPassLength = 20;

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
function genereteMinLengthPasswords(alphabet, min_n) {
	let passwords = [];

	// не, тут рекурсию надо сделать а не циклы
	for(i = 0; i < alphabet.length; i++) {
		for(j = 0; j < alphabet.length; j++) {
			passwords.push( alphabet[i] + alphabet[j] );
		}
	}

	return passwords;
}
genereteMinLengthPasswords( config.alphabet, config.minPassLength );

function test_genereteMinLengthPasswords() {
	console.log('\n * test * genereteMinLengthPasswords()');
	let res = genereteMinLengthPasswords( config.alphabet, config.minPassLength );

	for(i = 0; i < res.length; i++) {
		console.log( res[i] );
	}
	console.log('\n -end- * test * genereteMinLengthPasswords()');
	console.log('generated passwords number - ' + res.length);
}
test_genereteMinLengthPasswords();

// получаем массив со всеми(или почти всеми) возможными паролями

// хешируем все пароли в sha256, так как искомый пароль зашифрован с пом. алго. sha256

// проходимся по массиву, ищем совпадение шифрованных паролей. Достаём по нужному индексу нужный пароль



// сгенерировали пароли на 2 символа

// на след. итерации к каждому элементу массива(строки из 2-х символов) прибавляем по одному из всех символов алфавита