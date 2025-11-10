document.getElementById("cliker").style.color = "red";

alert("Velkommen til Mining Sim 99!");

// start verdier( må være 10 eller mere )
let penger = 10;
let diamanter = 10;
let fuel = 10;
let miners = 0;
let rebirths = 0;

// her ligger bare alle ID så jeg bare henter de derfra.
const fuelEl = document.getElementById("brensel");
const diaEl = document.getElementById("diamant");
const penEl = document.getElementById("penger");
const pickaxe = document.getElementById("pickaxe");
const buyMinerBtn = document.getElementById("buyMiner");
const buyFuelBtn = document.getElementById("buyFuel");
const convertBtn = document.getElementById("convert");
const rebirthBtn = document.getElementById("lol");

//sjekker om du får mere eller midre av noe.
function vis() {
  fuelEl.innerText = "fuel left: " + fuel + " ⛽";
  diaEl.innerText = "diamonds: " + diamanter + " 💎";
  penEl.innerText = "Money: " + penger + " 💵";
}

//Lagrer info om hvor mange diamqanter du får per klick.
pickaxe.onclick = function () {
  if (fuel > 0) {
    diamanter += 5 + miners + rebirths;
  } else {
    alert("Du har ikke nok fuel!");
  }
  vis();
};

// her sjekker den om du har nokk diamnter il å knovertere til penger.
convertBtn.onclick = function () {
  if (diamanter >= 1) {
    diamanter -= 1;
    penger += 10;
  } else {
    alert("Ingen diamanter å bytte!");
  }
  vis();
};

// skjøpe miner
buyMinerBtn.onclick = function () {
  if (diamanter >= 10 && penger >= 250) {
    diamanter -= 10;
    penger -= 250;
    miners += 1;
    alert("Du kjøpte en miner!");
  } else {
    alert("Ikke nok ressurser!");
  }
  vis();
};

//Rebirth system bare for +1 gems vær sekund du skjøper det.
rebirthBtn.onclick = function () {
  if (diamanter >= 500 && penger >= 1000) {
    diamanter -= 500;
    penger -= 1000;
    rebirths += 1;
    alert("Du Rebirtha!");
  } else {
    alert("Ikke nok ressurser!");
  }
  vis();
};

// skjøpe og prisen av fuel den skjekker om du har nokk.
buyFuelBtn.onclick = function () {
  if (diamanter >= 15) {
    diamanter -= 15;
    fuel += 5;
  } else {
    alert("Ikke nok diamanter!");
  }
  vis();
};

// Dette gjør at mineren fungerer med at den bruker 1 fuel per miner vært 30s
setInterval(function () {
  if (miners > 0 && fuel > 0) {
    fuel -= miners;
    if (fuel < 0) fuel = 0;
    vis();
  }
}, 30000);

// Du får doen diamenter vært 10s.
setInterval(function () {
  if (miners > 0) {
    diamanter += miners;
    vis();
  }
}, 10000);

vis();
