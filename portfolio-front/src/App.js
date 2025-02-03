import { FormProvider, useForm } from 'react-hook-form';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.min.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './Main';

function App() {
  const methods = useForm();

  return (
    <div className="App">
      <FormProvider {...methods}>
        <Header />
        <Main />
        <Footer />
      </FormProvider>
      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        theme="colored"
      />
    </div>
  );
}

export default App;
