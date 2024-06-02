### Giải thích cấu trúc source:
| Thư mục   | Chức năng     |
| :-------- | :-------------|
| assets | Lưu trữ các cài đặt tĩnh như ảnh, font, các định dạng file css tĩnh      |
| components |Lưu trữ các common component dùng chung |
| configs | Lưu trữ các config của các thư viện (Hiện tại có Axios) |
| constants | Lưu trữ các file khai báo các hằng số |
| interfaces | Lưu trữ các global interface phục vụ tái sử dụng, hoặc tránh khai báo interface vào file code, làm khó đọc |
| layouts | Nơi config layout cho dự án |
| routers | Lưu trữ config routers - sử dụng hook useRoutes của [React router v6](https://reactrouter.com/en/main) |
| screens | Lưu trữ các folder theo tên màn hình |
| stores | Lưu trữ các cài đặt của redux - source sử dụng [Redux toolkit](https://redux-toolkit.js.org/introduction/getting-started) |
| .eslintrc.js / .prettierrc / .editorconfig | config linter code / format code ts, tsx / format editor để đồng bộ 3 chức năng này theo hệ điều hành |
| config-overrides.js | File để tuỳ biến cấu hình webpack mặc định của CRA |
| .env | Khai báo enviroment cho dự án |

- Source viết bằng Typescript - Ưu tiên sử dụng typescript (có cho phép allowJS ở tsconfig)
- Đa số các configs code style / code convention đều là mặc định của thư viện

### Quy tắc đặt tên
- Tên biến/Tên file có ý nghĩa
- Tên folder camelCase, tên file function/hook/constant camelCase. Tên component/provider in hoa chữ cái đầu của mỗi từ. Không viết code sử lý trong file index.ts / index.tsx

### Để chạy
- Để run được source code cần chuẩn bị môi trường như sau: Install [NodeJS(v20.12.2||lastest)], Install [Yarn] or [NPM], [VsCode IDE]
- B1: Clone source
- B2: Mở thư mục dự án tại IDE (VsCode,...)
- B3: Create file .env tại thư mục dự án đồng cấp với file .env-example, nội dung file tôi sẽ gửi kèm với source code, coppy file -> paste vào, giải nén file và đổi tên file thành .env
- B4: Cài đặt các dependency tại terminal folder: yarn install or npm install
- B5: npm start or yarn start để chạy dự án trên local