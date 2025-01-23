const cnumber = document.getElementById('cardNumber')
const cholder = document.getElementById('cardHolder')
const cmounth = document.getElementById('expMonth')
const cyear = document.getElementById('expYear')
const ccvv = document.getElementById('cardCvv')

const bordes = document.getElementById('currentInp')

const card = document.getElementById('card')

cnumber.addEventListener("focus",() => {
    bordes.style.opacity = "100%"
    card.style.transform = "rotateY(10deg) rotateX(10deg)"
    bordes.style.height = "45px"
    bordes.style.width = "90%"
    setTimeout(() => {
        bordes.style.transform = "translate(-50%, 5%)"
    }, 100);
})

cholder.addEventListener("focus",() => {
    bordes.style.opacity = "100%"
    card.style.transform = "rotateY(10deg) rotateX(10deg)"
    bordes.style.height = "30px"
    bordes.style.width = "80%"
    setTimeout(() => {
        bordes.style.transform = "translate(-170px, 78px)"
    }, 100);
})

cmounth.addEventListener("focus",() => {
    bordes.style.opacity = "100%"
    card.style.transform = "rotateY(10deg) rotateX(10deg)"
    bordes.style.height = "30px"
    bordes.style.width = "15%"
    setTimeout(() => {
        bordes.style.transform = "translate(-170px, 185%)"
    }, 100);
})

cyear.addEventListener("focus",() => {
    bordes.style.opacity = "100%"
    card.style.transform = "rotateY(10deg) rotateX(10deg)"
    bordes.style.height = "30px"
    bordes.style.width = "15%"
    setTimeout(() => {
        bordes.style.transform = "translate(-170px, 185%)"
    }, 100);
})

ccvv.addEventListener("focus",() => {
    bordes.style.opacity = "100%"
    card.style.transform = "rotateY(170deg) rotateX(-10deg)"
    bordes.style.height = "35px"
    bordes.style.width = "15%"
    setTimeout(() => {
        bordes.style.transform = "translate(104px, -20px)"
    }, 100);
})

function fout(){
    setTimeout(()=>{
        if (document.activeElement.tagName != "INPUT" && document.activeElement.tagName != "SELECT"){
            card.style.transform = "rotateY(10deg) rotateX(10deg)"
            bordes.style.width = '100%'
            bordes.style.height = '100%'
            bordes.style.transform = 'translate(-50%, -50%)'
            setTimeout(() => {
                bordes.style.opacity = "0%"
            }, 20)
        }
    },50)
}

cnumber.addEventListener('input', ()=>{
    val = cnumber.value
    lastVal = val.substring(val.length -1, val.length)
    if(isNaN(parseInt(lastVal))){
        cnumber.value = val.substring(0, val.length -1)
    }else{
        setTimeout(()=>{
           try { document.getElementById(`cn${val.length}`).innerText = lastVal }catch (error){}
        }, 50)
    }
})

cholder.addEventListener('input',() => {
    val = cholder.value
    lastVal = val.substring(val.length -1, val.length)
    if(!/^[a-zA-Z ]$/.test(lastVal)){
        cholder.value = val.substring(0, val.length -1)
    }else{
        document.getElementById('cholder').innerText = val.toUpperCase()
    }
})

cmounth.addEventListener('change', () => {
    val = cmounth.value
    document.getElementById("cdm").innerText = val
})

cyear.addEventListener('change', () => {
    val = cyear.value
    document.getElementById("cdy").innerText = val.slice(-2)
})

ccvv.addEventListener('input', () => {
    val = ccvv.value
    lastVal = val.substring(val.length -1, val.length)
    if(isNaN(parseInt(lastVal))){
        ccvv.value = val.substring(0, val.length -1)
    }else{
        setTimeout(()=>{
           try { document.getElementById(`cv${val.length}`).innerText = lastVal } catch (error) {}
        }, 50)
    }
})


cnumber.addEventListener('focusout', fout)
cholder.addEventListener('focusout', fout)
cmounth.addEventListener('focusout', fout)
cyear.addEventListener('focusout', fout)
ccvv.addEventListener('focusout', fout)