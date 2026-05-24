environment = "green"
company     = "blend"
aws_region  = "eu-west-2"
aws_profile = "accountB"

# Client Portal Basic state (for API Gateway)
client_portal_basic_state_bucket = "blendology-terraform-state"
client_portal_basic_state_key    = "flagship/green/terraform.tfstate"

# S3 bucket for tenant files
s3_bucket_name = "blend-tenant-files-green"

# Lambda configuration
lambda_function_name = "client-portal-file-manager-green"
lambda_timeout       = 30
lambda_memory_size   = 512

# DynamoDB
tenant_config_table_name = "tenant_config"

# Presigned URL expiry (1 hour)
presigned_url_expiry = 3600

tags = {
  Environment = "green"
  Project     = "client-portal"
  ManagedBy   = "terraform"
}
