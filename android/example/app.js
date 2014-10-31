var androidutils = require('com.crossbits.androidutils');

// UIs
var win = Ti.UI.createWindow({
	exitOnClose: true,
	backgroundColor: '#fff',
	layout: 'vertical'
});

var button_1 = Ti.UI.createButton({
	top: 20,
	title: 'isRingerModeSilent'
});

win.add(button_1);

var button_2 = Ti.UI.createButton({
	top: 20,
	title: 'isRingerModeVibrate'
});

win.add(button_2);

var button_3 = Ti.UI.createButton({
	top: 20,
	title: 'isRingerModeNormal'
});

win.add(button_3);

var button_4 = Ti.UI.createButton({
	top: 20,
	title: 'getRingerMode'
});

win.add(button_4);

var button_5 = Ti.UI.createButton({
	top: 20,
	title: 'getSimCountryIso'
});

win.add(button_5);

win.open();

// listeners
button_1.addEventListener('click', function(e) {
	var result = androidutils.isRingerModeSilent();
	
	Ti.UI.createAlertDialog({
		title: e.source.title,
		message: result
	}).show();
});

button_2.addEventListener('click', function(e) {
	var result = androidutils.isRingerModeVibrate();
	
	Ti.UI.createAlertDialog({
		title: e.source.title,
		message: result
	}).show();
});

button_3.addEventListener('click', function(e) {
	var result = androidutils.isRingerModeNormal();
	
	Ti.UI.createAlertDialog({
		title: e.source.title,
		message: result
	}).show();
});

button_4.addEventListener('click', function(e) {
	var result = androidutils.getRingerMode();
	
	var msg = 'unknown';
	
	switch(result) {
		case androidutils.RINGER_MODE_SILENT:
			msg = 'RINGER_MODE_SILENT';
			break;

		case androidutils.RINGER_MODE_VIBRATE:
			msg = 'RINGER_MODE_VIBRATE';
			break;
			
		case androidutils.RINGER_MODE_NORMAL:
			msg = 'RINGER_MODE_NORMAL';
			break;
	}
	
	Ti.UI.createAlertDialog({
		title: e.source.title,
		message: msg + ' (' + result + ')'
	}).show();
});

button_5.addEventListener('click', function(e) {
	var result = androidutils.getSimCountryIso();
	
	Ti.UI.createAlertDialog({
		title: e.source.title,
		message: result
	}).show();
});