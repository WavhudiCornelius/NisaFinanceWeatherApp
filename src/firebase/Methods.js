import Firebase from './Fire';

const accountsRef = Firebase.firestore().collection('Accounts');

export const addAccount = (name, surname, pnumber, city, email, password ) => {

    return accountsRef.doc(`${pnumber}`).set({
        name: `${name}`,
        surname: `${surname}`,
        pnumber: `${pnumber}`,
        city: `${city}`,
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

// user authentication
// checks if user phonenumber and password are vaild and that they are in the database
// it returns true or false based on the respond
export const authentication = (pnumber, password) => {

    return accountsRef.get().then((querySnapshot) => {
        const docs = querySnapshot.docs;
        var res = false;
        var city = '';
        for(let i = 0; i < docs.length; i++) {
            if(docs[i].id === pnumber) {
                if(docs[i].data().password === password) {
                    res = true;
                    city = docs[i].data().city;
                    break;
                }
            }
        }
        return {res: res, city: city};
    });
}