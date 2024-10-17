export default function Card(project) { 
    return `
        <div class="project-card">
            <h3>${project.projectName}</h3>
            <p>Tipo de campaña: ${project.campaignType.name}</p>                
            <p>Cliente: ${project.client.name}</p>
            <button class="detalles" >Ver detalles
            </button>
            <p>Inicio: ${project.startDate}</p>                
            <p>Fin: ${project.endDate}</p>
        </div>
    `;
}



/*    


        "projectID": "489ba87c-f98e-4569-ccd8-08dcecd17ab4",
        "projectName": "Primer proyecto",
        "campaignTypeID": 1,
        "campaignType": {
            "id": 1,
            "name": "SEO"
        },
        "clientID": 1,
        "client": {
            "clientID": 1,
            "name": "Camila Aylen Ramirez",
            "email": "caayramirez@gmail.com",
            "phone": "1150513693",
            "company": "UNAJ",
            "address": "calle del cruce"
        },
        "startDate": "2024-10-15T00:00:00",
        "endDate": "2024-11-15T00:00:00"*/
