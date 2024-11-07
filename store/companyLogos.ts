import { defineStore } from 'pinia'

export const useLogosStore = defineStore('logos', () => {
    let companyLogos = [
        {
            "title": "innova",
            "src": "innova.png"
        },
        {
            "title": "sicula-immobiliare",
            "src": "sicula-immobiliare.png"
        },
        {
            "title": "concept-home",
            "src": "concept-home.png"
        },
        {
            "title": "immobilinea",
            "src": "immobilinea.png"
        },
        {
            "title": "enola",
            "src": "enola.png"
        },
        {
            "title": "von-poll",
            "src": "von-poll.png"
        },
        {
            "title": "ital-home",
            "src": "ital-home.png"
        },
        {
            "title": "gabetti",
            "src": "gabetti.png"
        },
        {
            "title": "salvi-immobiliare",
            "src": "salvi-immobiliare.png"
        },
        {
            "title": "tofanelli",
            "src": "tofanelli.png"
        },
        {
            "title": "gruppo-vela-immobiliare",
            "src": "gruppo-vela-immobiliare.png"
        },
    ]

    return {companyLogos}
  })