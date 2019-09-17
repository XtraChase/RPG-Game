var heroName = "";
var heroAttack = 0;
var heroHealth = 0;

var villainName = "";
var villainAttack = 0;
var villainHealth = 0;

//pick heroes from list
$(".hero").on("click", function() {
  var hero = $(this).detach();
  heroName = hero[0].children[0].innerText;
  heroHealth = parseInt(hero[0].children[2].innerText);
  heroAttack = Math.floor(Math.random() * 10) + 1;

  $(".heroArea").append(hero);
  $(".subtitle").text("Pick Your Enemy");
  $(".battle-arena").css("visibility", "visible");
  $(hero).css({ color: "rgb(0, 102, 255)", textAlign: "center" });

  console.log(
    heroName +
      "      " +
      "Health: " +
      heroHealth +
      "      Attack Power: " +
      heroAttack
  );
});

//pick villains from list
$(".villain").on("click", function() {
  var villain = $(this).detach();
  villainName = villain[0].children[0].innerText;
  villainHealth = parseInt(villain[0].children[2].innerText);
  villainAttack = Math.floor(Math.random() * 10) + 1;

  $(".villainArea").append(villain);
  $(".subtitle").text("Pick Your Enemy");
  $(".battle-arena, .vs, .attack-button").css("visibility", "visible");
  $(villain).css({ color: "rgb(204, 0, 0)", textAlign: "center" });

  console.log(
    villainName +
      "      " +
      "Health: " +
      villainHealth +
      "      Attack Power: " +
      villainAttack
  );
});

//  ******* BATTLE *******
$(".attack-button").on("click", function() {
  heroHealth -= villainAttack;
  villainHealth -= heroAttack;
  if (heroHealth < 0) {
    heroHealth = 0;
  }
  if (villainHealth < 0) {
    villainHealth = 0;
  }
  heroAttack = Math.floor(Math.random() * 40) + 1;
  villainAttack = Math.floor(Math.random() * 40) + 1;

  //hero 1 health after attack
  document.querySelector(
    "body > div.heroArea"
  ).children[0].children[2].innerText = heroHealth;

  //villain 1 health after attack
  document.querySelector(
    "body > div.villainArea"
  ).children[0].children[2].innerText = villainHealth;

  console.log("******* AN ATTACK WAS MADE *******");
  console.log(
    heroName + "'s health: " + heroHealth + "      Attack Power: " + heroAttack
  );
  console.log(
    villainName +
      "'s health: " +
      villainHealth +
      "      Attack Power: " +
      villainAttack
  );

  // end of the battle
  function startNewRound() {
    window.location.reload();
  }

  if (heroHealth <= 0) {
    console.log("******* LOSE *******");
    $(".attack-button")
      .text("You Lose!")
      .on("click", function() {
        startNewRound();
      })
      .css({ fontSize: "2em" });
  } else if (villainHealth <= 0) {
    console.log("******* WIN *******");
    $(".attack-button")
      .text("You Win!")
      .on("click", function() {
        startNewRound();
      })
      .css({ fontSize: "2em" });
  }
});
