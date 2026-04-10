import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useProductStore } from '../store/useProductStore';
import "./scss/ProductDetail.scss"
import DetailCartPopup from './DetailCartPopup';
import DetailWishPopup from './DetailWishPopup';



//사이즈를 저장할 배열
const sizes = ["S", "M", "L"];

export default function ProductDetail() {
    //주소줄에 있는 파라메터값을 받아서 사용하기
    const { id } = useParams();
    console.log("아이디값 : ", id);
    //상태변수 상품목록
    const { items, onFetchItems, onAddCart, onAddWishList } = useProductStore();

    //상품을 저장할 변수
    const [product, setProduct] = useState("");

    //사이즈를 체크할 변수
    const [selectSize, setSize] = useState("");

    //수량을 체크할 변수
    const [count, setCount] = useState(1);

    //팝업을 체크할 변수
    const [showCart, setShowCart] = useState(false);
    const [showWish, setShowWith] = useState(false);

    //뿌려질 제품 찾기
    useEffect(() => {
        if (!id || items.length === 0) return;
        const findItem = items.find((item) => item.id === Number(id))
        setProduct(findItem);
    }, [id, items]);

    //장 바구니 메서드
    const handleAddToCart = () => {
        console.log("장바구리 클릭")
        //사이즈 선택여부
        if (!selectSize) {
            alert("사이즈 선택하셈")
            return
        }

        const productCart = {
            ...product,
            size: selectSize,
            count: count
        }
        onAddCart(productCart)
        setShowCart(true);
    }
    //찜 메서드
    const handleAddToWish = () => {
        console.log("찜 클릭")
        onAddWishList(product);
        setShowWith(true)
    }

    //팝업 닫는 메서드
    const handleClosePopup = () => {
        setShowCart(false);
        setShowWith(false);
    }

    return (
        <div className="sub-page-wrap">
            <div className="inner">
                <div className="product-wrap">
                    <div className="product-img">
                        <img src={product.image} alt="" />
                        <div>
                            <h3>{product.title}</h3>
                            <p>{product.description}</p>
                        </div>
                    </div>
                    <div className="product-text">
                        <p className="cate-title">{product.category}</p>
                        <h3 className="product-title">{product.title}</h3>
                        <p className='product-price'>가격 : {product.price}</p>
                        <div className="product-size">
                            <strong>사이즈</strong>
                            <ul >
                                {sizes.map((size, id) => (
                                    <li key={id}>
                                        <button className={selectSize === size ? "active" : ""}
                                            onClick={() => setSize(size)}>{size}</button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="product-count">
                            <strong>수량</strong>
                            <div className="product-count-box">
                                <button onClick={() => setCount((c) => Math.max(1, c - 1))}>-</button>
                                <span>{count}</span>
                                <button onClick={() => setCount((c) => c + 1)}>+</button>
                            </div>
                        </div>
                        <div className="cart-btn">
                            <button onClick={handleAddToWish}>찜하기</button>
                            <button onClick={handleAddToCart}>장바구니</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* 장바구니 팝\업 */}
            {showCart ? <DetailCartPopup onClose={handleClosePopup} /> : ""}
            {/* 찜 팝업 */}
            {showWish ? <DetailWishPopup onClose={handleClosePopup} /> : ""}

        </div>
    )
}
