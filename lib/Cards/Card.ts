interface textureProps {
  type: string,
  location: string
}

interface cardProps {
  name: string,
  description: string,
  texture?: textureProps
}

class Card {
  type = 'card';
  name: string;
  description: string;
  private texture;

  constructor(props: cardProps) {
    this.name = props.name;
    this.description = props.description;
    this.texture = this.texture;
  }

  getTexture() {
    return this.texture;
  }

  setTexture(texture: textureProps) {
    this.texture = texture;
    return this.texture;
  }
}

export default Card;
