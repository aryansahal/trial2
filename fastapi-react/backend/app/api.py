from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import boto3
from botocore.exceptions import ClientError
import os
from fastapi.responses import JSONResponse
from urllib.parse import urlparse
import re

os.environ['CORS_ALLOW_ALL_ORIGINS'] = 'true'


app = FastAPI()

origins = [
    "http://localhost:3000",
    "localhost:3000"
]


app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)


@app.get("/", tags=["root"])
async def read_root() -> dict:
    return {"message": "Aryan."}


class LoginRequest(BaseModel):
    accessKeyId: str
    secretAccessKey: str
    region: str


s3_client = None


@app.post("/api/login")
def login(login_request: LoginRequest):
    global s3_client
    access_key_id = login_request.accessKeyId
    secret_access_key = login_request.secretAccessKey
    region = login_request.region

    print(f"Access Key ID: {access_key_id}")
    print(f"Secret Access Key: {secret_access_key}")
    print(f"Region: {region}")

    session = boto3.Session(
        aws_access_key_id=login_request.accessKeyId,
        aws_secret_access_key=login_request.secretAccessKey,
        region_name=login_request.region,
    )
    s3_client = session.client("s3")
    return {"message": "Login successful"}


@app.post("/api/process")
async def process_url(url_input: str):
    # extract bucket name and file name from the URL input
    url_pattern = re.compile(
        r'https:\/\/(?P<bucket_name>[\w\.-]+)\/(?P<file_name>.+)')
    match = url_pattern.match(url_input.url)
    if match:
        bucket_name = match.group('bucket_name')
        file_name = match.group('file_name')
    else:
        bucket_name = None
        file_name = None

    # return a response with the bucket name and file name
    if bucket_name and file_name:
        return {"bucket_name": bucket_name, "file_name": file_name}
    else:
        return {"message": "Invalid Amazon S3 URL"}


@app.post("/api/s3_url")
def aws_to_local(source_s3_url: str):
    print(source_s3_url)


@app.post("/api/list-buckets")
def list_buckets():
    global s3_client
    if s3_client is None:
        raise HTTPException(status_code=400, detail="Please login first")
    try:
        response = s3_client.list_buckets()
        bucket_names = [bucket["Name"] for bucket in response["Buckets"]]
        return JSONResponse(content={"bucket_names": bucket_names}, media_type="application/json")
    except ClientError as e:
        error_message = str(e)
        return JSONResponse(content={"error_message": error_message}, media_type="application/json")
