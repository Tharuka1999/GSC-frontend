
interface LeftBoxProps {
    title: string;
    children: React.ReactNode; // or specify the type more accurately based on expected children
}

function LeftBox(props:LeftBoxProps){
return(
    <div className="ml-6 sm:ml-[90px] mt-[30px] sm:mt-[95px]">
        <h1 className="font-extrabold text-white text-[15px] sm:text-[35px] font-catamaran">{props.title}</h1>
        <p className="text-white sm:mt-[10px] text-[12px] sm:text-[20px] mt-3 mb-3">{props.children}</p>
    </div>
)
}

export default LeftBox