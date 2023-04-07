import React, { useState, useEffect } from "react";
import AWS from "aws-sdk";
import axios from "axios";

export const DragDropFile = ({
  awsCredentials: { accessKeyId, secretAccessKey, region },
}) => {
  const [dragActive, setDragActive] = useState(false);
  const inputRef = useRef(null);
  const [uploading, setUploading] = useState(false);
  const [uploadStatus, setUploadStatus] = useState("");
  const [s3Url, setS3Url] = useState("");
  const [bucketName, setBucketName] = useState("");
  const [fileName, setFileName] = useState("");

  useEffect(() => {
    AWS.config.update({
      accessKeyId,
      secretAccessKey,
      region,
    });
  }, [accessKeyId, secretAccessKey, region]);

  function handleFile(files) {
    const file = files[0];
    const s3 = new AWS.S3({ accessKeyId, secretAccessKey, region });
    const params = {
      Bucket: "mayasync-testbucket",
      Key: file.name,
      Body: file,
    };
    setUploading(true);
    setDragActive(false); // hide the drag and drop box
    setUploadStatus(""); // hide the status message
    s3.upload(params, function (err, data) {
      if (err) {
        console.log("Error uploading file: ", err);
        setUploadStatus("Error uploading file. Please try again.");
        setUploading(false);
      } else {
        console.log("File uploaded successfully: ", data.Location);
        setUploadStatus("File uploaded successfully!");
        setUploading(false);
        setS3Url(data.Location); // set the S3 URL in state
        axios
          .post("http://localhost:8000/api/process", {
            url: data.Location,
          })
          .then((response) => {
            console.log(response.data);
            setBucketName(response.data.bucket_name);
            setFileName(response.data.file_name);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
  }

  function handleReset() {
    setDragActive(false);
    setUploadStatus("");
    setS3Url("");
    setBucketName("");
    setFileName("");
  }
  // handle drag events
  const handleDrag = function (e) {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  // triggers when file is dropped
  const handleDrop = function (e) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files);
    }
  };

  // triggers when file is selected with click
  const handleChange = function (e) {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files);
    }
  };

  // triggers the input when the button is clicked
  const onButtonClick = () => {
    inputRef.current.click();
  };

  return (
    <form
      id="form-file-upload"
      onDragEnter={handleDrag}
      onSubmit={(e) => e.preventDefault()}
    >
      {uploading && <p>Uploading file...</p>}
      {uploadStatus && <p>{uploadStatus}</p>}
      {s3Url && <p>S3 URL: {s3Url}</p>}
      {bucketName && fileName && (
        <>
          <div className="">
            <p>Bucket Name: {bucketName}</p>
            <p>File Name: {fileName}</p>
          </div>
          <button className="reset-button" onClick={handleReset}>
            Reset
          </button>
        </>
      )}
      {!uploading && !uploadStatus && (
        <>
          <input
            ref={inputRef}
            type="file"
            id="input-file-upload"
            multiple={true}
            onChange={handleChange}
          />
          <label
            id="label-file-upload"
            htmlFor="input-file-upload"
            className={dragActive ? "drag-active" : ""}
          >
            <div>
              <p>Drag and drop your file here or</p>
              <button className="upload-button" onClick={onButtonClick}>
                Upload a file
              </button>
            </div>
          </label>
          {dragActive && (
            <div
              id="drag-file-element"
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            ></div>
          )}
        </>
      )}
    </form>
  );
};

export const ProcessingButton = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [bucketName, setBucketName] = useState("");
  const [fileName, setFileName] = useState("");

  const handleButtonClick = async () => {
    setIsProcessing(true);
    console.log(inputValue);
    try {
      const response = await axios.post("http://localhost:8000/api/process", {
        url: inputValue,
      });
      console.log(response.data);
      setBucketName(response.data.bucket_name);
      setFileName(response.data.file_name);
    } catch (error) {
      console.log(error);
    }
    setIsProcessing(false);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="container">
      <div>
        <input
          className="input-box"
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter Your Amazon S3 URL"
        />
        <button
          className="processing-button"
          onClick={handleButtonClick}
          disabled={isProcessing}
        >
          {isProcessing ? "Processing..." : "Submit"}
        </button>
      </div>
      {bucketName && fileName && (
        <div className="">
          <p>Bucket Name: {bucketName}</p>
          <p>File Name: {fileName}</p>
        </div>
      )}
    </div>
  );
};
