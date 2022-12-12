import React, {useState, useRef} from 'react'
import { StyledIcon, StyledIconPopup, StyledIndicator } from './StyledIcon'
import PropTypes from 'prop-types';

const defaultIcon = "https://files.cults3d.com/uploaders/16080059/illustration-file/b5ee5801-0527-4e6f-9c16-95d0af5c61cd/Kirbo.png"

const Icon = ({handler, channel}) => {
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
                icon={channel?.icon ? channel?.icon : defaultIcon} 
                selected={selected}
                onClick={() => {
                    handler(channel); 
                    //setSelected(true); 
                }}
            />
            {popUp && (
                <>
                    <StyledIndicator/>
                    {channel.name ? <StyledIconPopup popUpPosition={popUpPosition}>{channel?.name}</StyledIconPopup> : null}
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