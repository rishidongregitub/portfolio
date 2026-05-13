window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
var getKeyDown = player.getKeyDown;
var keydown = player.keydown;
var keyup = player.keyup;
window.Script1 = function()
{
  var player = GetPlayer();

// Get values from Storyline
var target = player.GetVar("Angle_1");  // 0–360 (e.g., 180)
var spins = player.GetVar("Spin_1");     // total spins (e.g., 5)

// Setup spins
var fastSpins = Math.max(spins - 2, 0);      // fast spins before easing
var fastTotal = fastSpins * 360;             // fast portion angle
var smoothTotal = (2 * 360) + target;        // slow portion + final target
var current = 0;

// === 1. FAST SPIN SECTION ===
var fastInterval = setInterval(function () {
    current += 30; // Fast speed
    player.SetVar("C1", current % 360);

    if (current >= fastTotal) {
        clearInterval(fastInterval);

        // === 2. SMOOTH FINAL 2 SPINS SECTION ===
        var startTime = new Date().getTime();
        var duration = 2000; // total slow spin time in ms

        var finalInterval = setInterval(function () {
            var elapsed = new Date().getTime() - startTime;
            var t = Math.min(elapsed / duration, 1); // 0–1

            // Ease-out (cubic)
            var eased = 1 - Math.pow(1 - t, 3);

            var angle = fastTotal + (eased * smoothTotal);
            player.SetVar("C1", angle % 360);

            if (t >= 1) {
                clearInterval(finalInterval);
                player.SetVar("C1", target); // Ensure exact stop
            }
        }, 20);
    }
}, 20);

}

window.Script2 = function()
{
  var player = GetPlayer();

// Get values from Storyline
var target = player.GetVar("Angle_2");  // 0–360 (e.g., 180)
var spins = player.GetVar("Spin_2");     // total spins (e.g., 5)

// Setup spins
var fastSpins = Math.max(spins - 2, 0);      // fast spins before easing
var fastTotal = fastSpins * 360;             // fast portion angle
var smoothTotal = (2 * 360) + target;        // slow portion + final target
var current = 0;

// === 1. FAST SPIN SECTION ===
var fastInterval = setInterval(function () {
    current += 30; // Fast speed
    player.SetVar("C2", current % 360);

    if (current >= fastTotal) {
        clearInterval(fastInterval);

        // === 2. SMOOTH FINAL 2 SPINS SECTION ===
        var startTime = new Date().getTime();
        var duration = 2000; // total slow spin time in ms

        var finalInterval = setInterval(function () {
            var elapsed = new Date().getTime() - startTime;
            var t = Math.min(elapsed / duration, 1); // 0–1

            // Ease-out (cubic)
            var eased = 1 - Math.pow(1 - t, 3);

            var angle = fastTotal + (eased * smoothTotal);
            player.SetVar("C2", angle % 360);

            if (t >= 1) {
                clearInterval(finalInterval);
                player.SetVar("C2", target); // Ensure exact stop
            }
        }, 20);
    }
}, 20);

}

window.Script3 = function()
{
  var player = GetPlayer();

// Get values from Storyline
var target = player.GetVar("Angle_3");  // 0–360 (e.g., 180)
var spins = player.GetVar("Spin_3");     // total spins (e.g., 5)

// Setup spins
var fastSpins = Math.max(spins - 2, 0);      // fast spins before easing
var fastTotal = fastSpins * 360;             // fast portion angle
var smoothTotal = (2 * 360) + target;        // slow portion + final target
var current = 0;

// === 1. FAST SPIN SECTION ===
var fastInterval = setInterval(function () {
    current += 30; // Fast speed
    player.SetVar("C3", current % 360);

    if (current >= fastTotal) {
        clearInterval(fastInterval);

        // === 2. SMOOTH FINAL 2 SPINS SECTION ===
        var startTime = new Date().getTime();
        var duration = 2000; // total slow spin time in ms

        var finalInterval = setInterval(function () {
            var elapsed = new Date().getTime() - startTime;
            var t = Math.min(elapsed / duration, 1); // 0–1

            // Ease-out (cubic)
            var eased = 1 - Math.pow(1 - t, 3);

            var angle = fastTotal + (eased * smoothTotal);
            player.SetVar("C3", angle % 360);

            if (t >= 1) {
                clearInterval(finalInterval);
                player.SetVar("C3", target); // Ensure exact stop
            }
        }, 20);
    }
}, 20);

}

};
