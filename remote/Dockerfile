# Stage 1: Build the React + Vite project
FROM node:16.13.0 as build
WORKDIR /app

# Set environment variables
ENV PATH /app/node_modules/.bin:$PATH
ENV NODE_ENV production

# Install dependencies
COPY package*.json ./
RUN npm install --legacy-peer-deps

# Copy project files
COPY . .

# Build the project
RUN npm run build

# Stage 2: Create the final image with Nginx
FROM nginx:stable
COPY --from=build /app/dist /usr/share/nginx/html
COPY ./deployment/nginx/nginx.conf /etc/nginx/nginx.conf
