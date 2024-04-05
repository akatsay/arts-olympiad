"use client";
import {useState} from "react";
import {ButtonStd} from "../common/ui/ButtonStd";
import {Modal} from "../common/ui/Modal";
import {ArtworkSubmissionForm1} from "./ArworkSubmissionForm1";
import {SubmissionProgressBar} from "./SubmissionProgressBar";
import {ArtworkSubmissionForm2} from "./ArtworkSubmissionForm2";

export type TProgressStage = 1 | 2 | 3 | 4 | 5
export type TUserAge = "under" | "over" | null

export interface ISharedArworkSubmissionFormProps {
  onSetProgressStage: (stage: TProgressStage) => void
  userAge?: TUserAge
}

export default function ArtworkSubmissionModal() {

  const [openSubmissionModal, setOpenSubmissionModal] = useState(false);
  const [progressStage, setProgressStage] = useState<TProgressStage>(1);
  const [userAge, setUserAge] = useState<TUserAge>(null);

  return (
    <div className="min-h-[100vh] flex items-center justify-center">
      <ButtonStd onClick={() => setOpenSubmissionModal(true)}>Open Submission</ButtonStd>
      {
        openSubmissionModal &&
        <Modal isOpen={openSubmissionModal} onClose={() => setOpenSubmissionModal(false)}>
          <div className="flex flex-col justify-center items-center">
            <SubmissionProgressBar progressStage={progressStage}  />
            {
              progressStage === 1 ?
                <ArtworkSubmissionForm1 onSetProgressStage={setProgressStage} onSetUserAge={setUserAge} />
                : progressStage === 2 ?
                  <ArtworkSubmissionForm2 onSetProgressStage={setProgressStage} userAge={userAge} />
                  : <></>
            }
          </div>
        </Modal>
      }
    </div>
  );
}