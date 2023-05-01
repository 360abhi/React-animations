import React, { Fragment, useState } from 'react';
import { useTransition, animated } from 'react-spring';

const Sidebar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const toShow = () => {
        setIsOpen(true);
    }
    const toHide = () => {
        setIsOpen(false);
    }
    const transition = useTransition(isOpen, {
        from: { x: -100, y: 0, opacity: 0 },
        enter: { x: 0, y: 0, opacity: 1 },
        leave: { x: -100, y: 0, opacity: 0 },
    });

    return (
        <Fragment>
            {!isOpen && (
                <button className='px-4 py-2 bg-gradient-to-t from-blue-400 to bg-purple-500 rounded-lg absolute top-1 left-2 duration-300 ' onClick={toShow
                }>Show</button>
            )}

            {transition((style, item) => item && (
                <animated.div style={style}>
                    <div className='h-screen relative w-[35vw] bg-gradient-to-br duration-300  from-blue-400 to-purple-400'>{transition((style, item) => {
                        return (item ? <animated.div style={style} /> : '')
                    })}
                        <button className='bg-white p-2 m-3' onClick={toHide}>X</button>
                        <ul className='p-4 text-3xl font-semibold text-white flex flex-col gap-y-7 pt-20'>
                            <li className='cursor-pointer'>Home</li>
                            <li className='cursor-pointer'>Services</li>
                            <li className='cursor-pointer'>Contact us</li>
                            <li className='cursor-pointer'>About</li>
                            <li className='cursor-pointer'>Privacy Policy</li>
                        </ul>
                    </div>
                </animated.div>
            ))}



        </Fragment>
    );
}

export default Sidebar;
