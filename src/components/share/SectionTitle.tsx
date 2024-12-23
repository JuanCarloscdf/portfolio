
const SectionTitle = ({ text }: { text: string }) => {

    return (
        <h1 className=" w-full border-b border-solid border-rose dark:border-gold text-xl font-extrabold text-rose dark:text-gold">{text}</h1>
    );
};

export default SectionTitle;