import React from "react";
import {H2m} from "../common/texts/H2m";
import {Pm} from "../common/texts/Pm";
import {ButtonStd} from "../common/ui/ButtonStd";
import {ISharedArworkSubmissionFormProps, TUserAge} from "./ArtworkSubmissionModal";

interface IProps extends ISharedArworkSubmissionFormProps {
  onSetUserAge: (userAge: TUserAge) => void
}

export const ArtworkSubmissionForm1 = ({onSetProgressStage, onSetUserAge}: IProps) => {

  const handleChoice = (userAge: TUserAge) => {
    onSetUserAge(userAge);
    onSetProgressStage(2);
  };

  return (
    <div className="max-w-[90%] sm:max-w-[80%] lg:max-w-[70%]">
      <H2m className="text-center font-semibold">Welcome [User Name]!</H2m>
      <Pm className="my-8 text-center" >Let’s get your artwork ready for the world.
        First, how old are you?
      </Pm>
      <div className="flex justify-evenly">
        <ButtonStd textColor={"dark-blue"} backGroundColor="white" borderColor="dark-blue" onClick={() => handleChoice("under")}>
          Under 18
        </ButtonStd>
        <ButtonStd textColor={"dark-blue"} backGroundColor="white" borderColor="dark-blue" onClick={() => handleChoice("over")}>
          Over 18
        </ButtonStd>
      </div>
    </div>
  );
};