console.log("Hello Guys");
/* Write your pseudo code
Constants (Things that don't change)
text
buttons 

Variables (things that change)
if text is showing


functions (actions)
WHEN tap (or click) THEN toggleText

*/
function toggleText(event) {
    if (event.target.parentNode.children[1].style.display === "block"){
        event.target.parentNode.children[1].style.display = "none"
    }
    else {
        event.target.parentNode.children[1].style.display = "block"
    }
    // event.target.parentNode.children[1].style.display = "none";    
}

function toggleButton(event) {
    const text = event.target.parentNode.children(1);
    console.log(text.style.display)
    if (text.style.display === "none" || text.style.display) {
        text.style.display = "block";
    } else {
        text.style.display = "none";
    }
 }
