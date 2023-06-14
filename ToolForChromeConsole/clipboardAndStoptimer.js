//знімає заборону копіювати текст
document.body.oncopy="";

//Працює тільки у Chrome! Знімає заборону перемикати таб у браузері. 
window.document.removeEventListener("visibilitychange", getEventListeners(document).visibilitychange[0].listener);

//зупиняє таймер
const oldSetTimeout = window.setTimeout;
function newSetTimeout() {
  //console.log('Ha-ha');
}
window.setTimeout = newSetTimeout;

//робить текст придатним для пошуку в гуглі
function cleanText(text) {
	var fixed = text;
	fixed = fixed.replaceAll('i', 'і');
	fixed = fixed.replaceAll('a', 'а');
	fixed = fixed.replaceAll('o', 'о');
	fixed = fixed.replaceAll('e', 'е');
	fixed = fixed.replaceAll('p', 'р');
	fixed = fixed.replaceAll('x', 'х');
	fixed = fixed.replaceAll('c', 'с');

	fixed = fixed.replaceAll('I', 'і');
	fixed = fixed.replaceAll('A', 'а');
	fixed = fixed.replaceAll('O', 'о');
	fixed = fixed.replaceAll('E', 'е');
	fixed = fixed.replaceAll('P', 'р');
	fixed = fixed.replaceAll('X', 'х');
	fixed = fixed.replaceAll('C', 'с');

	return fixed;
}
//вивід варіантів відповідей у консоль
var variants = $('div.wrapper0 > div.b3 > ol').children;
for ( var i = 0; i < variants.length; i++ ) {
    console.log( cleanText( variants[i].innerText ) );
}

вивід питань у консоль
cleanText( $("body > div.wrapper0 > div.b3 > h2").innerText );
