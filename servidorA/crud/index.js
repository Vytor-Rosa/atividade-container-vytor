const {initializeApp} = require("firebase/app");
const {
    getFirestore,
    collection,
    doc,
    setDoc,
    addDoc,
    query,
    where,
    getDoc,
    deleteDoc,
    getDocs } = require("firebase/firestore/lite");

const firebaseConfig = {
    apiKey: "AIzaSyBSXcZc18eTg5CR2i41N_rxL8U1JHEu66s",
    authDomain: "atividade-container.firebaseapp.com",
    projectId: "atividade-container",
    storageBucket: "atividade-container.appspot.com",
    messagingSenderId: "545814612159",
    appId: "1:545814612159:web:6862c244821550224ede0a",
    measurementId: "G-CZ9W1YW5T7"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function salvar(nomeTabela, id, dado) {
    if (id) {
        const referenceEntity = await setDoc(doc(db, nomeTabela, id), dado);
        const savedData = {
            ...dado,
            id: id
        }
        return savedData;
    } else {
        const referenceEntity = await addDoc(collection(db, nomeTabela), dado);
        const savedData = {
            ...dado,
            id: referenceEntity.id
        }
        return savedData;
    }
}

async function pegar(nomeTabela) {
    const tableRef = collection(db, nomeTabela);
    const q = query(tableRef);

    const querySnapshot = await getDocs(q);

    const lista = [];

    querySnapshot.forEach((doc) => {
        const data = {
            ...doc.data(),
            id: doc.id
        }
        lista.push(data);
    });
    return lista;
}

module.exports = {
    salvar,
    pegar
}