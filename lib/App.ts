import { TextureLibrary } from './Textures/Textures';
import { CardsLibrary } from './Cards/Cards';

interface QueenProps {
  container?: HTMLElement
  appTitle?: string
}

interface QueenApp {
  init: () => void
}

class Queen implements QueenApp {
  rootNode: HTMLElement;
  drawer: HTMLCanvasElement;

  Textures: TextureLibrary = new TextureLibrary({
    stage: this.rootNode
  });
  Cards: CardsLibrary = new CardsLibrary({
    stage: this.rootNode
  });

  private name = 'Queen';
  private context: CanvasRenderingContext2D;

  constructor(options: QueenProps = {
    container: document.body,
    appTitle: 'Queen Cards'
  }) {
    this.rootNode = options.container;
    this.name = options.appTitle;
  }

  init() {
    this.drawer = document.createElement('canvas');
    this.drawer.id = 'app';
    this.drawer.className = 'queen-app';
    this.drawer.width = window.innerWidth;
    this.drawer.height = window.innerHeight;
    this.rootNode.appendChild(this.drawer);
    this.context = this.drawer.getContext('2d');
    this.createTitle();
  }

  createTitle() {
    this.context.font = '48px serif';
    this.context.fillText(this.name, 10, 50);

    this.context.font = '24px serif';
    this.context.fillText('Game Engine for card game', 10, 90);
  }
}

export default Queen;
