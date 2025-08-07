export default function ContactPage() {
  return (
    <section>
      <h1 className="text-3xl font-bold text-white mb-4">تماس با ما</h1>
      <p className="text-gray-300 mb-4">
        برای ارتباط با پشتیبانی یا ارسال بازخورد، با ما تماس بگیرید.
      </p>
      <form className="space-y-4 max-w-md">
        <input
          type="text"
          placeholder="نام شما"
          className="w-full p-3 rounded bg-gray-800 text-white placeholder-gray-400"
        />
        <input
          type="email"
          placeholder="ایمیل شما"
          className="w-full p-3 rounded bg-gray-800 text-white placeholder-gray-400"
        />
        <textarea
          placeholder="پیام شما"
          className="w-full p-3 rounded bg-gray-800 text-white placeholder-gray-400"
        ></textarea>
        <button className="bg-blue-500 px-5 py-2 rounded text-white hover:bg-blue-600">
          ارسال
        </button>
      </form>
    </section>
  );
}
