const areaTextinput = document.querySelector("#areaInput")
const caculateBtn = document.querySelector("#calculateBtn")
const answersContainer = document.querySelector("#answers")

table = []
let diameters = [6, 8, 10, 12, 14, 16, 18, 22, 25, 28, 30, 32, 34, 36, 38, 40]

caculateBtn.addEventListener("click", () => {
  const inputArea = Number(areaTextinput.value)
  for (let i = 0; i < diameters.length; i++) {
    for (let j = 1; j <= 10; j++) {
      let cell = {
        name: `${j} FI ${diameters[i]}`,
        area: Number(j * 0.25 * Math.PI * diameters[i] * diameters[i]),
      }
      cell.delta = Math.abs(cell.area - inputArea)
      console.log(cell.delta)
      table.push(cell)
    }
  }
  table.sort((a, b) => {
    return a.delta > b.delta ? 1 : -1
  })
  answersContainer.innerHTML = ""
  for (let i = 0; i < 5; i++) {
  
    let p = document.createElement("p")
    p.innerHTML = `${table[i].name}: Area = ${table[i].area.toFixed(3)} deltaArea = ${table[i].delta.toFixed(3)}`
    answersContainer.appendChild(p)
    answersContainer.style.visibility = "visible"
  }
})

// for(let i=0; i<diameters.length;i++){
//     for(let j=1; j<=10; j++){
//         let cell={
//             name : `${j} FI ${diameters[i]}`,
//             area : Number(j* 0.25 * Math.PI * diameters[i]*diameters[i]),
//         }
//         cell.delta = Math.abs(cell.area - inputArea)
//         console.log(cell.delta)
//         table.push(cell)
//     }
// }
// table.sort((a,b)=>{
//     return a.delta > b.delta ? 1:-1
// })
