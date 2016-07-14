/**
 * Texture
 */
export interface TextureProps {
  type: string,
  location: string,
  name: string
}

export class TextureLibrary {
  private library = {};
  owner: HTMLElement;

  constructor(options) {
    this.owner = options.stage;
  }

  add(textureProps: TextureProps) {
    this.library[textureProps.name] = textureProps;
  }

  get(name) {
    return this.library[name];
  }

  update(name: string, props) {
    if (typeof (props) === 'undefined') {
      console.error('Props needed');
      return;
    }
  }
}
