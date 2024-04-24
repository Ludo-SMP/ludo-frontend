import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './App.css';

// mocking 테스트
// async function enableMocking() {
//   if (process.env.NODE_ENV !== 'development') return;

//   const { worker } = await import('./Mocks/browser');
//   return worker.start();
// }

// enableMocking().then(() => ReactDOM.createRoot(document.getElementById('root')!).render(<App />));
ReactDOM.createRoot(document.getElementById('root')!).render(<App />);
