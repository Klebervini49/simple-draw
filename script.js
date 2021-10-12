function sortear() {
    const numberMulti = 100;
    const ns = Math.random()
    const tt = ns * numberMulti;
    document.getElementsByClassName("number")[0].innerHTML = `${parseInt(tt)}`
}