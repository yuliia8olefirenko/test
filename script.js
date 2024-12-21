const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.content');

for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener( 'click' ,( event ) => {


        //видаляємо клас для вкладок
        let tabsCurrent = event.target.parentElement.children;
        for( let t=0; t < tabsCurrent.length; t++) {
            tabsCurrent[t].classList.remove( 'tab_active' );
        }
        
        // додаємо класс для вкладок
        event.target.classList.add( 'tab_active' );
            


        //видаляємо клас для контенту
        let contentsCurrent = event.target.parentElement.nextElementSibling.children;
        for( let c=0; c < contentsCurrent.length; c++ ) {
            contentsCurrent[c].classList.remove( 'content_active' );
        }
        
        // додаємо класс для контенту
        contents[i].classList.add( 'content_active' );
        } );
     
}






