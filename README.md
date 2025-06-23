# SSH Connection

## Connect to EC2 Instance

1. `chmod 400 "first-aws-instance.pem"`
1. `ssh -i "first-aws-instance.pem" ec2-user@ec2-54-83-69-41.compute-1.amazonaws.com`

## Install dependencies

1. `sudo dnf update -y`
1. ```
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
   source ~/.bashrc
   nvm install --lts
   ```
1. ```
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
   source ~/.bashrc
   nvm install --lts
   ```
1. `sudo dnf install -y git`
1. `npm install -g pm2`
1. ```
   sudo dnf install -y nginx
   sudo systemctl enable nginx
   sudo systemctl start nginx
   ```

## Install NGINX

1. Перевір, що порт 80 відкрито

1. У Security Group EC2 додай правило:

   - Type: HTTP
   - Port: 80
   - Source: 0.0.0.0/0

1. Аналогічно відкрий порт 443 (HTTPS).

1. `sudo dnf install -y certbot python3-certbot-nginx`

1. Прив’яжи домен до свого EC2. Для сертифікату потрібен домен (не працює для IP):

   - Вибери домен (наприклад, yourdomain.com)
   - Створи A-запис у DNS, який вказує на '00.00.00.00.00' (твій EC2 IP)

1. `sudo nano /etc/nginx/conf.d/yourdomain.com.conf`

1. Вставити налаштування

```
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

1. `sudo systemctl restart nginx`

1. `sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com`

1. ```
      sudo crontab -e
      0 3 \* \* \* /usr/bin/certbot renew --quiet
   ```

## Create GITHUB Connection with SSH

1. Generate SSH Key: `ssh-keygen -t rsa -b 4096 -C "your_email@example.com"`
1. Copy public key: `cat ~/.ssh/id_rsa.pub`
   - Скопіюй вміст вручну з терміналу та встав у GitHub
1. Add SSH to GITHub repo:
   - open repo
   - settings->access->SSH
   - Click New SSH key or Add SSH key

---

## Deploy application code

1. `git clone https://github.com/<your-repo>.git`
1. `cd <your-repo>`
1. `npm ci` # або `npm install`, якщо lock‑файлу немає
1. Створи файл `.env` із необхідними змінними середовища (PORT, DB_URI тощо).

## Run application with PM2 (автоматичний рестарт)

1. `pm2 start index.js --name my-app`  # заміни `index.js` на точку входу програми
1. `pm2 save`   # зберегти поточний список процесів
1. `pm2 startup systemd -u ec2-user --hp /home/ec2-user`
   - Виконай команду, яку виведе термінал (із `sudo`), щоб додати сервіс до автозавантаження.
1. Перегляд логів: `pm2 logs my-app`
1. (Опційно) автоматичне управління логами: `pm2 install pm2-logrotate`

> **PM2** автоматично перезапускає процес при падінні та відновлює його після перезавантаження EC2 завдяки поєднанню `pm2 save` + `pm2 startup`.
