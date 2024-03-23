# SSH AUTH

## Create Connection with SSH

---

1. Generate SSH Key: `ssh-keygen -t rsa -b 4096 -C "your_email@example.com"`
1. Copy to clipboard: `pbcopy < ~/.ssh/id_ed25519.pub` or `clip < ~/.ssh/id_ed25519.pub`
1. Add SSH to GITHub repo:
   - open repo
   - settings->access->SSH
   - Click New SSH key or Add SSH key

---

1. Generate SSH Key: `ssh-keygen -t ed25519`
1. Rename SSH file: `mv ~/.ssh/id_ed25519.pub ~/.ssh/personal_key.pub`
1. Change SSH Config:
   ```Host github.com
   HostName github.com
   User git
   IdentityFile ~/.ssh/personal_key
   IdentitiesOnly yes
   ```
1. Add SSH to GITHub repo:
   - open repo
   - settings->access->SSH
   - Click New SSH key or Add SSH key
