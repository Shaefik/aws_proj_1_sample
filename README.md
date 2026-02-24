🌩 Full Stack Application Deployment on AWS
🚀 Project Overview

This project demonstrates a full-stack web application deployed on AWS using modern cloud infrastructure.

Frontend: React (Vite)
Backend: Node.js + Express
Hosting: Amazon S3 (Static Website)
API Routing: Application Load Balancer (ALB)
Compute: Amazon EC2
Networking: Custom VPC with Public & Private Subnets

🏗 Architecture Diagram
User
  ↓
S3 (React Frontend - Static Hosting)
  ↓
Application Load Balancer
  ↓
EC2 (Node.js Backend inside VPC)


🔥 AWS Services Used

✅ VPC
✅ Internet Gateway
✅ NAT Gateway
✅ Route Tables
✅ Security Groups
✅ EC2
✅ Application Load Balancer
✅ S3 Static Hosting


🌐 Live Demo
👉 Frontend Live URL:http://static-frontent-1.s3-website-us-east-1.amazonaws.com

💻 Features

Contact Form
REST API Communication
CORS Enabled
Backend Logs Form Data
Full Cloud Deployment

⚙️ Deployment Steps (Summary)

1.Build React App
     npm run build
2.Upload dist/ contents to S3
3.Deploy backend on EC2
4.Attach backend to ALB
5.Configure CORS


