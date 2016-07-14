import Queen from '../lib/App';

let Ellie = new Queen({
  container: document.getElementById('root'),
  appTitle: 'Queen Cards'
});

Ellie.init();

Ellie.Textures.add({
  name: 'testTexture',
  location: 'resources/orange.png',
  type: 'image'
});

Ellie.Cards.addCard({
  name: 'testCard',
  description: 'This is a test card',
  texture: 'testTexture'
});

console.log(Ellie.Cards.getCard('testCard'));