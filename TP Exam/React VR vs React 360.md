React VR vs React 360
===

# Objets 3D Model ou Entity:
- Pensez à faire des composants puis de les importer dans index.js
- Dans react 360 oubliez pas les 3 étapes pour placer votre objet 3D 
```
// Importer dans index.js
import Seat from "./entities/Seat";

// Registrer le composant
AppRegistry.registerComponent("Seat", () => Seat);

// Declarer dans le client.js
  r360.renderToLocation(
    r360.createRoot('Seat'),
    r360.getDefaultLocation(),
  );
```

## React Vr

```
<Model
  source={{
    obj: asset("/model/seat.obj"),
    mtl: asset("/model/seat.mtl"),
  }}
/>;


```

## React 360

```
<Entity
  source={{
    obj: asset("/model/seat.obj"),
    mtl: asset("/model/seat.mtl"),
  }}
/>;


```

# Audio && Video

## React 360 
- Voir la doc [AUDIO](https://facebook.github.io/react-360/docs/audio.html)
- Voir la doc [VIDEO](https://facebook.github.io/react-360/docs/photos-and-videos.html)

## React VR

- Audio utiliser le component ````<Sound/> ````
- Video utiliser le component ````<Video/> ````

# Button

Dans les deux cas c'est le meme component ``<VrButton />`` qui contient la props `onClick`

# Background

## React VR 

Dans react vr il faut utiliser le component `<Pano/>` dans index.js

## React 360

Pour changer le background sur React 360 vous pouvez passer par l'API [Environment](https://facebook.github.io/react-360/docs/environment.html)


# Important
- Pensez à utiliser le state
- Creez des components
- Faites du code propre car ce n'est pas le Ghetto ici
- Essayez de ne pas tricher mais utilisez la documentation
- N'oubliez pas le cycle de vie de React
- Faites des fonctions
- Faites une architecture du projet avec des dossiers
- Prenez du plaisir ;)

**Si vous respectez ces points je metterai des points bonus.**