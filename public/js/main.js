class Objet {
    constructor(nom, prix) {
        this.nom = nom;
        this.prix = prix;
    }
}

const objet1 = new Objet('Livre', 10);
const objet2 = new Objet('Table', 50);

const boite = [objet1, objet2];

class Personnage {
    constructor(nom, sac, argent) {
        this.nom = nom;
        this.sac = sac;
        this.argent = argent;
    }

    prendre(objet) {
        this.sac.push(objet);
    }

    acheter(vendeur, objet) {
        if (this.argent >= objet.prix) {
            this.argent -= objet.prix;
            vendeur.argent += objet.prix;
            this.sac.push(objet);
            vendeur.sac = vendeur.sac.filter(item => item !== objet);
        } else {
            console.log(`${this.nom} n'a pas assez d'argent pour acheter ${objet.nom}.`);
        }
    }
}

const personnage1 = new Personnage