function sound() {
  var snd = new Audio('https://raw.githubusercontent.com/kayakism/catechism.github.io/main/flowersneverbend.mp3')
  snd.play()
}

var sites = [
  'http://medievalist.net/hourstxt/deadves.htm',
  'https://www.richardscarry.com/games',
  'http://www.windows93.net/',
  'https://95isalive.com/links.htm',
  'https://geocities.restorativland.org/TimesSquare/Realm/9348/',
  'https://history.state.gov/milestones/1989-1992/breakup-yugoslavia',
  'https://www.heavensgate.com/',
  'https://www.madsci.org/~lynn/VH/',
  'https://www.madsci.org/~lynn/VH/tour.html',
  'https://va.com.au/parallel/x1/gallery/suzanne_treister/',
  'https://web.archive.org/web/19961023235157/http://www2.windows95.com/',
  'https://www.cameronsworld.net/',
  'https://web.archive.org/web/20020310002511/http://www.geocities.com:80/SiliconValley/Pines/5016/',
  'http://www.medievalist.net/webgl/paintedchurch/',
  'https://www.bpl.org/blogs/post/medieval-books-hours-bpl/',
  'https://geocities.restorativland.org/Area51/Meteor/5408/',
  'https://geocities.restorativland.org/Area51/Meteor/1117/',
  'https://geocities.restorativland.org/Area51/Meteor/1713/',
  'https://geocities.restorativland.org/Area51/Meteor/2546/',
  'https://geocities.restorativland.org/Area51/Meteor/2671/',
  'https://geocities.restorativland.org/Area51/Meteor/2904/',
  'https://geocities.restorativland.org/Area51/Meteor/4682/',
  'https://geocities.restorativland.org/TimesSquare/Realm/2659/'
];

function randomSite() {
  var i = parseInt(Math.random() * sites.length);
  location.href = sites[i];
}

const currentMonth = new Date(Date.now()).getMonth();

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}