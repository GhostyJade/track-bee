# Use latest nginx image
FROM nginx:1.21.0-alpine

# Copy the project build output to the docker container
COPY /build /usr/share/nginx/html

# Add nginx.conf file to the container
COPY /config/nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80 (HTTP) and 443 (HTTPS)
EXPOSE 80 443

# Start nginx server
CMD ["nginx", "-g", "daemon off;"]

