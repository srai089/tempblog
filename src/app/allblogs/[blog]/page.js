// 'use client'

// import data from '@/data/data';

const Blog = ({params}) => {
  // const [blogdata]= data.filter((item)=>{
  //   return item.slug==params.blog;
  // })
  
  return (
    <>
    <h1>My blog</h1>
   <p>my blog detail {params.blog}</p>
    </>
  )
}

export default Blog