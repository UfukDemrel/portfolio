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

        <div className=' flex-1 p-3 box-border text-black pt-16 pb-16'>
          <div className='flex justify-center'>
            <div className=' w-32 border-2 h-32 p-3 rounded-xl bg-rose-300 mr-10'>
              <img className='w-8 pb-3' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/600px-Instagram_icon.png' alt='alt'/>
              <div className=' text-xs text-white pb-3'>@ufukdemrel</div>
              <div className=' bg-rose-500 p-1 text-xs rounded-lg w-fit font-medium text-white'>Follow</div>
            </div>
            
            <a target='_blank' href="https://twitter.com/FrontJockey"> 
            <div className=' w-32 border-2 h-32 p-3 rounded-xl bg-slate-400 mr-10'>
              <img className='w-8 pb-3' src='https://about.twitter.com/content/dam/about-twitter/x/brand-toolkit/logo-black.png.twimg.1920.png' alt='alt'/>
              <div className=' text-xs text-white pb-3'>@ufukdemrel</div>
              <div className=' bg-slate-600 p-1 text-xs rounded-lg w-fit font-medium text-white'>Follow</div>
            </div>
            </a>

            <a target='_blank' href="https://www.linkedin.com/in/ufuk-demirel-3136b6183/"> 
            <div className=' w-32 border-2 h-32 p-3 rounded-xl bg-sky-400 mr-10'>
              <img className='w-8 pb-3' src='https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png' alt='alt'/>
              <div className=' text-xs text-white pb-3'>@ufukdemrel</div>
              <div className=' bg-sky-600 p-1 text-xs rounded-lg w-fit font-medium text-white'>Follow</div>
            </div>
            </a>
            
            <a target='_blank' href="https://github.com/UfukDemrel"> 
            <div className=' w-32 border-2 h-32 p-3 rounded-xl bg-slate-700 mr-10'>
              <img className='w-8 pb-3' src='https://cdn-icons-png.flaticon.com/512/25/25231.png' alt='alt'/>
              <div className=' text-xs text-white pb-3'>@ufukdemrel</div>
              <div className=' bg-slate-600 p-1 text-xs rounded-lg w-fit font-medium text-white'>Follow</div>
            </div>
            </a>
          </div>
          <div className='flex justify-center p-5'>

          <div className='p-3'>
            <a className=' p-5' href="https://youtu.be/n8IDqeaPi8U" target='_blank'>
            <div className='w-96 h-auto bg-rose-200 rounded-xl p-3'>
              <img className='w-10 pb-2' src='https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png?20220706172052' alt='alt'/>
              <div className='pb-2 text-xs font-medium'>youtube.com</div>
              <div className='font-medium text-sm pb-2 whitespace-nowrap w-full overflow-hidden text-ellipsis'>CodeEditor Clone Website - (Next.Js, React, TailwindCSS)</div>
              <img className='rounded-xl' src="https://i9.ytimg.com/vi/n8IDqeaPi8U/maxresdefault.jpg?v=659ab0f4&sqp=CLjX_qwG&rs=AOn4CLDT2lG4tqa1WeHy1Es9FZlmjdQGwA" alt='alt'/>
            </div>
            </a>

            
            <a className=' p-5' href="https://youtu.be/n8IDqeaPi8U" target='_blank'>
            <div className='w-96 h-auto bg-rose-200 rounded-xl p-3'>
              <img className='w-10 pb-2' src='https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png?20220706172052' alt='alt'/>
              <div className='pb-2 text-xs font-medium'>youtube.com</div>
              <div className='font-medium text-sm pb-2 whitespace-nowrap w-full overflow-hidden text-ellipsis'>React Js - Giriş</div>
              <img className='rounded-xl' src="https://i9.ytimg.com/vi_webp/CRt1E2V1tdo/maxresdefault.webp?v=657ec0b5&sqp=CJDc_qwG&rs=AOn4CLC-sU7KMYRXmApYM5Thg0uxgEuxOQ" alt='alt'/>
            </div>
            </a>
          </div>

          <div className='p-3'>
            <a className=' p-5' href="https://youtu.be/n8IDqeaPi8U" target='_blank'>
            <div className='w-96 h-auto bg-rose-200 rounded-xl p-3'>
              <img className='w-10 pb-2' src='https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png?20220706172052' alt='alt'/>
              <div className='pb-2 text-xs font-medium'>youtube.com</div>
              <div className='font-medium text-sm pb-2 whitespace-nowrap w-full overflow-hidden text-ellipsis'>React Js - Giriş</div>
              <img className='rounded-xl' src="https://i9.ytimg.com/vi_webp/CRt1E2V1tdo/maxresdefault.webp?v=657ec0b5&sqp=CJDc_qwG&rs=AOn4CLC-sU7KMYRXmApYM5Thg0uxgEuxOQ" alt='alt'/>
            </div>
            </a>

            <a className=' p-5' href="https://youtu.be/n8IDqeaPi8U" target='_blank'>
            <div className='w-96 h-auto bg-rose-200 rounded-xl p-3'>
              <img className='w-10 pb-2' src='https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png?20220706172052' alt='alt'/>
              <div className='pb-2 text-xs font-medium'>youtube.com</div>
              <div className='font-medium text-sm pb-2 whitespace-nowrap w-full overflow-hidden text-ellipsis'>React Js - Giriş</div>
              <img className='rounded-xl' src="https://i9.ytimg.com/vi_webp/CRt1E2V1tdo/maxresdefault.webp?v=657ec0b5&sqp=CJDc_qwG&rs=AOn4CLC-sU7KMYRXmApYM5Thg0uxgEuxOQ" alt='alt'/>
            </div>
            </a>
          </div>

          </div>
        </div>

      </div>
  )
}
