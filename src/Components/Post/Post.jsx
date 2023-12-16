import React from 'react'


export default function Post() {
  return (
    <div className='card_container'>
            <div className='content'>
                <div className='post' onClick={() => props.delPost(props.item.id)}>
                    <h1 className='userid'>{`Id ${props.item.userId}`}</h1>
                    <div className='card_title'>
                        <h2>{`Title ${props.item.title}`}</h2>
                        <h2>{`Body ${props.item.body}`}</h2>
                        
                    </div>

                </div>

            </div>
        </div>
  )
}
