const titles = document.querySelectorAll(".toggle-title");
const expression = document.querySelector(".expression");
const starter = document.querySelector("#start")
const overthink = document.querySelector("#overthink-everything")
const lastTask = document.querySelector(".last-task")

titles.forEach(title => {
    title.addEventListener("click", revealText)
});

function revealText() {
    const list = this.nextElementSibling;
    if (this.classList.contains("toggle-title")) {
        this.classList.remove("toggle-title");
        faceChange(this)
    }

    if (!(overthink.classList.contains("toggle-title"))) {
        list.classList.remove("hidden-text");
        expression.textContent = "😟"
        lastTask.textContent = "Overthink Again"
    }
}

function faceChange(text) {
    switch(text.textContent) {
        case ("Start the day"):
            expression.textContent = `¯\\_(ツ)_/¯`
            break;
        case ("Brush Teeth"):
            expression.textContent = `🪥( ￣皿￣)`
            break;
        case ("Eat and prepare meals for the day"):
            expression.textContent = `(๑ᵔ⤙ᵔ๑)`
            break;
        case ("Exercise"):
            expression.textContent = `(┬┬﹏┬┬)`
            break;
        case ("Shower"):
            expression.textContent = `(っ'-')╮🛁`
            break;
        case ("Prepare to go out"):
            expression.textContent = `ᕕ( ᐛ )ᕗ`
            break;
        case ("Head to work or school"):
            expression.textContent = `(っ- ＿ – )っ🧳`
            break;
        case ("Spend time with friends and family"):
            expression.textContent = `୧(•ᴗ•)(•ᴗ•)୨`
            break;
        case ("Prepare for bed"):
            expression.textContent = `* ( ᵕ _ ᵕ )*`
            break;
        case ("Sleep"):
            expression.textContent = `** (￣o￣) zzZ`
            break;
        default:
            expression.textContent = `٩(ˊ〇ˋ*)`
    }
}