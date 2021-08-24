const targetDiv = document.getElementById("id2");
const btn = document.getElementById("id1");
const closeBtn = document.getElementById("closeBtn");

btn.onclick = function() {
    if (targetDiv.style.display == "none") {
        targetDiv.style.display = "block";
    } else {
        targetDiv.style.display = "none";
    }
};
closeBtn.onclick = function() {
    targetDiv.style.display = "none";
}