import { APIRequestContext } from '@playwright/test';

export class ApiService {
    constructor(private request: APIRequestContext) {}

    async registerNewUser(email: string, password: string, roles: string[]): Promise<any> {
        const response = await this.request.post('https://api.club-administration.qa.qubika.com/api/auth/register', {
            data: {
                email,
                password,
                roles,
            },
        });
        return response.json();
    }
}