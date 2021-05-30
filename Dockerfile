### Compile backend

FROM quay.io/quarkus/centos-quarkus-maven:19.3.1-java11 AS buildbackend
USER root
COPY rocky-locust-backend/src /usr/src/app/src
COPY rocky-locust-backend/pom.xml /usr/src/app
RUN mvn -f /usr/src/app/pom.xml clean dependency:resolve dependency:resolve-plugins
RUN mvn -f /usr/src/app/pom.xml -Pnative package -DskipTests

### Compile frontend

FROM node:12.7-alpine AS buildfrontend
WORKDIR /usr/src/app
COPY rocky-locust-frontend/package.json rocky-locust-frontend/package-lock.json ./
RUN npm install
COPY rocky-locust-frontend/ .
RUN npm run build

### Build image

FROM busybox:glibc
WORKDIR /

RUN mkdir /www

COPY --from=buildfrontend /usr/src/app/dist /www

COPY --from=buildbackend /usr/src/app/target/*-runner /
RUN mv *-runner runner

#COPY my_wrapper_script.sh my_wrapper_script.sh

#RUN chmod +x my_wrapper_script.sh

#CMD ["sh, "./my_wrapper_script.sh"]

COPY --from=ubuntu /lib/x86_64-linux-gnu/libstdc++.so.6 /lib/libstdc++.so.6
COPY --from=ubuntu /lib/x86_64-linux-gnu/libdl.so.2 /lib/libdl.so.2
COPY --from=ubuntu /lib/x86_64-linux-gnu/libz.so.1 /lib/libz.so.1
COPY --from=buildbackend /usr/lib64/librt.so.1 /lib/librt.so.1
COPY --from=ubuntu /lib/x86_64-linux-gnu/libgcc_s.so.1 /lib/libgcc_s.so.1

EXPOSE 80 443 8080

CMD ["httpd", "-f", "-p", "80", "-h", "/www", "&&", "./runner"]

