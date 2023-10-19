import {CalendarDayIcon} from "./CalendarDayIcon";

interface IProps {
  date: string
  color: string
  isMobile?: boolean
  inversed?: boolean
}
export const TimePointDate = ({date, color, isMobile, inversed}: IProps) => {

  if (isMobile) {
    return (
      <div className=" my-8 flex flex-row h-full ">
        <CalendarDayIcon width={92} height={92} fill={color} />
        <p className="break-words text-2xl lg:text-3xl text-center my-auto">{date}</p>
      </div>
    );
  }

  return (
    <div className={`self-end flex flex-row ${inversed && "justify-end"} align-middle h-full w-[50%]`}>
      {
        inversed ?
          <>
            <div className="flex mx-4">
              <CalendarDayIcon width={92} height={92} fill={color} />
              <p className="break-words text-2xl lg:text-3xl text-center my-auto">{date}</p>
            </div>
            <hr className="w-[40%] border-[1px] border-black border-dashed my-auto flex-grow-0" />
          </>
          :
          <>
            <hr className="w-[40%] border-[1px] border-black border-dashed my-auto flex-grow-0" />
            <div className="flex mx-4">
              <p className="break-words text-2xl lg:text-3xl text-center my-auto">{date}</p>
              <CalendarDayIcon width={92} height={92} fill={color} />
            </div>
          </>
      }
    </div>
  );
};