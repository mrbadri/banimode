import "./NewsLetters.scss" ; 

const NewsLetters = () => {
    return ( 
        <div className="NewsLetters px-20 py-10 pb-20 rounded-lg bg-gray-100 relative flex justify-center items-center flex-col">
            <div className="NewsLetters-title text-2xl font-semibold text-gray-700 mb-5">
            ثبت نام در خبرنامه بانی‌مد
            </div>
            <div className="NewsLetters-text text-lg text-gray-500">
            اولین نفری باشید که از جدیدترین محصولات، جشنواره ها و فروش‌های ویژه ما مطلع می شوید
            </div>
            <form className="NewsLetters-form p-4 flex w-7/12 absolute bg-white rounded-full">
                <input placeholder="آدرس ایمیل شما" className="bg-gray-100 focus:outline-none text-gray-800 rounded-full py-4 px-8 rounded-l-none flex-1" />
                <button className="bg-green-500 hover:bg-green-600 transition mr-1 text-white py-4 px-8 rounded-full text-lg rounded-r-none " >ارسال</button>
            </form>
        </div>
     );
}
 
export default NewsLetters;