# Green environment — Badge Render
# Usage: tofu plan -var-file="examples/green.tfvars"

environment  = "green"
company      = "blend"
aws_region   = "eu-west-2"
region_short = "euw2"
aws_profile  = "accountB"

# Remote state of the global-api-gateway (green deployment)
api_gateway_state_bucket = "blendology-terraform-state"
api_gateway_state_key    = "global-api-gateway/green/terraform.tfstate"

# Lambda
lambda_function_name = "green-blend-badge-render-euw2"
lambda_handler       = "lambda_src/index.handler"
lambda_runtime       = "nodejs20.x"
lambda_timeout       = 120
lambda_memory_size   = 1024
lambda_code_path     = "lambda/code.zip"
manage_lambda_code_upload = false
lambda_code_s3_key        = "badge-render/green/5d7052babe0af3736899b75e787fda698b84972ad00c96af59dbbe23aa29021a.zip"
chromium_layer_arn   = "arn:aws:lambda:eu-west-2:764866452798:layer:chrome-aws-lambda:40"

# Common Lambda deploy bucket & module name
lambda_deploy_bucket = "blendology-lambda-deploy"
module_name          = "badge-render"

# Source bucket (badge HTML templates)
source_bucket_name = "blendology-event-assets-aviva-prod-s3"

# Badge storage bucket (rendered badges)
badge_storage_bucket_name = "green-blend-badge-storage-euw2-s3"

# API Route
route_key = "GET /api/badge-render"

# Tags
tags = {
  Project = "blendology"
  Module  = "badge-render"
}
