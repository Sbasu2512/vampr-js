class Vampire {
  constructor(name, yearConverted) {
    this.name = name;
    this.yearConverted = yearConverted;
    this.offspring = [];
    this.creator = null;
  }

  /** Simple tree methods **/

  // Adds the vampire as an offspring of this vampire
  addOffspring(vampire) {
  this.offspring.push(vampire);
  vampire.creator = this;
  }

  // Returns the total number of vampires created by that vampire
  get numberOfOffspring() {
  return this.offspring.length ;
  }

  // Returns the number of vampires away from the original vampire this vampire is
  get numberOfVampiresFromOriginal() {
   let numOfVamps = 0;
   let currentVamp = this;
   //goin up the tree, counting creator until no creator is found i.e, root node
   while(currentVamp.creator) {
     currentVamp = currentVamp.creator;
     numOfVamps++;
   }
   return numOfVamps;
  }

  // Returns true if this vampire is more senior than the other vampire. (Who is closer to the original vampire)
  isMoreSeniorThan(vampire=false) {
    if(this.yearConverted < vampire.yearConverted){
      return true;
    } 
  }

  /** Stretch **/

  // Returns the closest common ancestor of two vampires.
  // The closest common anscestor should be the more senior vampire if a direct ancestor is used.
  // For example:
  // * when comparing Ansel and Sarah, Ansel is the closest common anscestor.
  // * when comparing Ansel and Andrew, Ansel is the closest common anscestor.
  closestCommonAncestor(vampire) {
      let ancestor = vampire.numberOfVampiresFromOriginal;
      for (let i = 0; i < this.offspring.length; i++) {
        if ( this.offspring[i].numberOfVampiresFromOriginal > ancestor ) {
          ancestor = this.offspring[i].numberOfVampiresFromOriginal;
        }
        return this.offspring[i];
      }
    }
//**** Tree Traversal Methods ***/

    // Returns the vampire object with that name, or null if no vampire exists with that name
  vampireWithName(name) {
    if(this.name === name){
      return true;
    }else {
      return false;
    }

  }

  // Returns the total number of vampires that exist
  get totalDescendents() {
    let totalDescendents = 0;
    totalDescendents += this.numberOfOffspring.length ;
  }

  // Returns an array of all the vampires that were converted after 1980
  get allMillennialVampires() {

  }
}

const original = new Vampire("mikel", 1);
const ansel = new Vampire("ansel", 5);
const bart = new Vampire("bart", 7)
const elgort = new Vampire("elgort", 10);
const sarah = new Vampire("sarah", 15);
const andrew = new Vampire("andrew", 30);

original.addOffspring(ansel);
original.addOffspring(bart);
ansel.addOffspring(elgort);
ansel.addOffspring(sarah);
elgort.addOffspring(andrew);

// console.log(bart.isMoreSeniorThan(andrew));
//  console.log(original.numberOfVampiresFromOriginal)
//console.log(original.numberOfOffspring);
 console.log(andrew.closestCommonAncestor(sarah));
module.exports = Vampire;

