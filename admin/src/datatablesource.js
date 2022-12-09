export const userColumns = [
  { field: "_id", headerName: "ID", width: 70 },
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
    headerName: "Country",
    width: 100,
  },
  {
    field: "phone",
    headerName: "Phone",
    width: 100,
  },
  {
    field: "isAdmin",
    headerName: "Vai tro",
    width: 100,
  },
];

export const hotelColumns = [
  { field: "_id", headerName: "ID", width: 250 },
  {
    field: "name",
    headerName: "Name",
    width: 150,
  },
  {
    field: "type",
    headerName: "Loại",
    width: 100,
  },
  {
    field: "state",
    headerName: "Tình trạng",
    width: 230,
  },
];

export const roomColumns = [
  { field: "_id", headerName: "ID", width: 230 },
  {
    field: "name",
    headerName: "Tên vật liệu",
    width: 230,
  },
  {
    field: "roomNumbers",
    headerName: "Loại vật liệu",
    width: 230,
    renderCell: (params) => (
      <div>
        {params.value.map((role, index) => (
          <div key={index}>
            <p>Tên: {role.title}</p>
            <p>Giá tiền: {role.price}</p>
            <p>Đơn vị: {role.unit}</p>
            <p>Mô tả: {role.desc}</p>
            <p>Số lượng: {role.quantity}</p>
          </div>
        ))}
      </div>
    ),
    type: "string",
  },
];

export const factoryColumns = [
  { field: "_id", headerName: "ID", width: 170 },
  {
    field: "name",
    headerName: "Tên phân xưởng",
    width: 230,
  },
  {
    field: "phone",
    headerName: "Số điện thoại",
    width: 230,
  },
];

export const supplierColumns = [
  { field: "_id", headerName: "ID", width: 70 },
  {
    field: "name",
    headerName: "Name",
    width: 230,
  },
  {
    field: "email",
    headerName: "Email",
    width: 100,
  },
  {
    field: "address",
    headerName: "Address",
    width: 100,
  },
  {
    field: "phone",
    headerName: "Phone",
    width: 100,
  },
];
