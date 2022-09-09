function display(sold) {
    console.log("Done")
    document.getElementById(sold).classList.add("dis")
}

function disdisplay(sold) {
    console.log("Done")
    document.getElementById(sold).classList.remove("dis")
}

sleep = milliseconds => new Promise(resolve => setTimeout(resolve, milliseconds));
const d = new Date();


async function closeBtn() {
    document.getElementById("window").classList.add("windonone")
    await sleep(800);
    document.getElementById("window").classList.add("d-none")
    localStorage.setItem("day",d.getDate())
}
addEventListener('load', (event) => {
    if (!(localStorage.getItem("day") ==  d.getDate())) {
        document.getElementById("window").classList.remove("d-none")
    }
});