
/** Help Resources
 *
 * Remove character from a certain position
 * https://stackoverflow.com/a/11116529
 *
 */

/* self-invoking function */
;(funcrion(){

function findUniq(strArray) {
	strArray = strArray || [];
	let uniqString;

	for( let i = 0; i < strArray.length; i++ ) {
		let str = cutSpaces( strArray[i] );

		// find
	}

	return uniqString || '';
}

test_findUniq();


// * functions will be hoisted *

function test_findUniq(strArray) {
	console.log('\n • test findUniq • \n');
	let strArray = [
		'abc',
		'acb ',
		'b ac',
		'testQsa',
		'b c a ',
		' cab',
		'cb a '
	];
	console.log('\n str Array : \n', strArray, '\n');

	let uniqString = findUniq(strArray);
	console.log('\n uniq String : ', uniqString, '\n');
}

function cutSpaces(str) {
	str = str || '';
	let strLength = str.length;
	for( let i = 0; i < strLength; i++ ) {
		if( str[i] === ' ' )
			str = str.slice(0, i) + str.slice(i + 1);
	}
	return str;
}

})(); /*end self-invoking function */