import { Metadata } from "next";
import { sharedOpenGraph } from "../shared-metadata";
import ArtworkSubmissionModal from "../../../components/artwork-submission-modal/ArtworkSubmissionModal";

export const metadata: Metadata = {
  title: "Dashboard | My Favorite Sport",
  openGraph: {
    ...sharedOpenGraph,
    title: "Dashboard | My Favorite Sport",
  }
};

export default function dashboardPage() {
  return (
    <ArtworkSubmissionModal />
  );
}