export const getProjects = async () => {
    let result = [];
    let response = await fetch('https://localhost:7108/api/v1/Project');
    if (response.ok) {
        result = await response.json();
    }
    return result;
}

export const getProjectById = async (id) => {
    let response = await fetch('https://localhost:7108/api/v1/Project/${id}');
    if (response.ok) {
        result = await response.json();
    }
    return result;
} 
