import { useEffect, useRef, useState } from "react";
import { RxCross2 } from "react-icons/rx";

interface Prop {
  name?: string;
  handleNewPhotos?: (() => void) | any;
  makeEmpty?: (() => void) | any;
  handleMakeEmpty?: (() => void) | any;
  setSelectedPhotoIndex?: (() => void) | any;
  isVideo: boolean;
  reqName?: string;
}

export const FileInput = ({
  name,
  handleNewPhotos = null,
  makeEmpty,
  handleMakeEmpty,
  setSelectedPhotoIndex = null,
  isVideo,
  reqName,
}: Prop) => {
  const [multipleFiles, setMultipleFiles] = useState([]);
  const inputElement: any = useRef(null);
  const [clickedPhotoIndex, setClickedPhotoIndex] = useState(0);
  const handleMultipleFilesChange = (event: any) => {
    let tmpImageList: any = [];
    for (let i = 0; i < event.target.files.length; i++) {
      tmpImageList.push(event.target.files[i]);
    }
    setMultipleFiles((prev) => tmpImageList);
  };
  const HandleRemovePhoto = (index: number) => {
    let tmp = [...multipleFiles];
    tmp.splice(index, 1);
    setMultipleFiles(tmp);
  };
  const handleOpenInput = () => {
    inputElement.current.click();
  };
  const handleSelectedPhotoId = (index: number) => {
    setClickedPhotoIndex(index);
    if (setSelectedPhotoIndex !== null) {
      setSelectedPhotoIndex(index);
    }
  };
  useEffect(() => {
    if (multipleFiles != null && handleNewPhotos !== null) {
      handleNewPhotos(multipleFiles);
    }
  }, [multipleFiles]);
  useEffect(() => {
    if (makeEmpty) {
      setMultipleFiles([]);
      handleMakeEmpty(false);
    }
  }, [makeEmpty]);

  console.log(multipleFiles);

  return (
    <div className="w-full">
      <div>
        <div
          onClick={handleOpenInput}
          className="rounded border-dashed border-4 h-24 flex-col gap-2
                     border-gray-300 flex items-center justify-center cursor-pointer"
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            version="1"
            viewBox="0 0 48 48"
            enableBackground="new 0 0 48 48"
            height="2em"
            width="2em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <polygon
              fill="#90CAF9"
              points="40,45 8,45 8,3 30,3 40,13"
            ></polygon>
            <polygon fill="#E1F5FE" points="38.5,14 29,14 29,4.5"></polygon>
            <polygon fill="#1565C0" points="21,23 14,33 28,33"></polygon>
            <polygon fill="#1976D2" points="28,26.4 23,33 33,33"></polygon>
            <circle fill="#1976D2" cx="31.5" cy="24.5" r="1.5"></circle>
          </svg>
          <p className="text-sm text-gray-500">{name}</p>
        </div>
        <input
          name={reqName}
          ref={inputElement}
          multiple
          className="hidden"
          type="file"
          onChange={handleMultipleFilesChange}
          accept={isVideo ? "video/*" : "image/*"}
        />
      </div>
      <div
        className="flex flex-wrap gap-2 p-2
            max-h-[150px] overflow-auto"
      >
        {multipleFiles ? (
          multipleFiles.map((single: any, index) => {
            let fileUrl = URL.createObjectURL(single);
            let fileName = single.name;
            return (
              <div
                onClick={() => {
                  handleSelectedPhotoId(index);
                }}
                key={index}
                className={`border border-slate-300 rounded-xl p-2 w-full flex justify-between items-center
                                     ${
                                       clickedPhotoIndex === index &&
                                       "bg-green-100"
                                     }`}
              >
                <div className="flex items-center gap-2 max-sm:flex-col">
                  {isVideo ? (
                    <video className="w-[100px] h-[80px]" controls>
                      <source src={fileUrl} type="video/mp4" />
                      {/* <source src="movie.ogg" type="video/ogg" /> */}
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <img
                      src={fileUrl}
                      className="w-10 h-10 cover rounded-xl"
                      alt="#"
                    />
                  )}

                  <p className="text-slate-600 text-md font-bold break-words ">
                    {fileName.slice(0, 20)}
                  </p>
                </div>
                <div
                  className="rounded-full w-8 h-8 bg-red-400 flex items-center justify-center cursor-pointer"
                  onClick={() => {
                    HandleRemovePhoto(index);
                  }}
                >
                  <RxCross2 className="text-gray-100 text-2xl" />
                </div>
              </div>
            );
          })
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default FileInput;
