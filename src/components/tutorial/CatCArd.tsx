import { useNavigate } from "react-router-dom";
import IconOpen from "../../icons/IconOpen";
import { Category } from "../../interfaces/categories";

const CatCArd = ({ item }: { item: Category }) => {
    const navigate = useNavigate()
    return (
        <article className={` h-full flex flex-col  group `} key={item.id}>
            <h1 className="text-lg font-extralight text-rose dark:text-gold uppercase">{item.category}</h1>
            <div className="relative h-full shadow-lg shadow-black  overflow-hidden rounded-xl">
                <div className="absolute top-0 left-0 w-full h-full ">
                    <div className="relative w-full h-full translate-y-[50%] group-hover:translate-y-0 transition-all duration-500 ease-[cubic-bezier(.33,1.35,.8,1.1)] delay-300">
                        <img className="absolute w-[50px] right-4 bottom-4" src={item.icon} alt="" />
                    </div>
                </div>
                <div className={`bg-gray-300 dark:bg-white/10 group-hover:bg-white   group-hover:dark:bg-transparent h-full flex flex-col justify-between gap-4 border border-solid bg-co border-black/20 dark:border-white/20 p-8 rounded-xl cat-card transition-all duration-400`}>
                    <p>{item.intro}</p>
                    <div className="relative z-20 max-h-[25px] flex gap-4 items-center group-hover:text-rose group-hover:dark:text-gold transition-all duration-500  cursor-pointer" >
                        <span className="hover:animate-short-circuit" onClick={() => navigate(`/gistlist/${item.category}`)}>view more</span>
                        <IconOpen height={"60%"} />
                    </div>
                </div>
            </div>
        </article>
    );
};

export default CatCArd;