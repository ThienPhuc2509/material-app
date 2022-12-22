export const userColumns = [
  // { field: "_id", headerName: "ID", width: 70 },
  {
    field: "username",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img
            className="cellImg"
            src={params.row.img || "https://i.ibb.co/MBtjqXQ/no-avatar.gif"}
            alt="avatar"
          />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },

  {
    field: "country",
    headerName: "Địa chỉ",
    width: 100,
  },
  {
    field: "phone",
    headerName: "Số điện thoại",
    width: 100,
  },
  {
    field: "role",
    headerName: "Phân quyền",
    width: 100,
    renderCell: (params) => {
      if (params.row.role === 0) {
        return <div style={{ color: "red", fontWeight: "bold" }}>Admin</div>;
      } else if (params.row.role === 1) {
        return (
          <div style={{ color: "green", fontWeight: "bold" }}>Nhân viên</div>
        );
      } else if (params.row.role === 2) {
        return (
          <div style={{ color: "green", fontWeight: "bold" }}>
            Quản lý tất cả kho
          </div>
        );
      } else if (params.row.role === 3) {
        return (
          <div style={{ color: "green", fontWeight: "bold" }}>Chỉ định kho</div>
        );
      } else if (params.row.role === 5) {
        return (
          <div style={{ color: "green", fontWeight: "bold" }}>
            Quản lý tất cả phân xưởng
          </div>
        );
      } else if (params.row.role === 5) {
        return (
          <div style={{ color: "green", fontWeight: "bold" }}>
            Chỉ định phân xưởng
          </div>
        );
      } else {
        return (
          <div style={{ color: "orange", fontWeight: "bold" }}>Khách hàng</div>
        );
      }
    },
  },
];

export const warehouseColumns = [
  // { field: "_id", headerName: "ID", width: 250 },
  {
    field: "name",
    headerName: "Tên kho",
    width: 120,
  },
  {
    field: "type",
    headerName: "Mô tả",
    width: 200,
  },
  {
    field: "state",
    headerName: "Tình trạng",
    width: 230,
    renderCell: (params) => {
      if (params.value === true) {
        return <p style={{ color: "green" }}>Đang hoạt động</p>;
      } else {
        return <p style={{ color: "red" }}>Tạm ngưng</p>;
      }
    },
  },
];

export const materialColumns = [
  // { field: "_id", headerName: "ID", width: 230 },
  {
    field: "name",
    headerName: "Tên vật liệu",
    width: 150,
  },
  {
    field: "price",
    headerName: "Giá tiền",
    width: 100,
  },
  {
    field: "unit",
    headerName: "Đơn vị",
    width: 100,
  },
  {
    field: "desc",
    headerName: "Mô tả",
    width: 190,
  },
  {
    field: "quantity",
    headerName: "Số lượng",
    width: 100,
  },
  // {
  //   field: "supplierId",
  //   headerName: "Nhà cung cấp",
  //   width: 250,
  //   renderCell: (params) => {
  //   },
  // },
];

export const factoryColumns = [
  // { field: "_id", headerName: "ID", width: 170 },
  {
    field: "name",
    headerName: "Phân xưởng",
    width: 230,
  },
  {
    field: "phone",
    headerName: "Số điện thoại",
    width: 230,
  },
  {
    field: "materials",
    headerName: "Vật liệu",
    width: 260,
    renderCell: (params) => (
      <ul style={{ padding: "0px" }}>
        {params.value.map((role, index) => (
          <div key={index}>
            <li style={{ listStyle: "none" }}>
              <b>Tên:</b> {role._id}
            </li>
            <li style={{ listStyle: "none" }}>
              <b>Số lượng:</b> {role.quantity}
            </li>
          </div>
        ))}
      </ul>
    ),
  },
];

export const supplierColumns = [
  // { field: "_id", headerName: "ID", width: 70 },
  {
    field: "name",
    headerName: "Nhà cung cấp",
    width: 180,
  },
  {
    field: "email",
    headerName: "Email",
    width: 180,
  },
  {
    field: "address",
    headerName: "Địa chỉ",
    width: 180,
  },
  {
    field: "phone",
    headerName: "Số điện thoại",
    width: 120,
  },
];
export const importColumns = [
  { field: "_id", headerName: "Mã phiếu nhập kho", width: 230 },
  {
    field: "materials",
    headerName: "Vật liệu",
    width: 260,
    renderCell: (params) => (
      <ul style={{ padding: "0px" }}>
        {params.value.map((role, index) => (
          <div key={index}>
            <li style={{ listStyle: "none" }}>
              <b>Tên:</b> {role._id}
            </li>
            <li style={{ listStyle: "none" }}>
              <b>Số lượng:</b> {role.quantity}
            </li>
          </div>
        ))}
      </ul>
    ),
  },
  // {
  //   field: material.toString(),
  //   headerName: "Vật liệu",
  //   width: 230,
  //   renderCell: (params) => (
  //     <ul style={{ padding: "0px" }}>
  //       {params.value.map((role, index) => (
  //         <div key={index}>
  //           <li style={{ listStyle: "none" }}>
  //             <b>Số lượng:</b> {role.quantity}
  //           </li>
  //         </div>
  //       ))}
  //     </ul>
  //   ),
  // },
];
export const exportColumns = [
  { field: "_id", headerName: "Mã phiếu xuất kho", width: 230 },
  {
    field: "materials",
    headerName: "Vật liệu",
    width: 260,
    renderCell: (params) => (
      <ul style={{ padding: "0px" }}>
        {params.value.map((role, index) => (
          <div key={index}>
            <li style={{ listStyle: "none" }}>
              <b>Tên:</b> {role._id}
            </li>
            <li style={{ listStyle: "none" }}>
              <b>Số lượng:</b> {role.quantity}
            </li>
          </div>
        ))}
      </ul>
    ),
  },
];
