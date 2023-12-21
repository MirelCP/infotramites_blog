import { createClient } from "next-sanity"

const projectId = '9l8oajom'
const dataset = 'production'
const apiVersion = '2022-03-07'


export const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: true
})