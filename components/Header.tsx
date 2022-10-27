import Link from 'next/link'

const Home= () => {
  return ( 
    <div className="header__container">
        <div className="header__content">
            <p className="header__links"><Link href='/'>Home</Link></p>
            <p className="header__links"><Link href='/pokemons'>Pokemons</Link></p>
            <p className="header__links"><Link href='/items'>Items</Link></p>
        </div>
    </div>
  )
}

export default Home
