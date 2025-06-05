# Clave del proyecto (debe coincidir con la de SonarQube)
sonar.projectKey=sqp_eb11961818dc8e76f7761912a1165fc9cd74e9b6
sonar.projectName=prueba_ambulatorio_back
sonar.projectVersion=1.0

# Directorios a analizar (ajusta según tu estructura)
sonar.sources=src
sonar.tests=test
sonar.exclusions=node_modules/**, dist/**, **/*.spec.ts

# Lenguaje y configuración de TypeScript
sonar.language=ts
sonar.typescript.lcov.reportPaths=coverage/lcov.info

# Configuración de SonarQube (ajusta URL y token)
sonar.host.url=http://localhost:9000
sonar.login=sqp_eb11961818dc8e76f7761912a1165fc9cd74e9b6

#sonar.projectKey=sqp_349224f67e171681485a057207dadfc7f8444b50
#sonar.projectName=Mi Proyecto
#sonar.projectVersion=1.0
#sonar.sources=src