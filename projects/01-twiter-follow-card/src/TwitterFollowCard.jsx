import { useState } from 'react'
import './TwitterFollowCard.css'

export function TwitterFollowCard ({userName = 'unknown', name = 'Unknown', initialIsFollowing}) {
    // funciones
    const imageSrc = `https://unavatar.io/${userName}` 
    const formatUserName = (userName) => `@${userName}`
    const [isFollowing, setIsFollow] = useState(initialIsFollowing)
    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'
    const handleClick = () => setIsFollow(!isFollowing)

    console.log(isFollowing)

    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img
                className='tw-followCard-avatar' 
                src={imageSrc} 
                alt="El avatar de midu" />
                <div className='tw-followCard-info'>
                    <strong>{name}</strong>
                    <span className='tw-followCard-infoUserName'>{formatUserName(userName)}</span>
                </div>
            </header>
            <aside>
                <button onClick={handleClick} className={buttonClassName}>
                    <span className='tw-followCard-text'>{text}</span>
                    <span className='tw-followCard-stopFollowing'>Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}