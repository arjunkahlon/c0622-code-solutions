console.log('Lodash is loaded:', typeof _ !== 'undefined');
var users = [
  {
    name: 'Cody',
    hand: null
  },
  {
    name: 'Tim',
    hand: null
  },
  {
    name: 'Arjun',
    hand: null
  },
  {
    name: 'Daniel',
    hand: null
  }
];

var cardSuit = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];
var cardNumber = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];
var cardDeck = [];
generateDeck();
var shuffledDeck = shuffleDeck(cardDeck);
playGame(users);

function playGame(userArr) {
  var gameOver = false;
  var players = userArr;
  var leader = null;
  var highestRank = 0;
  var tiedPlayers = [];

  while (!gameOver) {
    highestRank = 0;
    leader = null;
    tiedPlayers = [];
    dealHand(players);

    for (let i = 0; i < players.length; i++) {
      var currentRank = 0;
      if (typeof players[i].hand.rank === 'string') {
        currentRank = convertRankToNum(players[i].hand.rank);
      } else {
        currentRank = players[i].hand.rank;
      }
      if (currentRank > highestRank) {
        highestRank = currentRank;
        tiedPlayers = [];
        leader = players[i];
      } else if (currentRank === highestRank) {
        tiedPlayers.push(players[i]);
        tiedPlayers.unshift(leader);
      }
    }

    if (tiedPlayers.length > 0) {
      console.log('Entering Playoff');
      players = tiedPlayers.slice();
      shuffledDeck = shuffleDeck(cardDeck);
      console.log(tiedPlayers);
    } else {
      gameOver = true;
      console.log(leader.name + ' has won the game with a ' + leader.hand.rank + ' card!');
    }
  }
}

function dealHand(players) {
  for (let i = 0; i < players.length; i++) {
    players[i].hand = shuffledDeck.shift();
  }
}

function convertRankToNum(str) {
  if (str === 'Ace') {
    return 11;
  } else if (str === 'King' || str === 'Queen' || str === 'Jack') {
    return 10;
  }
  return null;
}

function generateDeck() {
  for (let i = 0; i < cardNumber.length; i++) {
    for (let j = 0; j < cardSuit.length; j++) {
      var newCard = {};
      newCard.rank = cardNumber[i];
      newCard.suit = cardSuit[j];
      cardDeck.push(newCard);
    }
  }
}

function shuffleDeck(deck) {
  var newDeck = _.shuffle(deck);
  return newDeck;
}
