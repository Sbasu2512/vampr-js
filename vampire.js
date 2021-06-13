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
  this.vampire.push(vampire);
  vampire.creator = this;
  }

  // Returns the total number of vampires created by that vampire
  get numberOfOffspring() {
  return this.offspring.length ;
  }

  // Returns the number of vampires away from the original vampire this vampire is
  get numberOfVampiresFromOriginal() {
    
  }

  // Returns true if this vampire is more senior than the other vampire. (Who is closer to the original vampire)
  isMoreSeniorThan(vampire) {
    if(this.yearConverted > vampire.yearConverted){
      return true;
    }
    return false;
  }

  /** Stretch **/

  // Returns the closest common ancestor of two vampires.
  // The closest common anscestor should be the more senior vampire if a direct ancestor is used.
  // For example:
  // * when comparing Ansel and Sarah, Ansel is the closest common anscestor.
  // * when comparing Ansel and Andrew, Ansel is the closest common anscestor.
  closestCommonAncestor(vampire) {

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

console.log(bart.isMoreSeniorThan(andrew));

module.exports = vampire;

