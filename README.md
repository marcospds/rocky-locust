# Rocky Locust

[![Locust](https://img.shields.io/badge/Locust-0.10.0-blue?style=socyal&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4wkTDC8HltoNJgAABNVJREFUOMt9lFuIXPUBxn///zln5syZy+7M7uzs7uyqIZsadavJppVKKoW2+iBVkGKpl0cfaqEUiiCKEEofFGxKaZ6kLbRgwYY+BfLQhxLUNrGSrrvKxpi4SWYvs3M9czv3a9/EpuL39n3w+x5/gi/J7280jIqRP36t0/rxxHcf9nx3ybbM1O3uNURz/8La0W+8/a9z57bO/vHP3u2suH147crVxxVFe2nkuyc1EUHkELhDHG+MG7iYwz7tTz5FcbxzNMxfXzh7/r0v8soXyyubH5+WWf2NJPUP6emIxGkS2E18v8183qBq6KTphPJCGWN2+u4DMXyinNXTzvbBxf87fHFj47SeL/5cF7aW+ge47j5O2MaO+xyZW+ae+cP0gw6oCffX7+XBw2sUq1PGJ1rrO6VYSc2bnfc+P3xpc/0HMmeczmFpntnAlz2cuIfFkGOL97A6d5RJNKITdjkye5h6aREncTD0HK2wp5jF+FjFUz7o7/ZuKb/a2jQcId8UmncoaG7j2gfERRuXMauzR/hW7QRCpOz7TRby8yzlF7ATm5AYRVXYcZrEmsyZ0snXmvF5WS9OH+u43ZNq1MVPuvgMsHsm9alZHqoeJytVInyquTLVXBk7sUAkIGOkTNFyCpXqNNmZ/JPRI3euyPevX/qRpvg49j5qNcRpmTDxOF6+jymtSEHVkUIwl5khSUNUCZIERaSEqYOqxGgyQV/UVXc8eVQOre5Dsd/BC7qkkU3ouOi2wnxmhpJSIEli6pkaqhDoUkMVAkGMJmDs9xGpT5raSALC0eRh1bW6i7HWQ806OOOEz/5+hfXdITWzwgvP/4ScNo0ZmqhIEgRJCpKYTAo9Z48ktIj8MaODBokXLEvX7MWT0S6u1+bahS1uXNpm7/ouv3v9t7R29jGUHLrMoJCSphFpEqCmKabXYeC2cb0Brf51BuMWUlVVGXy0c3P36gbDcQtnPKB0h8G3n19jNBjxzLPPsbH+IdVMFV1kIYkRSUwSRdwafsrE6mEO9rAmA2QIGV3vKKtfP7Z0+aN3vuvqfZbXZlh9coXaygzBKOLKv6/y1lt/odNrcd83j4JMGAQmlzsXaQyu0xu1mVgOtu0x6YRUqJ9Vfvjc0+3Ny//5mZWbEMkxfuSRGin5GYNSvcDu5X0uvnuRzd46w5UOW6NNmqM9Bs4I2wkIfHBsgd9NOFRffVXxg3icxGF95E+Ox5UYmUkJZUK/MWDhkXkKKyV675vsrbdpbndxREhaEUShgoh04jDHcBSRjfPvrtbWzijNRiOZnqrdCjz3MW9KTGMkqDmDYCAQ0xkKd00zs7pIJpMnHqsUl2eo3L2E9IukiYHtawxGnnsku3zqby+f+UABGPZ67ZI6OxA630tms9liaY6sX6JYmSefn6N81wJZMcWhx+9FcQrEbZ1stYIVahyYVrxoKX/6xy/ffu1/bONMJptltXYg85kTYTY/ZRQWmJpdwshVycoy5a/dgXstRa9VoFbm1maHiWX5c2785jun/vrTL/Wh1R9uLM0evaAVtKxF8oCbyYtQKRDIApYjcMsZdnZ6dLe2qc4VLi0N1F+cP/WH33ylsQG+/8IzmcWTD9x588bHT8Q57TGKhcNKgqqndCuK9s8Tiw+e3fVvrp956mX7dva/P9BsTW8Z6pAAAAAASUVORK5CYII=)][locust]
[![Java](https://img.shields.io/badge/Java-11-blue?style=socyal&logo=java)][java]
[![Quarkus](https://img.shields.io/badge/Quarkus-1.17-blue?style=socyal&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA3XAAAN1wFCKJt4AAAAB3RJTUUH4wkTDDEmDvIipwAAAqpJREFUOMuVlF1IFFEUx393dnbdIvvSyZJQgzb6QivEhKgIcUKDpKACsaCQCqYgH+rBhSgIekgqioneoqIX+yDE9mEeCuohC8WspAeh8CWEqV1RW3dn3b293GTb2kUHhrlz7zn/8z/3/M8Rpu1qwA7gIhACfMzvSQN9QKdjGV+Fabs7gdfq0AMy8wQMABowAdTpihnAY/VmADzdn5GakEWel8s4BfjVWqqMrgDrgPO6StMDuh3LeMKsZXUZpNKCLz+y0UzbrXUsoz9nb5cCrNBUhMy/qa4OwZohSfMVgN13oitM230OPDRtV+SwTqqv0PJfjQSkYHlx2Dt7d8ysWfShSBctUuKbKeCm5weMjnP0UIpzLfi3rS3rBPrKi3k6GB/vOrhMzgtwS5e78s4GebK9saQv4NemgI0A9VWBN5uqArFr2r5LZORVQSSZ66vl5IhpuxdKihiO6cFTmk/bD8SA28A9oLQYGpCEgWFJ8+FCDKVpu36gEliiAuhK9KuAKLBBKcIHLAXKCzHUHMtIOZZhTc5QU5qMvyaelNkVAohm0BHiPrBZELk5pzt832EMv1t24AaNdfWcbg6yp9rvpaXv7TePno/T2vVM7/H5Vzk2HaT7VYCXQ9rMcfPZ5abWhZ9HprbFU5KtD1Ji8Jj/v5UuoEMtAPpHfkzU+q+d6BgY9c4kZmSbJkgYk+P5vQo0fU88uKBWEBkwbfeAjCf3OpbxCCh3LGNOOvzLSBCZIgFNt8ZEGm6qidTrWEYsT1vNMkxnjaB/h53P1w5UANtN2w3lIbY4m2G/0t4l03brlc7+RE0CZ9R/CGgARkzbXQ+0A9NKs0eU/bBQUT8BRXMYpi+ANuCXAvNlBf8O1AjVbpvVoK0ERB4wodi3OpYxatpuGDgMJIBBIOxYxs/fnWTtZKLQ2JoAAAAASUVORK5CYII=)][quarkus]
[![Angular](https://img.shields.io/badge/Angular-11-blue?style=socyal&logo=angular)][Angular]

## Web GUI to create [Locust][locust] test scripts

The project was separate into two parts.

* rocky-locust-backend: The back-end is built in [Java] with  [Quarkus][quarkus].
* rocky-locust-frontend: The front-end is built in [Angular][angular] and [PO UI][po-ui].

## DEV

Exec command in rocky-locust-backend: 
```console
mvn quarkus:dev
```
Open http://localhost:8080

Exec commands in rocky-locust-frontend: 
```console
npm install
npm run start
```
Open http://localhost:3000

## Build Docker Image

The Dockerfile create docker image base busybox with backend Quarkus native runner and frontend Angular build prod dist.

Build image exec command:
```console
docker build -t rocky .
```

This build crate small image:
![image](https://user-images.githubusercontent.com/8590404/122627955-71023880-d089-11eb-9cbd-7bf68a69ae3f.png)
And container use little resources:
![image](https://user-images.githubusercontent.com/8590404/122627982-ab6bd580-d089-11eb-8d13-511ec9aeb77f.png)

## Run Docker Image

Run image exec command: 
```console
docker run -d -p 8080:8080 rocky
```
Or use docker-compose exec command: 
```console
docker-compose up -d
```

See log exec command: 
```console
docker logs rocky -f
```

Open http://localhost:8080

[po-ui]: https://po-ui.io/
[quarkus]: https://quarkus.io
[angular]: https://angular.io
[java]: https://www.java.com
[locust]: https://locust.io
