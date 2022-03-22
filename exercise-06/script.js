var object, verb, place;
object = [ 'bee', 'phone', 'rock', '$100 dollar bill', 'thimble'];
verb = [ 'placed', 'stuffed', 'hid', 'threw', 'dropped'];
place = [ 'ocean', 'backpack', 'pocket', 'mouth', 'duo-tang'];

    function randGen() {
        return Math.floor(Math.random) *3);
    }

    function sentence() {
        var randomObject = Math.floor(Math.random() * 5);
        var randomVerb = Math.floor(Math.random() * 5);
        var randomPlace = Math.floor(Math.random() * 5);
    }
var content = "I walked along the path on a sunny day when I noticed a" + object[randomObject] + ", I" + verb[randomVerb] + "it into the" + place[randomPlace] + ".";

document.getElementById('sentence').innerHTML = "&quot;" + content + "&quot;";
            };
            sentence();

            let randomObject = object[Math.floor(Math.random()*object.length)];