const gcd = function(a, b) {
    if (!b) {
        return a;
    }

    return gcd(b, a % b);
}

const len = (num) => {
    if (num == -1) {
        return 0
    } else {
        return num.toString().length
    }
}


let dtf = document.querySelector("#dtf")
let ftd = document.querySelector("#ftd")

let result = document.querySelector("#result")
dtf.addEventListener("click", () => {
    let input = document.querySelector("#text").value

    let raw_pre_repeat = input.match(/(?<=\d+\.)\d+/g)
    let pre_repeat = parseInt(raw_pre_repeat ? raw_pre_repeat : "-1")

    let raw_repeat = input.match(/(?<=<)\d+(?=>)/g)
    let repeat = parseInt(raw_repeat ? raw_repeat : "-1")

    let len_pre_repeat = len(pre_repeat)
    let len_repeat = len(repeat)

    let natural = input.match(/\d+(?=\.)/g)

    let full_pre_repeat = 0
    let full_repeat = 0

    if (len_pre_repeat != 0) {
        full_pre_repeat = parseInt(natural + pre_repeat.toString())
    } else {
        full_pre_repeat = parseInt(natural)
    }

    if (len_repeat != 0) {
        full_repeat = parseInt(full_pre_repeat.toString() + repeat.toString())
    } else {
        full_repeat = 2 * full_pre_repeat
    }

    let numerator = full_repeat - full_pre_repeat

    let denominator = "9".repeat(len_repeat) + "0".repeat(len_pre_repeat)

    if (len_repeat == 0) {
        denominator = "1" + "0".repeat(len_pre_repeat)
    }

    let gcd_value = gcd(numerator, denominator)
    result.innerHTML = numerator / gcd_value + "/" + denominator / gcd_value
})

ftd.addEventListener("click", () => {
    let input = document.querySelector("#text").value
    result.innerHTML = eval(input)
})
