const data =  [
    {title: "T" , list : ["1" , "2" , "3" , "4"]}
]
const FooterList = (props) => {
    return ( 
        <div className="FooterList">
            <ul className="FooterList-box text-gray-700">
                <li className="FooterList-box-title text-xl text-gray-500 mb-2 sm:mb-5">
                    {props.data.title}
                </li>
                {props.data.list.map(item => (
                    <li className="FooterList-box-item text-sm leading-8">
                    <a href="#">
                        {item}
                    </a>
                </li>
                ))}
            </ul>
        </div>
     );
}
 
export default FooterList;