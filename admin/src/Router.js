import React from "react";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import ListArray from "./pages/listArray/ListArray";

import { Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import {
  warehouseColumns,
  materialColumns,
  userColumns,
  factoryColumns,
  supplierColumns,
  importColumns,
  exportColumns,
} from "./datatablesource";
// User
import NewUser from "./pages/user/newUser/NewUser";
import DetailUser from "./pages/user/detailUser/DetailUser";
import EditUser from "./pages/user/editUser/EditUser";
// Kho
import NewWarehouses from "./pages/warehouse/newWarehouses/NewWarehouses";
import DetailWarehouses from "./pages/warehouse/detailWarehouses/DetailWarehouses";
import EditWarehouses from "./pages/warehouse/editWarehouses/EditWarehouses";
// Vật liệu
import NewMaterial from "./pages/material/newMaterial/NewMaterial";
import DetailMaterial from "./pages/material/detailMaterial/DetailMaterial";
import EditMaterial from "./pages/material/editMaterial/EditMaterial";
// Nhà cung cấp
import NewSupplier from "./pages/supplier/newSupplier/NewSupplier";
import DetailSupplier from "./pages/supplier/detailSupplier/DetailSupplier";
import EditSupplier from "./pages/supplier/editSupplier/EditSupplier";
// Phân xưởng
import NewFactory from "./pages/factory/newFactory/NewFactory";
import DetailFactory from "./pages/factory/detailFactory/DetailFactory";
import EditFactory from "./pages/factory/editFactory/EditFactory";
// Nhập kho
import NewImport from "./pages/import/newImport/NewImport";
import DetailImport from "./pages/import/detailImport/DetailImport";
// Xuất kho
import NewExport from "./pages/export/newExport/NewExport";
import DetailExport from "./pages/export/detailExport/DetailExport";

const Router = () => {
  const ProtectedRoute = ({ children }) => {
    const { user } = useContext(AuthContext);

    if (!user) {
      return <Navigate to="/login" />;
    }

    return children;
  };

  return (
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
                <DetailUser />
              </ProtectedRoute>
            }
          />
          <Route
            path="new"
            element={
              <ProtectedRoute>
                <NewUser title="Thêm người dùng" />
              </ProtectedRoute>
            }
          />
          <Route
            path="edit"
            element={
              <ProtectedRoute>
                <EditUser title="Chỉnh sửa thông tin người dùng" />
              </ProtectedRoute>
            }
          />
        </Route>
        <Route path="warehouses">
          <Route
            index
            element={
              <ProtectedRoute>
                <List columns={warehouseColumns} />
              </ProtectedRoute>
            }
          />
          <Route
            path=":warehousesId"
            element={
              <ProtectedRoute>
                <DetailWarehouses />
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
          <Route
            path="edit"
            element={
              <ProtectedRoute>
                <EditWarehouses title="Chỉnh sửa thông tin kho" />
              </ProtectedRoute>
            }
          />
        </Route>
        <Route path="materials">
          <Route
            index
            element={
              <ProtectedRoute>
                <List columns={materialColumns} />
              </ProtectedRoute>
            }
          />
          <Route
            path=":materialId"
            element={
              <ProtectedRoute>
                <DetailMaterial />
              </ProtectedRoute>
            }
          />
          <Route
            path="edit"
            element={
              <ProtectedRoute>
                <EditMaterial title="Chỉnh sửa thông tin vật liệu" />
              </ProtectedRoute>
            }
          />
          <Route
            path="import/new"
            element={
              <ProtectedRoute>
                <NewImport />
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
                <ListArray columns={factoryColumns} />
              </ProtectedRoute>
            }
          />
          <Route
            path=":facetoriesId"
            element={
              <ProtectedRoute>
                <DetailFactory />
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

          <Route
            path="edit"
            element={
              <ProtectedRoute>
                <EditFactory title="Chỉnh sửa thông tin phân xưởng" />
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
                <DetailSupplier />
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
                <ListArray columns={importColumns} />
              </ProtectedRoute>
            }
          />
          <Route path=":importId" element={<ProtectedRoute></ProtectedRoute>} />
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
                <ListArray columns={exportColumns} />
              </ProtectedRoute>
            }
          />
          <Route path=":exportId" element={<ProtectedRoute></ProtectedRoute>} />
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
  );
};

export default Router;
