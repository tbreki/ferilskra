import Image from 'next/image'


export default function Home() {
  return (
   
    <div className='border-2 border-indigo-100 mt-10 ' >
  <div className='flex place-content-center m-10 ' >
      
   <h2 className="font-bold text-2xl mt-10">Þórhallur Breki Bjarnason</h2>

  
   
   </div>

   <div className='flex place-content-center ' >
   <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/me.webp"
          alt="me"
          width={50}
          height={50}
          priority
        />
        </div>
   

   <div className='flex place-content-center mt-10  ' >
    
    
    <h2 className='font-bold mb-5 '> Störf</h2>
   </div>

   <div className='grid grid-cols-1 gap-5 mb-7'>
<div className='flex place-content-center '> ÞB Verktakar</div>
<div className='flex place-content-center'> Seglagerðin Ægir </div>
<div className='flex place-content-center'> AirBnb rekstur </div>
<div className='flex place-content-center'> Kokkur</div>
   </div>

   <div className='grid grid-cols-1 gap-5 border-2 border-indigo-100 bg-indigo-50'>
   <div className='flex place-content-center ' >
    
    
    <h2 className='font-bold mt-5 '> Menntun</h2>
   </div>
   <div className='flex place-content-center'> Sölu markaðs og rekstrarnám - NTV</div>
<div className='flex place-content-center mb-10'> Forritun - NTV </div>
</div>
   </div>




      
      
      
      
  
  

   
   

   
   
  )
}
