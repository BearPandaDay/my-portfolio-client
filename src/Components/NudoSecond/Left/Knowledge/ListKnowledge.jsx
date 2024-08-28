import { image } from "../../../../assets/png"

export const ListKnowledge = () => {
    const data = [
        {
            name: 'Linux',
            logo: image.linuxpng,
        },
        {
            name: 'MongoDB',
            logo: image.mongodbpng,
        },
        {
            name: 'Express',
            logo: image.expresspng,
        },
        {
            name: 'React',
            logo: image.imgreact,
        },
        {
            className: "App-logo",
            name: 'NodeJs',
            logo: image.nodejspng,
        },
        {
            name: 'Angular',
            logo: image.angularpng,
        },
        {
            name: '.Net',
            logo: image.puntonetpng,
        },
        {
            name: 'HTML',
            logo: image.htmlpng,
        },
        {
            name: 'CSS',
            logo: image.csspng,
        },
        {
            name: 'SASS',
            logo: image.sasspng,
        },
        {
            name: 'Boostrap',
            logo: image.bootstrappng,
        },
        {
            name: 'Ant Desing',
            logo: image.antdesingpng,
        },
        {
            name: 'Python',
            logo: image.pythonpng,
        },
        {
            name: 'Flask',
            logo: image.flaskpng,
        },
    ]
    return data;
}