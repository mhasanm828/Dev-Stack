import heroImage from '../assets/banner-stack.png';

const Main = () => {
    return (
            <section className='max-w-7xl mx-auto py-16' >
                <div className='flex max-auto gap-10  grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-16 '>
                    <div> 
                        <h1 className='font-bold text-5xl' > 
                            <span className='font-bold text-5xl'> Build Your Ideal </span> <br />
                            <span className='bg-gradient-to-r from-orange-500 via-pink-500  to-violet-600 bg-clip-text text-transparent ' >  Development Stack </span>
                        </h1>
                        <p className='mt-5 max-w-xl sm:text-lg text-base  text-gray-600'> Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project. </p>
                        <div className='mt-8 flex gap-3 '>
                             <button className=' px-6 py-3 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600  transition'> Explore Technologies </button>

                        <button className='px-6 py-3 rounded-lg text-sm font-medium text-gray-700 border border-gray-300 hover:border-pink-400  transition  '> Learn More </button>
                        </div>
            
                    </div>

                    <div className="flex justify-center " >  
                        <img src={heroImage}  className=" w-full max-w-md  object-contain " />
                    </div>
                </div>    
           </section>
    );
};

export default Main;