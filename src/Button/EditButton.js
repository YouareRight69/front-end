import React from 'react'
import CreateService from '../component/HairService/CreateService'
import { Link } from 'react-router-dom'

export default function EditButton(props) {
    const handleClick = () => <CreateService id={props.id} url={props.url} />
console.log(props.url);
    return (
        <div>
            <Link as={Link} className="dropdown-item" to={`/${props.url}/${props.id}`}>
                <button className='genric-btn success radius' onClick={handleClick}>
                    <i className="fas fa-pencil-alt"></i>
                </button>
            </Link>
        </div>
    )
}