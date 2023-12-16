import React, { useState } from 'react'
import './create.scss'

export default function Create(props) {
    const [userId, setUserId] = useState('');
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    
   
    return (
        <form>
            
                <div className='id'>
                    <input type="text"  value={userId} onChange={(e) => setUserId(e.target.value)} />
                </div>
                <div className='title'>
                    <input type="text"  value={title} onChange={(e) => setTitle(e.target.value)} />
              
            </div>
                <div className='body'>
                    <input type="text"  value={body} onChange={(e) => setBody(e.target.value)} />
                </div>
            
            
            <button type='button' onClick={() => {
                props.addPost(userId, title, body);
                setUserId('');
                setTitle('');
                setBody('');
                }}

                >
                set
            </button>
        </form>
    )
}