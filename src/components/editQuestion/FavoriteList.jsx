import React from 'react'
import { useUser } from '../../contexts/userContext'

const FavoriteList = () => {
    const {favQuestions} = useUser()
    // console.log(favQuestions);
  return (
    <div>
        <ul>
            {favQuestions.map(el => (
                
                <li key={el._id} className='dashFavList'>
                    <p>{el.question}</p>
                    <p>Answer: {el.answer?'True':'False'}</p>
                    <p>Fact: {el.idea}</p>
                    {el.source && 
                        <div>Source: 
                            <a href={el.source} target='_black' rel='noopenr noreferrer'>{el.source}</a>
                        </div>
                    }
                </li>
            ))}
        </ul>
    </div>
  )
}

export default FavoriteList