import Card from '../components/cards.js'
import ApiProyects from '../services/proyectsAPI.js';
import ApiCampaignTypes from '../services/campaignTypesAPI.js';
import ApiClients from '../services/clientsAPI.js';

const loadCampaignsAndClients = async () => {
    const campaignSelect = document.getElementById('filter-campaign');
    const clientSelect = document.getElementById('filter-client');

    const campaigns = await ApiCampaignTypes.Get();
    campaigns.forEach(campaign => {
        const option = document.createElement('option');
        option.value = campaign.id;
        option.text = campaign.name;
        campaignSelect.appendChild(option);
    });

    const clients = await ApiClients.Get();
    clients.forEach(client => {
        const option = document.createElement('option');
        option.value = client.clientID;
        option.text = client.name;
        clientSelect.appendChild(option);
    });
};
window.onload = loadCampaignsAndClients();

const loadProjects = async () => {
    try {
        let cards = document.getElementById('cards');
        cards.innerHTML = '';
        let proyects = await ApiProyects.Get();
        proyects.forEach(proyect => {
            cards.innerHTML += Card(proyect)
        });

    } catch (error) {
        console.error('Error obteniendo proyectos:', error);
    }
}

window.onload = loadProjects;
