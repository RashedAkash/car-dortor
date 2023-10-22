import person from '../../assets/images/about_us/person.jpg'
import parts from '../../assets/images/about_us/parts.jpg'

const About = () => {
  return (
    <div>
      <div className="hero py-12">
  <div className="hero-content flex-col lg:flex-row p-4">
          <div className=' relative w-1/2'>
             <img src={person} className="max-w-sm rounded-lg shadow-2xl" />
             <img src={parts} className=" w-1/2 right-6 top-1/2 border-8 border-white absolute rounded-lg shadow-2xl" />
   </div>
          <div className=' text-start  w-1/2'>
            <h3 className=' text-xl text-red-600 mb-5'>About us</h3>
      <h1 className="text-5xl font-bold">We are qualified <br /> & of experience <br /> in this field</h1>
      <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
      <p className="py-6">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.  </p>
      <button className="btn btn-secondary">Get More Info</button>
    </div>
  </div>
</div>
    </div>
  );
};

export default About;