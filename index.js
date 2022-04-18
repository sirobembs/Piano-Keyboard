var k = document.querySelectorAll(".keyed").length;

for (var i = 0; i < k; i++) {

  document.querySelectorAll(".keyed")[i].addEventListener("click", listenKey);

  function listenKey() {
    var buttonKey = this.innerHTML;

    makeSound(buttonKey);
    buttonAnimation(buttonKey);
  }

}


document.addEventListener("keydown", keyb);

function keyb(event) {

  makeSound(event.key);

  buttonAnimation(event.key);

}

function makeSound(key) {

  switch (key) {
    case "c":
      var ckey = new Audio("sounds/key01.mp3");
      ckey.play();
      break;

    case "d":
      var dkey = new Audio("sounds/key02.mp3");
      dkey.play();
      break;

    case "e":
      var ekey = new Audio('sounds/key03.mp3');
      ekey.play();
      break;

    case "f":
      var fkey = new Audio('sounds/key04.mp3');
      fkey.play();
      break;

    case "g":
      var gkey = new Audio('sounds/key05.mp3');
      gkey.play();
      break;

    case "a":
      var akey = new Audio('sounds/key06.mp3');
      akey.play();
      break;

    case "b":
      var bkey = new Audio('sounds/key07.mp3');
      bkey.play();
      break;

    case "C":
      var Ckey = new Audio('sounds/key08.mp3');
      Ckey.play();
      break;

    case "D":
      var Dkey = new Audio('sounds/key09.mp3');
      Dkey.play();
      break;

    case "E":
      var Ekey = new Audio('sounds/key10.mp3');
      Ekey.play();
      break;

    case "F":
      var Fkey = new Audio('sounds/key11.mp3');
      Fkey.play();
      break;

    case "G":
      var Gkey = new Audio('sounds/key12.mp3');
      Gkey.play();
      break;

    case "A":
      var Akey = new Audio('sounds/key13.mp3');
      Akey.play();
      break;

    case "B":
      var Bkey = new Audio('sounds/key14.mp3');
      Bkey.play();
      break;

    case "r":
      var onekey = new Audio("sounds/key15.mp3");
      onekey.play();
      break;

    case "t":
      var twokey = new Audio("sounds/key16.mp3");
      twokey.play();
      break;

    case "y":
      var threekey = new Audio('sounds/key17.mp3');
      threekey.play();
      break;

    case "u":
      var fourkey = new Audio('sounds/key18.mp3');
      fourkey.play();
      break;

    case "i":
      var fivekey = new Audio('sounds/key19.mp3');
      fivekey.play();
      break;

    case "o":
      var sixkey = new Audio('sounds/key20.mp3');
      sixkey.play();
      break;

    case "p":
      var sevenkey = new Audio('sounds/key21.mp3');
      sevenkey.play();
      break;


    default:
      console.log(key);

  }
}


function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}
