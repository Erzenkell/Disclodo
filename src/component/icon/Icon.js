import React, {useState, useRef} from 'react'
import { StyledIcon, StyledIconPopup, StyledIndicator } from './StyledIcon'
import PropTypes from 'prop-types';

const Icon = ({handler, user}) => {
    const [popUp, setPopUp] = useState(false);
    const [popUpPosition, setPopUpPosition] = useState({x: 0, y: 0});
    const [selected, setSelected] = useState(false);

    const myRef = useRef();

    const handleMouseEnter = () => {
        setPopUp(true);
        const x = myRef.current.offsetLeft;
        const y = myRef.current.offsetTop;
        setPopUpPosition({x, y});
    }

    return (
        <div className='icon'>
            <StyledIcon 
                ref={myRef}
                onMouseEnter={() => handleMouseEnter() }
                onMouseLeave={() => setPopUp(false)}
                icon={user?.icon} 
                selected={selected}
                onClick={() => {
                    handler(user); 
                    //setSelected(true); 
                }}
            />
            {popUp && (
                <>
                    <StyledIndicator/>
                    <StyledIconPopup popUpPosition={popUpPosition}>{user?.name}</StyledIconPopup>
                </>
            )}
        </div>
    )
}

Icon.propTypes = {
    user: PropTypes.object,
    handleUserSelect: PropTypes.func
}

export default Icon