
# Programa de aluno

Este projeto permite você acessar um sistema para gerenciar alunos...




## sonarqube

Para rodar o SonarQube neste projeto é necessário ter o docker previamente instalado em sua máquina, caso use linux já vem nativamente, caso use windows acesse esse [link](https://docs.docker.com/desktop/install/windows-install/).

Para criar o sonarqube iremos usar o seguinte comando para baixar a imagem do dockerhub e rodar o container.

```docker
docker run -d --name sonarqube -e SONAR_ES_BOOTSTRAP_CHECKS_DISABLE=true -p 9000:9000 sonarqube:latest
```

Ira pedir um user e um password para logar, ambos vem como default admin:
```
login: admin
```
```
password: admin
```


Para rodar as analise do código neste projeto siga esse [tutorial](https://medium.com/bb-tutorials-and-thoughts/setting-up-sonarqube-on-your-local-machine-for-nodejs-projects-85e101675f7b) da [Medium](https://medium.com/).