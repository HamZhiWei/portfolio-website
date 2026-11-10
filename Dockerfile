# Stage 1: Build the React application
FROM node:22-alpine AS builder

WORKDIR /app

# Copy package files first
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the remaining project files
COPY . .

# Generate production build
RUN npm run build


# Stage 2: Serve using Nginx
FROM nginx:alpine

# Copy production files from the builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Replace default Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Nginx listens on port 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
