import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import RoomList from "./pages/roomList/RoomList";

import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import {
  hotelColumns,
  roomColumns,
  userColumns,
  factoryColumns,
  supplierColumns,
  importColumns,
  exportColumns,
} from "./datatablesource";
import NewWarehouses from "./pages/newWarehouses/NewWarehouses";
import NewMaterial from "./pages/newMaterial/NewMaterial";
import NewSupplier from "./pages/newSupplier/NewSupplier";
import NewFactory from "./pages/newFactory/NewFactory";
import NewImport from "./pages/newImport/NewImport";
import NewExport from "./pages/newExport/NewExport";

function App() {
  const ProtectedRoute = ({ children }) => {
    const { user } = useContext(AuthContext);

    if (!user) {
      return <Navigate to="/login" />;
    }

    return children;
  };

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="login" element={<Login />} />
            <Route
              index
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route path="users">
              <Route
                index
                element={
                  <ProtectedRoute>
                    <List columns={userColumns} />
                  </ProtectedRoute>
                }
              />
              <Route
                path=":userId"
                element={
                  <ProtectedRoute>
                    <Single />
                  </ProtectedRoute>
                }
              />
              <Route
                path="new"
                element={
                  <ProtectedRoute>
                    <New inputs={userInputs} title="Thêm người dùng" />
                  </ProtectedRoute>
                }
              />
            </Route>
            <Route path="warehouses">
              <Route
                index
                element={
                  <ProtectedRoute>
                    <RoomList roomColumns={hotelColumns} />
                  </ProtectedRoute>
                }
              />
              <Route
                path=":productId"
                element={
                  <ProtectedRoute>
                    <Single />
                  </ProtectedRoute>
                }
              />
              <Route
                path="new"
                element={
                  <ProtectedRoute>
                    <NewWarehouses />
                  </ProtectedRoute>
                }
              />
            </Route>
            <Route path="materials">
              <Route
                index
                element={
                  <ProtectedRoute>
                    <List columns={roomColumns} />
                  </ProtectedRoute>
                }
              />
              <Route
                path=":productId"
                element={
                  <ProtectedRoute>
                    <Single />
                  </ProtectedRoute>
                }
              />
              <Route
                path="new"
                element={
                  <ProtectedRoute>
                    <NewMaterial />
                  </ProtectedRoute>
                }
              />
            </Route>
            <Route path="factories">
              <Route
                index
                element={
                  <ProtectedRoute>
                    <List columns={factoryColumns} />
                  </ProtectedRoute>
                }
              />
              <Route
                path=":factoryId"
                element={
                  <ProtectedRoute>
                    <Single />
                  </ProtectedRoute>
                }
              />
              <Route
                path="new"
                element={
                  <ProtectedRoute>
                    <NewFactory />
                  </ProtectedRoute>
                }
              />
            </Route>
            <Route path="suppliers">
              <Route
                index
                element={
                  <ProtectedRoute>
                    <List columns={supplierColumns} />
                  </ProtectedRoute>
                }
              />
              <Route
                path=":supplierId"
                element={
                  <ProtectedRoute>
                    <Single />
                  </ProtectedRoute>
                }
              />
              <Route
                path="new"
                element={
                  <ProtectedRoute>
                    <NewSupplier />
                  </ProtectedRoute>
                }
              />
            </Route>

            <Route path="imports">
              <Route
                index
                element={
                  <ProtectedRoute>
                    <List columns={importColumns} />
                  </ProtectedRoute>
                }
              />
              <Route
                path=":importId"
                element={
                  <ProtectedRoute>
                    <Single />
                  </ProtectedRoute>
                }
              />
              <Route
                path="new"
                element={
                  <ProtectedRoute>
                    <NewImport />
                  </ProtectedRoute>
                }
              />
            </Route>
            <Route path="exports">
              <Route
                index
                element={
                  <ProtectedRoute>
                    <List columns={exportColumns} />
                  </ProtectedRoute>
                }
              />
              <Route
                path=":exportId"
                element={
                  <ProtectedRoute>
                    <Single />
                  </ProtectedRoute>
                }
              />
              <Route
                path="new"
                element={
                  <ProtectedRoute>
                    <NewExport />
                  </ProtectedRoute>
                }
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
