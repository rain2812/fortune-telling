let btn = document.getElementById("btn");
let result = document.getElementById("result");
let txt ="";
let title ="";
// 放資料
for (const key in data) {
    let item = document.createElement("li");
    item.classList.add("item");
    item.textContent = key;
    document.getElementById("check").appendChild(item);   
}

// 特效
let items = document.getElementsByClassName("item");
for (const ite of items) {
    ite.addEventListener("mouseover", function(){
        ite.classList.add("big");
    })
    ite.addEventListener("mouseout", function(){
        ite.classList.remove("big");
    })
    ite.addEventListener("click", function(){
        title = this.textContent;
        for (const i of items) {
            i.classList.remove("check");
            i.classList.remove("big");
        }
        this.classList.add("check");
        document.getElementById("result").style.display = "block";
        let x = Math.floor(Math.random()*data[title].length);
        txt = data[title][x];
    })
}
// 抽籤
btn.addEventListener("click", function(){
    let load = document.getElementById("load");
    load.style.display = "block";
    setTimeout(function(){
        load.remove();
        document.getElementById("check").remove();
        result.textContent = txt;
        document.getElementById("title").textContent = title;
        document.getElementById("reset").style.display = "block";
        btn.remove();
    }, 2000);
})