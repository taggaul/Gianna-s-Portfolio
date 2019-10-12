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
    if (event.target.parentNode.children[1].style.display === ""){
        event.target.parentNode.children[1].style.display = "none"
    }
    else {
        event.target.parentNode.children[1].style.display = ""
    }
    // event.target.parentNode.children[1].style.display = "none";    
}