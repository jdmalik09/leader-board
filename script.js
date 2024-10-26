let data = [];
let fname = document.querySelector(".fname");
let lname = document.querySelector(".lname");
let pcountry = document.querySelector(".country");
let pscore = document.querySelector(".number");
let button = document.querySelector(".button");
let boards = document.querySelector(".boards");

button.addEventListener("click", (e)=>{

    e.preventDefault();
    if(fname.value==="" || lname.value===""|| pcountry.value===""|| pscore.value===""){
        alert("Please fill all the fields");
    }
    else{
        let playerObj = {
            fname: fname.value,
            lname: lname.value,
            country: pcountry.value,
            score: pscore.value
        }

        data.push(playerObj);
        updateUI();

        fname.value = "";
        lname.value = "";
        pcountry.value = "";
        pscore.value = "";
    }

});


function updateUI(){
    data.sort((a,b)=>{
        return b.score - a.score;
    })

    let showData = "";
    data.forEach(function(item){
        const currentDate = new Date();
        const dateString = currentDate.toLocaleString(); // Get current date and time as a string
        let fullName = 
        showData+=`
        <div class = "button_group">
        <span class="span1">${item.fname} ${item.lname} <br>
        <span class="date">${dateString}</span></span>
        <span class="coun">${item.country}</span>
        <span class="score">${item.score}</span>
        <button class = "plus">+5</button>
        <button class = "del">X</button>
        <button class = "minus">-5</button>
        </div>
        `;
    })
    console.log(showData);
    boards.innerHTML = showData;
    activeButtons();
}

function activeButtons(){

    document.querySelectorAll(".button_group").forEach((ele, index)=>{
        ele.addEventListener("click", (e)=>{
            // console.log(e);
            if(e.target.classList.contains("plus")){
                let score = parseInt(data[index].score);
                score += 5;
                data[index].score = score;
                updateUI();
            }else if(e.target.classList.contains("minus")){
                data[index].score -= 5;
                updateUI();
            }else if(e.target.classList.contains("del")){
                data.splice(index, 1);
                updateUI();
            }
        })
    })
}