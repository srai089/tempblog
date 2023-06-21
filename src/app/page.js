import Link from 'next/link'

 

const Home = ()=>{
  return(
    <>
    <h1>Welcoe to blog page</h1>
    <Link href="/allblogs"><h4>Go to blog list page</h4></Link>
    </>
  )
}

export default Home;