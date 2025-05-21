provider "aws" {
  region = "us-east-1"
}

resource "aws_instance" "jenkins" {
  ami           = "ami-0c55b159cbfafe1f0"  # Ubuntu 20.04 LTS
  instance_type = "t2.medium"
  key_name      = "your-key-pair"
  tags = {
    Name = "Jenkins-Server"
  }
}

resource "aws_instance" "kubernetes" {
  ami           = "ami-0c55b159cbfafe1f0"
  instance_type = "t2.medium"
  key_name      = "your-key-pair"
  tags = {
    Name = "Kubernetes-Server"
  }
}