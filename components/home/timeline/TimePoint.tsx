import "../../../src/styles/time-point.css";
import {TimePointDescription} from "./TimePointDescription";
import {TimePointDate} from "./TimePointDate";
import {ReactNode} from "react";

interface IProps {
  heading: string | ReactNode
  description: string | ReactNode
  date: string
  color: string
  isMobile?: boolean
  inversed?: boolean
}
export const TimePoint = ({heading, description, date, color, isMobile, inversed}: IProps) => {

  if (isMobile) {
    return (
      <li className="z-10 time-point flex flex-row justify-between align-bottom h-full">
        <div className=" flex flex-col h-full w-full">
          <TimePointDescription heading={heading} color={color} description={description} isMobile />
          <TimePointDate color={color} date={date} isMobile />
        </div>
        <div className="z-10 relative bg-black h-[360px] m-0 border-2 border-black" />
      </li>
    );
  }

  return (
    <li className="z-10 time-point flex flex-row h-full">
      {
        inversed ?
          <>
            <TimePointDate date={date} color={color} inversed />
            <div className="z-10 relative bg-black min-h-[287px] m-0 border-2 border-black" />
            <TimePointDescription color={color} heading={heading} description={description} inversed />
          </>
          :
          <>
            <TimePointDescription color={color} heading={heading} description={description} />
            <div className="z-10 relative bg-black h-[287px] m-0 border-2 border-black" />
            <TimePointDate date={date} color={color} />
          </>
      }
    </li>
  );
};