
//firebase앱을 초기화하는 함수
import { initializeApp } from "firebase/app";
//getAuth 인증 시스템 생성
//GoogleAuthProvider 구글 로그인 기능 제공
import { getAuth, GoogleAuthProvider } from "firebase/auth";
//데이터베이스 -> json형태로 저장
import { getFirestore } from "firebase/firestore";
//파일저장소 이미지,영상,파일업로드
import { getStorage } from "firebase/storage";



const firebaseConfig = {
    // cra app 일때 - process.env
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGEBUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MASSAGINGSENDERID,
    appId: import.meta.env.VITE_FIREBASE_APPID,
    measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENTID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
//데이터 베이스 연결
//상품저장, 주문데이터 저장
export const db = getFirestore(app);
//파일 업로드용, 상품이미지 등록...
export const storage = getStorage(app);
