import fetch from "node-fetch";



fetch ('https://www.thecolorapi.com/id?hex=0047AB')
.then(response => response.json())
.then(data => console.log(data) );

