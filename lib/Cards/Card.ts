import { TextureProps } from '../Textures/Textures';

export interface CardProps {
  name: string,
  description: string,
  texture?: string
}

export class Card {
  private type = 'card';
  private name: string;
  private description: string;
  private texture;

  constructor(props: CardProps) {
    this.name = props.name;
    this.description = props.description;
    this.texture = props.texture;
  }

  getTexture() {
    return this.texture;
  }

  setTexture(texture: TextureProps) {
    this.texture = texture;
    return this.texture;
  }
}