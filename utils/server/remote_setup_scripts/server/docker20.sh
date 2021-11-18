# Docker
# From https://docs.docker.com/engine/install/debian/#install-using-the-repository
# Part 1. Set up the repository
# 1.1 update system
sudo apt-get install -y ca-certificates curl gnupg lsb-release
# 1.2. Add Docker’s official GPG key:
curl -fsSL https://download.docker.com/linux/debian/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
# 1.3. Use the following command to set up the stable repository.
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/debian \
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

# Part 2. Install Docker Engine
sudo apt-get update
# Update the apt package index, and install the latest version of Docker Engine and containerd
sudo apt-get install -y docker-ce docker-ce-cli containerd.io

# verify
echo sudo docker run hello-world

# Docker Compose updated Nov 2021
# From https://docs.docker.com/compose/install/
# 1. Run this command to download the current stable release of Docker Compose:
sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
# 2. Apply executable permissions to the binary:
sudo chmod +x /usr/local/bin/docker-compose
