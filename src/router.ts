export const menus = [
  {
    path: "/",
    title: "Trang chủ",
  },
  {
    path: "/gioi-thieu",
    title: "Giới thiệu",
  },

  {
    path: "#",
    title: "Ngành học",
    childs: [
      {
        path: "/nganh-cong-nghe-thong-tin",
        title: "Công nghệ thông tin",
      },
      {
        path: "/nganh-dien-tu-vien-thong",
        title: "Điện tử viễn thông",
      },
      {
        path: "/nganh-quan-tri-kinh-doanh",
        title: "Quản trị kinh doanh",
      },
      {
        path: "/nganh-luat-kinh-te",
        title: "Luật kinh tế",
      },
      {
        path: "/nganh-thuong-mai-dien-tu",
        title: "Thương mại điện tử và Marketing số",
      },
      {
        path: "/nganh-ngon-ngu-anh",
        title: "Ngôn ngữ Anh",
      },
      {
        path: "/nganh-ngon-ngu-trung",
        title: "Ngôn ngữ Trung",
      },
      {
        path: "/nganh-ke-toan",
        title: "Kế toán",
      },
      {
        path: "/nganh-tai-chinh-ngan-hang",
        title: "Tài chính ngân hàng",
      },
    ],
  },
  {
    path: "/lich-khai-giang",
    title: "Lịch khai giảng",
  },
  {
    path: "/dang-ky",
    title: "Đăng ký",
  },
  {
    path: "/tin-tuc",
    title: "Tin tức",
  },
];

export type TMenu = {
  path: string;
  title: string;
  childs?: TMenu[];
};

export type TMenus = TMenu[];
