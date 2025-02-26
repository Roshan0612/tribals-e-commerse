import React from 'react'
import Layouts from '../../components/Layout/Layouts'
import MiddlemanMenu from '../../components/Layout/MiddlemanMenu'

const AllUsersUnderLocation = () => {
  return (
    <Layouts title='Your Orders'>
        <div className='container-fluid m-3 p-3'>
            <div className='row'>
                <div className='col-md-3'>
                    <MiddlemanMenu/>
                </div>
                <div className='col-md-9'>
                    All user Under middleman!
                </div>
            </div>
        </div>
    </Layouts>
  )
}
export default AllUsersUnderLocation