import { Link } from 'react-router-dom'
import "../components/Popup.scss"

export default function DetailCartPopup({ onClose }) {
    return (
        <div className="pop-wrap">
            <div className="popup">
                <h2>장바구니에 추가되었습니다</h2>
                <div>
                    <button onClick={onClose}>쇼핑계속하기</button>
                    <Link to="/">카트보기</Link>
                </div>
            </div>
        </div>
    )
}
