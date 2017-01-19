const brightness = require('brightness');

var getBrightness = () => {
	brightness.get().then(level => {
		console.log("Previous brightness level: "+level);
	});
}

var changeBrightness = (newlevel) => {
	brightness.set(newlevel).then(() => {
		console.log('Changed brightness to '+newlevel);
	});
}

module.exports = {
	getBrightness,
	changeBrightness
}