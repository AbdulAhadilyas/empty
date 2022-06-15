function start() {
  let userInput1 = Number(document.querySelector("#userinput1").value);
  let userInput2 = Number(document.querySelector("#userinput2").value);
  console.log(userInput1, userInput2);
  if (userInput1 != userInput2) {
    alert("please enter both input same");
  } else {
    let matix1 = document.querySelector("#box1");
    let matix2 = document.querySelector("#box2");
    for (let i = 0; i < userInput1; i++) {
      for (let j = 0; j < userInput2; j++) {
        matix1.innerHTML += `<input type="number"value="0" required min="0" max="20" id="matirx1_${i}${j}" ;style="width:30px;" placeholder="0" >`;
      }
      matix1.innerHTML += `<br>`;
    }
    for (let i = 0; i < userInput1; i++) {
      for (let j = 0; j < userInput2; j++) {
        matix2.innerHTML += `<input type="number" value="0" required min="0" max="20" id="matirx2_${i}${j}" ;style="width:30px;" placeholder="0" >`;
      }
      matix2.innerHTML += `<br>`;
    }
  }
  start = function () { };
}

function sum(a, b) {

  let userInput1 = Number(document.querySelector("#userinput1").value);
  let userInput2 = Number(document.querySelector("#userinput2").value);
  let result = document.querySelector("#box3");


  let m1 = [];
  let m2 = [];
  let m3 = [];
  for (let i = 0; i < userInput1; i++) {
    for (let j = 0; j < userInput2; j++) {
      let val = +(Number(document.getElementById(`matirx1_${i}${j}`).value))
      let val1 = +(Number(document.getElementById(`matirx2_${i}${j}`).value))
      m1.push([val])
      m2.push([val1])
      console.log(m1)
      console.log(m2)
    }
  }
  var aNumRows = m1.length, aNumCols = m1[0].length,
    bNumRows = m2.length, bNumCols = m2[0].length,
    m = new Array(aNumRows);  // initialize array of rows
  for (var r = 0; r < aNumRows; ++r) {
    m[r] = new Array(bNumCols); // initialize the current row
    for (var c = 0; c < bNumCols; ++c) {
      m[r][c] = 0;             // initialize the current cell
      for (var i = 0; i < aNumCols; ++i) {
        m[r][c] += m1[r][i] * m2[i][c];
      }
    }
    console.log(m)

    for (let i = 0; i < userInput1; i++) {
      for (let j = 0; j < userInput2; j++) {
        result.innerHTML += `<input type="number" required min="0" value="${m[i][j]}" max="20" style="width: 45px;" placeholder="0" disabled>`;
      }
      result.innerHTML += `<br>`;
    }
  }

  // for (let i = 0; i < userInput1; i++) {
  //   for (let j = 0; j < userInput2; j++) {
  //     m3.push([m])
  //     document.getElementById(`result_${i}${j}`).value = m3
  //   }
  // }
  // return m;
}