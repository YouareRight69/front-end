import React from 'react'
import Header from '../../../controller/register/common/Header'

function Sidebar() {
    return (
        <div>
            <Header />
            <nav className="nav flex-column" style={{ color: "white", backgroundColor: "black", height: '100%', alignItems: 'baseline' }}>
                <a className="nav-link m-3 text-center" >Quản lý khách hàng</a>
                <a className="nav-link m-3 text-center"> Quản lý nhân viên</a>
                <a className="nav-link m-3 text-center" >Quản lý dịch vụ</a>
                <a className="nav-link m-3 text-center" >Quản lý chi nhánh</a>
                <a className="nav-link m-3 text-center" >Quản lý thông kê</a>
                <a className="nav-link m-3 text-center" >Quản lý thanh toán</a>
                <a className="nav-link m-3 text-center" >Quản lý dặt lịch </a>
            </nav>
        </div>
    )
}

export default Sidebar