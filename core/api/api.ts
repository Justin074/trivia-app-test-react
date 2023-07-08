export default class API {
    static get(url: string): Promise<Response> {
        return fetch(url, {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
        });
    }
}