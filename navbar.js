
function togg() {
    var nav = document.getElementById("navbar");
    nav.classList.toggle("show");
}
function downld() {
    var link = document.getElementById("link").value;
    document.getElementById("linkDwn").href = link;
    console.log(link)

}