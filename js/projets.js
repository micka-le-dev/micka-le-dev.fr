
const detailsProjets = [
    {
        nomProjet: 'ohmyfood',
        urlIllustration: "asset/images/accueil-ohmyfood.jpg",
        altIllustration: 'site ohmyfood',
        urlGithub: "https://github.com/micka-le-dev/OC-P3-ohmyfood",
        urlSite: "https://micka-le-dev.github.io/OC-P3-ohmyfood/",
        mission: "mission à décrire !"
    }
]

const templateProjet = document.querySelector('template#js-projet')
const portefoloioElement = document.querySelector('.portefolio')



const newProjetElement = (template, projet) => {
    const clone = document.importNode(template.content, true)

    const illustrationProjetElement = clone.querySelector('img.projet-carte__illustration')
    illustrationProjetElement.setAttribute('src', projet.urlIllustration)
    illustrationProjetElement.setAttribute('alt', projet.altIllustration)

    clone.querySelector('.projet-carte__titre').textContent = projet.nomProjet
    clone.querySelector('.projet-carte__lien--github').setAttribute('href',projet.urlGithub)
    clone.querySelector('.projet-carte__lien--siteweb').setAttribute('href',projet.urlSite)
    clone.querySelector('.projet-mission > p').textContent = projet.mission

    return clone
}


function projetsToDOM(templateProjet, projets, portefoloioElement) {
    projets.forEach(projet => {
        portefoloioElement.append( newProjetElement(templateProjet, projet) )
    })
}

projetsToDOM(templateProjet, detailsProjets, portefoloioElement)