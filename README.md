
# Primeros pasos
Una ves clonado el repo de js-base se debe llevar a una carpeta aparte esta plantilla ya que será un proyecto aparte
### `git init` (para el correcto funcionamiento de husky, omitir en caso de que ya exista el archivo .git)
### `yarn`
### `yarn start`
## Configurar module federation

### 	Definir el puerto en el que se ejecutará
para este ejemplo es el 3001 pero puede ser modificado en las siguientes lineas
```js
//webpack.config.js
module.exports = {
    output: {
        publicPath: 'http://localhost:3001/',
    },

    devServer: {
        port: 3001,
        historyApiFallback: true,
    },
}
```
### Exponer un modulo
Es importante definir el nombre de un modulo que expone componentes ya que este nombre será utilizado al momneto de ser importado, para este caso será module_a
```js
//webpack.config.js
    plugins: [
        new ModuleFederationPlugin({
            name: 'module_a',
            filename: 'remoteEntry.js',
            remotes: {},
            exposes: {
			// en este caso el nombre del componente es test, y se 		expone la ruta en la que se encuentra
                "./Test":"./src/components/Test.tsx"
            },
            shared: {
                ...deps,
                react: {
                    singleton: true,
                    requiredVersion: deps.react,
                },
                'react-dom': {
                    singleton: true,
                    requiredVersion: deps['react-dom'],
                },
            },
        }),

    ]
```
### Importar un modulo remoto
Para importar un modulo remoto es importante tener en cuenta el nombre que se definío y se utiliza la siguiente extructura
```js
//webpack.config.js
    plugins: [
        new ModuleFederationPlugin({
            name: 'home',
            filename: 'remoteEntry.js',
            remotes: {
			//(nombre del modulo):"(nombre del modulo)@(host)/remoteEntry.js"
                module_a: "module_a@http://localhost:3001/remoteEntry.js"
            },
            exposes: {},
            shared: {
                ...deps,
                react: {
                    singleton: true,
                    requiredVersion: deps.react,
                },
                'react-dom': {
                    singleton: true,
                    requiredVersion: deps['react-dom'],
                },
            },
        }),
        new HtmlWebPackPlugin({
            template: './src/index.html',
        }),
    ],
```
### Usar un componente remoto
```tsx
//App.tsx
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
//import (nombre del componente) from "(nombre del modulo)/(nombre del componente)"
import Test from "module_a/Test";

const App = () => (
    <div className="container">
        <Test />
    </div>
)
ReactDOM.render(<App />, document.getElementById('app'))

```