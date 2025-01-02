import { Account, Client, Databases, Storage } from 'appwrite';
const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('6772e6ed00242e76930c');
export const databases = new Databases(client);
export const storage = new Storage(client);
export const appwriteConfig = {
    databaseId: '6772e799001406642845',
    collections: {
        chars: '6772e7bd00227cbde9ff',
        equipments: '6772e8120016e0773ae2',
        skills: '6772e8500029e1a0da5a',
        attributes: '6772e8710025eb6b410d',
        status: '6772e886003e6eca0843',
        monsters: '6772e8af0038eee1d96a',
        campaign: '6772e8ec00085d0f9e9b',
        battle: '6772e916002f5615a80a',
        inventory: '6772e92e0025d6755534'
    },
    buckets: {
        charsImages: '6772e72400308893f53d'
    }
};

const account = new Account(client);

export { ID } from 'appwrite'
export { account }