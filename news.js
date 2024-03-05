'use strict'
getNews();
function getNews(){
    fetch(`/getNews.php`).then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
        .then(data => {
            // console.log(data)
            for (let dataKey of data) {
                renderNews(dataKey.title, dataKey.text, dataKey.date);
            }
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
}

function renderNews(title, text, date){
    let wrapperNews = document.querySelector('.wrapper__news');
    wrapperNews.innerHTML+=`
<div class="wrapper__news">
    <div class="news__blank">
        <h2 class = "news__title">${title}</h2>
        <p class="news__text">${text}</p>
        <div class="news__date">
            <span>${date}</span>
        </div>
    </div>
</div>
  
        `;
}