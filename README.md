# Documentación de TitaMedia

El proyecto TitaMedia es un desarrollo realizado en bajo la libreria REACT y cuenta con la siguiente estructura de desarrollo:


| Directorio | Descripcion |
| ------------- | ------------- |
| src  | Directorio principal donde se encuentra todo el codigo fuente  |
| src/assets  | Directorio donde se alojaron todas las imagenes, iconos y demas archivos multimedia  |
| src/component  | Directorio se almacenaron 3 componentes Card, Header y Modal  |
| src/component/card  | Este es le componente que muestra toda la informacion de los post, debe enviarsele como parametros los datos del post y el hook de los post y la funcion set para hacer los filtros de las tags  |
| src/component/hearder  | Este componente muestra el header de la pagina principal (No recibe parametros)  |
| src/component/modal  | Este componente es la estructura de los modales que se muestran, para su funcionamiento se debe enviar 3 props un hook show(boolean), setShow() funcion para modificar su visualizacion y una variable con el titulo que queremos mostrar  |
| src/pages  | Directorio donde se alojaron las dos paginas que se utilizan como layout para el login y el home  |
| src/pages/Home  | La pagina home unifica todos los componentes de la aplicación header, card y modal |
| src/pages/login  | En la pagina login se implemento una funcion especial para capturar la informacion del login a traves de Google  |

## Estilos

Hay una hoja de estilos global, que es transversal en toda la aplicacion la cual se llama App.css.
Para los estilos personalizados de cada componente, estos se encuentran dentro de la carpeta de cada componente, para que pueden ser reutilizados copiando la carpeta-

### Enrutamiento del aplicativo

El enrutamiento dentro de las paginas de Login y Home, se realiza a traves de la hoja App.jsx la cual contiene parametrizado React-Router-Dom para el manejo de las rutas estaticas.

Puede adicionar mas rutas solamente situando la siguiente linea de codigo dentro de la etiqueta <Routes>
  
  <Route path=(Colocar el nombre de la ruta) element=(El nombre del componente dentro de)/>


### Para el consumo de la API se utiliza el cliente http AXIOS 

En la hoja apiaxios.jsx se configuro la importacion de la libreria de axios y se parametrizo la baseURL y el header de app-id para poder consumir la API.
  - De acuerdo a lo anterior cuando se debe consumir informacion de la api, solamente de importarse la goja apiaxios.jsx por ejemplo "import axios from ../../apiaxios"
  -   Para realizar las consultas, post, get, put, etc solo debe llamarse la funcion axios.post('Añadir la URL', body) en el caso de post o put debe añadir el body despues de la url

### Para el funcionamiento de la libreria de google para la autenticación
  
  Se añadio la siguiente linea en el /public/index.html para que pueda ser utilizado el script
      <script src="https://accounts.google.com/gsi/client" async defer></script>


