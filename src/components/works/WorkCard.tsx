import { Work } from "../../interfaces/works";


const WorkCard = ({ work }: { work: Work }) => {

    return (
        <li className=" rounded-tl-[30px]  relative group flex flex-col items-center overflow-hidden">
            <div className="w-full">
                <img className="rounded-sm w-full  object-cover" src={work.image} alt="yasmin modas" />
            </div>
            <div className="bg-slate-900 text-white dark:bg-medium-dark absolute hover:rounded-tl-[30px] translate-y-[100%] group-hover:translate-y-0 transition-translate duration-[.5s] bottom-0 left-0 w-full flex flex-col  col-start-1 col-end-13 row-start-1 row-end-[-1]">
                <div className=" bg-slate-900 dark:bg-medium-dark relative rounded-tl-[30px] translate-y-[-99%] transition-transform duration-500 group-hover:translate-y-0 ease-in-out py-2 px-6  w-full text-rose dark:text-gold ">
                    <p className="text-xs">{work.subtitle}</p>
                    <h1 className="text-md font-bold">{work.title}</h1>
                    <div className="text-slate-900 dark:text-medium-dark absolute top-0 right-0 w-[30px] h-[30px]  translate-y-[-97%] ">
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M30 0C30 15 15 30 0 30H30V0Z" fill="currentColor" />
                        </svg>
                    </div>
                </div>
                <div className=" bg-slate-900 dark:bg-medium-dark p-4 flex flex-col gap-2 text-sm font-light translate-y-[-10%] transition-transform duration-500 group-hover:translate-y-[1%] ">
                    <a className="text-info" target="_blank" href={work.url}>Visit the site</a>
                    <p className="text-sm">{work.description}</p>
                    <ul className="flex text-xs flex-col text-rose dark:text-gold">
                        {
                            work.features.map((item,index) =><li  key={index} >{item}</li>)
                        }
                    </ul>
                    <ul className="w-full whitespace-nowrap font-light text-xs grid grid-cols-[repeat(auto-fill,minmax(130px,1fr))] list-disc list-inside">
                        {
                            work.techStack.map((item,index) => <li key={index}  className="truncate">{item}</li>)
                        }
                    </ul>
                </div>
            </div>
        </li>
    );
};

export default WorkCard;