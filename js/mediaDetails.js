const targetDiv = document.getElementById("id2");
const btn = document.getElementById("id1");
btn.onclick = function() {
    if (targetDiv.style.display !== "none") {
        targetDiv.style.display = "none";
    } else {
        targetDiv.style.display = "block";
    }
};