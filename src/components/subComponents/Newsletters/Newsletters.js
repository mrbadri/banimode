import "./NewsLetters.scss" ; 

const NewsLetters = () => {
    return ( 
        <div className="NewsLetters px-20 py-10 pb-20 rounded-lg bg-gray-50 relative flex justify-center items-center flex-col">
            <div className="NewsLetters-title text-2xl font-semibold text-gray-700 mb-5">
            ثبت نام در خبرنامه بانی‌مد
            </div>
            <div className="NewsLetters-text text-lg text-gray-500">
            اولین نفری باشید که از جدیدترین محصولات، جشنواره ها و فروش‌های ویژه ما مطلع می شوید
            </div>
            <form className="NewsLetters-form p-2 sm:p-4 flex w-11/12 sm:w-10/12 md:w-7/12 absolute -bottom-14 bg-white rounded-full ">
                <div className="relative w-full flex">
                    <input placeholder="آدرس ایمیل شما" className="bg-gray-50 focus:outline-none text-gray-800 rounded-full py-5 px-8  flex-1" />
                    <button className="bg-green-500 shadow hover:bg-green-600 transition sm:mr-1 text-white py-3 px-8 rounded-full text-lg  absolute left-2 top-1.5 " >ارسال</button>
                </div>
            </form>
        </div>
     );
}
 
export default NewsLetters;