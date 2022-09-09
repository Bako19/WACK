function display() {
    console.log("Done")
    document.getElementById("sold").classList.add("dis")
}

function disdisplay() {
    console.log("Done")
    document.getElementById("sold").classList.remove("dis")
}

sleep = milliseconds => new Promise(resolve => setTimeout(resolve, milliseconds));
async function closeBtn() {
    document.getElementById("window").classList.add("windonone")
    await sleep(800);
    document.getElementById("window").classList.add("d-none")
}
addEventListener('load', (event) => {
    console.log("BOOOOOOOOOOOOOM")
    document.getElementById("window").classList.remove("d-none")
});