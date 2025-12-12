import React from "react";
import Plyr from "plyr-react";
import "plyr-react/plyr.css";

export default function Video({id} : {id: string}) {
  console.log('Video component received id:', id);
  const videoSrc: Plyr.SourceInfo = {
    type: "video",
    sources: [
      {
        src: id,
        provider: "youtube"
      }
    ]
  };
  return (
    <div className="grid grid-cols-[1fr] w-full rounded-md items-center">
      <div className="w-full p-5 py-0">
          <Plyr source={videoSrc} />
      </div>
    </div>
  );
};
