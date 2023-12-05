const {initializeApp}  = require('firebase/app');
const { getStorage, ref, deleteObject} = require('firebase/storage');

/* DADOS DE ACESSO AO FIREBASE */
const firebaseConfig = {
    apiKey: "AIzaSyCX2f8n-KLtwFIkUI6mHthSSaIV4Dn6KSI",
    authDomain: "projeto-661c3.firebaseapp.com",
    projectId: "projeto-661c3",
    storageBucket: "projeto-661c3.appspot.com",
    messagingSenderId: "76239141612",
    appId: "1:76239141612:web:f3824ea55e388fd1b9c3c9",
    measurementId: "G-QPJTYZB6V6"
};

/* INICIALIZAÇÃO DO FIREBASE */
const firebaseApp = initializeApp(firebaseConfig);

/* INICIALIZAÇÃO DO STORAGE DO FIREBASE */
const storage = getStorage(firebaseApp);

const deleteImage = (imagem)=>{

    const deleteRef = ref(storage, imagem);

    deleteObject(deleteRef)
    .then(()=>{
        console.log('IMAGEM EXCLUÍDA COM SUCESSO!');
    })
    .catch((error)=>{
        console.log('ERRO AO EXCLUIR IMAGEM!');
        
    });

}

module.exports = deleteImage;