import { Link } from 'react-router-dom'
import "../components/Popup.scss"
export default function DetailWishPopup({ onClose }) {
    return (
        <div className="pop-wrap">
            <div className="popup">
                <h2>찜목록이 추가되었습니다</h2>
                <div>
                    <button onClick={onClose}>쇼핑계속하기</button>
                    <Link to="/userInfo" state={{ menu: "찜목록" }}>찜목록보기</Link>
                </div>
            </div>
        </div>
    )
}
