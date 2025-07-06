declare module 'three/examples/jsm/loaders/OBJLoader' {
    import { Loader } from 'three';
    export class OBJLoader extends Loader {
      load(url: string, onLoad?: (object: THREE.Group) => void): void;
      parse(data: string): THREE.Group;
    }
  }