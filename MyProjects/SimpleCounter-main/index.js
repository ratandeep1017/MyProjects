let count1 = 0,
  count2 = 0;

document.getElementById("decreaseBtn1").onclick = function () {
  count1--;
  document.getElementById("countLabel1").innerHTML = count1;
};
document.getElementById("decreaseBtn2").onclick = function () {
  count2--;
  document.getElementById("countLabel2").innerHTML = count2;
};
document.getElementById("increaseBtn1").onclick = function () {
  count1++;
  document.getElementById("countLabel1").innerHTML = count1;
};
document.getElementById("increaseBtn2").onclick = function () {
  count2++;
  document.getElementById("countLabel2").innerHTML = count2;
};

document.getElementById("resetBtn").onclick = function () {
  count1 = count2 = 0;
  document.getElementById("countLabel1").innerHTML = count1;
  document.getElementById("countLabel2").innerHTML = count2;
};
