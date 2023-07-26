const tempload = () => {
  let temp = document.getElementById("temp");
  temp.innerHTML = "&#xf2cb";
  setTimeout(() => {
    temp.innerHTML = "&#xf2ca";
  }, 1000);
  setTimeout(() => {
    temp.innerHTML = "&#xf2c9";
  }, 2000);
  setTimeout(() => {
    temp.innerHTML = "&#xf2c8";
  }, 3000);
  setTimeout(() => {
    temp.innerHTML = "&#xf2c7";
  }, 4000);
};
tempload();
setInterval(tempload, 5000);
