# Palabras Encadenadas

Juego de palabras encadenadas desarrollado en React para el Trabajo Final Integrador de la materia UNQ UI.

## Instalación

```bash
git clone https://github.com/nicomeiradyj/unq-ui-nicolas-meira-trabajo-final.git
cd unq-ui-nicolas-meira-trabajo-final
npm install
```

## Ejecutar localmente

```bash
npm run dev
```

Abrir http://localhost:5173 en el navegador.

Aclaracion: Personalmente uso OperaGX y cuandolo abria en Opera se me quedaba la pantalla 
en blanco, pero al abrirlo en Chrome funcionaba perfecto. No se si es un problema de compatibilidad con Opera :( .

## Cómo jugar

1. Hacer click en **Jugar**.
2. Ingresar una palabra válida en español para comenzar.
3. A partir de la segunda palabra, cada nueva palabra debe empezar con la última letra de la palabra anterior.
4. Cada letra de una palabra válida suma **1 punto**.
5. Cada acierto reinicia el contador a **15 segundos**.
6. Si el tiempo llega a 0, la partida finaliza.
