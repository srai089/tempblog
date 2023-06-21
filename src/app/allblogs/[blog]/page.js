'use client'

import data from '@/data/data';

const Blog = ({params}) => {
  const [blogdata]= data.filter((item)=>{
    return item.slug==params.blog;
  })
  
  return (
    <>
    <h1>{blogdata.title}</h1>
   <p>{blogdata.detail}</p>
    </>
  )
}

export default Blog