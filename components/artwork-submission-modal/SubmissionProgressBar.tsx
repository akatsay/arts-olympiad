import {TProgressStage, TUserAge} from "./ArtworkSubmissionModal";
import {ProgressPoint} from "./ProgressPoint";

interface IProps {
  progressStage: TProgressStage
  userAge?: TUserAge
}

export const SubmissionProgressBar = ({progressStage, userAge}: IProps) => {
  return (
    <>
      <div className=" z-10 w-full relative bg-black m-10 mb-28 border-1 border-black">
        <div className="absolute w-full -top-3 flex justify-between">
          <ProgressPoint title="Age confirmation" lit={progressStage >= 1} />
          <ProgressPoint
            title={`${userAge === "under" ? "Guardian’s Consent" : "Terms & Donation Acknowledgment"}`}
            lit={progressStage >= 2}
          />
          <ProgressPoint title="Upload Artwork" lit={progressStage >= 3} />
          <ProgressPoint title="Review" lit={progressStage >= 4} />
          <ProgressPoint title="Confirmation" lit={progressStage >= 5} />
        </div>
      </div>
    </>
  );
};