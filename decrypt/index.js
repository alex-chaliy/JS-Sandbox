const crypto = require('crypto');

let currentPass = 'qaz';
let currentHash = crypto.createHash('sha256').update( currentPass ).digest('hex');
let truePass = undefined;

// encrypted that must be decrypted
let encrypted = 'f21fd975e1ca2bc48cfeea4bccbcf10adc390307b8609c686d0e8944488ff156';

!truePass && console.log('\n true pass wasn\'t discovered ');


functio checkass() {
	_minPassLength = 2;
	_maxPassLength = 20;

	let _abc = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
	let _num = '0123456789';
	let _allSymb = _abc + _num;

	let _passwords = [];

	for( let i = _minPassLength; i < _maxPassLength; i++ ) {
		
		for( let j = 0 ; j < _allSymb.length ; j++ ) {

			let _newPass = '';

			for( let k = 0 ; k < i ; k++ ) {
				_newPass += _allSymb[k];
			}

			_passwords.push( _newPass );
		}
	}
}


