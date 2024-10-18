export const getProjects = async (filters = {}) => {
    const { name = '', campaignTypeID = '', clientID = '', offset = '', size = '' } = filters;

    const params = new URLSearchParams();
    if (name) params.append('name', name);
    if (campaignTypeID) params.append('campaignType', campaignTypeID);
    if (clientID) params.append('clientID', clientID);
    params.append('offset', offset);
    params.append('size', size)

    const queryString = params.toString();
    const response = await fetch(`https://localhost:7108/api/v1/Project?${queryString}`);
    
    let result = [];
    if (response.ok) {
        return result = await response.json();
    } else {
        console.error('Error fetching projects');
        return result;
    }
};


export const getProjectById = async (id) => {
    let response = await fetch(`https://localhost:7108/api/v1/Project/${id}`);
    if (response.ok) {
        return await response.json();
    } else {
        console.error('Error fetching project by ID');
        return null;
    }
} 


export const createProject = async (projectData) => {
    try {
        const response = await fetch('https://localhost:7108/api/v1/Project', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(projectData)
        });

        if (response.ok) {
            return await response.json(); 
        } else {
            console.error('Error al crear el proyecto');
            return null;
        }
    } catch (error) {
        console.error('Error de red:', error);
        return null;
    }
};