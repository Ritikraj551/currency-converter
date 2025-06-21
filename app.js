const baseUrl ="https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies"
const dropdownSelect = document.querySelectorAll(".dropdown-container select")
let btn = document.querySelector("button")
const fromCurr=document.querySelector(".from select")
const toCurr=document.querySelector(".to select")

for(let select of dropdownSelect){
    for(currCode in countryList){
        let newOption= document.createElement("option");
        newOption.innerText = currCode;
        newOption.value=currCode;
        if(select.name ==="from" && currCode ==="USD"){
            newOption.selected = "selected";
        }else if(select.name ==="to" && currCode ==="INR"){
            newOption.selected = "selected";
        }
        select.append(newOption);
    }
    select.addEventListener("change", (evt)=>{
    updateFlag(evt.target);
})
}

const updateFlag = (element) =>{
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let newSrc =`https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
}

btn.addEventListener("click",async (evt)=>{
    evt.preventDefault();
    let amount=document.querySelector(".amount-input input");
    let amtVal = amount.value;
    if(amtVal === "" || amtVal < 1){
        amtVal=1;
        amount.value="1"
    }

    const URL = `${baseUrl}/${fromCurr.value.toLowerCase()}.json`;
    let response = await fetch(URL);
    let data = await response.json()
    let newData = data.toCurr.value;
    console.log(data)


})