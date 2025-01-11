const DataClient = (baseUrl: string) => ({
    async get(endpoint: string): Promise<any> {
        const response = await fetch(`${baseUrl}${endpoint}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }

        return response.json();
    },

    async post(endpoint: string, data: any): Promise<any> {
        const response = await fetch(`${baseUrl}${endpoint}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }

        return response.json();
    }
});

export default DataClient;
