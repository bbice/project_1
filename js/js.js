function guessGame(){
  var message, answer, guess;
  answer = ['mountain biking', 'traveling', 'gaming'];
  guess = prompt('So you wanted to know a little more about me? What would you like to know about - mountain biking? traveling? gaming?');

  if (guess === answer[0]) {
    message = 'I love mountain biking! It\'s really more of a lifestyle than a hobby..';
  } else if (guess === answer[1]){
    message = 'Traveling is great. I\'ve been to over 30 countries with my wife. If you want to learn more check out my blog -http://howilearnedtostopworrying.com/';
  } else if (guess === answer[2]) {
    message = 'Gaming is good fun. I like board games, tabletop RPGs and video games. We should play some time!';
  } else {
    message = 'I\'m not here to talk about that. :P';
  };
  alert(message);
};
guessGame();
