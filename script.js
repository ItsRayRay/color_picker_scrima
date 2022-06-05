

document.querySelector("button").addEventListener("click", function(){


    // get value from colorpicker
    let color = document.querySelector("#favcolor").value;

    // remove hashtag from hex value

    color = color.substring(1);

    // fetch api
    fetch("https://www.thecolorapi.com/scheme?hex="+color+"&mode="+"monochrome")
    .then(res => res.json())
    .then(data => console.log(data) )




} )
