import Card from '../components/cards.js';
import { getProjects } from '../services/projectsAPI.js';
import ApiCampaignTypes from '../services/campaignTypesAPI.js';
import ApiClients from '../services/clientsAPI.js';

let offset = 0;
const size = 12;

const loadProjects = async (filters = {}) => {
    try {
        let cards = document.getElementById('cards');
        cards.innerHTML = '';
        let projects = await getProjects(filters);
        if (projects.length === 0) {
            cards.innerHTML = '<h3>No hay proyectos para mostrar.</h3>';
        } else {
            projects.forEach(project => {
                cards.innerHTML += Card(project);
            });
        }
    } catch (error) {
        console.error('Error obteniendo proyectos:', error);
    }
};

const loadCampaignsAndClients = async () => {
    const campaignSelect = document.getElementById('filter-campaign');
    const campaigns = await ApiCampaignTypes.Get();
    campaigns.forEach(campaign => {
        const option = document.createElement('option');
        option.value = campaign.id;
        option.text = campaign.name;
        campaignSelect.appendChild(option);
    });
    const clientSelect = document.getElementById('filter-client');
    const clients = await ApiClients.Get();
    clients.forEach(client => {
        const option = document.createElement('option');
        option.value = client.clientID;
        option.text = client.name;
        clientSelect.appendChild(option);
    });
};

const applyFilters = async () => {
    const nameFilter = document.getElementById('search-projects').value || '';
    const campaignFilter = document.getElementById('filter-campaign').value;
    const clientFilter = document.getElementById('filter-client').value;
    const filters = {
        name: nameFilter !== '' ? nameFilter.toLowerCase() : null,
        campaignTypeID: campaignFilter !== '' ? campaignFilter : null,
        clientID: clientFilter !== '' ? clientFilter : null,
        offset: offset,
        size: size
    };
    await loadProjects(filters);
};
window.onload = async () => {
    await loadProjects({ offset: offset, size: size });
    await loadCampaignsAndClients();
};

const nextPage = async () => {
    offset += size;
    await applyFilters();
};

const prevPage = async () => {
    if (offset >= size) {
        offset -= size;
        await applyFilters();
    }
};

document.querySelector(".buscar").addEventListener("click", applyFilters);
document.getElementById("nextButton").addEventListener("click", nextPage);
document.getElementById("prevButton").addEventListener("click", prevPage);