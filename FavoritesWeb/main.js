let viewZi = document.getElementById('zidaneopen');
let hideZi = document.getElementById('hidezidane');


hideZi.hidden = true;

viewZi.onclick = function() {
  viewZi.hidden = true;
  hideZi.hidden = false;
}

const ffixFactory = (name, age, quote) => {
  return {
    name: name,
    age: age,
    quote: quote
  }
};

const tZidane = ffixFactory('Zidane Tribal', 16, 'You don\'t need a reason to help people.');

const aGarnet = ffixFactory('Garnet Til Alexandros XVII', 16, 'Someday I will be queen, but I will always be myself.');

const oVivi = ffixFactory('Vivi Ornitier', 9, 'How do you prove that you exist...? Maybe we don\'t exist...');

const aSteiner = ffixFactory('Adelbert Steiner', 33, 'Having sworn fealty, must I spend my life in servitude?');

const cAmarant = ffixFactory('Amarant Coral', 26, 'The only dependable thing about the future is uncertainty.');

const cFreya = ffixFactory('Freya Crescent', 21, 'To be forgotten is worse than death.');

const qQuina = ffixFactory('Quina Quen', 89, 'I do what I want! You have problem!?');

const cEiko = ffixFactory('Eiko Carol', 6, 'I don\'t wanna be alone anymore...');

const tKuja = ffixFactory('Kuja', 24, 'The weak lose their freedom to the strong. Such is the way of the strong. And it is the providence of nature that only the strong survive. That is why I needed strength.');

$('#zidaneopen').on('click',function(){
  $('#quoteBox').removeClass('hidden');
  $('#charName').html(tZidane.name);
  $('#charAge').html(tZidane.age);
  $('#charQuote').html(tZidane.quote);
})