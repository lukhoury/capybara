# capybara
La idea es que el repositorio funcione para alojar los archivos que vayamos programando. A tener en cuenta:

INSTALACION DE P5 Y LIVE SERVER
1-Ir a extensiones e instalar p5.vscode
2-Instalar live server (el que usamos en tecno/taller)

------------------------------------------------------
EL ARCHIVO QUE SE MODIFICA ES mySketch.js

INSTALACION DE GIT 1-Tener instalado Visual Studio Code e instalar Git 2- Una vez instalado Git, abrir la consola de comando (tanto de windows como la de vscode) y setear nombre de usuario e email, esto sirve para saber quien es el que realiza cambios en el repositorio: git config --global user.name nombre-usuario-ejemplo git config --global user.email email-ejemplo Esas son las lineas de comando a ejecutar

CLONAR EL PROYECTO 1-Previamente creamos una carpeta donde se alojara el repositorio en nuestra computadora local (o sea una carpeta vacia donde va a descargarse el codigo desde github) 2-Abrimos vscode y clickeamos sobre el menu "view/ver", seleccionamos la opcion command palette/paleta de comandos. En ese punto buscamos “git: Clone”. La herramienta nos pedirá la ruta y ahí es donde tenemos que pegar la URL del repositorio que hemos creado en Github. En nuestro caso seria https://github.com/melilandivar/capybara/ 3-Seleccionamos la carpeta vacia creada previamente para alojar el repositorio remoto. 4-Nos va a pedir que autoricemos GitHub y le otorgamos todos los permisos.

COMO TRABAJAR CON LOS ARCHIVOS La logica de vscode consiste en tres pasos a la hora de crear/modificar/eliminar archivos: 1-Guardar el archivo CTRL + S (notaremos en la rama de la izquierda un numero en tercer icono, esto significa la cantidad de cambios no commiteados, es decir, que no estan actualizados con respecto al repositorio remoto (gitHub)) 2-Navegar hacia el tercer icono donde veremos los archivos con una letra correspondiente al estado M:modificado, D: deleted, etc. -Clickeamos sobre el icono +, que pasara el archivo a 'stage' (preparar los ficheros para confirmación y seguimiento) -A continuación, si pulsamos en el icono de tres puntos nos sale un desplegable con diferentes opciones para hacer push (subir al servidor), pull (bajar del servidor), commit. -En el desplegable, seleccionamos la opcion "Commit" -> Confirmar. Nos pide un mensaje, que es para guiarnos con respecto al cambio realizado. Luego ENTER y listo. Van a notar que los numeros de la rama desaparecieron, esto va a guardar los cambios de manera LOCAL, es decir, en nuestro repositorio descargado pero no en el remoto. -Para finalizar, pulsamos en la parte inferior sobre sincronizar (en este caso haríamos push y pull). push-> subir archivos al repositorio pull-> traer los archivos del repositorio Recomiendo la opcion de hacer ambas para sincronizar todo a la vez, y a la vez, es mas sencillo.

Y listo, de esa manera, actualizamos los archivos al repositorio remoto donde todos podremos ver los cambios realizados por los demás.

RECOMENDACIONES -Sincronizar el repositorio constantemente por si alguno realizo algun cambio y asi estar siempre actualizados -Comentar en el archivos los cambios realizados (para no perdernos entre nosotros) -Si alguno esta trabajando en el mismo archivo y realizan la sincronizacion, veran en el repositorio la palabra Merge, esto significa que se combinaron ambos archivos.

Dejo link de la guia donde esta la informacion para guiarse mejor con imagenes y demas https://www.eniun.com/repositorio-git-visual-studio-code-github/#1325_Stage_commit_push_y_pull

