
export default function Card(section) {
    return `
            <div class="project-card">
                <h3>${projectName}</h3>
                <p>Tipo de campaña: ${campaignType.name}</p>                
                <p>Cliente: ${client.name}</p>
                <section class="int">
                    <h3>Tareas</h3>
                    <ul>
                        ${proyecto.tasks.map(tarea => `<li>${tarea.name}</li>`).join('')}
                    </ul>
                </section>
                <p>Fecha de comienzo: ${campaignType.name}</p>                
                <p>Fecha de finalización: ${client.name}</p>
            </div>
        `
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
