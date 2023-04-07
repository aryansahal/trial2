import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import AWS from "aws-sdk";

const StorePage = () => {
  const location = useLocation();
  const { accessKeyId, secretAccessKey, region } = location.state;

  const [buckets, setBuckets] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    // Create a new instance of the S3 client with the user's credentials
    const s3 = new AWS.S3({
      accessKeyId,
      secretAccessKey,
      region,
    });

    // Use the S3 client to list all of the user's buckets
    s3.listBuckets((err, data) => {
      if (err) {
        setError("Error retrieving S3 buckets.");
        console.log(err);
      } else {
        setBuckets(data.Buckets);
      }
    });
  }, [accessKeyId, secretAccessKey, region]);

  return (
    <div>
      <h1>My S3 Buckets:</h1>
      {error ? (
        <p>{error}</p>
      ) : (
        <ul>
          {buckets.map((bucket) => (
            <li key={bucket.Name}>{bucket.Name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default StorePage;
