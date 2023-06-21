import data from '@/data/data';
import Link from 'next/link';

const Allblogs = () => {
  return (
   <>
   <h1>All blog List</h1>

   <ul>
   {
    data.map((item, ind)=>{
        return(
            <>
            <Link href={"/allblogs/"+ item.slug} > <li>{item.title}</li> </Link>
            </>
        )
          
        
    })
   }
   </ul>
   </>
  )
}

export default Allblogs