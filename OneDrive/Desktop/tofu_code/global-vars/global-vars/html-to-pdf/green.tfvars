# Green environment — HTML-to-PDF
# Usage: tofu plan -var-file="examples/green.tfvars"

environment = "green"
company     = "blend"
aws_region  = "eu-west-2"
aws_profile = "accountB"

# Remote state of the global-api-gateway (green deployment)
api_gateway_state_bucket = "blendology-terraform-state"
api_gateway_state_key    = "global-api-gateway/green/terraform.tfstate"

# Lambda
lambda_function_name = "green-blend-html2pdf-euw2"
lambda_handler       = "index.handler"
lambda_runtime       = "nodejs22.x"
lambda_timeout       = 60
lambda_memory_size   = 5120
lambda_code_path     = "lambda/code.zip"
chromium_layer_arn   = "arn:aws:lambda:eu-west-2:764866452798:layer:chrome-aws-lambda:40"

# Common Lambda deploy bucket & module name
lambda_deploy_bucket = "blendology-lambda-deploy"
module_name          = "html-to-pdf"

# API Route
route_key = "ANY /api/html-to-pdf"

# Tags
tags = {
  Project = "blendology"
  Service = "html-to-pdf"
}
