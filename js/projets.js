import detailsProjets from '../data.json' assert {type : 'json'}

const templateProjet = document.querySelector('template#js-projet')
const portefoloioElement = document.querySelector('.portefolio')



const newProjetElement = (template, projet) => {
    const clone = document.importNode(template.content, true)

    const illustrationProjetElement = clone.querySelector('img.projet-carte__illustration')
    illustrationProjetElement.setAttribute('src', projet.urlIllustration)
    illustrationProjetElement.setAttribute('alt', projet.altIllustration)

    clone.querySelector('.projet-carte__titre').textContent = projet.nomProjet

    const lienGithubElement = clone.querySelector('.projet-carte__lien--github')
    projet.urlGithub ? lienGithubElement.setAttribute('href',projet.urlGithub)
                     : lienGithubElement.remove()

    const lienSiteWebElement = clone.querySelector('.projet-carte__lien--siteweb')
    projet.urlSite ? lienSiteWebElement.setAttribute('href',projet.urlSite)
                     : lienSiteWebElement.remove()
    console.log(projet.urlSite, projet.urlSite ? true : false)

    clone.querySelector('.projet-mission > p').textContent = projet.mission

    return clone
}


function projetsToDOM(templateProjet, projets, portefoloioElement) {
    projets.forEach(projet => {
        portefoloioElement.append( newProjetElement(templateProjet, projet) )
    })
}

projetsToDOM(templateProjet, detailsProjets, portefoloioElement)