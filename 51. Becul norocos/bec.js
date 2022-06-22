
const deschideBecul = document.getElementById("onoff"); 
const closeTheLight = document.getElementById("changeimage")
const closeSwitch = document.getElementById("switch")

let aprins = false; 

closeSwitch.addEventListener("click", () => {
     if (aprins) {
        console.log('becul este stins')
        closeTheLight.src="becul-oprit.png"
      }else {
       console.log(' becul este aprins')
        closeTheLight.src="becul-pornit.png"
      }
   toggleB=!toggleB
})

