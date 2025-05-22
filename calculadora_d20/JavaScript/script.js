let forBase = document.getElementById("forBase")
let conBase = document.getElementById("conBase")
let intBase = document.getElementById("intBase")
let sabBase = document.getElementById("sabBase")
let carBase = document.getElementById("carBase")
let desBase = document.getElementById("desBase")

let forD20 = document.getElementById("forD20")
let conD20 = document.getElementById("conD20")
let intD20 = document.getElementById("intD20")
let sabD20 = document.getElementById("sabD20")
let carD20 = document.getElementById("carD20")
let desD20 = document.getElementById("desD20")

let forMOD = document.getElementById("forMod")
let conMOD = document.getElementById("conMod")
let intMOD = document.getElementById("intMod")
let sabMOD = document.getElementById("sabMod")
let carMOD = document.getElementById("carMod")
let desMOD = document.getElementById("desMod")

let forTotal = document.getElementById("forTotal")
let conTotal = document.getElementById("conTotal")
let intTotal = document.getElementById("intTotal")
let sabTotal = document.getElementById("sabTotal")
let carTotal = document.getElementById("carTotal")
let desTotal = document.getElementById("desTotal")

function somar(n1, n2) {
   return n1 + n2
}
const gerarnumeroaleatorio = () => {
   let array_numero_aleatorios = []

   for (let i = 0; i < 6; i++) {
      array_numero_aleatorios[i] = Math.floor(20 * Math.random() + 1)


   }
   return array_numero_aleatorios
}

const recarregarPagina = () => {
   window.location.reload(true)


}
const camposD20 = () => {
   numeros_d20 = gerarnumeroaleatorio()

   forD20.value = numeros_d20[0]
   desD20.value = numeros_d20[1]
   conD20.value = numeros_d20[2]
   intD20.value = numeros_d20[3]
   sabD20.value = numeros_d20[4]
   carD20.value = numeros_d20[5]
   modificador(numeros_d20)
}

const modificador = (numeros_aleatorios) => {
   numeros_d20 = numeros_aleatorios
   let mod = []
   for (let i = 0; i < 6; i++) {
    valor = numeros_d20[i]
    if (valor > 15 ){
      mod[i] = Math.round (1 + (valor/1.2))
    } else if(valor > 7){
      mod[i] = (0 + (valor / 1.2)).toFixed(0)
    } else {
      mod[i] = Math.round(-1 + (valor / 1.2))
    }

   }
  forMOD.value = mod[0]
  desMOD.value = mod[1]
  conMOD.value = mod[2]
  intMOD.value = mod[3]
  sabMOD.value = mod[4]
  carMOD.value = mod[5]
}

const calcular = () => {
 forTotal.value = Number (forBase.value) + Number (forMOD.value)
 desTotal.value = Number (desBase.value) + Number (desMOD.value)
 conTotal.value = Number (conBase.value) + Number (conMOD.value)
 intTotal.value = Number (intBase.value) + Number (intMOD.value)
 sabTotal.value = Number (sabBase.value) + Number (sabMOD.value)
 carTotal.value = Number (carBase.value) + Number (carMOD.value)
}

const btnCalcular = document.getElementById("calcular")
const bntDado = document.getElementById("dado")
const btnResetar = document.getElementById("resetar")

btnCalcular.addEventListener ("click", calcular)
bntDado.addEventListener("click", camposD20)
btnResetar.addEventListener("click", recarregarPagina)