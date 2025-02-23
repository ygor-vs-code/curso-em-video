function hours() {
    let temp = new Date()
    let h = String(temp.getHours()).padStart(2, "0")
    let m = String(temp.getMinutes()).padStart(2, "0")
    let s = String(temp.getSeconds()).padStart(2, "0")
    let hours = document.getElementById('hora')
    let minutes = document.getElementById('minutos')
    let seconds = document.getElementById('segundos')
    hours.innerHTML = h
    minutes.innerHTML = m
    seconds.innerHTML = s
}

setInterval(hours, 1000)
hours()