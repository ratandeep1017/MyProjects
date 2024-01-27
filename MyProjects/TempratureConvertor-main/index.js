function convert() {
  let temp = document.getElementById("textBox").value; //string value
  let mytext = document.getElementById("tempLabel"); //string value
  let cbutton = document.getElementById("cButton"); //boolean value
  let fbutton = document.getElementById("fButton"); //boolean value
  temp = Number(temp);

  if (cbutton.checked) {
    temp = (temp - 32) * (5 / 9);
    mytext.innerHTML = "Temprature in Celsius : " + temp.toFixed(2) + "°C";
  } else if (fbutton.checked) {
    temp = (temp * 9/5) + 32;
    mytext.innerHTML = "Temprature in Fahrenheit : " + temp.toFixed(2) + "°F";
  }
}
