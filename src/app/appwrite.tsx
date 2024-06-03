import { Client, Account } from "appwrite";

export const client = new Client();

const endpoint = process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT ? process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT : ""
const projectId = process.env.NEXT_PUBLIC_PROJECT_ID ? process.env.NEXT_PUBLIC_PROJECT_ID : ""

client.setEndpoint(endpoint).setProject(projectId)

export const account = new Account(client);

export { ID } from "appwrite";
