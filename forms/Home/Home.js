Button2.onclick=function(){
  lstNames.innerHTML = ""
  var location = inptKeyword.value
  var URL = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=41.26067, -95.94056&radius=10000&keyword=${location}&key=AIzaSyBMoVzUTADYgTYmBaJgw7MmkCk9ercFWUA`
  fetch(URL).then(response => response.json()).then(({results}) => {
  for (i = 0; i <5 ; i++){
     let group = document.getElementById("lstNames");
        group.style.background = "white"
        var li = document.createElement('li');
        var a = document.createElement('a');
        a.setAttribute('href','https://buy.stripe.com/test_14kaGw4toemagsU000')
        a.innerText = results[i].name;
        li.appendChild(a);
          group.appendChild(li); 
      
  }
  })
}