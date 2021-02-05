import Firebase from './Fire';

const accountsRef = Firebase.firestore().collection('Accounts');

export const addAccount = (name, surname, pnumber, email, password ) => {

    return accountsRef.doc(`${pnumber}`).set({
        name: `${name}`,
        surname: `${surname}`,
        pnumber: `${pnumber}`,
        email: `${email}`,
        password: `${password}`,
    })
    .then(() => {
        return true;
    })
    .catch((error) => { // if failing check here
        console.error("Error writing document: ", error);
        return false;
    });
}