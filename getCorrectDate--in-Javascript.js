let correctDate = (new Date('2017-03-28T15:47:14.143Z').getDate()) + '/' +
					(new Date('2017-03-28T15:47:14.143Z').getMonth()+1) + '/' +
					(new Date('2017-03-28T15:47:14.143Z').getFullYear()) + ' ' +
					(new Date('2017-03-28T15:47:14.143Z').getUTCHours()) + ':' +
					(new Date('2017-03-28T15:47:14.143Z').getMinutes());
console.log(correctDate);