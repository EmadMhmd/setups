import React from 'react';
import Message from './components/shared/messageCom';
import Signup from './components/userOne/userOneSignupCom';
import Header from './components/shared/headerCom';
import Footer from './components/shared/footerCom';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="app">
      <Header />
      <Message />
      <Signup />
      <Footer />
    </div>
  );
}

export default App;
