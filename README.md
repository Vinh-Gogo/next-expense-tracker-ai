
# Next Expense Tracker AI

## Công nghệ sử dụng

- **Next.js 14** (App Router)
- **TypeScript**
- **Prisma ORM**
- **SQLite** (phát triển local) / **Vercel Postgres** (triển khai production)
- **Tailwind CSS**
- **Clerk** (xác thực người dùng)
- **OpenAI API** (AI Insights)
- **Chart.js** (biểu đồ)
- **Vercel** (triển khai)

## 10 bước xây dựng dự án

1. **Khởi tạo dự án Next.js với TypeScript**
	- `npx create-next-app@latest --typescript`
2. **Cấu hình Tailwind CSS**
	- Cài đặt và cấu hình Tailwind cho Next.js.
3. **Thiết kế database với Prisma**
	- Định nghĩa schema cho bảng `Record` và các bảng liên quan.
4. **Tạo và migrate database**
	- Chạy lệnh `npx prisma migrate dev` để tạo bảng.
5. **Tích hợp xác thực với Clerk**
	- Đăng ký ứng dụng trên Clerk, cấu hình môi trường và thêm middleware xác thực.
6. **Xây dựng UI cơ bản**
	- Tạo các component: Navbar, Footer, AddNewRecord, RecordHistory, v.v.
7. **Kết nối backend với Prisma**
	- Tạo các API route hoặc server actions để thao tác dữ liệu (thêm, xoá, lấy record).
8. **Tích hợp AI Insights với OpenAI API**
	- Tạo action gọi OpenAI để sinh insight từ dữ liệu chi tiêu.
9. **Hiển thị biểu đồ với Chart.js**
	- Tạo các biểu đồ thống kê chi tiêu theo thời gian, loại, v.v.
10. **Triển khai lên Vercel**
	 - Kết nối repo với Vercel, cấu hình biến môi trường, deploy và kiểm tra hoạt động.

## Link deployment

[https://next-expense-tracker-ai-git-main-vinh-gogos-projects.vercel.app](https://next-expense-tracker-ai-git-main-vinh-gogos-projects.vercel.app)
