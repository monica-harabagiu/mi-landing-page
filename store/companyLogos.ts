import { defineStore } from 'pinia'

export const useLogosStore = defineStore('logos', () => {
    let companyLogos = [
        {
            "title": "logo1",
            "src": "concept-home.png"
        }
    ]

    return {companyLogos}
  })