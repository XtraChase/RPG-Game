var name = "";
var attack = 0;
var health = 0;

//pick heroes from list
$(".hero").on("click", function() {
  var hero = $(this).detach();
  name = hero[0].children[0].innerText;
  health = parseInt(hero[0].children[2].innerText);
  attack = Math.floor(Math.random() * 10);

  $(".hero-area").append(hero);
  $(".subtitle").text("Pick Your Enemy");
  $(".battle-arena").css("visibility", "visible");
  $(hero).css({ color: "rgb(0, 102, 255)", textAlign: "center" });

  console.log(
    name + "      " + "Health: " + health + "      Attack Power: " + attack
  );
});

//pick villains from list
$(".villain").on("click", function() {
  var villain = $(this).detach();
  name = villain[0].children[0].innerText;
  health = parseInt(villain[0].children[2].innerText);
  attack = Math.floor(Math.random() * 10);

  $(".villain-area").append(villain);
  $(".subtitle").text("Pick Your Enemy");
  $(".battle-arena, .vs, .attack-button").css("visibility", "visible");
  $(villain).css({ color: "rgb(204, 0, 0)", textAlign: "center" });

  console.log(
    name + "      " + "Health: " + health + "      Attack Power: " + attack
  );
});

//  ******* BATTLE *******
$(".attack-button").on("click", function() {});

function startNewRound() {
  window.location.reload();
}
