# short-link-api
Short link API powered by ExpressJS and Typescript

## Menjalankan Database Menggunakan Docker
1. Install [docker](https://www.docker.com/products/docker-desktop)
2. Pergi ke folder yang berisi Dockerfile untuk database
    ```sh
    cd ./docker/short-link-db
    ```
3. Build Dockerfile
    ```sh
    docker build -t mariadb .
    ```
4. Jalankan container dengan port yang sesuai
    ```
    docker run -p 3306:3306 --name short-link-db mariadb
    ```
5. Menjalankan container ke2 kalinya
    ```sh
    docker start short-link-db
    ```
## Membuat migration
```sh
npx knex migrate:make --migrations-directory ./src/migrations -x ts nama-migration-baru
```