console.log('Lodash is loaded:', typeof _ !== 'undefined');

// Game Functionality
playGame(createPlayers(['Cody', 'Tim', 'Daniel', 'Arjun']), 2);

function playGame(players, numCards) {
  if (players.length <= 1 || numCards.length === 0) {
    return;
  }
  var deck = generateDeck();
  var highestTotal = 0;
  var leader = null;
  var tiedPlayers = [];

  // Game Algorithm. If tie is found, playGame function will be called
  //   recursively with the tied players as the argument. Game will run until
  //   a winner is decided.

  var shuffledDeck = shuffleDeck(deck);
  dealHand(players, numCards, shuffledDeck);
  console.log(players);
  for (let i = 0; i < players.length; i++) {
    var playerTotal = calculateTotal(players[i].hand);
    if (playerTotal > highestTotal) {
      leader = players[i];
      highestTotal = playerTotal;
    } else if (playerTotal === highestTotal) {
      tiedPlayers = [];
      tiedPlayers.push(leader);
      tiedPlayers.push(players[i]);
      leader = null;
    }
  }
  if (tiedPlayers.length === 0) {
    console.log('The winner is ' + leader.name);
    return true;
  } else {
    console.log('Entering Playoffs');
    players = null;
    var newPlayerNames = [];
    for (let i = 0; i < tiedPlayers.length; i++) {
      newPlayerNames.push(tiedPlayers[i].name);
    }
    var newPlayers = createPlayers(newPlayerNames);
    playGame(newPlayers, numCards);
  }
}
// Player Creation

function createPlayers(names) {
  var players = [];
  for (let i = 0; i < names.length; i++) {
    var newPlayer = {};
    newPlayer.hand = [];
    newPlayer.name = names[i];
    players.push(newPlayer);
  }
  return players;
}

// Deck Creation/Deal/Shuffle

function generateDeck() {
  var newCardDeck = [];
  var cardSuit = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];
  var cardNumber = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];

  for (let i = 0; i < cardNumber.length; i++) {
    for (let j = 0; j < cardSuit.length; j++) {
      var newCard = {};
      newCard.rank = cardNumber[i];
      newCard.suit = cardSuit[j];
      newCardDeck.push(newCard);
    }
  }
  return newCardDeck;
}

function shuffleDeck(deck) {
  var newDeck = _.shuffle(deck);
  return newDeck;
}

function dealHand(players, numCards, deck) {
  for (let i = 0; i < players.length; i++) {
    for (let j = 0; j < numCards; j++) {
      players[i].hand.push(deck.shift());
    }
  }
}

// Game Calculation

function calculateTotal(hand) {
  var total = 0;
  for (let i = 0; i < hand.length; i++) {
    if (hand[i].rank === 'Ace') {
      total += 11;
    } else if (hand[i].rank === 'King' || hand[i].rank === 'Queen' || hand[i].rank === 'Jack') {
      total += 10;
    } else {
      total += hand[i].rank;
    }
  }
  return total;
}
