import IconGithub from "../../icons/IconGithub";
import IconOpen from "../../icons/IconOpen";
import { Project } from "../../interfaces/projects";



const ProjectCard = ({ item }: { item: Project }) => {

  return (

    <article  className={`  group h-full relative flex flex-col gap-2 justify-between p-6 m-auto bg-inherit hover:-translate-y-[5px] transition-transform duration-200`}>
      <div className='absolute top-0 left-0 w-[2px] h-full bg-black dark:bg-white shadow-presentation'></div>
      <div className='absolute top-0 right-0 w-[2px] h-full bg-black dark:bg-white shadow-presentation'></div>
      <div className='absolute top-0 right-0 w-full h-[2px] bg-black dark:bg-white shadow-presentation-t'></div>
      <div className='absolute bottom-0 left-0 w-full h-[2px] bg-black dark:bg-white shadow-presentation'></div>

      <h1 className="pb-1 relative before:content-[''] before:absolute before:top-0 before:left-0 before:w-0 before:h-full before:border-b before:border-solid before:border-rose dark:before:border-gold  text-rose dark:text-gold before:hover:w-full text-md group-hover:before:w-1/4 before:transition-all before:duration-300"> {item.title}</h1>

      <p>{item.description}</p>

      <p className=" text-rose dark:text-gold">
        {
          item.techStack.map((item, index) =>
            <span key={index} className="mr-2">{item}</span>
          )
        }
      </p>
      <div className="flex gap-2">
        <a href={item.git} target="_blank" ><IconGithub className="hover:animate-bell hover:text-rose dark:hover:text-gold" /></a>
        {item.link && <a href={item.link} target="_blank" ><IconOpen className="hover:animate-bell hover:text-rose dark:hover:text-gold" height={"100%"} /></a>}
      </div>
    </article>

  );
};

export default ProjectCard;