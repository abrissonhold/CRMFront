import Card from './src/components/cards.js'
import ApiProyects from './src/services/proyectsAPI';

const renderProjects = async () =>{
        let cards = document.getElementById('cards');
        cards.innerHTML = []
        let proyectCards = await ApiProyects.Get();
        proyectCards.forEach(proyectCard => {
            cards.innerHTML += Card(proyectCard)
        });
    try{
    } catch (error) {
        console.error('Error obteniendo proyectos:', error);
    }
}

window.onload = renderProjects();