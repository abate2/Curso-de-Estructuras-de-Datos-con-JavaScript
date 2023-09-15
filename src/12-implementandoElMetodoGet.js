class HashTable {
  constructor (size) {
    this.data = new Array(size);
  }

hashMethod(key) {
  let hash = 0;
  for (let i = 0; i < key.length; i++) {
    hash = (hash + key.charCodeAt(i) * i) % this.data.length;
  }// casi nunca vamos a tener que construir una hash function.
  return hash;
}
  set(key, value) {
    const address = this.hashMethod(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    return this.data;
  }
  get(key) {
    const address = this.hashMethod(key);
    const currentBucket = this.data[address];
    if(currentBucket) {
      for(let i = 0; i < currentBucket.length; i++) {
        if(currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }//Este  metodo que estamos  haciendo como get nos permitira por medio de una comparacion de todos los valores, usando la keyword que para este caso es  el nombre  que asignamos en el array, con lo cual obtendremos el año de nacimiento.
      }
    }
    return undefined;
  }
}

const myHashTable = new HashTable(50);

myHashTable.set("Diego", 1990);
myHashTable.set("Mariana", 1998);
myHashTable.set("Adriana", 2000);