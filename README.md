

# Next Expense Tracker AI

## 🚀 Technologies Used

- **Next.js 14** (App Router)
- **TypeScript**
- **Prisma ORM**
- **SQLite** (local development) / **Vercel Postgres** (production)
- **Tailwind CSS**
- **Clerk** (user authentication)
- **OpenAI API** (AI Insights)
- **Chart.js** (charts & graphs)
- **Vercel** (deployment)

## 🛠️ 10 Steps to Build the Project

1. ✨ **Initialize Next.js Project with TypeScript**  
	`npx create-next-app@latest --typescript`
2. 🎨 **Configure Tailwind CSS**  
	Install and set up Tailwind for Next.js.
3. 🗄️ **Design Database with Prisma**  
	Define schema for `Record` and related tables.
4. 🏗️ **Create & Migrate Database**  
	Run `npx prisma migrate dev` to create tables.
5. 🔐 **Integrate Authentication with Clerk**  
	Register app on Clerk, set environment variables, add middleware.
6. 🧩 **Build Basic UI**  
	Create components: Navbar, Footer, AddNewRecord, RecordHistory, etc.
7. 🔗 **Connect Backend with Prisma**  
	Create API routes or server actions for data operations (add, delete, fetch records).
8. 🤖 **Integrate AI Insights with OpenAI API**  
	Add actions to call OpenAI for generating insights from expenses.
9. 📊 **Display Charts with Chart.js**  
	Visualize expenses by time, category, etc.
10. 🚢 **Deploy to Vercel**  
	 Connect repo to Vercel, set environment variables, deploy, and test.

## 🌐 Deployment

[Live Demo](https://next-expense-tracker-ai-git-main-vinh-gogos-projects.vercel.app)
