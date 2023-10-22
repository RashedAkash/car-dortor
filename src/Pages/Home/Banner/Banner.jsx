import bImg1 from '../../../assets/images/banner/1.jpg'
import bImg2 from '../../../assets/images/banner/2.jpg'
import bImg3 from '../../../assets/images/banner/3.jpg'
import bImg4 from '../../../assets/images/banner/4.jpg'

const Banner = () => {
  return (
    <div>
      <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
          <div>
            <img src={ bImg1} className="w-full rounded-xl " />
          </div>
    <div className="absolute flex justify-between transform -translate-y-1/2  right-8 bottom-5">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn bg-red-600 border-none ml-5 btn-circle">❯</a>
          </div>
          {/* //text */}
    <div className="absolute text-start flex w-1/2 flex-col bg-gradient-to-r from-[#151515] to-[#00000000] h-full rounded-xl space-y-5  justify-center pl-12 ">
            
               <h2 className=' text-white font-bold text-6xl'>Affordable <br /> Price For Car <br /> Servicing</h2>
            <p className=' text-white text-[18px]'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            <div className='flex gap-5'>
              <button className="btn btn-active btn-secondary">Discover More</button>
              <button className="btn btn-outline border-white text-white">Latest Project</button>
           
            </div>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
          <div>
            <img src={ bImg2} className="w-full rounded-xl " />
          </div>
    <div className="absolute flex justify-between transform -translate-y-1/2  right-8 bottom-5">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn bg-red-600 border-none ml-5 btn-circle">❯</a>
          </div>
          {/* //text */}
    <div className="absolute text-start flex w-1/2 flex-col bg-gradient-to-r from-[#151515] to-[#00000000] h-full rounded-xl space-y-5  justify-center pl-12 ">
            
               <h2 className=' text-white font-bold text-6xl'>Affordable <br /> Price For Car <br /> Servicing</h2>
            <p className=' text-white text-[18px]'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            <div className='flex gap-5'>
              <button className="btn btn-active btn-secondary">Discover More</button>
              <button className="btn btn-outline border-white text-white">Latest Project</button>
           
            </div>
    </div>
  </div> 
 <div id="slide3" className="carousel-item relative w-full">
          <div>
            <img src={ bImg3} className="w-full rounded-xl " />
          </div>
    <div className="absolute flex justify-between transform -translate-y-1/2  right-8 bottom-5">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn bg-red-600 border-none ml-5 btn-circle">❯</a>
          </div>
          {/* //text */}
    <div className="absolute text-start flex w-1/2 flex-col rounded-xl bg-gradient-to-r from-[#151515] to-[#00000000] h-full space-y-5  justify-center pl-12 ">
            
               <h2 className=' text-white font-bold text-6xl'>Affordable <br /> Price For Car <br /> Servicing</h2>
            <p className=' text-white text-[18px]'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            <div className='flex gap-5'>
              <button className="btn btn-active btn-secondary">Discover More</button>
              <button className="btn btn-outline border-white text-white">Latest Project</button>
           
            </div>
    </div>
  </div>  
  <div id="slide4" className="carousel-item relative w-full">
          <div>
            <img src={ bImg4} className="w-full rounded-xl " />
          </div>
    <div className="absolute flex justify-between transform -translate-y-1/2  right-8 bottom-5">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn bg-red-600 border-none ml-5 btn-circle">❯</a>
          </div>
          {/* //text */}
    <div className="absolute text-start flex w-1/2 flex-col bg-gradient-to-r from-[#151515] rounded-xl to-[#00000000] h-full space-y-5  justify-center pl-12 ">
            
               <h2 className=' text-white font-bold text-6xl'>Affordable <br /> Price For Car <br /> Servicing</h2>
            <p className=' text-white text-[18px]'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            <div className='flex gap-5'>
              <button className="btn btn-active btn-secondary">Discover More</button>
              <button className="btn btn-outline border-white text-white">Latest Project</button>
           
            </div>
    </div>
  </div> 
</div>
    </div>
  );
};

export default Banner;