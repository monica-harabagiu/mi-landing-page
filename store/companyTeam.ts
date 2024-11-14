import { defineStore } from 'pinia'

export const useTeamsStore = defineStore('teams', () => {
    let companyTeam = [
        {
            "alt": "metodo-immobiliare-andrea-audisio",
            "src": "metodo-immobiliare-andrea-audisio.webp",
            "name": "Andrea Audisio",
            "role": "Direttore Operativo"
        },
        {
            "alt": "metodo-immobiliare-stefano-solieri",
            "src": "metodo-immobiliare-stefano-solieri.webp",
            "name": "Stefano Solieri",
            "role": "CRM Specialist"
        },
        {
            "alt": "metodo-immobiliare-aurora-puglisi",
            "src": "metodo-immobiliare-aurora-puglisi.webp",
            "name": "Aurora Puglisi",
            "role": "Project Manager"
        },
        {
            "alt": "metodo-immobiliare-rosa-romano",
            "src": "metodo-immobiliare-rosa-romano.webp",
            "name": "Rosa Romano",
            "role": "Amministrazione"
        },
        {
            "alt": "metodo-immobiliare-alessandro-todeschino",
            "src": "metodo-immobiliare-alessandro-todeschino.webp",
            "name": "Alessandro Todeschino",
            "role": "Direttore Commerciale"
        },
        {
            "alt": "metodo-immobiliare-lorenzo-favre",
            "src": "metodo-immobiliare-lorenzo-favre.webp",
            "name": "Lorenzo Favre",
            "role": "Advertising Specialist"
        },
        {
            "alt": "metodo-immobiliare-gianluca-mancin",
            "src": "metodo-immobiliare-gianluca-mancin.webp",
            "name": "Gianluca Mancin",
            "role": "Advertising Specialist"
        },
        {
            "alt": "metodo-immobiliare-monica-harabagiu",
            "src": "metodo-immobiliare-monica-harabagiu.webp",
            "name": "Monica Harabagiu",
            "role": "Graphic e Web Designer"
        },
        {
            "alt": "metodo-immobiliare-rosalba-cardile",
            "src": "metodo-immobiliare-rosalba-cardile.webp",
            "name": "Rosalba Cardile",
            "role": "Social Media Manager"
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