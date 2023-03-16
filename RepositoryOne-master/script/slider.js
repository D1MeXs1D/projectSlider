let completedProjects = 
//  первый слайд
    [{city: 'Rostov-on-Don LCD admiral',
    apartmentArea: '81 m2',
    repairTime: '3.5 months',
    repairCost: 'Upon request',
    imageUrl: './img/slide1.jpg'},
//  второй слайд
    {city: 'Sochi Thieves',
    apartmentArea: '105 m2',
    repairTime: '4 months',
    repairCost: 'Upon request',
    imageUrl: './img/slide2.png'},
// третий слайд
    {city: 'Rostov-on-Don Patriotic',
    apartmentArea: '93 m2',
    repairTime: '3 months',
    repairCost: 'Upon request',
    imageUrl: './img/slide3.png'},
];

// ========================  добавление кругляшей для переключания  + логика  =======================================



for (let i = 0; i < completedProjects.length; i++) {
    addSwitch (i);
}

function addSwitch (attributeNumber) {
    // функция добавления переключателя
    const switchButton = document.createElement('div');
    switchButton.classList.add('Switch');
    switchButton.setAttribute('value', attributeNumber)
    //  родитель в который добавляется переключатель
    const buttonSwitchingOver = document.querySelector('.buttonSwitchingOver');
    buttonSwitchingOver.appendChild(switchButton);
} 

const switchButton = document.querySelectorAll('.Switch');
switchButtonCircle (switchButton);


const linkButtons = document.querySelectorAll('.linkButton');
switchButtonCircle (linkButtons);


function clearClass () {
    linkButtons.forEach(elem => {
        elem.classList.remove('active');
    })
}    




function switchButtonCircle (switchButton) {
    switchButton.forEach(element => {
        element.addEventListener('click', () => {
            switchImage (element);
            switchTextDescription (element);
            clearClass();
            
            const linkButtons = document.querySelectorAll('.linkButton');
            let id = element.getAttribute('value');   
            linkButtons.forEach(e => {
                if (e.getAttribute('value') === id) {
                    e.classList.add('active');
                }
            })
        });
    });
}



function switchImage (element) {
    const image = document.querySelector('.images');
    image.src = completedProjects[element.getAttribute('value')].imageUrl;
}

function switchTextDescription (elem) {
    const city = document.querySelector('.city');
    city.innerHTML = completedProjects[elem.getAttribute('value')].city;

    const area = document.querySelector('.area');
    area.innerHTML = completedProjects[elem.getAttribute('value')].apartmentArea;

    const time = document.querySelector('.time');
    time.innerHTML = completedProjects[elem.getAttribute('value')].repairTime;

    const cost = document.querySelector('.cost');
    cost.innerHTML = completedProjects[elem.getAttribute('value')].repairCost;

    startSliderIndexFromObject = elem.getAttribute('value'); /* привязка к глобальной переменной 
    для связи между всеми  переключателями*/ 
}

// ============================ конец блока для кругляшей ========================================================

//  ================= стрелки и их переключение ==================================================================

const leftArrow = document.querySelectorAll('.leftArrow');
const rightArrow = document.querySelectorAll('.rightArrow');

leftArrow.forEach(e =>{
    e.addEventListener('click', () => {
        slideDown();
    });
})

rightArrow.forEach(e =>{
    e.addEventListener('click', () => {
        slideUp();
    });
})

let startSliderIndexFromObject = 0;

function slideUp() {    
    startSliderIndexFromObject++;
    if (startSliderIndexFromObject === 0 || startSliderIndexFromObject <=2 && startSliderIndexFromObject !== 3) {
        arrowSlide (startSliderIndexFromObject);
        console.log(startSliderIndexFromObject);
    }

    else {
        startSliderIndexFromObject = 0;
        console.log(startSliderIndexFromObject);
        arrowSlide (startSliderIndexFromObject);
    }
}


function slideDown() {    
    
    startSliderIndexFromObject--;
    if (startSliderIndexFromObject === 2 || startSliderIndexFromObject >= 0) {
        arrowSlide (startSliderIndexFromObject);
        console.log(startSliderIndexFromObject);
    }

    else {
        startSliderIndexFromObject = 2;
        console.log(startSliderIndexFromObject);
        arrowSlide (startSliderIndexFromObject);
    } 
}

function arrowSlide (index) {
    const city = document.querySelector('.city');
    city.innerHTML = completedProjects[index].city;

    const area = document.querySelector('.area');
    area.innerHTML = completedProjects[index].apartmentArea;

    const time = document.querySelector('.time');
    time.innerHTML = completedProjects[index].repairTime;

    const cost = document.querySelector('.cost');
    cost.innerHTML = completedProjects[index].repairCost;

    const image = document.querySelector('.images');
    image.src = completedProjects[index].imageUrl;

    const linkButtons = document.querySelectorAll('.linkButton');
    
    clearClass();
    linkButtons.forEach(e => {
        if (e.getAttribute('value') == index) {
            e.classList.add('active');
        }
    })
}
// =========================== конец блока со стрелками ===========================================================