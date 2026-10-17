// Ocean-wave text effect: wraps every word in a .wave-word span and gives
// each one a slightly offset animation delay, so a wave travels through the
// text like a swell. Paired with the .wave-word keyframes in style.css.
// Applies only to the nav (menu) links.
(function () {
    function wrapWordsIn(node) {
        const parts = [];
        node.nodeValue.split(/(\s+)/).forEach(function (part) {
            if (part === "" || /^\s+$/.test(part)) {
                parts.push(document.createTextNode(part));
            } else {
                const span = document.createElement("span");
                span.className = "wave-word";
                span.textContent = part;
                parts.push(span);
            }
        });
        node.replaceWith.apply(node, parts);
    }

    function processElement(el) {
        const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
        const nodes = [];
        while (walker.nextNode()) {
            nodes.push(walker.currentNode);
        }
        nodes.forEach(wrapWordsIn);
    }

    function start() {
        const targets = document.querySelectorAll("nav a");
        let i = 0;
        targets.forEach(function (el) {
            processElement(el);
            el.querySelectorAll(".wave-word").forEach(function (word) {
                // Negative delay so every word starts moving immediately,
                // just out of phase with its neighbours.
                word.style.animationDelay = (-i * 0.09).toFixed(2) + "s";
                i++;
            });
        });
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", start);
    } else {
        start();
    }
})();
