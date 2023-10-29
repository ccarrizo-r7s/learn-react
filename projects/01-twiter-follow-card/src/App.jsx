import { TwitterFollowCard } from './TwitterFollowCard'

export default function App () {
    const users = [
        {
            id: '1',
            isFollowing: true,
            userName: 'midudev',
            name: 'Miguel Angel Duran'
        },
        {
            id: '2',
            isFollowing: false,
            userName: 'darkSide',
            name: 'Dark Side'
        },
        {
            id: '3',
            isFollowing: false,
            userName: 'enigma',
            name: 'Enigma Music'
        },
    ]
    return (
        <section className='App'> 
            { 
            users.map(user => {
                const {id, userName, name, isFollowing} = user
                return (
                    <TwitterFollowCard
                    key={id} 
                    initialIsFollowing={isFollowing}
                    userName={userName} 
                    name={name} 
                    />
                )
            })
            }
        </section>
    )
}