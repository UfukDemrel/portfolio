import Image from 'next/image'

export default function Home() {
  return (
      <div className='flex'>
        <div className=' w-2/5 top-0 box-border p-5 h-screen sticky text-black'>
          <div className=' pt-16 pb-16'>
            <img className=' w-1/3 rounded-full h-44 object-cover mb-10' src='./demirel.png' alt='alt'/>
            <div className=' font-semibold text-3xl mb-10'>Ufuk Demirel</div>
            <div className='flex font-medium'>As a frontend developer, I proficiently utilize technologies such as React, Next.js, Tailwind CSS, CSS, HTML, JavaScript, and jQuery to develop user-friendly and fast web applications. 
            The combination of my design skills with these technologies allows me to create modern and compelling user interfaces.</div>
          </div>
          <div className='flex'>
            <div className='w-auto h-auto bg-amber-200 flex items-center pt-1 pb-1 pl-2 pr-2 rounded-md mr-5'>
              <img className='w-5' src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/2560px-Gmail_icon_%282020%29.svg.png" alt='alt'/>
              <div className='pl-3 text-sm'>Gmail</div>
            </div>

            <div className='w-auto h-auto bg-red-200 flex items-center pt-1 pb-1 pl-2 pr-2 rounded-md'>
              <img className='w-5' src="https://seeklogo.com/images/A/acrobat-file-pdf-logo-37A1BFDE35-seeklogo.com.png" alt='alt'/>
              <div className='pl-3 text-sm'>CV</div>
            </div>
          </div>
        </div>

        <div className=''>
          <div className='container flex flex-wrap justify-evenly'>

            <a target='_blank' href="https://twitter.com/FrontJockey" className='mb-10'> 
              <div className=' w-44 border-2 h-44 p-5 rounded-xl bg-rose-100'>
                <img className='w-11 rounded-lg' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/600px-Instagram_icon.png' alt='alt'/>
                <div className=' text-sm text-black pt-5 pb-5'>@ufukdemrel</div>
                <div className='bg-sky-500 pt-1 pb-1 pl-3 pr-3 text-sm rounded-lg w-fit font-semibold text-white'>Follow</div>
              </div>
            </a> 

            <a target='_blank' href="https://twitter.com/FrontJockey" className='mb-10'> 
              <div className=' w-44 border-2 h-44 p-5 rounded-xl bg-slate-300'>
                <img className='w-11 rounded-lg' src='https://seeklogo.com/images/T/twitter-icon-square-logo-108D17D373-seeklogo.com.png' alt='alt'/>
                <div className=' text-sm text-black pt-5 pb-5'>@ufukdemrel</div>
                <div className='bg-sky-500 pt-1 pb-1 pl-3 pr-3 text-sm rounded-lg w-fit font-semibold text-white'>Follow</div>
              </div>
            </a> 

            <a target='_blank' href="https://www.linkedin.com/in/ufuk-demirel-3136b6183/" className='mb-10'> 
            <div className=' w-44 border-2 h-44 p-5 rounded-xl bg-sky-400'>
              <img className='w-11 rounded-lg' src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/480px-LinkedIn_logo_initials.png' alt='alt'/>
              <div className='  text-sm text-black pt-5 pb-5'>@ufukdemrel</div>
              <div className=' bg-sky-500 pt-1 pb-1 pl-3 pr-3 text-sm rounded-lg w-fit font-semibold text-white'>Follow</div>
            </div>
            </a>

            <a target='_blank' href="https://github.com/UfukDemrel" className='mb-10'> 
            <div className=' w-44 border-2 h-44 p-5 rounded-xl '>
              <img className='w-11 rounded-lg' src='https://cdn-icons-png.flaticon.com/512/25/25231.png' alt='alt'/>
              <div className=' text-sm text-black pt-5 pb-5'>@ufukdemrel</div>
              <div className=' bg-black pt-1 pb-1 pl-3 pr-3 text-sm rounded-lg w-fit font-semibold text-white'>Follow</div>
            </div>
            </a>

            <a target='_blank' href="https://youtu.be/n8IDqeaPi8U" className='mb-10'>
            <div className='youtube bg-rose-100 rounded-xl p-5'>
              <img className='w-10 pb-2' src='https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png?20220706172052' alt='alt'/>
              <div className='font-medium text-sm pb-2 whitespace-nowrap w-full overflow-hidden text-ellipsis'>CodeEditor Clone Website - (Next.Js, React, TailwindCSS)</div>
              <div className=' pb-16 text-xs font-medium'>youtube.com</div>
              <img className='rounded-xl' src="https://i9.ytimg.com/vi/n8IDqeaPi8U/maxresdefault.jpg?v=659ab0f4&sqp=CJDgha0G&rs=AOn4CLABphjU5-ywr5E-TO-5qidxjnP6uw" alt='alt'/>
            </div>
            </a>

            <a target='_blank' href="https://youtu.be/n8IDqeaPi8U" className='mb-10'>
            <div className='youtube bg-rose-100 rounded-xl p-5'>
              <img className='w-10 pb-2' src='https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png?20220706172052' alt='alt'/>
              <div className='font-medium text-sm pb-2 whitespace-nowrap w-full overflow-hidden text-ellipsis'>React Js - Giriş</div>
              <div className='pb-16 text-xs font-medium'>youtube.com</div>
              <img className='rounded-xl' src="https://i9.ytimg.com/vi_webp/CRt1E2V1tdo/maxresdefault.webp?v=657ec0b5&sqp=CJDgha0G&rs=AOn4CLCIoa-QlzKKakmACyBcKXCzdha6KQ" alt='alt'/>
            </div>
            </a>

            <a target='_blank' href="https://youtu.be/uuHneKwjke8" className='mb-10'>
            <div className='youtube bg-rose-100 rounded-xl p-5'>
              <img className='w-10 pb-2' src='https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png?20220706172052' alt='alt'/>
              <div className='font-medium text-sm pb-2 whitespace-nowrap w-full overflow-hidden text-ellipsis'>Next.Js - Giriş</div>
              <div className='pb-16 text-xs font-medium'>youtube.com</div>
              <img className='rounded-xl' src="https://i9.ytimg.com/vi/YFuT6rugwQQ/maxresdefault.jpg?v=6570a6fb&sqp=CJDgha0G&rs=AOn4CLAfNsZ5ZqHNtJ0K6HQZqNDGXSQbIA" alt='alt'/>
            </div>
            </a>

            <a target='_blank' href="https://youtu.be/Zkj5XrVAY1s" className='mb-10'>
            <div className='youtube bg-rose-100 rounded-xl p-5'>
              <img className='w-10 pb-2' src='https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png?20220706172052' alt='alt'/>
              <div className='font-medium text-sm pb-2 whitespace-nowrap w-full overflow-hidden text-ellipsis'>Javascript - Giriş</div>
              <div className='pb-16 text-xs font-medium'>youtube.com</div>
              <img className='rounded-xl' src="https://i9.ytimg.com/vi/Zkj5XrVAY1s/maxresdefault.jpg?v=659d89f8&sqp=COzrha0G&rs=AOn4CLDLiEW6FP1en0wNP_B5MruEZr8FWg" alt='alt'/>
            </div>
            </a>
          </div>
        </div>

      </div>
  )
}
