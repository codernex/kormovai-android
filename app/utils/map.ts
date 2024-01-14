export class Map {
  public table: { [key: string]: any };
  constructor() {
    this.table = {};
  }

  set(key: string, value: any) {
    this.table[key] = value;
  }

  get(key: string) {
    return this.table[key];
  }

  keys() {
    return Object.keys(this.table);
  }
  keyValues() {
    return Object.entries(this.table);
  }
}
