export function Card(project) {
    return `
        <div class="project-card">
            <h3>${project.projectName}</h3>
            <p>Tipo de campaña: ${project.campaignType.name}</p>                
            <p>Cliente: ${project.client.name}</p>
            <button class="detalles" onclick="window.location.href='projectDetail.html?id=${project.projectID}'">Ver detalles
            </button>
            <p>Inicio: ${project.startDate}</p>                
            <p>Fin: ${project.endDate}</p>
        </div>
    `;
}

export function DetailCard(project) {
    return `
        <div class="project-card">
            <p>Inicio del proyecto: ${project.project.startDate}</p>                
            <p>Fin del proyecto: ${project.project.endDate}</p>
            <p> </p>
            <div class="list-card">
                <ul id="tasklist"></ul>
            </div>
            <div class="list-card">
                <ul id="interactionlist"></ul>
            </div>
        </div>
    `;
}
