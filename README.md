# Mini-React

# Projet Javascript

## Règles

- 3/4 personnes par groupes maximum
- Groupement libre
- Soumission sur 1 lien Git/groupe
- Sujet proposé: Créer un mini-react
  - Gestion du routage (<==> Changement de page sans reload)
  - Validation des propriétés passées au composant
  - Algorithme => se rapproche de l'algo de l'exercice *HereWeGo!*
    - Chaque composant hérite d'un object `Component` ayant une méthode `display(newProps)`
    - display appelle la méthode `shouldUpdate()` du composant courant => compare newProps avec les oldProps
      - si shouldUpdate
        - appelle la fonction `render` du composant
        - si `render` invoque d'autres composants, le composant courant appelle la fonction `display(compProps)` des sous-composants
    - le résultat de `display` est ajouté au DOM sous le noeud parent

## Objectif

Mise en place des différents bases vues en cours.

## Obligations

Norme Javascript: ES6/ES2015

Notions présentes:
- Prototypes d'objet natif (String, Object, Number, ...)
	- Object.prop_access
	- String.interpolate(animal)
		- remplace toutes les chaines entourées de "{{ }}" par la valeur de l'objet
		-  `machaine = "Type d'animal: {{ type.name }}"`
		- `animal = {type: {name: "chien"}}`
		- `machaine.interpolate(animal)  => "Type d'animal: chien"`
- Création d'objet et objet hérité
- Création de modules
- Gestion de l'historique (système de routage)
- Utilisation des Promises
- Utilisation du type_checker
	- version minimum: 3
	- exemples cas d'utilisation: Vérifier les données en entrée de constructeur 

Contenu index.html:

```html
<html>
	<head>
		...
		<script type="module" src="./main.js"></script>
	</head>
	<body>
		<div id="root"></div>
	</body>
</html>
```

## Interdictions

- Utilisation de task-runners (sauf pour du SASS/LESS)
- Utilisation de packages (lodash, jQuery, React, Angular, VueJS, ...) sauf packages de DataViz
- Utilisation des méthodes innerHTML et innerText

## Evaluation

- Code Source + Soutenance
- Tout le monde doit commit des vrais commits auto-signés
- Durée de la soutenance: 20min
	- Démo: 15min
	- Questions: 5min (+1 question de cours par personne)
- Audience: Devant la promotion ou huis-clos
- Bonus: 2 points max
	- Participation à la communauté OpenSource (1pt)
	- Utilisation de l'API FileReader (0.5pt)
	- ServiceWorker:
		- gestion online/offline (0.5pt)
		- WebPush (0.5pt)
		- ... (0.5pt)
	- Sensors API
		- Proximity (0.5pt)
		- Orientation (0.5pt)
		- ... (0.5pt)
