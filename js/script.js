let bg = document.querySelectorAll('.mouse-parallax-bg');
for (let i = 0; i < bg.length; i++){
    window.addEventListener('mousemove', function(e) {
        let x = e.clientX / window.innerWidth;
        let y = e.clientY / window.innerHeight;
        bg[i].style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
    });
}

const plusQuantityCardLike = document.querySelectorAll('.plusQuantityCardLike');
const minusQuantityCardLike = document.querySelectorAll('.minusQuantityCardLike');


minusQuantityCardLike.forEach(el => {
    el.addEventListener('click' , (e) => {
        let price = Number(e.target.closest('.paddingCardLike').children[3].querySelector('.jsNubmer').textContent)   //   price  card
        let conuterFullPrice = e.target.closest('.blockQuantityAndBtn').children[1].querySelector('.priceFullCardLike').value;   //  подсчет стоимости
        let increment = e.target.closest('.blockQuantityAndBtn').children[0].querySelector('.counterInputQuantity').value;
        if (increment > 0) {
            e.target.closest('.blockQuantityAndBtn').children[0].querySelector('.counterInputQuantity').value = --increment;
        }
        e.target.closest('.blockQuantityAndBtn').children[1].querySelector('.priceFullCardLike').value = increment * price + ' руб.';
    // e.target.closest('.blockQuantityAndBtn').children[0].querySelector('.counterInputQuantity').value = --e.target.closest('.blockQuantityAndBtn').children[0].querySelector('.counterInputQuantity').value;
    })
})
plusQuantityCardLike.forEach(el => {
    el.addEventListener('click' , (e) => {
        let price = Number(e.target.closest('.paddingCardLike').children[3].querySelector('.jsNubmer').textContent)   //   price  card
        let conuterFullPrice = e.target.closest('.blockQuantityAndBtn').children[1].querySelector('.priceFullCardLike').value;   //  подсчет стоимости
        let increment = e.target.closest('.blockQuantityAndBtn').children[0].querySelector('.counterInputQuantity').value;
        e.target.closest('.blockQuantityAndBtn').children[0].querySelector('.counterInputQuantity').value = ++increment;
        e.target.closest('.blockQuantityAndBtn').children[1].querySelector('.priceFullCardLike').value = increment * price + ' руб.';
        // e.target.closest('.blockQuantityAndBtn').children[0].querySelector('.counterInputQuantity').value = --e.target.closest('.blockQuantityAndBtn').children[0].querySelector('.counterInputQuantity').value;
    })
})




//   кнопка наверх

const btnUp = {
    el: document.querySelector('.go-top'),
    addEventListener() {
        // при прокрутке содержимого страницы
        window.addEventListener('scroll', () => {
            // определяем величину прокрутки
            const scrollY = window.scrollY || document.documentElement.scrollTop;
        });
        // при нажатии на кнопку .btn-up
        document.querySelector('.go-top').onclick = () => {

                // переместим в начало страницы
                window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: 'smooth'
                });

        }
    }
}

btnUp.addEventListener();


//   мобильное меню






const likedCard = [];
const clickLike = document.querySelectorAll('.likeIcon');

clickLike.forEach(el => {
    el.addEventListener('click' , e => {
        const imageLike = e.target.closest('.cardLike').children[0].src;
        const nameLike = e.target.closest('.cardLike').querySelector('.titleCardLike').innerText;
        const priceLike = e.target.closest('.cardLike').querySelector('.priceCardLike').innerText;
        const quantityLike = e.target.closest('.cardLike').querySelector('.counterInputQuantity').value;
        const fullpriceLike = e.target.closest('.cardLike').querySelector('.priceFullCardLike').value;
        console.log(quantityLike)
        const elementLike = [];
        elementLike.push(imageLike, nameLike, priceLike, quantityLike, fullpriceLike)
        console.log(elementLike);
        likedCard.push(elementLike)
        console.log(likedCard)
    })
})


/*   переключение между страницами    */

const page = document.querySelectorAll('.page');

page.forEach(el => {
    el.addEventListener('click' , e => {
        const pageActive = document.querySelector('.page.active');
        if (e.target === pageActive) {
            console.log(e.target);
        }
        else {
            pageActive.classList.remove('active');
            el.classList.add('active');
        }
    })
})


/*   показать больше карточек  */


const cardAll = document.querySelectorAll('.cardAll');
const n = 3;

console.log(cardAll)

if (cardAll > 3) {
    const newArr = cardAll.slice(n);
    console.log(newArr);
}



/*  filter price  */


const rangeInput = document.querySelectorAll(".range-input input"),
    priceInput = document.querySelectorAll(".price-input input"),
    range = document.querySelector(".slider .progress");
let priceGap = 1000;

priceInput.forEach((input) => {
    input.addEventListener("input", (e) => {
        let minPrice = parseInt(priceInput[0].value),
            maxPrice = parseInt(priceInput[1].value);

        if (maxPrice - minPrice >= priceGap && maxPrice <= rangeInput[1].max) {
            if (e.target.className === "input-min") {
                rangeInput[0].value = minPrice;
                range.style.left = (minPrice / rangeInput[0].max) * 100 + "%";
            } else {
                rangeInput[1].value = maxPrice;
                range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
            }
        }
    });
});

rangeInput.forEach((input) => {
    input.addEventListener("input", (e) => {
        let minVal = parseInt(rangeInput[0].value),
            maxVal = parseInt(rangeInput[1].value);

        if (maxVal - minVal < priceGap) {
            if (e.target.className === "range-min") {
                rangeInput[0].value = maxVal - priceGap;
            } else {
                rangeInput[1].value = minVal + priceGap;
            }
        } else {
            priceInput[0].value = minVal;
            priceInput[1].value = maxVal;
            range.style.left = (minVal / rangeInput[0].max) * 100 + "%";
            range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
        }
    });
});


/*  card shop  */


const btn_open_shop = document.querySelector('.shopCard');  //   card shop
const block_open = document.querySelector('.block_card_shop ');
const btn_open_shop2 = document.querySelector('.likedCard');  //   like shop
const block_open2 = document.querySelector('.block_card_shop2');


btn_open_shop.addEventListener('click', e => {
    block_open.classList.toggle('none_card_shop');
    block_open2.classList.add('none_card_shop2')
})

/*  like card  */

btn_open_shop2.addEventListener('click', e => {
    block_open2.classList.toggle('none_card_shop2');
    block_open.classList.add('none_card_shop')
})

