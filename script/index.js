const modalFunc = () => {
    const modal = document.querySelector('.cart-modal-overlay')
    const cartBtn = document.querySelector('#cart-button')
    // const closeBtn = document.querySelector('.cart-modal-header-close')

    const openModal = () => {
        modal.classList.add('open')
    }

    const closeModal = () => {
        modal.classList.remove('open')
    }

    cartBtn.addEventListener('click', () => {
        openModal()
    })

    // closeBtn.addEventListener('click', () => {
    //     closeModal()
    // })

    modal.addEventListener('click', (event) => {
        if (event.target.classList.contains('cart-modal-overlay') || event.target.closest('.cart-modal-header-close')) {
            closeModal()
        }
    })
}

const restsFunc = () => {
    const container = document.querySelector('#rests-container')

    const restArray = [{
        id: 0,
        title: 'Пицца плюс',
        time: 50,
        raiting: 4.5,
        price: 900,
        type: 'Пицца',
        image: 'rest_1.jpg'
    },
    {
        id: 1,
        title: 'Тануки',
        time: 50,
        raiting: 4.5,
        price: 900,
        type: 'Пицца',
        image: 'rest_2.jpg'
    },
    {
        id: 2,
        title: 'FoodBand',
        time: 50,
        raiting: 4.5,
        price: 900,
        type: 'Пицца',
        image: 'rest_3.jpg'
    },
    {
        id: 3,
        title: 'Жадина-пицца',
        time: 50,
        raiting: 4.5,
        price: 900,
        type: 'Пицца',
        image: 'rest_4.jpg'
    },
    {
        id: 4,
        title: 'Точка еды',
        time: 50,
        raiting: 4.5,
        price: 900,
        type: 'Пицца',
        image: 'rest_5.jpg'
    },
    {
        id: 5,
        title: 'PizzaBurger',
        time: 50,
        raiting: 4.5,
        price: 900,
        type: 'Пицца',
        image: 'rest_5.jpg'
    }]

    const loading = () => {
        container.innerHTML = '<p style="width: 100%; text-align: center;">Загрузка</p>'
    }

    const renderRests = (arr) => {
        container.innerHTML = ''

        arr.forEach((card) => {
            container.insertAdjacentHTML('beforeend', `
                <a href="./goods.html?id=${card.id}" class="products-card">
                    <div class="products-card-image">
                    <img src="./images/rests/${card.image}" alt="${card.image}" />
                    </div>
                    <div class="products-card-description">
                    <div class="products-card-description-row">
                        <h4 class="products-card-description-title">${card.title}</h4>
                        <div class="products-card-description-bage">${card.time} мин</div>
                    </div>
                    <div class="products-card-description-row">
                        <div class="products-card-description-info">
                        <div class="products-card-description-raiting">
                            <img src="./images/icons/star.svg" alt="star" />
                            ${card.raiting}
                        </div>
                        <div class="products-card-description-price">
                            От ${card.price} ₽
                        </div>
                        <div class="products-card-description-group">${card.type}</div>
                        </div>
                    </div>
                    </div>
                </a>
            `)
        })
    }

    if (container) {
        loading()

        setTimeout(() => {
            renderRests(restArray)
        }, 1000);
    }
}

const goodsFunc = () => {
    const container = document.querySelector('#goods-container')

    const goodArray = [{
        id: 0,
        name: 'Ролл угорь стандарт',
        text: 'Рис, угорь, соус унаги, кунжут, водоросли нори.',
        price: 250,
        image: 'good_1.jpg'
    },
    {
        id: 1,
        name: 'Калифорния лосось стандарт',
        text: 'Рис, лосось, авокадо, огурец, майонез, икра масаго, водоросли нори.',
        price: 395,
        image: 'good_2.jpg'
    },
    {
        id: 2,
        name: 'Окинава стандарт',
        text: 'Рис, креветка отварная, сыр сливочный, лосось, огурец свежий...',
        price: 250,
        image: 'good_3.jpg'
    },
    {
        id: 3,
        name: 'Цезарь маки хl',
        text: 'Рис, куриная грудка копченая, икра масаго, томат, айсберг, соус цезарь...',
        price: 250,
        image: 'good_4.jpg'
    },
    {
        id: 4,
        name: 'Ясай маки стандарт 185 г',
        text: 'Рис, помидор свежий, перец болгарский, авокадо, огурец, айсберг',
        price: 250,
        image: 'good_5.jpg'
    },
    {
        id: 5,
        name: 'Ролл с креветкой стандарт',
        text: 'Рис, водоросли нори, креветки отварные, сыр сливочный, огурцы',
        price: 250,
        image: 'good_6.jpg'
    }]

    const loading = () => {
        container.innerHTML = '<p style="width: 100%; text-align: center;">Загрузка</p>'
    }

    const renderGoods = (arr) => {
        container.innerHTML = ''

        arr.forEach((card) => {
            container.insertAdjacentHTML('beforeend', `
                <div class="products-card">
                    <div class="products-card-image">
                        <img src="./images/goods/${card.image}" alt="${card.image}" />
                    </div>
                    <div class="products-card-description">
                        <div class="products-card-description-row">
                            <h5 class="products-card-description-name">
                            ${card.name}
                            </h5>
                        </div>
                        <div class="products-card-description-row">
                            <p class="products-card-description-text">
                            ${card.text}
                            </p>
                        </div>
                        <div class="products-card-description-row">
                            <div class="products-card-description-controls">
                            <button class="btn btn-primary">
                                В корзину
                                <img
                                src="./images/icons/shopping-cart.svg"
                                alt="shopping-cart"
                                />
                            </button>
                            <span class="products-card-description-controls-price">
                                ${card.price} ₽
                            </span>
                            </div>
                        </div>
                    </div>
                </div>    
            `)
        })
    }

    if (container) {
        loading()

        setTimeout(() => {
            renderGoods(goodArray)
        }, 1000);
    }
}

modalFunc()
restsFunc()
goodsFunc()