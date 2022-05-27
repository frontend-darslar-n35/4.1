// const user = {
//     firstname:"Some name",
//     lastname:"Another name",
//     age:31
// }

// var salaries = {
//     Ahmad:1200,
//     Bekzod:5200,
//     Karima:1000
// }
// function sumSalaries(obj){
//     let sum = 0
//     for (key in obj)
//         sum+=obj[key]
//     return sum
// }

// console.log(sumSalaries(salaries))

// var numbers = []

// for(;true;){
//     let numberEl = prompt("Raqam kiriting:", 0);

//     if(!numberEl || isNaN(numberEl-0))break;
//     numbers.push(numberEl-0)
// }
// let sum =0 
// for(let i=0; i< numbers.length; i++)sum+=numbers[i];
// console.log(sum)
// var text = "Hello World"
// console.log(text.split("", 4))


// function findSum(arr){
//     // 
// }

// var findSum = (arr) => {
//     // 
// }

// console.log(findSum)
// var findSum = function(arr) {
//     // 
// }

// const isPositive = num => num > 0 ? true : false
// console.log(isPositive(-11))
// console.log(isPositive(11))

// console.log(findSum)
// form.addEventListener('click', (event) => {

// })


// const arr = [12, 23, 87, 4];

// arr.forEach((value, index)=> value < 0 ? arr[index] = -value : arr[index] = value )

// let sum = 0
// arr.forEach(value=> sum+=value)
// console.log(sum)



let containerEl = document.createElement("div")
document.body.appendChild(containerEl)

var regionsSelect = createDefaultSelect()
var districtsSelect = createDefaultSelect()
var quartersSelect = createDefaultSelect()

containerEl.appendChild(regionsSelect)
containerEl.appendChild(districtsSelect)
containerEl.appendChild(quartersSelect)

var myRegions = filterRegions(regions)
var myDistricts = filterDistricts(districts)
var myQuarters = filterQuarters(quarters)


regionsSelect.addEventListener("change", (event) => {
    let foundedDistricts = findDistricts(event.target.value, myDistricts)
    renderSelect(foundedDistricts, districtsSelect)
})

districtsSelect.addEventListener("change", (event) => {
    let foundedQuearters = findQuarters(event.target.value, myQuarters)
    renderSelect(foundedQuearters, quartersSelect)
})

quartersSelect.addEventListener('change', (event) => {
    console.log(event.target.value)
})



function rendarAll(){
    renderSelect(myRegions, regionsSelect)
}

rendarAll()


function createDefaultSelect(){
    let parentSelectEl = document.createElement("select")
    let optionEl = document.createElement('option')
    optionEl.textContent = "-- Select -- "
    optionEl.disabled = true
    optionEl.selected = true
    parentSelectEl.appendChild(optionEl)
    return parentSelectEl
}


function renderSelect(arr, selectEl){
    selectEl.innerHTML = null;
    arr.forEach((value, index) => {
        let optionEl = document.createElement('option')
        optionEl.textContent = value.name
        optionEl.value = value.id
        selectEl.appendChild(optionEl)
    })
}


