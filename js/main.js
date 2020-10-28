let selectItemsBlock = document.querySelector('.select-items-block');
let selectedItemsArr = [...selectItemsBlock.querySelectorAll('.currency-block')];
let selectItemsBlockBtn = document.getElementById('select-items-btn');
let mainItemBlock = document.getElementById('main-item-block');


selectItemsBlockBtn.addEventListener('click', () => {
	selectItemsBlock.classList.toggle('active');
});
selectedItemsArr.forEach(item => {
	item.addEventListener('click', () => {
		let html = item.innerHTML;
		mainItemBlock.innerHTML = html;
		selectItemsBlock.classList.remove('active');
	})
})


let selectCurrencyBlock = document.querySelector('.select-currency-block');
console.log(selectCurrencyBlock)
let selectedCurrencyArr = [...selectCurrencyBlock.querySelectorAll('.currency-text')];
let selectCurrencyBlockBtn = document.getElementById('select-currency-btn');
let mainCurrencyBlock = document.getElementById('main-currency-block');

selectCurrencyBlockBtn.addEventListener('click', () => {
	selectCurrencyBlock.classList.toggle('active');
});
selectedCurrencyArr.forEach(item => {
	item.addEventListener('click', () => {
		let html = item.innerHTML;
		mainCurrencyBlock.innerHTML = html;
		selectCurrencyBlock.classList.remove('active');
	})
});



let body = document.querySelector('body');
let burgerBtn = document.querySelector('.burger-btn');
let closeBtn = document.querySelector('.close-btn');
let menuBlock = document.querySelector('.menu-block');

burgerBtn.addEventListener('click', () => {
	menuBlock.classList.add('active');
	body.classList.add('locked');
})
closeBtn.addEventListener('click', () => {
	menuBlock.classList.remove('active');
	body.classList.remove('locked');
})
