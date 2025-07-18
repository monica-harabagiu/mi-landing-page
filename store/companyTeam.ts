import { defineStore } from 'pinia'

export const useTeamsStore = defineStore('teams', () => {
    let companyTeam = [
        {
            "alt": "metodo-immobiliare-andrea",
            "src": "metodo-immobiliare-andrea.webp",
            "name": "Andrea",
            "role": "Direttore Operativo"
        },
        {
            "alt": "metodo-immobiliare-stefano",
            "src": "metodo-immobiliare-stefano.webp",
            "name": "Stefano",
            "role": "CRM Specialist"
        },
        {
            "alt": "metodo-immobiliare-aurora",
            "src": "metodo-immobiliare-aurora.webp",
            "name": "Aurora",
            "role": "Project Manager"
        },
        {
            "alt": "metodo-immobiliare-rosa",
            "src": "metodo-immobiliare-rosa.webp",
            "name": "Rosa",
            "role": "Amministrazione"
        },
        {
            "alt": "metodo-immobiliare-lorenzo",
            "src": "metodo-immobiliare-lorenzo.webp",
            "name": "Lorenzo",
            "role": "Advertising Specialist"
        },
        {
            "alt": "metodo-immobiliare-gianluca",
            "src": "metodo-immobiliare-gianluca.webp",
            "name": "Gianluca",
            "role": "Advertising Specialist"
        },
        {
            "alt": "metodo-immobiliare-monica",
            "src": "metodo-immobiliare-monica.webp",
            "name": "Monica",
            "role": "Graphic e Web Designer"
        },
        {
            "alt": "metodo-immobiliare-rosalba",
            "src": "metodo-immobiliare-rosalba.webp",
            "name": "Rosalba",
            "role": "Social Media Manager"
        },
        {
            "alt": "metodo-immobiliare-andrea-s",
            "src": "metodo-immobiliare-andrea-s.webp",
            "name": "Andrea",
            "role": "Sales Account"
        },
        {
            "alt": "metodo-immobiliare-olga",
            "src": "metodo-immobiliare-olga.webp",
            "name": "Olga",
            "role": "BDR"
        },
        {
            "alt": "metodo-immobiliare-alessia-e-alessandro",
            "src": "metodo-immobiliare-alessia-e-alessandro.webp",
            "name": "Alessia e Alessandro",
            "role": "Videomaker"
        },
    ]

    return {companyTeam}
  })