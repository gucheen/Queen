import { Card, CardProps } from './Card';

export interface CardsLibraryOptions {
  stage: HTMLElement
}

export class CardsLibrary {
  private library = [];
  private libraryMap = {};
  owner: HTMLElement;

  constructor(options: CardsLibraryOptions) {
    this.owner = options.stage;
  }

  addCard(props: CardProps) {
    const card = new Card(props);
    this.library.push(card);
    this.libraryMap[props.name] = card;
    return card;
  }

  getCard(name: string) {
    return this.libraryMap[name];
  }
}