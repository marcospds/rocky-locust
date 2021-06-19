### Compile frontend

FROM node:12.7-alpine AS buildfrontend

WORKDIR /usr/src/app

COPY rocky-locust-frontend/ .
RUN npm install
RUN npm run build

### Compile backend

FROM quay.io/quarkus/centos-quarkus-maven:21.1-java11 AS buildbackend

USER root

COPY rocky-locust-backend/src /usr/src/app/src
COPY rocky-locust-backend/pom.xml /usr/src/app
COPY --from=buildfrontend /usr/src/app/dist /usr/src/app/src/main/resources/META-INF/resources

RUN mvn -f /usr/src/app/pom.xml clean dependency:resolve dependency:resolve-plugins
RUN mvn -f /usr/src/app/pom.xml -Pnative package -DskipTests

RUN mv /usr/src/app/target/*-runner /usr/src/app/target/runner

### Build image

FROM busybox:stable-glibc

WORKDIR /

COPY --from=ubuntu /usr/lib/x86_64-linux-gnu/libdl.so.2 /lib/libdl.so.2
COPY --from=ubuntu /usr/lib/x86_64-linux-gnu/libz.so.1 /lib/libz.so.1
COPY --from=ubuntu /usr/lib/x86_64-linux-gnu/librt.so.1 /lib/librt.so.1
COPY --from=ubuntu /usr/lib/x86_64-linux-gnu/libstdc++.so.6 /lib/libstdc++.so.6
COPY --from=ubuntu /usr/lib/x86_64-linux-gnu/libgcc_s.so.1 /lib/libgcc_s.so.1

COPY --from=buildbackend /usr/src/app/target/runner /

EXPOSE 8080

CMD ["./runner"]

