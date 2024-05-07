import bgImage from "../../assets/lecture-hall.jpg";
import LeftBox from "./LeftBox";
import DOPUpperBox from "./DOPUpperBox";
import DOPRightBox from "./DOPRightBox";

function BlueBoxDOP() {
  return (
    <div className="relative h-[490px]">
      <img src={bgImage} alt="" className="inset-0 w-full h-full" />
      <div className="absolute inset-0 bg-[#003478] opacity-75 ">
        <div className="flex-row md:flex gap-14">
          <LeftBox title="BBA in Management">
          PhD stands for Doctor of Philosophy, but its meaning goes<br/> 
deeper than just a title. The word "philosophy" itself comes<br/> 
from ancient Greece, literally translating to "love of wisdom"<br/> 
(φιλοσοφία - Philosophia). Originally, a philosopher wasn't<br/> 
just someone with a doctorate; it referred to someone who<br/> 
had achieved a well-rounded education encompassing the<br/> 
fundamental issues of their time. 
          </LeftBox>
          <div className="mt-5 sm:ml-[20%] sm:mt-14">
            <DOPUpperBox/>
            <div className="mt-5">
            <DOPRightBox duration="01 year" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlueBoxDOP;