import React from 'react'
// import Modal from './modals/Modal'
import instructions from "../assets/instructions.png";

export default function Instructions() {
    return (
        <div>
            <a className='instructions' href='/'>Click here for instructions<img className='icon' src={instructions} alt='instructions'></img></a>
        </div>
    )
}
