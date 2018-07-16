const dev = {
  s3: {
    REGION: "ap-northeast-1",
    BUCKET: "notes-app-2-api-test-attachmentsbucket-1nl2nf1ylqjfm"
  },
  apiGateway: {
    REGION: "ap-northeast-1",
    URL: "https://lh9qttb4c9.execute-api.ap-northeast-1.amazonaws.com/test"
  },
  cognito: {
    REGION: "ap-northeast-1",
    USER_POOL_ID: "ap-northeast-1_gWbHzCFoD",
    APP_CLIENT_ID: "4tpf6prdfe804rrm76c7k5pr19",
    IDENTITY_POOL_ID: "ap-northeast-1:55939a24-dc65-4e55-8369-550302b18348"
  }
};

const prod = {
  s3: {
    REGION: "ap-northeast-1",
    BUCKET: "YOUR_PROD_S3_UPLOADS_BUCKET_NAME"
  },
  apiGateway: {
    REGION: "ap-northeast-1",
    URL: "YOUR_PROD_API_GATEWAY_URL"
  },
  cognito: {
    REGION: "ap-northeast-1",
    USER_POOL_ID: "YOUR_PROD_COGNITO_USER_POOL_ID",
    APP_CLIENT_ID: "YOUR_PROD_COGNITO_APP_CLIENT_ID",
    IDENTITY_POOL_ID: "YOUR_PROD_IDENTITY_POOL_ID"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};