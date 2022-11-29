import React from 'react'
import { StyledIcon } from './StyledIcon'
import PropTypes from 'prop-types';

const Icon = (pfp) => {
    return (
        <div className='icon'>
            <StyledIcon />
        </div>
    )
}

Icon.propTypes = {
    pfp: PropTypes.string
}

export default Icon