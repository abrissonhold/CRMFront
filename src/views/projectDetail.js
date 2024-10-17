import { getProjectById } from '../services/projectsAPI.js'; 

const loadProjectDetails = async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('id');

    if (projectId) {
        const project = await getProjectById(projectId);
        document.getElementById('project-name').innerText = project.ProjectName;
        document.getElementById('client-name').innerText = project.ClientName;
        document.getElementById('campaign-type').innerText = project.CampaignType;
        // Mostrar tareas e interacciones del proyecto
        loadTasks(project.Tasks);
        loadInteractions(project.Interactions);
    }
};

const loadTasks = (tasks) => {
    const tasksContainer = document.getElementById('tasks');
    tasks.forEach(task => {
        const taskElement = document.createElement('li');
        taskElement.innerText = task.Name;
        tasksContainer.appendChild(taskElement);
    });
};

const loadInteractions = (interactions) => {
    const interactionsContainer = document.getElementById('interactions');
    interactions.forEach(interaction => {
        const interactionElement = document.createElement('li');
        interactionElement.innerText = interaction.Notes;
        interactionsContainer.appendChild(interactionElement);
    });
};

window.onload = loadProjectDetails;