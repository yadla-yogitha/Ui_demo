# Green environment — Badge Upload
# Usage: tofu plan -var-file="examples/green.tfvars"

environment  = "green"
company      = "blend"
aws_region   = "eu-west-2"
region_short = "euw2"
aws_profile  = "accountB"

# Remote state of the global-api-gateway (green deployment)
api_gateway_state_bucket = "blendology-terraform-state"
api_gateway_state_key    = "global-api-gateway/green/terraform.tfstate"

# Remote state of badge-render (for source bucket reference)
badge_render_state_bucket = "blendology-terraform-state"
badge_render_state_key    = "badge-render/green/terraform.tfstate"

# Lambda 1: Presigned URL Generator
lambda_presigned_url_name        = "green-blend-presigned-url-euw2"
lambda_presigned_url_handler     = "lambda_function.lambda_handler"
lambda_presigned_url_runtime     = "python3.13"
lambda_presigned_url_timeout     = 10
lambda_presigned_url_memory_size = 256
lambda_presigned_url_code_path   = "lambda/presigned-url/code.zip"
presigned_url_expiration         = 3600

# Lambda 2: File Packager
lambda_packager_name        = "green-blend-file-packager-euw2"
lambda_packager_handler     = "index.handler"
lambda_packager_runtime     = "nodejs20.x"
lambda_packager_timeout     = 60
lambda_packager_memory_size = 512
lambda_packager_code_path   = "lambda/file-packager/code.zip"

# S3 Bucket: Archives (Bucket 2)
archive_bucket_name = "green-blend-badge-archives-euw2-s3"

# S3 Event Trigger
s3_event_filter_suffix = "TestBadge.html"
s3_event_filter_prefix = ""

# Common Lambda deploy bucket & module name
lambda_deploy_bucket = "blendology-lambda-deploy"
module_name          = "badge-upload"

# API Route
route_key = "GET /api/badge/upload"

# CORS Configuration
cors_allowed_origins = ["*"]
cors_allowed_methods = ["GET", "PUT", "POST", "DELETE", "HEAD"]
cors_allowed_headers = ["*"]
cors_max_age_seconds = 3000

# Tags
tags = {
  Project = "blendology"
  Module  = "badge-upload"
}
