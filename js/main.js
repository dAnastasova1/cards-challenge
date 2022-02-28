let result
fetch("../data.json")
    .then(response => {
        return response.json();
    })
    .then(res => {
        result = res;
        const container = document.querySelector('#container')
        res.forEach((cardObject,index) => {
            const parsedDate = cardObject.date.substring(0,10)
            if(index < 4){
                container.innerHTML += `
     <div class="card-container">
        <img class="profile-image" src=` + cardObject.profile_image + `>
        <div class="profile-info">
        <h3 class="profile-name">` + cardObject.name + `</h3>
    <p class="profile-date">` + parsedDate +`</p>
</div>
    <img class="insta-logo" src="icons/instagram-logo.svg">
        <img class="card-img" src=` + cardObject.image + `>
            <p class="caption">` + cardObject.caption +`</p>
            <hr/>
            <button class="like-btn" value="0">
                <img src="icons/heart.svg">
            </button>
            <p class="like-count">` + cardObject.likes +`</p>
        </div>
        `
            }
        })
        const likeButtons = document.querySelectorAll('.like-btn')
        const likeCounts = document.querySelectorAll('.like-count')
        likeButtons.forEach((btn, index) => {
            btn.addEventListener('click', () => {
                if (btn.classList.contains('selected')) {
                    likeCounts[index].textContent = (Number(likeCounts[index].textContent) - 1).toString()
                } else {
                    likeCounts[index].textContent = (Number(likeCounts[index].textContent) + 1).toString()
                }
                btn.classList.toggle('selected');
            })
        })

    })

const loadBtn = document.querySelector('#load-more-btn')
loadBtn.addEventListener('click', () => {
    const container = document.querySelector('#container')
    const cardCount = document.querySelectorAll('.card-container').length
    result.forEach((cardObject,index) => {
        if(index >= cardCount && index < cardCount+4) {
            const parsedDate = cardObject.date.substring(0, 10)
                container.innerHTML += `
     <div class="card-container">
        <img class="profile-image" src=` + cardObject.profile_image + `>
        <div class="profile-info">
        <h3 class="profile-name">` + cardObject.name + `</h3>
    <p class="profile-date">` + parsedDate + `</p>
</div>
    <img class="insta-logo" src="icons/instagram-logo.svg">
        <img class="card-img" src=` + cardObject.image + `>
            <p class="caption">` + cardObject.caption + `</p>
            <hr/>
            <button class="like-btn" value="0">
                <img src="icons/heart.svg">
            </button>
            <p class="like-count">` + cardObject.likes + `</p>
        </div>
        `
            }
    })
    const newCardCount = document.querySelectorAll('.card-container').length
    if(newCardCount >= result.length){
        loadBtn.disabled = true;
    }
    const likeButtons = document.querySelectorAll('.like-btn')
    const likeCounts = document.querySelectorAll('.like-count')
    likeButtons.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            //if the button is selected, we are deselecting it, therefore reducing the value of the same indexed like-count element
            if (btn.classList.contains('selected')) {
                likeCounts[index].textContent = (Number(likeCounts[index].textContent) - 1).toString()
            } else {
                likeCounts[index].textContent = (Number(likeCounts[index].textContent) + 1).toString()
            }
            btn.classList.toggle('selected');
        })
    })
})


