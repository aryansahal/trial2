import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Retrieve.css";
import AWS from "aws-sdk";

const RetrievePage = ({ accessKeyId, secretAccessKey, region }) => {
  const [buckets, setBuckets] = useState([]);
  const [selectedBucket, setSelectedBucket] = useState("");
  const [bucketContents, setBucketContents] = useState([]);

  useEffect(() => {
    // Initialize the S3 client with the user's AWS credentials
    const s3Client = new AWS.S3({
      accessKeyId: accessKeyId,
      secretAccessKey: secretAccessKey,
      region: region,
    });

    // Call the S3 API to list the user's buckets
    s3Client.listBuckets((err, data) => {
      if (err) {
        console.error(err);
      } else {
        setBuckets(data.Buckets);
      }
    });
  }, [accessKeyId, secretAccessKey, region]);

  const handleBucketSelection = (bucketName) => {
    setSelectedBucket(bucketName);

    // Call the S3 API to list the contents of the selected bucket
    const s3Client = new AWS.S3({
      accessKeyId: accessKeyId,
      secretAccessKey: secretAccessKey,
      region: region,
    });

    s3Client.listObjects({ Bucket: bucketName }, (err, data) => {
      if (err) {
        console.error(err);
      } else {
        setBucketContents(data.Contents);
      }
    });
  };

  const navigate = useNavigate();

  const onLoginClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const onStoreClick = useCallback(() => {
    navigate("/store");
  }, [navigate]);

  const onGroupContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="what-inspires-us">
      <div className="what-inspires-us-child" />
      <img className="layer-1-icon1" alt="" src="/layer-1.svg" />
      <div className="what-inspires-us-item" />
      <div className="forecasting-that-feels">Retrive the files</div>
      <div className="a-pressing-issue-container">
        <div className="bucket-list-container">
          <div className="bucket-list-header">
            <h1>Buckets</h1>
            <button onClick={handleLogout}>Logout</button>
          </div>
          <div className="bucket-list">
            <div className="bucket-list-sidebar">
              <ul>
                {buckets.map((bucket) => (
                  <li
                    key={bucket.Name}
                    className={selectedBucket === bucket.Name ? "active" : ""}
                    onClick={() => handleBucketSelection(bucket.Name)}
                  >
                    {bucket.Name}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bucket-list-content">
              {selectedBucket ? (
                <ul>
                  {files.map((file) => (
                    <li
                      key={file.Key}
                      onClick={() => handleFileClick(file.Key)}
                    >
                      {file.Key}
                    </li>
                  ))}
                </ul>
              ) : (
                <p>Select a bucket to see its files</p>
              )}
            </div>
          </div>
        </div>
      </div>
      <img className="what-inspires-us-inner" alt="" src="/vector-10.svg" />
      <div className="our-vision1" onClick={onLoginClick}>
        Login
      </div>
      <div className="under-the-hood1" onClick={onStoreClick}>
        Store
      </div>
      <div className="what-inspires-us1">Retrieve</div>
      <div className="sitafal-group" onClick={onGroupContainerClick}>
        <div className="sitafal1">
          <span className="s1">s</span>
          <span className="i1">i</span>
          <span className="tafal1">tafal</span>
        </div>
        <img className="subtract-icon1" alt="" src="/subtract1.svg" />
      </div>
    </div>
  );
};

export default RetrievePage;
