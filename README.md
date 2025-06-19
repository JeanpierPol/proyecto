# 🧠 StoryTree – Historias Ramificadas Colaborativas

**StoryTree** es una aplicación web diseñada para **crear, leer y expandir historias ramificadas** de forma conjunta. Permite a los usuarios no solo leer historias interactivas, sino también contribuir creando nuevas ramificaciones basadas en decisiones narrativas.

## 🌱 ¿En qué consiste?

Esta plataforma combina la narrativa interactiva con la colaboración entre usuarios. Cada historia puede contener **decisiones** que abren caminos alternativos. Otros usuarios pueden continuar escribiendo las consecuencias de esas decisiones, creando un árbol narrativo dinámico.

### Ejemplo:
> **¿Debe el protagonista abrir el cofre?**  
> - Si lo abre → Capítulo 2: La Maldición  
> - Si no lo abre → Capítulo 2: El Misterio Continúa

Cada una de estas opciones puede ser continuada por el autor u otros usuarios, formando una red creciente de posibilidades.

## 🚀 Características

- Crear una historia desde cero o expandir historias existentes.
- Añadir preguntas y respuestas interactivas.
- Visualizar la historia en forma de árbol narrativo.
- Participación colaborativa: distintos autores pueden contribuir en la misma historia.

## 🛠️ Tecnologías utilizadas

- **Frontend**:  
  - React  
  - SCSS  
  - Bootstrap  

- **Backend**:  
  - Node.js  
  - Express.js  
  - MongoDB (Mongoose)

## 📚 Objetivo

Promover la escritura colaborativa e interactiva, permitiendo que las historias crezcan con las ideas de múltiples usuarios. Es ideal para escritores, jugadores de rol, lectores creativos o cualquier persona que disfrute contar historias.

## 📦 Instalación (modo desarrollo)

```bash
# Clonar el repositorio
git clone https://github.com/JeanpierPol/proyecto.git
$ cd frontend/

# Instalar dependencias
npm install

# configurar las variables de entorno, puedes usar de ejemplo .env.exaple

# Para iniciar tienes que escribir el comando
npm run dev

# Iniciar backend y frontend (en carpetas separadas)
cd backend
npm install 

# configurar las variables de entorno, puedes usar de ejemplo .env.exaple

# Para iniciar tienes que escribir el comando

node server.js