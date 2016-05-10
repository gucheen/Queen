/**
 * Created by gucheng on 5/9/16.
 */
console.log('Queen');

interface QueenProps {
  container?: HTMLElement
}

interface QueenApp {
  name: string,
  init: () => void
}

class Queen implements QueenApp {
  public name = 'Queen';
  public rootNode: HTMLElement;
  public drawer: HTMLCanvasElement;
  private context: CanvasRenderingContext2D;

  constructor(public options: QueenProps = {
    container: document.body
  }) {
    this.rootNode = options.container;
  }

  public init() {
    this.drawer = document.createElement('canvas');
    this.drawer.id = 'app';
    this.drawer.className = 'queen-app';
    this.drawer.width = window.innerWidth;
    this.drawer.height = window.innerHeight;
    this.rootNode.appendChild(this.drawer);
    this.context = this.drawer.getContext('2d');
    this.createTitle();
  }

  private createTitle() {
    this.context.font = '48px serif';
    this.context.fillText('Queen Cards', 10, 50);

    this.context.font = '24px serif';
    this.context.fillText('Game Engine for card game', 10, 90);
  }
}

export default Queen;
