/**
 * Função navegação das paginas desk
 * 
 */
export function navegation (){
    const home = document.querySelector('#home');
    const cardapio = document.querySelector('#cardapio');
    const historia = document.querySelector('#historia');
    const btnHome = document.querySelector('#btn-home');
    const btnCardapio = document.querySelector('#btn-cardapio');
    const btnHistoria = document.querySelector('#btn-historia');

    const pages = [home, cardapio, historia] 
        
    btnHome.addEventListener('click', function() {
        
        for (const el of pages) {  
            if (el.classList.contains('hidden') === false) { el.classList.toggle('hidden') }
        };
        
        home.classList.toggle('hidden');
    });

    btnCardapio.addEventListener('click', function() {
        
        for (const el of pages) {  
            if (el.classList.contains('hidden') === false) { el.classList.toggle('hidden') }
        };
        
        cardapio.classList.toggle('hidden');
    });

    btnHistoria.addEventListener('click', function() {
        
        for (const el of pages) {  
            if (el.classList.contains('hidden') === false) { el.classList.toggle('hidden') }
        };
        
        historia.classList.toggle('hidden');
    }); 

}


export function mobileNavegation () {
    const home = document.querySelector('#home');
    const cardapio = document.querySelector('#cardapio');
    const historia = document.querySelector('#historia');
    const btnHome = document.querySelector('#btn-mobhome');
    const btnCardapio = document.querySelector('#btn-mobcardapio');
    const btnHistoria = document.querySelector('#btn-mobhistoria');

    const pages = [home, cardapio, historia] 
        
    btnHome.addEventListener('click', function() {
        
        for (const el of pages) {  
            if (el.classList.contains('hidden') === false) { el.classList.toggle('hidden') }
        };
        
        home.classList.toggle('hidden');
    });
    
    btnCardapio.addEventListener('click', function() {
        
        for (const el of pages) {  
            if (el.classList.contains('hidden') === false) { el.classList.toggle('hidden') }
        };
        
        cardapio.classList.toggle('hidden');
    });
    
    btnHistoria.addEventListener('click', function() {
        
        for (const el of pages) {  
            if (el.classList.contains('hidden') === false) { el.classList.toggle('hidden') }
        };
        
        historia.classList.toggle('hidden');
    }); 

}

/**
 * toggle menu
 */

export function mobielToggle () {
    const btnMobile = document.querySelector('#btn-toggle');
    const menuMobile = document.querySelector('#menu-mobile');

    btnMobile.addEventListener('click', function() {
        menuMobile.classList.toggle('hidden');
    });

}
