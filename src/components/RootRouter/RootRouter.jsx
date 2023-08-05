import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "../../pages/LoginPage/LoginPage";
import SignupPage from "../../pages/SignUpPage/SignUpPage";
import ItemsPage from "../../pages/ItemsPage/Items";
import AddItem from "../../pages/AddItemPage/AddItemPage";
import Cart from "../../pages/CartPage/Cart";
import CustomerWrapper from "../AuthorizedWrapper/CustomerWrapper";
import {
  ROUTE_ADD_ITEM_PAGE,
  ROUTE_CART_PAGE,
  ROUTE_DEFAULT_PAGE,
  ROUTE_ITEMS_PAGE,
  ROUTE_LOGIN_PAGE,
  ROUTE_SIGNUP_PAGE,
} from "../../utils/routes";
import AdminPage from "../AuthorizedWrapper/AdminPage";

// export default function RootRouter() {
//   return (
//     <Routes>
//       <Route path={ROUTE_DEFAULT_PAGE} element={<LoginPage />} />
//       <Route path={ROUTE_LOGIN_PAGE} element={<LoginPage />} />
//       <Route path={ROUTE_SIGNUP_PAGE} element={<SignupPage />} />

//       <Route path={ROUTE_ADD_ITEM_PAGE} element={<AddItem />} />
//       <Route path={ROUTE_ITEMS_PAGE} element={<ItemsPage />} />
//       <Route path={ROUTE_CART_PAGE} element={<Cart />} />
//       {/* <Route
//         path={ROUTE_ACCOUNT_DETAILS_PAGE}
//         element={
//           <AuthorizedWrapper routeName="ROUTE_ACCOUNT_DETAILS_PAGE">
//             <AccountDetails />
//           </AuthorizedWrapper>
//         }
//       /> */}
//     </Routes>
//   );
// }

export default function RootRouter() {
  return (
    <Router>
      <Routes>
        <Route path={ROUTE_DEFAULT_PAGE} element={<LoginPage />} />
        <Route path={ROUTE_LOGIN_PAGE} element={<LoginPage />} />
        <Route path={ROUTE_SIGNUP_PAGE} element={<SignupPage />} />

        <Route path={ROUTE_ADD_ITEM_PAGE} element={<AdminPage><AddItem /></AdminPage>} />
        <Route path={ROUTE_ITEMS_PAGE} element={<CustomerWrapper><ItemsPage /></CustomerWrapper>} />
        <Route path={ROUTE_CART_PAGE} element={<Cart />} />
        {/* <Route
        path={ROUTE_ACCOUNT_DETAILS_PAGE}
        element={
          <AuthorizedWrapper routeName="ROUTE_ACCOUNT_DETAILS_PAGE">
            <AccountDetails />
          </AuthorizedWrapper>
        }
      /> */}
      </Routes>
    </Router>
  );
}
