const list = document.querySelector('ul')
const buttonShowAll = document.querySelector('.show-all')
const buttonDiscount = document.querySelector('.discount')
const buttonReduce = document.querySelector('.reduce')
const buttonFilter = document.querySelector('.filter')



buttonShowAll.addEventListener('click', () => showAll(menuOptions))
buttonDiscount.addEventListener('click', discount)
buttonReduce.addEventListener('click', SunAll)
buttonFilter.addEventListener('click', filterProducts)


function showAll(arrayRefresh) {
  let myLi = ''
  arrayRefresh.forEach((products) => {
    myLi += `
    
    <li>
      <img src=${products.src}>
      <p>${products.name}</p>
      <p class="price"> ${formatCurrency(products.price)}</p>
    </li>
    `

  })

  list.innerHTML = myLi
}

function discount() {
  const dicountValue = menuOptions.map((products) => ({
    ...products,
    price: products.price * 0.9,

  }))
  showAll(dicountValue)
}

function formatCurrency(value){
 const newValue = value.toLocaleString('pt-br', {
  style: 'currency',
  currency: 'BRL',
})
return newValue
}

function SunAll() {
  const showSun = menuOptions.reduce((acc, currency) => acc + currency.price, 0)
  list.innerHTML = 
    `<li>
      <p> O valor de todos os Hambúgers é de ${formatCurrency(showSun)}</p>
    </li>`
}
function filterProducts() {
  const filterJustVegan = menuOptions.filter((products) => products.vegan)
  showAll(filterJustVegan)
}