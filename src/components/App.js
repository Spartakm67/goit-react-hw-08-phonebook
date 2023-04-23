
// import { Container, IfEmpty } from "./App.styled";
// import { ContactsForm } from "./ContactsForm/ContactsForm";
// import { ContactsFormList } from './ContactsFormList/ContactsFormList';
// import { Filter } from './Filter/Filter';
// import { useSelector } from 'react-redux';
// import { selectContacts, selectLoading, selectError } from 'redux/selectors';
// import Notiflix from 'notiflix';

// export const App = () => {

// const contacts = useSelector(selectContacts);
// const loading = useSelector(selectLoading);
// const error = useSelector(selectError);
  
//   if (error) {
//     Notiflix.Notify.failure(`Please reload the page. ${error} `);
//   }
  
//   return (
//     <Container>
//       <h1>Phonebook</h1>
//       <ContactsForm />
//       <h2>Contacts</h2>
//       {loading && <div>Loading contacts...</div>}
//       <Filter />
//       <ContactsFormList />
//       {contacts.length > 0 ? (
//        <IfEmpty> All Contacts have been succesfully uploaded</IfEmpty>
//       ) : (
//         <IfEmpty> Phonebook is empty</IfEmpty>
//       )}
//     </Container>);
// };

// Notiflix.Notify.init({
//   position: 'right-top',
//   width: '400px',
//   distance: '10px',
//   opacity: 1,
//   rtl: false,
//   timeout: 2000,
// });

// import { useEffect, lazy } from 'react';
import { lazy } from 'react';
// import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout'; 
// import { PrivateRoute } from './PrivateRoute';
// import { RestrictedRoute } from './RestrictedRoute';
// import { refreshUser } from 'redux/auth/authOperations';
// import { useAuth } from 'hooks/useAuth'; 

const HomePage = lazy(() => import('pages/Home/Home'));
// const RegisterPage = lazy(() => import('pages/Registration/Registration'));
// const LoginPage = lazy(() => import('pages/Login/Login'));
// const ContactsPage = lazy(() => import('pages/Contacts/Contacts'));

export const App = () => {
  // const dispatch = useDispatch();
  // const { isRefreshing } = useAuth();

  // useEffect(() => {
  //   dispatch(refreshUser());
  // }, [dispatch]);

  
  // return isRefreshing ? (
  //   <b>Refreshing user...</b>
  // ) :
    
   return (
    <Routes>
       <Route path="/" element={<Layout />}>
         <Route index element={<HomePage />}></Route>
        {/* <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<RegisterPage />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        /> */}
      </Route>
    </Routes>
  );
};
