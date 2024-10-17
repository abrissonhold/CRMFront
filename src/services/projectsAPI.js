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
        result = await response.json();
    }
    return result;
};


export const getProjectById = async (id) => {
    let response = await fetch(`https://localhost:7108/api/v1/Project/${id}`);
    if (response.ok) {
        result = await response.json();
    }
    return result;
} 
