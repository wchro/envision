export class User {
  #email;
  #collaborations;
  constructor(uid, displayName, photoURL, verified, type, collaborations) {
    this.uid = uid;
    this.displayName = displayName;
    this.photoURL = photoURL;
    this.verified = verified;
    this.type = type;
    this.#collaborations = collaborations;
  }

  get email() {
    return false;
  }
}
