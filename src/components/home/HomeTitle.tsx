
const HomePresentation = () => {
    return (
        <section  className="w-full py-4 ">
            <div className='relative min-w-[300px]  max-w-[380px] py-8 px-8 m-auto bg-inherit'>
                <div className='absolute top-0 left-0 w-[2px] h-full bg-black dark:bg-white shadow-presentation'></div>
                <div className='absolute top-0 right-0 w-[2px] h-full bg-black dark:bg-white shadow-presentation'></div>
                <div className='absolute top-0 right-0 w-full h-[2px] bg-black dark:bg-white shadow-presentation-t'></div>
                <div className='absolute bottom-0 left-0 w-full h-[2px] bg-black dark:bg-white shadow-presentation'></div>
                <h1 className='m-auto text-lg text-center text-inherit  font-light uppercase leading-none'>Juan carlos <br /><span className='text-base text-rose dark:text-gold underline font-thin'>WEB DEVELOPER</span></h1>
            </div>
        </section>

    );
};

export default HomePresentation;