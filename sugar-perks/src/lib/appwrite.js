import { Client, Account} from 'appwrite';

export const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('671a9b6000365bf7f7a8'); // Replace with your project ID

export const account = new Account(client);
export { ID } from 'appwrite';
