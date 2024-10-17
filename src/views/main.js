import Card from '../components/cards.js';
import { getProjects } from '../services/projectsAPI.js';
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

const loadProjects = async (filters = {}) => {
    try {
        let cards = document.getElementById('cards');
        cards.innerHTML = ''; 
        let projects = await getProjects(filters);
        if (projects == []) {
            return ('<h3>${project.projectName}</h3>');
        }
        projects.forEach(project => {
            cards.innerHTML += Card(project);
        });
    } catch (error) {
        console.error('Error obteniendo proyectos:', error);
    }
};

const applyFilters = async () => {
    const nameFilter = document.getElementById('search-projects').value.toLowerCase();
    const campaignFilter = document.getElementById('filter-campaign').value;
    const clientFilter = document.getElementById('filter-client').value;

    const filters = {
        name: nameFilter!== "" ? nameFilter : null,
        campaignTypeID: campaignFilter !== "" ? campaignFilter : null,
        clientID: clientFilter !== "" ? clientFilter : null
    };
    await loadProjects(filters); 
};

document.querySelector('.buscar').addEventListener('click', applyFilters);

window.onload = async () => {
    await loadCampaignsAndClients();
    await loadProjects(); 
};
