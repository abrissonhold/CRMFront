import { getProjectById } from '../services/projectsAPI.js';
import { DetailCard } from '../components/cards.js';

const loadProjectDetails = async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('id');

    if (projectId) {
        const project = await getProjectById(projectId);

        document.getElementById('project-name').innerText = project.project.projectName;
        document.getElementById('client-name').innerText = project.project.client.name;
        document.getElementById('campaign-type').innerText = project.project.campaignType.name;
        detailcard.innerHTML += DetailCard(project);
        loadTasks(project.tasks);
        loadInteractions(project.interactions);
    }
};

const loadTasks = (tasks) => {
    const tasksContainer = document.getElementById('tasks');
    if (tasks.length === 0) {
        tasklist.innerHTML = '<h3>No hay tareas para mostrar.</h3>';
    }
    tasks.forEach(task => {
        const taskElement = document.createElement('li');
        taskElement.innerText = task.Name;
        tasksContainer.appendChild(taskElement);
    });
}

const loadInteractions = (interactions) => {
    const interactionsContainer = document.getElementById('interactions');
    if (interactions.length === 0) {
        interactionlist.innerHTML = '<h3>No hay interacciones para mostrar.</h3>';
    }
    interactions.forEach(interaction => {
        const interactionElement = document.createElement('li');
        interactionElement.innerText = interaction.Notes;
        interactionsContainer.appendChild(interactionElement);
    });
};

window.onload = loadProjectDetails;