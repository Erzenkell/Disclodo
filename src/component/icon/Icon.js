import React from 'react'
import { StyledIcon } from './StyledIcon'
import PropTypes from 'prop-types';

const Icon = ({handler, user}) => {
    return (
        <div className='icon'>
            <StyledIcon icon={user?.icon} onClick={() => handler(user)}/>
        </div>
    )
}

Icon.propTypes = {
    user: PropTypes.object,
    handleUserSelect: PropTypes.func
}

export default Icon