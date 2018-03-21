console.log("calvin is connected")

var insQuotes = [
	"\"Love and desire are the spirit's wings to great deeds\". - Johann Wolfgang von Goethe",
	"\"Believe you can and you're halfway there.\" - Theodore Roosevelt",
	"\"Be more concerned with your character than with your reputation. Your character is what you really are, while your reputation is merely what others thinkyou are.\" - John Wooden",
	"\"I’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.\" —Maya Angelou",
	"\"Whether you think you can or you think you can’t, you’re right.\" —Henry Ford",
	"\"Perfection is not attainable, but if we chase perfection we can catch excellence.\" —Vince Lombardi",
	"\"Life is 10% what happens to me and 90% of how I react to it.\" —Charles Swindoll",
	"\"If you look at what you have in life, you’ll always have more. If you look at what you don’t have in life, you’ll never have enough.\" —Oprah Winfrey",
	"\"Remember no one can make you feel inferior without your consent.\" —Eleanor Roosevelt",
	"\"I can’t change the direction of the wind, but I can adjust my sails to always reach my destination.\" —Jimmy Dean",
	"\"Believe you can and you’re halfway there\". —Theodore Roosevelt",
	"\"To handle yourself, use your head; to handle others, use your heart.\" —Eleanor Roosevelt",
	"\"Too many of us are not living our dreams because we are living our fears.\" —Les Brown",
	"\"Do or do not. There is no try.\" —Yoda",
	"\"Whatever the mind of man can conceive and believe, it can achieve.\" —Napoleon Hill",
	"\"I alone cannot change the world, but I can cast a stone across the water to create many ripples.\" —Mother Teresa",
	"\"What we achieve inwardly will change outer reality.\" —Plutarch",
	"\"We can easily forgive a child who is afraid of the dark; the real tragedy of life is when men are afraid of the light.\" —Plato",
	"\"Everything you’ve ever wanted is on the other side of fear.\" —George Addair",
	"\"We can’t help everyone, but everyone can help someone.\" —Ronald Reagan",
	"\"When I was 5 years old, my mother always told me that happiness was the key to life. When I went to school, they asked me what I wanted to be when I grew up. I wrote down “happy”. They told me I didn’t understand the assignment, and I told them they didn’t understand life.\" —John Lennon",
	"\"How wonderful it is that nobody need wait a single moment before starting to improve the world. —Anne Frank",
	"\"Everything has beauty, but not everyone can see.\" —Confucius",
	"\"When one door of happiness closes, another opens, but often we look so long at the closed door that we do not see the one that has been opened for us. —Helen Keller",
	"\"Certain things catch your eye, but pursue only those that capture the heart.\" —Ancient Indian Proverb",
	"\"Limitations live only in our minds. But if we use our imaginations, our possibilities become limitless.\" —Jamie Paolinetti",
	"\"If you want to lift yourself up, lift up someone else.\" —Booker T. Washington",
	"\"I have been impressed with the urgency of doing. Knowing is not enough; we must apply. Being willing is not enough; we must do.\" —Leonardo da Vinci",
	"\"What’s money? A man is a success if he gets up in the morning and goes to bed at night and in between does what he wants to do.\" —Bob Dylan",
]

function randomIns(){
	var randomQuotes = insQuotes[Math.floor(Math.random()*insQuotes.length)]
	$('#quote').html(randomQuotes).css('')
}

var happyQuotes = [
	"\"For every minute you are angry you lose sixty seconds of happiness.\" ― Ralph Waldo Emerson",
	"\"Folks are usually about as happy as they make their minds up to be.\"― Abraham Lincoln",
	"\"Time you enjoy wasting is not wasted time.\" ― Marthe Troly-Curtin, Phrynette Married",
	"\"“It's so hard to forget pain, but it's even harder to remember sweetness. We have no scar to show for happiness. We learn so little from peace.\"― Chuck Palahniuk, Diary",
	"\"Happiness in intelligent people is the rarest thing I know.\"― Ernest Hemingway, The Garden of Eden",
	"\"Happiness is when what you think, what you say, and what you do are in harmony.\"― Mahatma Gandhi",
	"\"Happiness is not something ready made. It comes from your own actions.\"― Dalai Lama XIV",
	"\"Count your age by friends, not years. Count your life by smiles, not tears.\"― John Lennon",
	"\"If more of us valued food and cheer and song above hoarded gold, it would be a merrier world.\"― J.R.R. Tolkien",
	"\"They say a person needs just three things to be truly happy in this world: someone to love, something to do, and something to hope for.\"― Tom Bodett",
	"\"The most important thing is to enjoy your life—to be happy—it's all that matters.\"― Audrey Hepburn",
	"\"You cannot protect yourself from sadness without protecting yourself from happiness.\"― Jonathan Safran Foer",
	"\"No medicine cures what happiness cannot.\"― Gabriel García Márquez",
	"\"Of all forms of caution, caution in love is perhaps the most fatal to true happiness.\"― Bertrand Russell, The Conquest of Happiness",
	"\"Don’t cry because it’s over, smile because it happened.\"-Dr. Seuss",
	"\"I am very happy because I have conquered myself and not the world. I am very happy because I have loved the world and not myself.\"-Sri Chinmoy",
	"\"Success is getting what you want. Happiness is wanting what you get.\"-Dale Carnegie",
	"\"If you aren’t grateful for what you already have, what makes you think you would be happy with more.\"-Roy T. Bennett",
	"\"People are unhappy when they get something too easily. You have to sweat – that’s the only moral they know.\"-Dany Laferrière",
	"\"I am not bound to win, I am bound to be true. I am not bound to succeed, but I am bound to live up to the light I have. \"-Abraham Lincoln",
	"\"What we think determines what happens to us, so if we want to change our lives, we need to stretch our minds.\"-Wayne Dyer",
	"\"Live with intention. Walk to the edge. Listen hard. Practice wellness. Play with abandon. Laugh. Choose with no regret. Do what you love. Live as if this is all there is.\"-Mary Anne Roadacher-Hershey",
]

function randomHappy(){
	var happy = happyQuotes[Math.floor(Math.random()*happyQuotes.length)]
	$('#quote').html(happy).css('')
}

var confidenceQuotes = [
	"\"Because one believes in oneself, one doesn't try to convince others. Because one is content with oneself, one doesn't need others' approval. Because one accepts oneself, the whole world accepts him or her.\"― Lao Tzu",
	"\"Life is ten percent what you experience and ninety percent how you respond to it.\"― Dorothy M. Neddermeyer",
	"\"Noble and great. Courageous and determined. Faithful and fearless. That is who you are and who you have always been. And understanding it can change your life, because this knowledge carries a confidence that cannot be duplicated any other way.\"― Sheri L. Dew",
	"\"Each time we face our fear, we gain strength, courage, and confidence in the doing.\"- Theodore Roosevelt",
	"\"Life is not easy for any of us. But what of that? We must have perseverance and above all confidence in ourselves. We must believe that we are gifted for something, and that this thing, at whatever cost, must be attained.\"- Marie Curie",
	"\"To love yourself right now, just as you are, is to give yourself heaven. Don't wait until you die. If you wait, you die now. If you love, you live now.\"- Alan Cohen",
	"\"You are the only person on earth who can use your ability.\"- Zig Ziglar",
	"\"Have confidence that if you have done a little thing well, you can do a bigger thing well too.\"- David Storey",
	"\"With realization of one's own potential and self-confidence in one's ability, one can build a better world.\"- Dalai Lama",
	"\"Don't you dare, for one more second, surround yourself with people who are not aware of the greatness that you are.\"- Jo Blackwell-Preston",
	"\"Don’t live down to expectations. Go out there and do something remarkable. \"- Wendy Wasserstein",
	"\"To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.\" - Ralph Waldo Emerson",
	"\"Confidence is preparation.  Everything else is beyond your control.\"- Richard Kline",
	"\"You have to expect things of yourself before you can do them.\"- Michael Jordan",
	"\"Whether you think you can or think you can't, you are right.\"- Henry Ford",
	"\"We have to learn to be our own best friends because we fall too easily into the trap of being our own worst enemies.\"- Roderick Thorp",
	"\"No one can make you feel inferior without your consent.\"- Eleanor Roosevelt",
	"\"Self-confidence is the memory of success.\"- David Storey",
	"\"Don't be satisfied with stories, how things have gone with others. Unfold your own myth.\"-Rumi, The Essential Rumi",
	"\"Risk anything! Care no more for the opinion of others ... Do the hardest thing on earth for you. Act for yourself. Face the truth.\"― Katherine Mansfield",
]

function randomConfidence(){
	var confidence = confidenceQuotes[Math.floor(Math.random()*confidenceQuotes.length)]
	$('#quote').html(confidence).css('')
}
/*----------------------------------------------------------*/


var sceneryPics = [
	"./images/picture.jpeg",
	"./images/trees.jpg",
	"./images/beach.jpg",
	"./images/bfly.jpeg",
	"./images/tree2.jpg",
	"./images/tree3.jpeg",
	"./images/tree4.jpeg",
	"./images/water.jpeg",
	"./images/water2.jpeg",
	"./images/water3.jpeg",
	"./images/house.jpeg",
	"./images/sky.jpg",
	"./images/park.jpg"
]

var cutePics = [
	"./images/cat1.jpg",
	"./images/dog1.jpg",
	"./images/dog2.jpg",
	"./images/dog5.jpg",
	"./images/duck.jpg",
	"./images/dog3.jpg",
	"./images/dog4.jpg",
]

var spacePics = [
	"./images/sky2.jpg",
	"./images/night2.jpg",
	"./images/stars1.jpg",
	"./images/stars2.jpg",
	"./images/stars3.jpg",
]

function randomHappyPics() {	
    $('body').css({
      'background' : 'url('+ cutePics[Math.floor(Math.random() * cutePics.length)] + ') no-repeat',
      'background-attachment' : 'scroll',
      'background-position' : '50% 50%',
      'background-size' : 'cover'
    });
}

function randomHero() {	
    $('body').css({
      'background' : 'url('+ sceneryPics[Math.floor(Math.random() * sceneryPics.length)] + ') no-repeat',
      'background-attachment' : 'scroll',
      'background-position' : '50% 50%',
      'background-size' : 'cover'
    });
}

function randomSpace() {	
    $('body').css({
      'background' : 'url('+ spacePics[Math.floor(Math.random() * spacePics.length)] + ') no-repeat',
      'background-attachment' : 'scroll',
      'background-position' : '50% 50%',
      'background-size' : 'cover'
    });
}

function both(){
	randomHero()
	randomIns()
}

function both2(){
	randomHappyPics()
	randomHappy()
}

function both3(){
	randomSpace()
	randomConfidence()
}
/*----------------------------------------------------------*/
// var sounds = [
// "./sounds/spring.mp3",
// ]

// function getRandomSounds() {
// var randomNum = Math.floor(Math.random()*sounds.length);
// document.getElementByid("playlist").src = sounds[randomNum];
// }


// $('#audioButton').click(function(){
// 	$('#playlist').toggle(1000);
// })


/*----------------------------------------------------------*/
$('#btn').click(both)
$('#btn2').click(both2)
$('#btn3').click(both3)


