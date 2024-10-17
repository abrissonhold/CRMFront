export default function Card(project) { 
    return `
        <div class="project-card">
            <h3>${project.projectName}</h3>
            <p>Tipo de campaña: ${project.campaignType.name}</p>                
            <p>Cliente: ${project.client.name}</p>
            <button class="detalles"> Ver detalles
            </button>
            <p>Inicio: ${project.startDate}</p>                
            <p>Fin: ${project.endDate}</p>
        </div>
    `;
}
