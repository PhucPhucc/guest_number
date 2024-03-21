const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const body = $("body")
const btn = $$(".btn_dif")
const summit = $(".btn")

let level
let arrBot
let arrGuest
const app = () => {
    
    btn.forEach((e, index) => {
        e.addEventListener("click", () => {
            level = index + 3
            render()
            arrBot = random(level)   
            // console.log(arrBot, arrGuest)
        }) 
    })
    
    summit.addEventListener("click", () => {
        arrGuest = guest(level)
        console.log(arrBot, arrGuest)
        let count = compare(arrBot, arrGuest, level)
        render1(arrGuest, count)
        if(count == level) {
            win(arrBot)
        }
    })
}

const render = () => {

    const wrap = $(".wrap")
    const hide = $(".hide")
    wrap.classList.add("active")
    hide.classList.remove("active")

}

let content = ""
const render1 = (guest, count) => {
    const list = $(".list")
    content = ` 
    <li class="item">
        <span>
            Bạn đoán ${guest.join("")} có ${count} vị trí đúng
        </span>
    </li>`

    list.innerHTML += content
}

const random = (level) => {
    let arr = push(level)
    if(arr[0] != 0) {
        return arr
    }
    return random(level)
}

const push = (level) => {
    let arr = []
    for(let i = 0; i < level; i++) {
        let ran = Math.floor(Math.random() * 10)
        arr.push(ran)
    }
    return arr
}



const guest = (level) => {
    const input = $(".inp")
    let value = input.value
    input.value = ""
    if(value.length == level) {
        let arrGuest = value.split("")
        // console.log(arrGuest, value)
        return arrGuest
    }
       
    
}

const compare = (arr1, arr2, level) => {
    let count = 0
    for(let i = 0; i < level; i++) {
        if(arr1[i] == arr2[i]) {
            count++
            console.log(count)
        }
    }
    return count
}

const win = (guest) => {
    body.innerHTML = `
    <div class="win">
    <span>Ní đã thắng chúc mừng gất nhiều</span>
    <span>Số ní đoán là ${guest.join("")}</span>
</div>
    `
}

app()