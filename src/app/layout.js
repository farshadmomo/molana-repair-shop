import "../app/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { TabProvider } from "../context/TabContext";

export const metadata = {
  title: "سایت عیب‌یابی خودرو",
  description: "بررسی مشکلات فنی، شنیدن صدای خودرو و پیشنهاد راه‌حل‌ها",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl" className="scroll-smooth pt-12">
      <body className="bg-black text-white">
        <TabProvider>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1 container mx-auto px-4 py-8">
              {children}
            </main>
            <Footer />
          </div>
        </TabProvider>
      </body>
    </html>
  );
}
