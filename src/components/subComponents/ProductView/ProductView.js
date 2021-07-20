import "./ProductView.scss";
import imgprodut1 from "./../../../assets/pics/product/coat1.jpg";
import imgprodut2 from "./../../../assets/pics/product/coat2.jpg";
import FavoriteBorderRoundedIcon from '@material-ui/icons/FavoriteBorderRounded';

const ProductView = () => {
    return ( 
        <div className="ProductView cursor-pointer py-5 w-96">
            <div className="ProductView-header mb-3 relative rounded-md   overflow-hidden shadow-sm">
                <img src={imgprodut1} className="ProductView-header-img  w-full rounded-md"/>
                <div className="ProductView-header-discount shadow-md">10%</div>
                <div className="ProductView-header-interest">
                    <FavoriteBorderRoundedIcon className="hover:text-red-500" />
                </div>
            </div>
            <div className="ProductView-footer">
                <div className="ProductView-footer-title mb-3 text-gray-800 font-semibold text-2xl">
                    Brands
                </div>
               
                <div className="ProductView-footer-info rtl text-gray-500 mb-3 flex justify-between text-base ">
                    <span className="ProductView-footer-info-sub-title   overflow-hidden ">
                        کت و شلوار مردانه برندس  
                    </span>

                    <span className="ProductView-footer-info-price ">
                        448,000 تومان
                    </span>
                </div>
                <div className="ProductView-footer-sizes flex ">
                    <span className="ProductView-footer-sizes-box ">
                        48
                    </span>
                    <span className="ProductView-footer-sizes-box ">
                        50
                    </span>
                    <span className="ProductView-footer-sizes-box ">
                        52
                    </span>
                    <span className="ProductView-footer-sizes-box ">
                       <span  className="text-yellow-500">
                           +3
                       </span>
                    </span>
                </div>
            </div>
        </div>
     );
}
 
export default ProductView;