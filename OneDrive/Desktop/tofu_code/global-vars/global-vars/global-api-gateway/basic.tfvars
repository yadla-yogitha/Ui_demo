# Example 1: Basic HTTP API
# Simple API Gateway with default stage

environment  = "green"
company      = "blend"
api_name     = "http-api"
region_short = "euw2"
description  = "Green HTTP API Gateway"

# Use default stage with auto-deploy
create_default_stage = true

# Enable logging
enable_access_logs = true
log_retention_days = 30
