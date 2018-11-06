import { auth, User } from 'firebase'
import { user } from 'rxfire/auth'
import { Observable } from 'rxjs';

class AuthService {
  private auth = auth()

  public signup = (email: string, password: string) => 
    this.auth.createUserWithEmailAndPassword(email, password)
      .then(console.log)

  public login = (email: string, password: string) => 
    this.auth.signInWithEmailAndPassword(email, password).then(console.log)

  public get status(): Observable<User> {
    return user(this.auth)
  }
}

export default AuthService