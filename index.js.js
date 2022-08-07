let count = 0

let countEl = document.getElementById("count-el")

function increment(){
    count += 1
    countEl.innerHTML = count
}

let saveEl = document.getElementById("save-el")

function save(){
    let countStr = count + " - "
    saveEl.textContent = saveEl.textContent + countStr
    countEl.textContent = 0
    count = 0
}

function total(){
     let no,sum = 0;
     let n = prompt("HOW MANY NUMBERS DO YOU WANT TO ENTER;");
     for(i=0; i<n;i++){
        no = parseInt(prompt("ENTER DATA;"));
        sum += parseInt(no);
   }
   let totalEl = document.getElementById("total-el")
   totalEl.textContent = sum
}

function refresh(){
    saveEl.textContent = "Previous Entries: ";
    let totalEl = document.getElementById("total-el")
    totalEl.textContent = 0;
}