
   let colorArray = " "



document.querySelector("button").addEventListener("click", function(){

    // get value from colorpicker

    let color = document.querySelector("#favcolor").value;
    let mode = document.querySelector("#color-scheme").value

    console.log(mode)

    // remove hashtag from hex value
    color = color.substring(1);


    // fetch api
    
    fetch("https://www.thecolorapi.com/scheme?hex="+color+"&mode="+mode)
    .then(res => res.json())
    .then(data => colorArray = data.colors)
    
renderColors()
} )


function renderColors(){

    for (let i = 0; i < colorArray.length; i++) {
      document.querySelector("#hexcodefooter"+i).textContent = colorArray[i].hex.value
  }

 
}