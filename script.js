// темная-светлая тема

const toggle = document.querySelector('.svg-theme');

toggle.addEventListener('click', function() {

  document.body.classList.toggle('light-theme'); 
  const back = document.querySelector('.background'); 
  const contact = document.querySelector('.sect-contact'); 

  if (document.body.classList.contains('light-theme')) {
	  if (document.documentElement.clientWidth <= 768) {
		  back.style.background = 'url("assets/img/header-bg-light.jpg") 0 -40px/1000px 639px no-repeat';
		  contact.style.background = 'url("assets/img/contact-light.jpg") -230px 0px/auto 100% no-repeat';
	  }
	  else {
		  back.style.background = 'url("assets/img/header-bg-light.jpg") no-repeat';
		  contact.style.background = 'url("assets/img/contact-light.jpg") no-repeat';
	  }
  }
  else {
	  if (document.documentElement.clientWidth <= 768) {
		  back.style.background = 'url("assets/img/header-bg.jpg") 0 -40px/1000px 639px no-repeat';
		  contact.style.background = 'url("assets/img/contact.jpg") -230px 0px/auto 100% no-repeat';
	  }
	  else {
		  back.style.background = 'url("assets/img/header-bg.jpg") no-repeat';
		  contact.style.background = 'url("assets/img/contact.jpg") no-repeat';
	  }
  }
})

// открытие меню бублика

const menu = document.getElementById('menu-toggle-nav');
menu.addEventListener('click', function() {
	const box = document.querySelector('.menu-box');
	box.style.visibility = (box.style.visibility == 'visible') ? 'hidden' : 'visible';
})

// закрытие меню бублика после нажатия на строки меню

const items = document.querySelectorAll('.menu-item');
items.forEach(el => el.addEventListener('click', function() {
	document.querySelector('.menu-box').style.visibility = 'hidden';
	document.getElementById('menu-toggle-nav').checked = false;
}))

// картинки из папки 

const btn = document.querySelectorAll('.btn-season');
btn.forEach(el => el.addEventListener('click', function() {
	document.querySelectorAll('.img-foto')
			.forEach((item, index) => item.src='assets/img/' + this.getAttribute('id') + '/' + String(index+1) + '.jpg');  
}))

// перевод русский-английский

const i18Obj = {
	'en': {
	  'skills': 'Skills',
	  'portfolio': 'Portfolio',
	  'video': 'Video',
	  'price': 'Price',
	  'contacts': 'Contacts',
	  'hero-title': 'Alexa Rise',
	  'hero-text': 'Save sincere emotions, romantic feelings and happy moments of life together with professional photographer Alexa Rise',
	  'hire': 'Hire me',
	  'skill-title-1': 'Digital photography',
	  'skill-text-1': 'High-quality photos in the studio and on the nature',
	  'skill-title-2': 'Video shooting',
	  'skill-text-2': 'Capture your moments so that they always stay with you',
	  'skill-title-3': 'Retouch',
	  'skill-text-3': 'I strive to make photography surpass reality',
	  'skill-title-4': 'Audio',
	  'skill-text-4': 'Professional sounds recording for video, advertising, portfolio',
	  'winter': 'Winter',
	  'spring': 'Spring',
	  'summer': 'Summer',
	  'autumn': 'Autumn',
	  'price-descripton-1-span-1': 'One location',
	  'price-descripton-1-span-2': '120 photos in color',
	  'price-descripton-1-span-3': '12 photos in retouch',
	  'price-descripton-1-span-4': 'Readiness 2-3 weeks',
	  'price-descripton-1-span-5': 'Make up, visage',
	  'price-descripton-2-span-1': 'One or two locations',
	  'price-descripton-2-span-2': '200 photos in color',
	  'price-descripton-2-span-3': '20 photos in retouch',
	  'price-descripton-2-span-4': 'Readiness 1-2 weeks',
	  'price-descripton-2-span-5': 'Make up, visage',
	  'price-descripton-3-span-1': 'Tree locations or more',
	  'price-descripton-3-span-2': '300 photos in color',
	  'price-descripton-3-span-3': '50 photos in retouch',
	  'price-descripton-3-span-4': 'Readiness 1 weeks',
	  'price-descripton-3-span-5': 'Make up, visage, hairstyle',
	  'order': 'Order shooting',
	  'contact-me': 'Contact with me',
	  'send-message': 'Send message'
	},
	'ru' : {
	  'skills': 'Навыки',
	  'portfolio': 'Портфолио',
	  'video': 'Видео',
	  'price': 'Цены',
	  'contacts': 'Контакты',
	  'hero-title': 'Алекса Райс',
	  'hero-text': 'Сохраните искренние эмоции, романтические переживания и счастливые моменты жизни вместе с профессиональным фотографом',
	  'hire': 'Пригласить',
	  'skill-title-1': 'Фотография',
	  'skill-text-1': 'Высококачественные фото в студии и на природе',
	  'skill-title-2': 'Видеосъемка',
	  'skill-text-2': 'Запечатлите лучшие моменты, чтобы они всегда оставались с вами',
	  'skill-title-3': 'Ретушь',
	  'skill-text-3': 'Я стремлюсь к тому, чтобы фотография превосходила реальность',
	  'skill-title-4': 'Звук',
	  'skill-text-4': 'Профессиональная запись звука для видео, рекламы, портфолио',
	  'winter': 'Зима',
	  'spring': 'Весна',
	  'summer': 'Лето',
	  'autumn': 'Осень',
	  'price-descripton-1-span-1': 'Одна локация',
	  'price-descripton-1-span-2': '120 цветных фото',
	  'price-descripton-1-span-3': '12 отретушированных фото',
	  'price-descripton-1-span-4': 'Готовность через 2-3 недели',
	  'price-descripton-1-span-5': 'Макияж, визаж',
	  'price-descripton-2-span-1': 'Одна-две локации',
	  'price-descripton-2-span-2': '200 цветных фото',
	  'price-descripton-2-span-3': '20 отретушированных фото',
	  'price-descripton-2-span-4': 'Готовность через 1-2 недели',
	  'price-descripton-2-span-5': 'Макияж, визаж',
	  'price-descripton-3-span-1': 'Три локации и больше',
	  'price-descripton-3-span-2': '300 цветных фото',
	  'price-descripton-3-span-3': '50 отретушированных фото',
	  'price-descripton-3-span-4': 'Готовность через 1 неделю',
	  'price-descripton-3-span-5': 'Макияж, визаж, прическа',
	  'order': 'Заказать съемку',
	  'contact-me': 'Свяжитесь со мной',
	  'send-message': 'Отправить'
	}
  }

 	const en = document.getElementById("switch-en");
 
	en.addEventListener('click', function() {
		document.getElementById("en").style.color = "var(--font-hover)";
		document.getElementById("ru").style.color = "var(--font-white)";

		document.querySelectorAll("*").forEach(el => (el.classList.forEach((ell) => ell in i18Obj["en"] ? el.innerHTML = String(i18Obj["en"][ell]) : true))); 
  })  

  const ru = document.getElementById("switch-ru");

  ru.addEventListener('click', function() {
		document.getElementById("ru").style.color = "var(--font-hover)";
		document.getElementById("en").style.color = "var(--font-white)";
		
		document.querySelectorAll("*").forEach(el => (el.classList.forEach((ell) => ell in i18Obj["en"] ? el.innerHTML = String(i18Obj["ru"][ell]) : true))); 
  }) 