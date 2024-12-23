import { useNavigate } from "react-router-dom";
import { Gist } from "../../interfaces/gist";


const GistSender = ({ item }: { item: Gist }) => {
    const navigate = useNavigate()

    return (
        <article onClick={() => navigate(`/article/${item.id}`)} key={item.id} className="cursor-pointer rounded-xl p-6 flex flex-col justify-between border border-solid border-black dark:border-gold">
            <span className="text-xs font-light text-black/80 dark:text-white/80">{item.date.toLocaleString()}</span>
            <h1 className="text-md text-rose dark:text-gold">{item.title}</h1>
            <p>{item.description}</p>
        </article>
    );
};

export default GistSender;