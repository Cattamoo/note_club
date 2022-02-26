import {
    getAuth,
    signInWithPopup,
    TwitterAuthProvider,
} from 'firebase/auth';

class AuthService {
    constructor() {
        this.firebaseAuth = getAuth();
        this.twitterProvider = new TwitterAuthProvider();
    }

    login(providerName) {
        const authProvider = this.getProvider(providerName);
        return signInWithPopup(this.firebaseAuth, authProvider);
    }

    logout() {
        this.firebaseAuth.signOut();
    }

    onAuthChange(onUserChanged) {
        this.firebaseAuth.onAuthStateChanged((user) => {
            onUserChanged(user);
        });
    }

    getProvider(providerName) {
        switch (providerName) {
            case 'Twitter':
                return this.twitterProvider;
            default:
                throw new Error(`not supported provider: ${providerName}`);
        }
    }
}

export default AuthService;