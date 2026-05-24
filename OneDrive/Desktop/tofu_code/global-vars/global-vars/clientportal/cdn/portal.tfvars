# ============================================================
# Portal Environment — Client Portal CDN Configuration
# ============================================================

aws_region  = "eu-west-2"
aws_profile = "accountB"

# Custom domain
clientportal_subdomain = "clientportal"
public_domain          = "blendologyapps.co.uk"

# ACM wildcard certificate *.blendologyapps.co.uk (must be us-east-1)
acm_certificate_arn = "arn:aws:acm:us-east-1:953948260185:certificate/361bf44e-0e57-44d6-8d10-6ab76cd6a57f"
