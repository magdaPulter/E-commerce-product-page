
// Lightbox Gallery
const mainImage = document.querySelector('.main-images')
const blackOverlay = document.querySelector('.black-overlay')
const btnClose = document.querySelector('.close')
const lightboxGallery = document.querySelector('.lightbox-gallery') //productView

//show Lightbox gallery
mainImage.addEventListener('click', (e) => {
    e.preventDefault()

    lightboxGallery.classList.add('show')
    blackOverlay.classList.add('show')
})

//hide Lightbox gallery
btnClose.addEventListener('click', () => {
    lightboxGallery.classList.remove('show')
    blackOverlay.classList.remove('show')
})

// Change main image via click image 
const imgMain = document.querySelectorAll('.main-gallery .main-images .product-image') 
const imgThumbnail = document.querySelectorAll('.main-gallery .thumbnail .product-image') 

const imgMainLightBox = document.querySelectorAll('.lightbox-gallery .main-images .product-image') 
const imgThumbnailLightBox = document.querySelectorAll('.lightbox-gallery .thumbnail .product-image') 

function showMainImage(contents, imgList){
    imgList.forEach((item, idx) => {
        item.addEventListener('click', (e) =>{

            e.preventDefault()
            hideAllContents()
            hideAllItems()

            item.classList.add('active')
            contents[idx].classList.add('show')
        })
    })

    const hideAllContents = () => {
        contents.forEach(content => {
            content.classList.remove('show')
        })
    }

    const hideAllItems = () => {
        imgList.forEach(item => {
            item.classList.remove('active')
        })
    }
}

// Main Gallery
showMainImage(imgMain, imgThumbnail)

// Lightbox Gallery 
showMainImage(imgMainLightBox, imgThumbnailLightBox)

// change front images via prev & next buttons
const prevBtn = document.querySelector('.previous')
const nextBtn = document.querySelector('.next')

let idx = 1

function changeFrontImage() {
    if(idx > imgMainLightBox.length){
        idx = 1
    } else if(idx < 1){
        idx = imgMainLightBox.length
    }

    imgMainLightBox.forEach(content => content.classList.remove('show'))
    imgMainLightBox[idx-1].classList.add('show')
}

nextBtn.addEventListener('click', () => {
    idx++
    changeFrontImage()
})

prevBtn.addEventListener('click', () => {
    idx--
    changeFrontImage()
})

// Shopping Card 

// Show and hide shopping-card 
const shoppingCard = document.querySelector('#shopping-card')
const cardSection = document.querySelector('.card-section')

shoppingCard.addEventListener('click', () => {
    cardSection.classList.toggle('active')
})

const  btnAddToCard = document.querySelector('#btn-add-to-card')
btnAddToCard.addEventListener('click', changeItemsQty)

function changeItemsQty() {
    let sum = 0
    const plus = document.querySelector('#plus'),
        minus = document.querySelector('#minus'),
        total = document.querySelector('#total')
        
    plus.addEventListener('click', () => {
        sum += 1
        total.innerHTML = `${sum}`
    })

    minus.addEventListener('click', () => {
        if(sum > 0) {
            sum -= 1
            total.innerHTML = `${sum}`
        }
    })

    const totalOutput = parseInt(total.textContent)
    const shoppingCardBadge = document.querySelector('#shopping-card-badge')

    if(totalOutput !==0){
        resetShoppingCard()
        const shoppingBadge = document.createElement('div')
        shoppingBadge.classList = 'shopping-badge'
        shoppingCardBadge.append(shoppingBadge)                         
            
        shoppingBadge.innerHTML =`
        <span>${totalOutput}</span>                       
        `

        cardSection.classList.remove('empty-card')
        cardSection.classList.add('full-card')

        cardSection.innerHTML = `
        <div class="cards full-card">
            <h6>Cart</h6>  
            <div class="product-cart">
                <img src="images/image-product-1.jpg" alt="">
                <div>
                    <p>Fall Limited Edition Sneakers</p>
                    <p>$125.00 x ${totalOutput} <span>\$${totalOutput * 125}</span></p>
                </div>
                <button class="btn-delete"><svg width="14" height="16" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z" id="a"/></defs><use fill="#C3CAD9" fill-rule="nonzero" xlink:href="#a"/></svg></button>
            </div>
            <button class="btn-checkout">Checkout</button>
        </div>`

        cardSection.querySelector('.btn-delete').addEventListener('click', () => {
            showEmptyCard()
            total.innerHTML = 0
    })
    } else {
        showEmptyCard()
    }

    function showEmptyCard(){
        resetShoppingCard()
        cardSection.classList.remove('full-card')
        cardSection.classList.add('empty-card')

        //Create empty card
        cardSection.innerHTML = `
        <div class="cards empty-card">
            <h6 class="">Cart</h6>  
            <div class="product-cart">
                <p class="">Your cart is empty</p>
            </div>
        </div>`
    }

    function resetShoppingCard(){
        if(shoppingCardBadge.hasChildNodes()){
            shoppingCardBadge.removeChild(shoppingCardBadge.children[0])
        } 
    }
}

changeItemsQty()

// Mobile design menu
const menu = document.querySelector('.menu')
const navbarNav = document.querySelector('.navbar-nav')

menu.addEventListener('click', () => {
    navbarNav.classList.add('active')
    blackOverlay.style.zIndex ='12';
    blackOverlay.classList.add('show')
})

document.querySelector('.nav-link.nav-close').addEventListener('click', ()=>{
    navbarNav.classList.remove('active')
})

