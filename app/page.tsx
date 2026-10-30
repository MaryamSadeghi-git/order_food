
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0b0f0d] text-emerald-50 selection:bg-emerald-500 selection:text-black font-sans">
      
      {/* ================= هدر ================= */}
     <Header/>

      {/* ================= بخش اول: بنر اصلی (Hero) ================= */}
      <section className="relative px-6 py-16 md:py-24 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-white">
            ناهار خوب، <br />
            <span className="text-emerald-400">یک انتخاب</span> فاصله دارد
          </h1>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            با لوکس فود، غذای سالم و باکیفیت را در سریع‌ترین و آسان‌ترین زمان به عنوان غذای شرکتی میل کنید.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-emerald-500 hover:bg-emerald-400 text-black font-semibold px-6 py-3 rounded-xl transition shadow-lg shadow-emerald-500/20">
              ثبت‌نام در رستوران
            </button>
            <button className="border border-[#1c2e24] bg-[#121a16] hover:border-emerald-500/60 px-6 py-3 rounded-xl transition text-sm">
              دانلود از کافه بازار
            </button>
          </div>
        </div>
            <div className="relative h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden shadow-2xl border border-[#1c2e24] bg-[#121a16] flex items-end p-6">
                {/* تصویر به عنوان پس‌زمینه کامل کل باکس */}
                <Image
                  src="/order5.png"
                  alt="order"
                  fill
                  className="absolute inset-0 h-full w-full object-cover"
                />

                 {/* لایه گرادینت تاریک برای خوانایی متن روی عکس */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
            {/* محتوا و متن روی تصویر */}
            <div className="relative z-10">
              <p className="text-sm md:text-base text-emerald-300 font-medium">
                غذای خوب، تیم‌های قوی‌تری می‌سازد
              </p>
            </div>
          </div>

      </section>

      {/* ================= بخش ویژگی‌ها ================= */}
      <section className="border-t border-b border-[#1c2e24] py-8 bg-[#0e1411]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-4 rounded-xl hover:bg-[#121a16] transition border border-transparent hover:border-[#1c2e24]">
            <h3 className="font-bold text-base mb-1 text-white">کیفیت تضمینی</h3>
            <p className="text-xs text-gray-400">طعم و کیفیت عالی</p>
          </div>
          <div className="p-4 rounded-xl hover:bg-[#121a16] transition border border-transparent hover:border-[#1c2e24]">
            <h3 className="font-bold text-base mb-1 text-white">تنوع منوی روزانه</h3>
            <p className="text-xs text-gray-400">برای هر سلیقه‌ای</p>
          </div>
          <div className="p-4 rounded-xl hover:bg-[#121a16] transition border border-transparent hover:border-[#1c2e24]">
            <h3 className="font-bold text-base mb-1 text-white">تحویل سریع</h3>
            <p className="text-xs text-gray-400">در زمان دلخواه شما</p>
          </div>
          <div className="p-4 rounded-xl hover:bg-[#121a16] transition border border-transparent hover:border-[#1c2e24]">
            <h3 className="font-bold text-base mb-1 text-white">سفارش آسان</h3>
            <p className="text-xs text-gray-400">در چند کلیک</p>
          </div>
        </div>
      </section>

      {/* ================= بخش تجربه متفاوت از سفارش غذای شرکتی ================= */}
      <section className="py-20 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="relative h-72 md:h-96 rounded-2xl overflow-hidden border border-[#1c2e24] bg-[#121a16] flex items-center justify-center">
          <div className="text-center p-6">
            <Image
              src="/order4.png"
              alt="aplication"
              fill
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="space-y-6">
          <span className="text-xs text-emerald-400 font-semibold uppercase tracking-wider">چرا لوکس فود؟</span>
          <h2 className="text-2xl md:text-4xl font-extrabold text-white">تجربه‌ای متفاوت از سفارش غذای شرکتی</h2>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            ما در لوکس فود، بهتر می‌دانیم که وجوه غذایی خوب، مورالِ انرژی کارکنان و سلامت آن‌ها را بالاتر طلب کند. به همین دلیل بهترین سرآشپزها را برای شما انتخاب کرده‌ایم.
          </p>
          <button className="border border-[#1c2e24] bg-[#121a16] hover:border-emerald-500 px-6 py-3 rounded-xl text-sm transition">
            بیشتر بدانید
          </button>
        </div>
      </section>

      {/* ================= بخش هم‌پوشانی غذای خوب و تیم‌های قوی ================= */}
      <section className="py-12 bg-[#0e1411] border-y border-[#1c2e24]">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-3">
          <h3 className="text-xl md:text-2xl font-bold text-white">غذای خوب، تیم‌های قوی‌تر می‌سازد</h3>
          <p className="text-xs md:text-sm text-gray-400">همین حالا لوکس فود را دانلود کنید و تفاوت را احساس کنید</p>
        </div>
      </section>

      {/* ================= بخش ثبت شرکت و ویژگی‌های سازمانی (تصویر دوم) ================= */}
      <section className="py-20 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* فرم ثبت شرکت (سمت راست در RTL) */}
        <div className="lg:col-span-7 bg-[#121a16] border border-[#1c2e24] p-8 md:p-10 rounded-3xl shadow-xl">
          <div className="mb-6">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-2">فرم ثبت شرکت</h2>
            <p className="text-xs text-gray-400">برای دریافت تخفیف‌ها و شرایط خاص، اطلاعات شرکتی خود را وارد کنید.</p>
          </div>
          
          <form className="space-y-4">
            <div>
              <label className="block text-xs text-emerald-300/80 mb-2 font-medium">نام شرکت</label>
              <input 
                type="text" 
                placeholder="نام شرکت خود را وارد کنید" 
                className="w-full bg-[#0b0f0d] border border-[#1c2e24] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-emerald-500 text-gray-100 transition"
              />
            </div>
            <div>
              <label className="block text-xs text-emerald-300/80 mb-2 font-medium">تعداد کارکنان</label>
              <select className="w-full bg-[#0b0f0d] border border-[#1c2e24] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-emerald-500 text-gray-300 transition">
                <option>انتخاب کنید</option>
                <option>زیر ۵۰ نفر</option>
                <option>۵۰ تا ۲۰۰ نفر</option>
                <option>بیش از ۲۰۰ نفر</option>
              </select>
            </div>
            <button type="submit" className="w-full bg-emerald-500 hover:bg-emerald-400 text-black font-bold py-3.5 rounded-xl transition duration-200 mt-4 shadow-lg shadow-emerald-500/20">
              ثبت درخواست همکاری
            </button>
            <p className="text-[11px] text-center text-gray-500 mt-3">🔒 اطلاعات شما کاملاً محفوظ خواهد ماند</p>
          </form>
        </div>

        {/* ویژگی‌های سازمانی (سمت چپ در RTL) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-[#121a16] border border-[#1c2e24] p-6 rounded-2xl flex items-start gap-4">
            <span className="text-2xl text-emerald-400">🏢</span>
            <div>
              <h4 className="font-bold text-sm text-white mb-1">منوی اختصاصی سازمانی</h4>
              <p className="text-xs text-gray-400">با توجه به بودجه و پرسنل شما</p>
            </div>
          </div>
          <div className="bg-[#121a16] border border-[#1c2e24] p-6 rounded-2xl flex items-start gap-4">
            <span className="text-2xl text-emerald-400">🏷️</span>
            <div>
              <h4 className="font-bold text-sm text-white mb-1">تخفیف‌های ویژه شرکتی</h4>
              <p className="text-xs text-gray-400">برای همکاری‌های بلندمدت</p>
            </div>
          </div>
          <div className="bg-[#121a16] border border-[#1c2e24] p-6 rounded-2xl flex items-start gap-4">
            <span className="text-2xl text-emerald-400">🤝</span>
            <div>
              <h4 className="font-bold text-sm text-white mb-1">پشتیبانی اختصاصی</h4>
              <p className="text-xs text-gray-400">از ثبت سفارش تا تحویل</p>
            </div>
          </div>
          <div className="bg-[#121a16] border border-[#1c2e24] p-6 rounded-2xl flex items-start gap-4">
            <span className="text-2xl text-emerald-400">📊</span>
            <div>
              <h4 className="font-bold text-sm text-white mb-1">گزارش‌گیری و مدیریت سفارش‌ها</h4>
              <p className="text-xs text-gray-400">به صورت آنلاین</p>
            </div>
          </div>
        </div>

      </section>

      {/* ================= بخش سازمان‌های همکار ================= */}
      <section className="py-16 border-t border-[#1c2e24] text-center">
        <h3 className="text-lg md:text-xl font-bold text-white mb-2">تجربه‌ای مطمئن برای سازمان‌های پیشرو</h3>
        <p className="text-xs text-gray-400 mb-10">بیش از ۵۵۰ شرکت معتبر از خدمات لوکس فود برای تأمین غذای کارکنان خود استفاده می‌کنند.</p>
        
        <div className="max-w-5xl mx-auto px-6 flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70">
          <span className="text-sm font-semibold tracking-widest text-gray-300">دیجی‌کالا</span>
          <span className="text-sm font-semibold tracking-widest text-gray-300">اسنپ</span>
          <span className="text-sm font-semibold tracking-widest text-gray-300">بانک ملت</span>
          <span className="text-sm font-semibold tracking-widest text-gray-300">پارس آنلاین</span>
          <span className="text-sm font-semibold tracking-widest text-gray-300">تپسی</span>
        </div>
      </section>

      {/* ================= فوتر ================= */}
      <Footer/>

    </div>
  );
}
