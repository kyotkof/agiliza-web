// Importando as bibliotecas do Firebase via CDN (mais fácil para você)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// Suas credenciais que você acabou de pegar
const firebaseConfig = {
  apiKey: "AIzaSyB7N0jCiM9aVSBwqyNPUh3Plq0GBxrORJk",
  authDomain: "agiliza-fe5c8.firebaseapp.com",
  projectId: "agiliza-fe5c8",
  storageBucket: "agiliza-fe5c8.firebasestorage.app",
  messagingSenderId: "639668351006",
  appId: "1:639668351006:web:4a9b904c6e6de96516be0f",
  measurementId: "G-JF5B4X3J1L"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);
// Exporta o banco de dados para usarmos nos outros arquivos
export const db = getFirestore(app);
