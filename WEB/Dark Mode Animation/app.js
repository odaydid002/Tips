const container = document.getElementById('container')
const dark = document.querySelector('.dark')
const light = document.querySelector('.light')
const root = document.documentElement

container.addEventListener('click', function(e){
    isDark = e.target.classList[2] == "dark"
    root.style.setProperty('--light', isDark?"#0E1621":"white")
    root.style.setProperty('--dark', !isDark?"#0E1621":"white")

    container.style.transform = isDark?"rotateZ(-360deg)":"rotateZ(360deg)"

    setTimeout(function(){
        dark.style.display = isDark?"none":"inline-block"
        light.style.display = !isDark?"none":"inline-block"
    },200)

})