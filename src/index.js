import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './app.js';

import createStore from './store';
const store = createStore();

function Main() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Main />, rootElement);




//============= CONTEXT (OLD) ===================
// import React from 'react';

// export const SettingsContext = React.createContext();

// class Settings extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       maxVisible: 3,
//       showCompleted: true,
//     };
//   }

//   render() {
//     return (
//       <SettingsContext.Provider value={this.state}>
//         {this.props.children}
//       </SettingsContext.Provider>
//     );
//   }
// }

// export default Settings;


//================== HOOKS (OLD)==================

// import { useState } from 'react';

// const useForm = (callback) => {

//   const [values, setValues] = useState({});

//   const handleSubmit = (event) => {
//     if (event) event.preventDefault();
//     callback(values);
//   };

//   const handleChange = (event) => {
//     event.persist();
//     setValues(values => ({ ...values, [event.target.name]: event.target.value }));
//   };

//   return {
//     handleChange,
//     handleSubmit,
//     values,
//   }
// };

// export default useForm;